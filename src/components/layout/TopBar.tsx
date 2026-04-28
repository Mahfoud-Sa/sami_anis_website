import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

export default function TopBar() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-primary-900 text-slate-400 text-[10px] sm:text-xs py-3 px-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 font-black uppercase tracking-[0.2em]">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-accent" />
          <span className="hidden sm:inline">Riyadh, Saudi Arabia</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={12} className="text-accent" />
          <span>+966 11 123 4567</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram size={14} /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={14} /></a>
        </div>
        
        <button 
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 text-white hover:text-accent transition-colors py-1 px-3 border border-white/10 rounded-lg"
        >
          <Globe size={12} />
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
    </div>
  );
}
