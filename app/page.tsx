import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PremiumExperience } from "@/components/premium-experience";
import { ProductShowcase } from "@/components/product-showcase";
import { ScrollStory } from "@/components/scroll-story";
import { SiteFooter } from "@/components/site-footer";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { teaProducts } from "@/data/products";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <ScrollStory />
        <ProductShowcase products={teaProducts} />
        <PremiumExperience />
        <TestimonialCarousel />
      </main>
      <SiteFooter />
    </div>
  );
}
