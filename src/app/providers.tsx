"use client";

import { SWRConfig } from "swr";
import { ReactNode, useEffect, useState } from "react";

// Global fetcher function for SWR
const fetcher = async (url: string) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error(
      "An error occurred while fetching the data."
    ) as Error & {
      info?: unknown;
      status?: number;
    };

    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

// Configure global SWR settings and provider
export function Providers({ children }: { children: ReactNode }) {
  // Store the provider in state to avoid SSR issues
  const [provider, setProvider] =
    useState<() => Map<string, unknown> | undefined>(undefined);

  // Set up provider on client-side only
  useEffect(() => {
    // Create a safe provider function that works in browser
    const clientProvider = () => {
      // Create a new Map for cache storage
      const map = new Map<string, unknown>();

      try {
        // Try to load from sessionStorage (browser-only)
        const cached = sessionStorage.getItem("swr-cache");
        if (cached) {
          const parsed = JSON.parse(cached);
          // Populate map with cached data if valid
          if (Array.isArray(parsed)) {
            parsed.forEach(([key, value]: [string, unknown]) => {
              map.set(key, value);
            });
          }
        }

        // Set up save to sessionStorage before page unload
        window.addEventListener("beforeunload", () => {
          try {
            const appCache = JSON.stringify(Array.from(map.entries()));
            sessionStorage.setItem("swr-cache", appCache);
          } catch (e) {
            console.error("Failed to save SWR cache", e);
          }
        });
      } catch (e) {
        console.error("Error initializing SWR cache", e);
      }

      return map;
    };

    // Update the provider in state
    setProvider(() => clientProvider);
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher,
        // Global configuration for all SWR hooks
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
        dedupingInterval: 30000, // 30 seconds
        errorRetryCount: 3,
        // Custom onError handler
        onError: (error, key) => {
          if (process.env.NODE_ENV !== "production") {
            console.error(`SWR Error for ${key}:`, error);
          }
        },
        // Fallback loading state and suspense integration
        suspense: false,
        // Provider is only set on the client
        provider,
      }}
    >
      {children}
    </SWRConfig>
  );
}
