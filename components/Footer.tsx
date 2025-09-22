import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const navigation = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
      { name: "Documentation", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "License", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
    social: [
      { name: "GitHub", href: "#", icon: Github },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Email", href: "mailto:hello@launchkit.dev", icon: Mail },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-primary">LaunchKit</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                The fastest way to build and launch your SaaS. Built with
                Next.js, TypeScript, and modern best practices.
              </p>
              <div className="mt-6 flex space-x-4">
                {navigation.social.map((item) => (
                  <Button key={item.name} variant="ghost" size="icon" asChild>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground">Product</h4>
              <ul className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground">Company</h4>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground">Legal</h4>
              <ul className="mt-4 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 LaunchKit. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
