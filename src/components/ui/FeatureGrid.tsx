import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface FeatureItem {
  id: number | string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <motion.div
           key={feature.id}
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.2, duration: 0.5 }}
           className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black text-white group-hover:opacity-10 transition-opacity select-none">
            0{i + 1}
          </div>
          
          <div className="mb-4 text-cyan-500">
            <CheckCircle2 size={32} />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-400 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
