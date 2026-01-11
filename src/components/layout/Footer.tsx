import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import data from '@/data/data.json';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { footer, contact } = data;

  return (
    <footer className="bg-black/80 text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <img src={logo} alt="RN Enterprises" className="h-12 w-auto mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">{data.brand.philosophy}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footer.links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>{contact.info.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>{contact.info.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>{contact.info.email}</span>
              </li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
             <h3 className="text-white font-bold uppercase tracking-wider mb-6">Connect</h3>
             <div className="flex space-x-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-all"><Linkedin size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-all"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-all"><Twitter size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-all"><Instagram size={20} /></a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>{footer.copyright}</p>
          <p className="mt-2 md:mt-0 font-medium text-cyan-500/50">{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
