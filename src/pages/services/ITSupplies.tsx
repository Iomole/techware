
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCategories } from "@/components/it-supplies/ProductCategories";
import { FeaturedProducts } from "@/components/it-supplies/FeaturedProducts";
import { ConsumablesSection } from "@/components/it-supplies/ConsumablesSection";
import { OEMPartners } from "@/components/it-supplies/OEMPartners";
import { motion } from "framer-motion";
import { Package } from "lucide-react";

const ITSupplies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section with Background Image */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 py-16"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1920&q=80"
              alt="African technology professionals with IT equipment"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-green-50/60"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <Package className="w-16 h-16 text-[#ea384c]" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                IT Supplies & Equipment
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete range of IT hardware, equipment, and consumables to power your business operations.
                From enterprise-grade workstations to essential office supplies.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCategories />
          <OEMPartners />
          <FeaturedProducts />
          <ConsumablesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ITSupplies;
