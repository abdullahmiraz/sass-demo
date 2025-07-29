"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-6">
            Ready to transform your life?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 1000+ Muslims already achieving success the halal way
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            Get your exclusive membership now
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
