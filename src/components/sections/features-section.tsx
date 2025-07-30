"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger";
import { Card, CardContent } from "@/components/ui/card";
import {
  Video,
  Users,
  BookOpen,
  MessageCircle,
  Target,
  Shield,
  Clock,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live weekly calls",
    description:
      "Join exclusive strategy sessions with Thom (ريّان) every week. Get personalized guidance and ask questions in real-time.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive modules",
    description:
      "Access 20+ hours of business content covering everything from mindset to advanced scaling strategies.",
  },
  {
    icon: Users,
    title: "Private community",
    description:
      "Connect with 1000+ like-minded Muslims in our exclusive community. Share wins, get support, and build relationships.",
  },
  {
    icon: Target,
    title: "Halal business focus",
    description:
      "All strategies and guidance are specifically designed to be halal and aligned with Islamic principles.",
  },
  {
    icon: MessageCircle,
    title: "Direct mentorship",
    description:
      "Get direct access to Thom for personalized advice and guidance on your specific business challenges.",
  },
  {
    icon: Shield,
    title: "30-day guarantee",
    description:
      "Try Unified Ummah+ risk-free. If you're not satisfied within 30 days, we'll refund your investment.",
  },
  {
    icon: Clock,
    title: "Flexible learning",
    description:
      "Learn at your own pace. All content is available 24/7 and you can revisit modules anytime.",
  },
  {
    icon: Zap,
    title: "Proven results",
    description:
      "Join a community that has generated over $2.5M in revenue using our halal business strategies.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, guidance, and
            community support you need to build a successful halal business.
          </p>
        </FadeIn>

        <Stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="text-center bg-card/50 hover:bg-card transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
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
