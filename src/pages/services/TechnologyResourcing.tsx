
import { Navigation } from "@/components/Navigation";
import { TechnologyStacks } from "@/components/technology-resourcing/TechnologyStacks";
import { ClientLogos } from "@/components/technology-resourcing/ClientLogos";
import { motion } from "framer-motion";
import { Code, Users } from "lucide-react";

const TechnologyResourcing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section with Background Image */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 py-16"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80"
              alt="African technology professional coding"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-purple-50/60"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <Code className="w-16 h-16 text-[#ea384c]" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Technology Resourcing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We provide expert IT staffing solutions across various technology stacks, 
                helping organizations build high-performing technical teams.
              </p>
              <div className="flex items-center justify-center gap-2 text-lg text-gray-700">
                <Users className="w-6 h-6 text-[#ea384c]" />
                <span>Over 500 talented professionals in our resource pool</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechnologyStacks />
          <ClientLogos />
        </div>
      </main>
    </div>
  );
};

export default TechnologyResourcing;
