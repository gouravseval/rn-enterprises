import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import data from '@/data/data.json';
import heroBg from '@/assets/hero.png';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const { hero } = data;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-20" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroBg}
          alt="CNC Laser Cutting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-30 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-cyan-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            {data.brand.tagline}
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Next</span>:<br />
            Precision Metal Fabrication.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {hero.subHeadline}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" icon={<ChevronRight size={20} />} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {hero.primaryCta}
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              {hero.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
