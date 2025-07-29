"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "1000+",
    label: "Active members",
    description: "Muslims transforming their lives",
  },
  {
    icon: TrendingUp,
    number: "$2.5M+",
    label: "Revenue generated",
    description: "By our community members",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Member satisfaction",
    description: "Average rating from reviews",
  },
  {
    icon: Award,
    number: "50+",
    label: "Success stories",
    description: "6-figure businesses launched",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            Trusted by 1000+ Muslims worldwide
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Join a community of driven Muslims who are achieving success while
            staying true to their faith
          </p>
        </FadeIn>

        <Stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <Card className="text-center bg-card/50 hover:bg-card transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
