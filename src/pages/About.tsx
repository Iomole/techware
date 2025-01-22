import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";

const About = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <section className="py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300">
                  We are an IT consulting company committed to providing our clients with cutting-edge and 
                  effective data solutions and strategies. We Consult, Develop, Implement, and Manage Integrated 
                  IT solutions that reshape the productivity of our customers in the private and public sector.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  With experience cutting across Enterprise Digital Technology Infrastructures, IT Security, 
                  Enterprise Software Solutions, IT Training, Technology Resourcing and Bespoke software
                  development, we are positioned to provide a better ROI than our competitor. Our approach is 
                  completely customer centric.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We make it a point to listen and understand the needs of our clients, their objectives and we use 
                  all our endeavor and efforts to find solutions for specific business expectations. We are committed 
                  to providing innovative, cost-effective solutions that meet our clients' security and digital 
                  infrastructure needs.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  To become the platform of choice for ICT Professionals and Businesses in West Africa by 2030.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Solving real life problems using IT openly and transparently.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Customer centricity</li>
                  <li>Relationship and Teamwork</li>
                  <li>Innovation</li>
                  <li>Partnership</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <TeamSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default About;