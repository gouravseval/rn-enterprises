import SectionWrapper from '../ui/SectionWrapper';
import data from '@/data/data.json';
import { Microscope, ClipboardCheck, Ruler } from 'lucide-react';

const icons = [Microscope, ClipboardCheck, Ruler];

const Quality = () => {
  const { quality } = data;

  return (
    <SectionWrapper className="bg-gradient-to-b from-black to-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
             <h4 className="text-cyan-500 font-bold uppercase tracking-widest mb-2">Quality Assurance</h4>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{quality.title}</h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               {quality.description}
             </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {quality.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <div key={step.step} className="relative p-6 rounded-xl bg-black border border-white/10 text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-tr-xl -z-0" />
                  
                  <div className="inline-flex p-4 rounded-full bg-zinc-900 text-cyan-500 mb-6 relative z-10 border border-white/5 group-hover:border-cyan-500/50 transition-colors">
                    <Icon size={28} />
                  </div>
                  
                  <div className="mb-2 text-sm font-bold text-cyan-700 uppercase tracking-wider">Step 0{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Quality;
