
import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section with Tech Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
            alt="Professional working with technology"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Technology Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
          </motion.p>
        </div>
      </motion.section>

      <div className="pt-0">
        <Services />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
