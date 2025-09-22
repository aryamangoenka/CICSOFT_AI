import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Zap,
  Shield,
  Code,
  Database,
  CreditCard,
  Users,
  Rocket,
  Settings,
  Globe,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Next.js 15 Ready",
      description:
        "Built with the latest Next.js App Router, React Server Components, and modern best practices.",
    },
    {
      icon: Shield,
      title: "Authentication",
      description:
        "Complete auth system with NextAuth.js, OAuth providers, and session management out of the box.",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description:
        "Stripe integration with subscriptions, one-time payments, and webhook handling included.",
    },
    {
      icon: Database,
      title: "Database Setup",
      description:
        "Prisma ORM with PostgreSQL, migrations, and type-safe database queries ready to use.",
    },
    {
      icon: Code,
      title: "TypeScript First",
      description:
        "Fully typed codebase with strict TypeScript configuration and excellent developer experience.",
    },
    {
      icon: Users,
      title: "User Management",
      description:
        "Complete user dashboard, profile management, and admin panel with role-based access.",
    },
    {
      icon: Rocket,
      title: "Vercel Optimized",
      description:
        "Optimized for Vercel deployment with edge functions, ISR, and automatic scaling.",
    },
    {
      icon: Settings,
      title: "Developer Tools",
      description:
        "ESLint, Prettier, Husky pre-commit hooks, and comprehensive testing setup included.",
    },
    {
      icon: Globe,
      title: "SEO & Performance",
      description:
        "Built-in SEO optimization, meta tags, sitemap generation, and Core Web Vitals optimization.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to launch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop reinventing the wheel. Start with a solid foundation and focus
            on your unique features.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border/50 hover:border-border transition-colors"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
