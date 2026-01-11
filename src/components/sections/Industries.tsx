import SectionWrapper from '../ui/SectionWrapper';
import data from '@/data/data.json';
import { Car, Building2, Zap, Sofa, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

const industryIcons = {
  Automotive: Car,
  Construction: Building2,
  Energy: Zap,
  "Interior Design": Sofa,
  Manufacturing: Factory
};

const Industries = () => {
  return (
    <SectionWrapper id="industries" className="bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
           <p className="text-gray-400 max-w-2xl mx-auto">Delivering tailored solutions across diverse sectors with industry-specific expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.industries.map((industry, i) => {
            const Icon = industryIcons[industry.name as keyof typeof industryIcons] || Factory;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{industry.name}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{industry.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Industries;
