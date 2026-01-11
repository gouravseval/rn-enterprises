import SectionWrapper from '../ui/SectionWrapper';
import data from '@/data/data.json';
import { Target, Lightbulb, Shield, Award } from 'lucide-react';

const icons = {
  Precision: Target,
  Innovation: Lightbulb,
  Integrity: Shield,
  Safety: Award
};

const About = () => {
  const { about } = data;

  return (
    <SectionWrapper id="about" className="bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
             <h4 className="text-cyan-500 font-bold uppercase tracking-widest mb-2">About Us</h4>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
               {about.philosophyTitle}
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed mb-6">
               {about.philosophyDescription}
             </p>
             <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-cyan-500 pl-6">
               {about.mission}
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {about.values.map((val) => {
                  const Icon = icons[val.title as keyof typeof icons] || Target;
                  return (
                    <div key={val.title} className="flex gap-4">
                      <div className="bg-white/5 p-3 rounded-lg h-fit text-cyan-500">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">{val.title}</h4>
                        <p className="text-sm text-gray-500">{val.description}</p>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>
          
          {/* Visual/Image Area (using CSS shape or placeholder if no image) */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-2xl" />
            <div className="relative bg-zinc-900 rounded-2xl border border-white/10 p-8 md:p-12 overflow-hidden group">
              <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 italic mb-8">"{about.vision}"</p>
              
              <div className="space-y-4">
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[95%]" />
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Precision</span>
                  <span>99.9%</span>
                </div>
                 <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[90%]" />
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Efficiency</span>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
