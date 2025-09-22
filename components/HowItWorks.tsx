import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Settings, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Download,
      title: "Download & Setup",
      description:
        "Clone the repository, install dependencies, and configure your environment variables in minutes.",
    },
    {
      step: "02",
      icon: Settings,
      title: "Customize & Configure",
      description:
        "Update branding, configure authentication providers, set up your database, and customize features.",
    },
    {
      step: "03",
      icon: Rocket,
      title: "Deploy & Launch",
      description:
        "Deploy to Vercel with one click, set up your domain, and start acquiring customers immediately.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get your SaaS up and running in three simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <Card
              key={step.step}
              className="border-border/50 text-center relative"
            >
              <CardHeader className="pb-6">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Average setup time:{" "}
            <span className="font-semibold text-foreground">15 minutes</span>
          </p>
        </div>
      </div>
    </section>
  );
}
