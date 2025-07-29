"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed K.",
    role: "E-commerce Entrepreneur",
    quote:
      "Unified Ummah+ helped me build my first halal business while staying true to my faith. The community support is incredible and Thom's guidance is priceless.",
    initials: "AK",
    rating: 5,
    business: "Online halal food store",
  },
  {
    name: "Fatima S.",
    role: "Digital Marketing Consultant",
    quote:
      "Finally found a platform that understands Muslim values. Thom's guidance has transformed my mindset and productivity. I went from $0 to $8k/month in 6 months.",
    initials: "FS",
    rating: 5,
    business: "Halal marketing agency",
  },
  {
    name: "Omar R.",
    role: "Tech Startup Founder",
    quote:
      "The business blueprint is gold! I went from zero to $5k/month in just 3 months with their step-by-step guidance. The community is like family.",
    initials: "OR",
    rating: 5,
    business: "Islamic fintech app",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            What our members say about Unified Ummah+
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Real stories from real Muslims who transformed their lives and
            businesses
          </p>
        </FadeIn>
        <Stagger>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <StaggerItem key={i}>
                <Card className="h-full bg-card/50 hover:bg-card transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 text-secondary fill-current"
                        />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="text-sm text-primary font-medium">
                      {testimonial.business}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline">Read more testimonials</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
