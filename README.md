# Flyghor B2C Platform

A modern B2C (Business-to-Consumer) platform built with cutting-edge web technologies for seamless user experiences.

## Overview

Flyghor is a comprehensive B2C platform designed to provide users with a smooth, engaging, and secure digital experience. The platform leverages modern web technologies to deliver high performance and scalability.

## 🚀 Tech Stack

- **Framework**: [Next.js 16.2.3](https://nextjs.org) - React framework with SSR/SSG capabilities
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org) with Redux Persist
- **UI Components**: [Ant Design (antd)](https://ant.design) - Enterprise-grade UI library
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Package Manager**: pnpm - Fast, disk space efficient package manager
- **Runtime**: React 19.2.4 & React DOM 19.2.4

## 📋 Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher

## 🔧 Installation & Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   pnpm build
   ```

4. **Start the production server:**
   ```bash
   pnpm start
   ```

5. **Run linting:**
   ```bash
   pnpm lint
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── features/          # Feature-specific components
│   ├── shared/            # Shared UI components
│   └── ui/                # UI component library
├── config/                # Application configuration
├── constants/             # App-wide constants
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries & helpers
│   └── session.ts         # Session management
├── provider/              # React context providers
│   ├── redux-provider.tsx
│   ├── session-provider.tsx
│   └── theme-provider.tsx
├── redux/                 # Redux store & slices
│   ├── api/              # Redux Query/RTK Query APIs
│   │   ├── authApi.ts
│   │   ├── taskApi.ts
│   │   └── usersApi.ts
│   ├── features/         # Redux slices
│   │   ├── auth/
│   │   └── socket/
│   ├── hooks.ts          # Redux hooks
│   └── store.ts          # Redux store configuration
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
    └── message-service.ts # Messaging utilities
```

## 🔑 Key Features

- **Authentication System** - Secure user authentication and session management
- **Dashboard** - Interactive user dashboard with task management
- **User Management** - Complete user profile and settings management
- **Real-time Updates** - Socket.io integration for real-time communication
- **Audit Logging** - Comprehensive audit trail for security and compliance
- **Responsive Design** - Mobile-friendly interface with Ant Design components
- **State Persistence** - Redux Persist for maintaining app state

## 🔗 API Integration

The application uses Redux Toolkit Query for API management with the following main endpoints:

- **Authentication API** - User login, registration, token refresh
- **Users API** - User profile and settings
- **Task API** - Task management operations
- **Audit Log API** - Access logs and audit trails

## 🎨 Styling

The project uses **Tailwind CSS 4** for utility-first styling and **Ant Design** for pre-built component libraries. Tailwind configuration is managed in `tailwind.config.js` and PostCSS configuration in `postcss.config.mjs`.

## 🔐 Configuration

Core configurations are centralized in:
- `src/config/index.ts` - Application settings
- `src/constants/index.ts` - Application constants
- `tsconfig.json` - TypeScript compiler options
- `next.config.ts` - Next.js configuration

## 📦 Package Management

This project uses **pnpm workspaces** (configured in `pnpm-workspace.yaml`). All dependencies are locked in `pnpm-lock.yaml` for reproducible builds.

## 🛠️ Development Workflow

1. **Create features** in their respective feature folders
2. **Add Redux slices** for state management in `src/redux/features/`
3. **Create API endpoints** in `src/redux/api/`
4. **Use custom hooks** from `src/hooks/` for component logic
5. **Follow TypeScript** with strict type checking

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_APP_NAME=Flyghor
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Flyghor application is with [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import your repository on Vercel Dashboard
3. Vercel will automatically detect Next.js and deploy it
4. Set environment variables in Vercel dashboard

### Deploy on Other Platforms

- **Docker**: Build a Docker image using `pnpm build`
- **Heroku**: Configure a Procfile with `npm run start`
- **AWS/Azure**: Use their Next.js deployment guides

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
pnpm dev -- -p 3001
```

### Clear Cache & Reinstall
```bash
pnpm store prune
pnpm install
```

### Build Issues
```bash
rm -rf .next
pnpm build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Guide](https://redux-toolkit.js.org)
- [Ant Design Components](https://ant.design/components/overview/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Support

For issues, features requests, or contributions, please contact the development team or open an issue in the project repository.
