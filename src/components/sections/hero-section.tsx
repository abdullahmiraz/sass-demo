"use client";
import Image from "next/image";
import { FadeIn } from "../motion/fade-in";
import { Button } from "../ui/button";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { MovingBorderButton } from "../ui/moving-border";

export function HeroSection() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <FadeIn duration={0.8}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Unlock success the halal way
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join the exclusive platform for the next generation of the
                Muslim Ummah. Achieve your dreams in this world while preparing
                for the next.
              </p>
              <div className="flex  justify-center gap-4 mb-12">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  Get access now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Watch video
                </Button>
              </div>
            </FadeIn>
          </>
        }
      >
        <MovingBorderButton
          duration={19000}
          containerClassName="w-full h-full"
          as="div"
        >
          <Image
            src="https://images.unsplash.com/photo-1598723106396-f89827f6aa1a"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
        </MovingBorderButton>
      </ContainerScroll>
    </div>
  );
}
