import SectionWrapper from '../ui/SectionWrapper';
import ServiceCard from '../ui/ServiceCard';
import data from '@/data/data.json';
import { Layers, Cuboid, Flame, Hammer } from 'lucide-react';
import cncImg from '@/assets/service-cnc.png';
import weldingImg from '@/assets/service-welding.png';
import steelImg from '@/assets/hero.png'; // Fallback/reuse

const icons = {
  cnc: Layers,
  steel: Cuboid,
  welding: Flame,
  forming: Hammer
};

const images = {
  cnc: cncImg,
  steel: steelImg,
  welding: weldingImg,
  forming: undefined // No specific image, will render without or use fallback if desired
};

const Services = () => {
  return (
    <SectionWrapper id="services" className="bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h4 className="text-cyan-500 font-bold uppercase tracking-widest mb-2">Our Capabilities</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Deep Dive</h2>
            <p className="text-gray-400 text-lg">
              From raw material to finished product, our comprehensive suite of services ensures your project is handled with expert care at every stage.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center text-cyan-400 font-semibold hover:text-white transition-colors">
             View Full Specs →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons] || Layers;
            return (
              <ServiceCard
                key={service.id}
                index={index}
                title={service.title}
                description={service.description}
                details={service.specs || service.expertise || service.materials || service.machinery}
                icon={<Icon size={24} />}
                image={images[service.id as keyof typeof images]}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
