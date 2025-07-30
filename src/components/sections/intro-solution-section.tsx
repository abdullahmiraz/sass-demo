"use client";

import { FadeIn } from "@/components/motion/fade-in";

export function IntroSolutionSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold">
            Introducing Unified Ummah+ - the halal way to success
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}
