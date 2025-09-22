"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What's included in LaunchKit?",
      answer:
        "LaunchKit includes a complete Next.js 15 application with authentication, payments, database setup, user management, admin dashboard, and deployment configuration. You get the full source code with no restrictions.",
    },
    {
      question: "Do I need to pay any recurring fees?",
      answer:
        "No! LaunchKit is a one-time purchase. You own the code forever and can use it for unlimited projects. You'll only pay for your own hosting, database, and third-party services like Stripe.",
    },
    {
      question: "What stack does LaunchKit use?",
      answer:
        "LaunchKit is built with Next.js 15, TypeScript, Tailwind CSS, Prisma ORM, NextAuth.js, Stripe, and is optimized for deployment on Vercel. All modern, battle-tested technologies.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most developers can get LaunchKit running locally in under 15 minutes. Deployment to production typically takes another 15-30 minutes depending on your configuration needs.",
    },
    {
      question: "Can I customize the design and features?",
      answer:
        "Absolutely! You get the complete source code, so you can customize everything - from the design and branding to adding new features. The code is well-structured and documented to make modifications easy.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide email support for setup issues and bugs. Pro and Enterprise plans include priority support and access to our Slack community where you can get help from other developers.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with LaunchKit for any reason, we'll provide a full refund within 30 days of purchase.",
    },
    {
      question: "Do you provide updates?",
      answer:
        "Yes! Starter plan includes 6 months of updates, Pro includes 12 months, and Enterprise includes lifetime updates. Updates include bug fixes, security patches, and new features.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about LaunchKit
          </p>
        </div>

        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
