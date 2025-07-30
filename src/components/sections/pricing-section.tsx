"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "$97",
    period: "per month",
    description: "Perfect for getting started",
    features: [
      "Access to all business modules",
      "Weekly live strategy calls",
      "Private community access",
      "Email support",
      "30-day money-back guarantee",
    ],
    popular: false,
  },
  {
    name: "Annual",
    price: "$997",
    period: "per year",
    description: "Best value - save 14%",
    features: [
      "Everything in Monthly plan",
      "2 bonus strategy sessions",
      "Priority community access",
      "Direct messaging with Thom",
      "Exclusive annual member events",
      "Lifetime access to updates",
    ],
    popular: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            Choose your membership plan
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Start your journey to halal success today. All plans include our
            30-day money-back guarantee.
          </p>
        </FadeIn>

        <Stagger>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <StaggerItem key={index}>
                <Card
                  className={`relative bg-card/50 hover:bg-card transition-colors ${
                    plan.popular ? "ring-2 ring-secondary" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-6 ${
                        plan.popular
                          ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          : "bg-primary text-primary-foreground hover:bg-primary/80"
                      }`}
                    >
                      Get started with {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom plan for your team?
            </p>
            <Button variant="outline">Contact us for enterprise pricing</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
