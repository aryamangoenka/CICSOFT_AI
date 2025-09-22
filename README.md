# CICSOFT_AI - Next.js SaaS Application

A complete, production-ready Next.js 15 SaaS application built with TypeScript, Tailwind CSS, and modern best practices.

## ✨ Features

- **⚡ Next.js 15** - Latest App Router with React Server Components
- **🔷 TypeScript** - Fully typed codebase with strict configuration
- **🎨 Tailwind CSS** - Modern utility-first CSS framework
- **🔐 Authentication Ready** - Prepared for NextAuth.js integration
- **💳 Payment Ready** - Stripe integration structure in place
- **🗄️ Database Ready** - Prisma ORM setup ready
- **📱 Responsive Design** - Mobile-first responsive layout
- **🌙 Dark Mode** - Built-in theme switching
- **🧩 UI Components** - Beautiful components with Radix UI
- **📊 Analytics** - Vercel Analytics integration
- **🚀 Production Ready** - Optimized for Vercel deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd cicsoft-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

## 🏗️ Build and Deploy

### Local Build

To build the application for production:

```bash
npm run build
```

To start the production server locally:

```bash
npm run start
```

### Deploy on Vercel

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "feat: initial deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy
   - Your app will be live at `https://your-project-name.vercel.app`

### Environment Variables

For production deployment, set these environment variables in Vercel:

```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-here
```

## 📁 Project Structure

```
cicsoft-ai/
├── app/                  # Next.js App Router
│   ├── api/             # API routes
│   │   ├── contact/     # Contact form API
│   │   └── health/      # Health check API
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Contact.tsx     # Contact form
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

- **GET** `/api/health` - Returns `{ status: "ok" }`
- Use for monitoring and health checks

### Contact Form

- **POST** `/api/contact`
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello world"
  }
  ```
- Returns `{ ok: true }` on success
- Includes validation and error handling

## 🎨 Customization

### Update Branding

1. Replace "CICSOFT_AI" in components with your brand name
2. Update logo in `components/Navbar.tsx`
3. Modify metadata in `app/layout.tsx`
4. Replace favicon and images in `public/`

### Styling

- **Colors**: Update CSS variables in `app/globals.css`
- **Components**: Modify Tailwind classes in component files
- **Theme**: Customize dark/light mode in `tailwind.config.ts`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧪 Testing the Application

### Test API Routes

```bash
# Health check
curl http://localhost:3000/api/health

# Contact form
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}' \
  http://localhost:3000/api/contact
```

### Test Build

```bash
npm run build
npm run start
```

## 🚀 Production Checklist

- ✅ All dependencies listed in package.json
- ✅ Config files properly set up (tsconfig.json, tailwind.config.ts, postcss.config.mjs)
- ✅ API routes working (/api/health, /api/contact)
- ✅ Contact form sends POST requests with loading/success feedback
- ✅ Build process completes successfully
- ✅ Ready for Vercel deployment

## 📚 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- 📧 Email: support@cicsoft.ai
- 💬 GitHub Issues: [Create an issue](https://github.com/your-username/cicsoft-ai/issues)
- 📖 Documentation: [View docs](https://cicsoft.ai/docs)

---

Built with ❤️ using Next.js and Tailwind CSS
