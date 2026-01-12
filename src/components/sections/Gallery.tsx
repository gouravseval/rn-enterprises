import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '@/assets/logo.png';

// Dynamically import all images from assets/gallery
const imagesGlob = import.meta.glob('@/assets/gallery/*.jpg', { eager: true });
const images = Object.entries(imagesGlob).map(([path, module]: [string, any]) => {
    // Extract number from path for sorting: src/assets/gallery/1.jpg -> 1
    const name = path.split('/').pop()?.split('.')[0] || '0';
    return {
        id: parseInt(name),
        src: module.default,
        alt: `Gallery Image ${name}`
    };
}).sort((a, b) => a.id - b.id);

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Reset zoom when changing images
  useEffect(() => {
    setZoomLevel(1);
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => prev > 1 ? 1 : 2.5);
  };

  return (
    <SectionWrapper id="gallery" className="bg-zinc-950 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="text-cyan-500">Gallery</span></h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400">However complex the challenge, we engineer the solution.</p>
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-xl border border-gray-800 cursor-pointer break-inside-avoid"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <ZoomIn className="text-cyan-400 w-10 h-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
              </div>

               {/* Custom Logo / Branding */}
              <div className="absolute bottom-0 right-0 pl-10 pt-10 pb-2 pr-3 bg-gradient-to-br from-transparent via-black/90 to-black">
                  <div className="flex items-center gap-2">
                       <img src={logo} alt="RN" className="h-4 w-auto" /> 
                      <span className="text-[10px] font-bold text-cyan-500 tracking-wider">RN ENTERPRISES</span>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedIndex(null)}
            >
              {/* Controls */}
              <div className="absolute top-0 w-full p-4 flex justify-between items-center z-50">
                <div className="text-gray-400 text-sm tracking-widest pl-4">
                    {selectedIndex + 1} / {images.length}
                </div>
                <div className="flex gap-4">
                   <button
                    className="text-white/70 hover:text-cyan-400 P-2 transition-colors"
                    onClick={toggleZoom}
                    title="Zoom"
                  >
                   {zoomLevel > 1 ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
                  </button>
                  <button
                    className="text-white/70 hover:text-red-500 transition-colors"
                    onClick={() => setSelectedIndex(null)}
                    title="Close"
                  >
                    <X size={32} />
                  </button>
                </div>
              </div>

               {/* Navigation Buttons */}
               <button 
                  className="absolute left-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-cyan-400 hover:bg-black/80 transition-all hidden md:block"
                  onClick={handlePrev}
               >
                 <ChevronLeft size={40} />
               </button>

               <button 
                  className="absolute right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-cyan-400 hover:bg-black/80 transition-all hidden md:block"
                  onClick={handleNext}
               >
                 <ChevronRight size={40} />
               </button>

              {/* Image */}
              <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
                  <motion.img
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: zoomLevel }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    src={images[selectedIndex].src}
                    alt="Gallery Preview"
                    className={`max-w-full max-h-screen object-contain shadow-2xl transition-transform duration-300 ${zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                    onClick={toggleZoom}
                    style={{ cursor: zoomLevel > 1 ? 'zoom-out' : 'zoom-in' }}
                  />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
