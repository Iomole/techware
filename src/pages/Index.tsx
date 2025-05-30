import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;