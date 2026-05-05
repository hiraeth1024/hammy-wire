import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ProductPinScroll } from "@/components/site/ProductPinScroll";
import { TestimonialsMarquee } from "@/components/site/TestimonialsMarquee";
import { Categories } from "@/components/site/Categories";
import { Quality } from "@/components/site/Quality";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Nav />
      <h1 className="sr-only">Hammy — Premium Wires & Cables Manufacturer</h1>
      <Hero />
      <ProductPinScroll />
      <TestimonialsMarquee />
      <Categories />
      <Quality />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
