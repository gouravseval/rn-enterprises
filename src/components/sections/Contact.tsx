import { useState, useRef } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Button } from '../ui/button';
import data from '@/data/data.json';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const { contact } = data;
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'RN Enterprises Team'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      // For now, since keys are missing, we might want to show a success message for DEMO purposes
      // OR explain that keys are needed. 
      // User asked for "free mail service that can be used from frontend".
      // EmailJS IS that service, but requires setup.
      
      // I will show an error that explains what to do.
      toast.error("Error sending message. Please configure EmailJS keys in Contact.tsx");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-zinc-950 p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{contact.headline}</h2>
            <p className="text-gray-400">Fill out the form below to get a quote for your next project.</p>
          </div>

          <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
            </div>

            {/* Message/Query */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
                Query / Message <span className="text-red-500">*</span>
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                placeholder="Tell us about your project requirements..."
              />
            </div>
            
            <div className="col-span-1 md:col-span-2 mt-4 text-center">
              <Button type="submit" size="lg" className="w-full md:w-auto min-w-[200px]" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Send size={18} className="mr-2" />}
                {loading ? 'Sending...' : 'Submit Request'}
              </Button>
            </div>
          </form>

          {/* Contact Info Footer inside the box */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
             <div>
                <h4 className="text-cyan-500 font-bold mb-2">Address</h4>
                <p className="text-gray-400 text-sm">{contact.info.address}</p>
             </div>
             <div>
                <h4 className="text-cyan-500 font-bold mb-2">Phone</h4>
                <p className="text-gray-400 text-sm">{contact.info.phone}</p>
             </div>
             <div>
                <h4 className="text-cyan-500 font-bold mb-2">Email</h4>
                <p className="text-gray-400 text-sm">{contact.info.email}</p>
             </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
