
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#ea384c] to-[#d02e40] relative overflow-hidden"
    >
      {/* Background Tech Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1920&q=80"
          alt="African tech professionals collaborating"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#ea384c]/40"></div>
      </div>

      {/* Additional Tech Images */}
      <div className="absolute top-20 left-10 z-5 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
          alt="African developer coding"
          className="w-32 h-32 rounded-lg object-cover opacity-70 shadow-lg"
        />
      </div>

      <div className="absolute bottom-20 right-10 z-5 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
          alt="African tech team meeting"
          className="w-40 h-28 rounded-lg object-cover opacity-70 shadow-lg"
        />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8"
        >
          Techware Professional
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Services Ltd</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Empowering businesses with cutting-edge technology solutions for digital transformation and growth.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Link to="/contact#contact-details">
            <Button 
              size="lg" 
              className="bg-white text-[#ea384c] hover:bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
