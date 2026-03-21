import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { Building2 } from 'lucide-react'; // Using Lucide React for consistent SVG

const clients = [
  "DRI",
  "AJ Engineer and consultants",
  "Mahindra industries",
  "Mahavira perforator",
  "SPM automation",
  "HRD industrial solution",
  "OZONE",
  "ZLIFE education",
  "Shree ram fabrication",
  "Loyal EV"
];

const Clients = () => {
  // We duplicate the clients array multiple times to ensure seamless infinite scrolling
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <SectionWrapper id="clients" className="bg-zinc-950 relative overflow-hidden py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-[10%] top-[40%] w-[30%] h-[30%] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-cyan-500 font-bold uppercase tracking-widest mb-2">Trusted By</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Esteemed <span className="text-cyan-500">Clients</span></h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg">
            We are proud to collaborate with industry leaders and provide them with top-tier engineering solutions.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="relative w-full overflow-hidden flex z-10 before:absolute before:left-0 before:top-0 before:w-[150px] before:h-full before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-[150px] after:h-full after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:z-10">
        <motion.div
          animate={{ x: [0, -100 * clients.length + '%'] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1000 // Adjust speed here
          }}
          className="flex gap-6 w-max pl-6 hover:[animation-play-state:paused]"
        >
          {marqueeItems.map((client, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-cyan-500/50 hover:bg-gray-900/80 transition-all shadow-lg w-[200px] h-[140px] shrink-0"
            >
              <div className="bg-gray-900 p-3 rounded-full mb-4 group-hover:bg-cyan-950/30 transition-colors">
                 <Building2 className="w-8 h-8 text-cyan-500/70 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-gray-300 font-semibold leading-tight text-sm group-hover:text-white transition-colors">
                {client}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Clients;
