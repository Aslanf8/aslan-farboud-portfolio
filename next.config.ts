import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'imageurl.com',       // Placeholder domain
      'res.cloudinary.com', // For Cloudinary (if you plan to use it)
      'images.unsplash.com', // For Unsplash (if you plan to use it)
      'luzvrehlgxzdctsldcgw.supabase.co' // Your Supabase storage domain
    ],
  }
};

export default nextConfig;
