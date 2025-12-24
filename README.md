<div align="center">
  <img src="https://github.com/humanjuan/iog26-site/public/logo.webp" alt="iOG26 Logo" width="150">
  <h1>iOG26 Call Filter</h1>
</div>

<div align="center">

[![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-Support-orange?logo=buy-me-a-coffee&style=flat-square)](https://www.buymeacoffee.com/humanjuan)

</div>

# iOG26 Call Filter Landing Page

This repository contains the source code for the official landing page of iOG26 Call Filter, a privacy-focused Android application designed to block unwanted calls.

## About the Project

iOG26 Call Filter is a specialized utility for Android that leverages the official CallScreeningService APIs to provide intelligent call filtering. Unlike many call blocking applications, iOG26 is built with a privacy-first approach, ensuring that all processing happens entirely on-device.

The landing page serves as the primary informational hub for the application, detailing its features, privacy guarantees, and installation instructions.

### Key Features of the iOG26 App

- Intelligent Filtering: Automatically blocks anonymous callers, unknown numbers not in contacts, and specific numbers or prefixes added to a custom blocklist.
- Privacy-First: All decisions are made on-device. No call data, logs, or metadata are ever uploaded to remote servers.
- Daily Digest: Provides a summary of blocked calls to keep the user informed without constant interruptions.
- Multilingual Support: The application and its documentation are available in English, Spanish, and Italian.
- Zero Tracking: The app operates without third-party trackers or data collection.

## Technical Stack

The landing page is a high-performance static website developed using modern web technologies:

- Framework: React 19
- Build Tool: Vite
- Styling: Tailwind CSS
- Animations: GSAP and Motion (Framer Motion)
- Language: TypeScript

## Getting Started

To run the landing page project locally for development or to build it for production, follow these steps.

### Prerequisites

Ensure you have Node.js and pnpm installed on your system.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server with Hot Module Replacement (HMR):
```bash
pnpm run dev
```

### Production Build

Generate a production-ready build in the `dist` directory:
```bash
pnpm run build
```

The build process also includes a post-build script to generate the sitemap and other SEO-related files.

## Authorship

This project is part of the Human Juan ecosystem, developed by Juan Alejandro (Human Juan), a full-stack software engineer focused on privacy-by-design and user-centric mobile solutions.

For more information about the author, visit [humanjuan.com](https://humanjuan.com).

## License

This project is open-source and available under the MIT License.
