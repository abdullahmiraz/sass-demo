"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold bg-secondary text-secondary-foreground w-10 h-10 rounded-lg flex items-center justify-center">
            U
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#programs"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Programs
            </a>
            <a
              href="#community"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Community
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button
            size="sm"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            Join Now
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
