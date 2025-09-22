# LaunchKit AI - Next.js 15 SaaS Landing Page

A complete, production-ready Next.js 15 SaaS landing page built with TypeScript, Tailwind CSS, and modern best practices. Features v0.dev UI components and working API routes, ready for immediate deployment on Vercel.

## ✨ Features

- **⚡ Next.js 15** - Latest App Router with React Server Components
- **🔷 TypeScript** - Fully typed codebase with strict configuration
- **🎨 Tailwind CSS v4** - Modern utility-first CSS framework
- **🧩 v0.dev UI Components** - Beautiful components migrated from v0.dev
- **🔌 API Routes** - Working contact form and health check endpoints
- **📱 Responsive Design** - Mobile-first responsive layout
- **🌙 Dark Mode** - Built-in theme switching
- **📊 Analytics** - Vercel Analytics integration
- **🚀 Production Ready** - Optimized for Vercel deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/launchkit-ai.git
   cd launchkit-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

1. **Build for production**

   ```bash
   npm run build
   ```

2. **Start production server**

   ```bash
   npm run start
   ```

3. **Test production build locally**
   ```bash
   npm run build && npm run start
   ```

## 🚀 Deploy on Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "feat: initial deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository `launchkit-ai`
   - Vercel will automatically detect Next.js and deploy
   - Your app will be live at `https://launchkit-ai.vercel.app`

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📁 Project Structure

```
launchkit-ai/
├── app/                  # Next.js App Router
│   ├── api/             # API routes
│   │   ├── contact/     # Contact form endpoint
│   │   └── health/      # Health check endpoint
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # Reusable UI components (v0.dev)
│   ├── Contact.tsx     # Contact form with API integration
│   ├── FAQ.tsx         # FAQ section
│   ├── Features.tsx    # Features showcase
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── HowItWorks.tsx  # Process explanation
│   ├── Navbar.tsx      # Navigation
│   ├── Pricing.tsx     # Pricing plans
│   ├── SocialProof.tsx # Social proof section
│   └── ThemeProvider.tsx # Theme management
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── public/             # Static assets
└── styles/             # Additional styles
```

## 🛠️ API Routes

### Health Check

- **GET** `/api/health`
- Returns: `{"status":"ok"}`
- Usage: Monitoring and health checks

### Contact Form

- **POST** `/api/contact`
- Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello world"
  }
  ```
- Returns: `{"ok":true}` on success
- Features: Validation, error handling, server-side logging

## 🧪 Testing

### Test API Endpoints

```bash
# Health check
curl http://localhost:3000/api/health

# Contact form
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}' \
  http://localhost:3000/api/contact
```

### Test Build Process

```bash
# Clean build test
rm -rf .next
npm run build
npm run start
```

## 📝 Available Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Branding

1. Replace "LaunchKit AI" in components with your brand
2. Update logo in `components/Navbar.tsx`
3. Modify metadata in `app/layout.tsx`
4. Replace images in `public/`

### Styling

- **Colors**: Update CSS variables in `app/globals.css`
- **Components**: Modify Tailwind classes in component files
- **Theme**: Customize dark/light mode in `tailwind.config.ts`

## 🚀 Production Checklist

- ✅ Next.js 15 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS v4 setup
- ✅ v0.dev UI components migrated
- ✅ API routes (/api/health, /api/contact) working
- ✅ Contact form with full integration
- ✅ Production build successful
- ✅ Ready for Vercel deployment
- ✅ .gitignore includes .env\* patterns
- ✅ All required dependencies in package.json

## 📚 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI (from v0.dev)
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS
