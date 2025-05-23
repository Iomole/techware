
import { Navigation } from "@/components/Navigation";
import { Solutions } from "@/components/Solutions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const SolutionsPage = () => {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section with Tech Team Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&q=80"
            alt="Technology professional at work"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-blue-50/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Technology Solutions
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Innovative solutions tailored to meet your unique business challenges and accelerate digital transformation.
          </motion.p>
        </div>
      </motion.section>

      <div className="pt-0">
        <Solutions />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default SolutionsPage;
