import type { NextConfig } from "next";

// Server output (not static export): the admin portal needs middleware,
// auth cookies, and dynamic rendering. Netlify's Next.js runtime handles
// this automatically; public pages remain prerendered at build time.
const nextConfig: NextConfig = {};

export default nextConfig;
