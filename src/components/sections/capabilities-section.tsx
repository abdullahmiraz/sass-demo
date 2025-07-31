"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Video, Target, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { capabilitiesImages } from "@/lib/images";

const capabilities = [
  {
    title: "Live weekly strategy calls",
    description:
      "Get exclusive mentorship from Thom (ريّان) in private live group calls—unlock powerful insights on mindset, discipline, peak productivity, and advanced halal business strategies.",
    image: capabilitiesImages.strategyCalls,
    icon: Video,
    linkText: "Learn more about calls",
    imageAlt: "Live strategy sessions",
  },
  {
    title: "6-figure halal business blueprint",
    description:
      "Over 20 hours of powerful business modules & lessons—everything you need to launch, grow, and scale your halal business to $10,000/month and beyond.",
    image: capabilitiesImages.businessBlueprint,
    icon: Target,
    linkText: "Explore the blueprint",
    imageAlt: "Business blueprint",
    reverse: true,
  },
  {
    title: "Exclusive Muslim community",
    description:
      "A private, exclusive community of driven Muslims, united in faith and ambition—supporting, uplifting, and pushing each other toward success in both Deen and Dunya.",
    image: capabilitiesImages.community,
    icon: MessageCircle,
    linkText: "Meet the community",
    imageAlt: "Private community",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-20">
        {capabilities.map((capability, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
            {capability.reverse ? (
              <>
                <div className="order-2 lg:order-1">
                  <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                    <Image
                      src={capability.image}
                      alt={capability.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <FadeIn>
                    <h3 className="text-3xl font-bold mb-6">
                      {capability.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <Button
                      variant="link"
                      className="  h-auto text-primary !m-0 !p-0"
                    >
                      {capability.linkText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </FadeIn>
                </div>
              </>
            ) : (
              <>
                <div>
                  <FadeIn>
                    <h3 className="text-3xl font-bold mb-6">
                      {capability.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary !m-0 !p-0"
                    >
                      {capability.linkText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </FadeIn>
                </div>
                <div>
                  <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                    <Image
                      src={capability.image}
                      alt={capability.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
