import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for indie developers and small projects",
      features: [
        "Complete Next.js 15 boilerplate",
        "Authentication with NextAuth.js",
        "Database setup with Prisma",
        "Basic Stripe integration",
        "Email notifications",
        "Basic user dashboard",
        "6 months of updates",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      description: "Best for growing startups and businesses",
      features: [
        "Everything in Starter",
        "Advanced payment features",
        "Multi-tenant architecture",
        "Admin dashboard",
        "Advanced analytics",
        "Priority email support",
        "12 months of updates",
        "Slack community access",
      ],
      cta: "Choose Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large teams and custom requirements",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "White-label solution",
        "Dedicated support",
        "Custom deployment guide",
        "Architecture consultation",
        "Lifetime updates",
        "Direct Slack access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One-time payment. No subscriptions. Own it forever.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`border-border/50 relative ${
                plan.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include commercial license and can be used for unlimited
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}
