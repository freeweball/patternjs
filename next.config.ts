import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '',
    trailingSlash: true,
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
};

export default nextConfig;
