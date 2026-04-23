import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const githubRepository = process.env.GITHUB_REPOSITORY;
const [githubOwner, githubRepo] = githubRepository ? githubRepository.split('/') : [];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSite =
  githubOwner &&
  githubRepo &&
  githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;
const pagesBasePath = isGitHubActions && githubRepo && !isUserSite ? `/${githubRepo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'api.mapbox.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
