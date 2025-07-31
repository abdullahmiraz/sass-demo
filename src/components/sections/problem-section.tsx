"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SlideIn } from "@/components/motion/slide-in";
import { problemImages } from "@/lib/images";
import Image from "next/image";

export function ProblemSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">
            The old way of self-improvement
          </h2>
        </FadeIn>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left">
            <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
              <Image
                src={problemImages.selfHelpBooks}
                alt="Generic self-help books"
                fill
                className="object-cover"
              />
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Lack of Islamic guidance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most self-improvement content doesn&apos;t align with Islamic
                  values and principles, leaving Muslims confused about
                  what&apos;s halal and what&apos;s not.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  No community support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trying to improve alone without like-minded Muslims who
                  understand your faith and goals makes the journey much harder
                  and less sustainable.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
