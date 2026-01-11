import SectionWrapper from '../ui/SectionWrapper';
import { Button } from '../ui/button';
import data from '@/data/data.json';
import { Send, Upload } from 'lucide-react';

const Contact = () => {
  const { contact } = data;

  return (
    <SectionWrapper id="contact" className="bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-zinc-950 p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointers-events-none" />

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{contact.headline}</h2>
            <p className="text-gray-400">Fill out the form below to get a quote for your next project.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            {contact.formFields.map((field) => (
              <div key={field.label} className={field.type === 'textarea' || field.type === 'file' ? 'col-span-1 md:col-span-2' : ''}>
                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                  {field.label}
                </label>
                
                {field.type === 'select' ? (
                  <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select an option</option>
                    {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea 
                    rows={4} 
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                ) : field.type === 'file' ? (
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-cyan-500/50 hover:bg-white/5 transition-all cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-cyan-500 mb-2" />
                    <p className="text-sm text-gray-400">Click or drag to upload designs ({field.accept})</p>
                  </div>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                  />
                )}
              </div>
            ))}
            
            <div className="col-span-1 md:col-span-2 mt-4 text-center">
              <Button size="lg" className="w-full md:w-auto min-w-[200px]" icon={<Send size={18} />}>
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
