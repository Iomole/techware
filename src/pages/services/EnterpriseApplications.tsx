
import { Navigation } from "@/components/Navigation";
import { BusinessSolutions } from "@/components/enterprise/BusinessSolutions";
import { TechnologyPartners } from "@/components/enterprise/TechnologyPartners";
import { motion } from "framer-motion";
import { Building } from "lucide-react";

const EnterpriseApplications = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section with Background Image */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80"
              alt="African professional using enterprise applications"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-white/50"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <Building className="w-16 h-16 text-[#ea384c]" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Enterprise Business Applications
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with our comprehensive suite of enterprise applications. 
                We deliver scalable, integrated solutions that streamline operations and drive growth.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BusinessSolutions />
          <TechnologyPartners />
        </div>
      </main>
    </div>
  );
};

export default EnterpriseApplications;
