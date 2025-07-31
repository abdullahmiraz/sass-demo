// Central file for managing all image URLs
// This makes it easier to maintain and update images across the project

export const images = {
  // Hero section images
  hero: {
    main: "https://images.unsplash.com/photo-1598723106396-f89827f6aa1a",
  },

  // Public assets (SVG files)
  public: {
    file: "/file.svg",
    globe: "/globe.svg",
    next: "/next.svg",
    vercel: "/vercel.svg",
    window: "/window.svg",
  },

  // Problem section images
  problem: {
    selfHelpBooks:
      "https://images.unsplash.com/photo-1732357981195-1426a7c11e06?w=600&h=400&fit=crop&crop=center",
  },

  // Capabilities section images
  capabilities: {
    strategyCalls:
      "https://images.unsplash.com/photo-1663690115533-f585ea40edc8?w=600&h=400&fit=crop&crop=center",
    businessBlueprint:
      "https://images.unsplash.com/photo-1691168414107-fb1f49126ba0?w=600&h=400&fit=crop&crop=center",
    community:
      "https://images.unsplash.com/photo-1668707146327-9555b8e053ae?w=600&h=400&fit=crop&crop=center",
  },

  // Placeholder images for different sections
  placeholders: {
    // Add placeholder images as needed
    // user: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    // team: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },

  // Social proof images
  socialProof: {
    // Add testimonial/profile images as needed
    // testimonial1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    // testimonial2: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
  },

  // Feature section images
  features: {
    // Add feature-related images as needed
    // dashboard: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    // analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
} as const;

// Type for better TypeScript support
export type ImageKey = keyof typeof images;
export type HeroImageKey = keyof typeof images.hero;
export type PublicImageKey = keyof typeof images.public;
export type ProblemImageKey = keyof typeof images.problem;
export type CapabilitiesImageKey = keyof typeof images.capabilities;
export type PlaceholderImageKey = keyof typeof images.placeholders;
export type SocialProofImageKey = keyof typeof images.socialProof;
export type FeatureImageKey = keyof typeof images.features;

// Helper function to get image URL with type safety
export function getImageUrl(
  category: keyof typeof images,
  key: string
): string {
  const categoryImages = images[category] as Record<string, string>;
  return categoryImages[key] || "";
}

// Direct exports for commonly used images
export const heroImage = images.hero.main;
export const publicImages = images.public;
export const problemImages = images.problem;
export const capabilitiesImages = images.capabilities;
