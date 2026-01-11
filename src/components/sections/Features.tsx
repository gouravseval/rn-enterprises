import SectionWrapper from '../ui/SectionWrapper';
import FeatureGrid from '../ui/FeatureGrid';
import data from '@/data/data.json';

const Features = () => {
  return (
    <SectionWrapper className="bg-black relative z-10" id="features">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The <span className="text-cyan-500">RN</span> Advantage</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
        </div>
        
        <FeatureGrid features={data.features} />
      </div>
    </SectionWrapper>
  );
};

export default Features;
