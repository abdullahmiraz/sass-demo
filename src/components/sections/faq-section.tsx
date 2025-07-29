"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What makes Unified Ummah+ different from other platforms?",
    answer:
      "Unlike generic self-help platforms, Unified Ummah+ is specifically designed for Muslims. We combine Islamic principles with proven business strategies, ensuring all guidance is halal and aligned with your faith. Plus, you get access to a community of like-minded Muslims who understand your journey.",
  },
  {
    question: "Do I need business experience to join?",
    answer:
      "Not at all! Our platform is designed for Muslims at all levels - from complete beginners to experienced entrepreneurs. Thom's step-by-step guidance and our comprehensive business blueprint will walk you through everything you need to know.",
  },
  {
    question: "How much time do I need to commit weekly?",
    answer:
      "We recommend 5-7 hours per week to get the most value from the platform. This includes attending the live strategy calls, going through the business modules, and engaging with the community. However, you can go at your own pace.",
  },
  {
    question: "Is the community only for men?",
    answer:
      "Absolutely not! Our community is open to all Muslims regardless of gender. We have a diverse community of brothers and sisters supporting each other in their halal business journeys.",
  },
  {
    question: "What if I'm not satisfied with the platform?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied with Unified Ummah+ within your first 30 days, we'll refund your investment, no questions asked.",
  },
  {
    question: "Can I access the content on mobile devices?",
    answer:
      "Yes! Our platform is fully responsive and works perfectly on all devices - desktop, tablet, and mobile. You can access all content, join live calls, and engage with the community from anywhere.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Everything you need to know about Unified Ummah+
          </p>
        </FadeIn>

        <Stagger>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <Card className="bg-card/50 hover:bg-card transition-colors">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <CardTitle className="flex items-center justify-between text-left">
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </CardTitle>
                  </CardHeader>
                  {openIndex === index && (
                    <CardContent className="pt-0 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
