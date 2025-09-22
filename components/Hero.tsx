import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Launch Your SaaS{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Faster
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            The complete Next.js starter kit with authentication, payments,
            database, and deployment ready. Save months of development time and
            focus on what matters - your unique features.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground">
              Join 10,000+ developers who chose LaunchKit
            </p>
            <div className="mt-4 flex items-center justify-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
                <span className="text-sm">Next.js 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  TS
                </div>
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                  ⚡
                </div>
                <span className="text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
