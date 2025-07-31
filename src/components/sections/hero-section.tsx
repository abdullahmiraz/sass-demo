"use client";
import Image from "next/image";
import { FadeIn } from "../motion/fade-in";
import { Button } from "../ui/button";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { MovingBorderButton } from "../ui/moving-border";
import { heroImage } from "@/lib/images";

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
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  Get access now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6"
                >
                  Watch video
                </Button>
              </div>
            </FadeIn>
          </>
        }
      >
        <MovingBorderButton
          duration={9000}
          containerClassName="w-full h-full"
          as="div"
        >
          <Image
            src={heroImage}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto object-cover h-full object-center"
            draggable={false}
          />
        </MovingBorderButton>
      </ContainerScroll>
    </div>
  );
}
