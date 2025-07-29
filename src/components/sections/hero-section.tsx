"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Play, Video } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unlock success the halal way
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the exclusive platform for the next generation of the Muslim
              Ummah. Achieve your dreams in this world while preparing for the
              next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                Get access now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch video
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join 1000+ Muslims already transforming their lives
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-muted rounded-lg overflow-hidden h-64 relative">
              <Image
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&h=400&fit=crop&crop=center"
                alt="Muslim community meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-48 relative">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&crop=center"
                alt="Islamic business meeting"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
