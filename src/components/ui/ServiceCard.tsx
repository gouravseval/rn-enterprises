import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  icon?: ReactNode;
  image?: string;
  details?: string;
}

const ServiceCard = ({ title, description, index, icon, image, details }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 h-full flex flex-col"
    >
      {image && (
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col relative z-20">
        <div className="mb-4 text-cyan-500 bg-cyan-950/30 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>
        
        {details && (
          <div className="mt-auto pt-4 border-t border-white/5">
            <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{details}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
