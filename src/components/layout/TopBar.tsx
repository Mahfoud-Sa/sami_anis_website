import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

export default function TopBar() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/5">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-blue-400" />
          <span>123 Business St, Dubai, UAE</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-blue-400" />
          <span>+971 50 123 4567</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-blue-400" />
          <span>contact@samianis.com</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 border-r border-white/10 pr-6 mr-6 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-6 rtl:mr-0 rtl:ml-6">
          <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={14} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={14} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={14} /></a>
        </div>
        
        <button 
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 hover:text-white transition-colors uppercase font-medium tracking-wider"
        >
          <Globe size={14} className="text-blue-400" />
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
    </div>
  );
}
