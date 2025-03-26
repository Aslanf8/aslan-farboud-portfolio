import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "./providers";
// import { constructMetadata } from "@/lib/metadata";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata: Metadata = constructMetadata({});
export const metadata: Metadata = {
  title: "Aslan Farboud | Web Developer & Designer",
  description:
    "Personal portfolio of Aslan Farboud, a web developer and designer specializing in modern web technologies and user experience.",
  keywords: [
    "web developer",
    "designer",
    "portfolio",
    "frontend",
    "backend",
    "full stack",
    "AI Engineer",
    "Aslan Farboud",
  ],
  alternates: {
    canonical: "https://aslanfarboud.com",
  },
  icons: {
    icon: "/plant.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
