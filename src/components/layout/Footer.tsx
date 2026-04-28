import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Scale } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary-900 text-slate-400 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-10">
            <Logo variant="light" className="items-start" />
          </Link>
          <p className="text-base leading-relaxed mb-8 font-serif italic">
            {language === 'ar' 
              ? 'مكتب محاماة رائد يكرس جهوده لتحقيق العدالة وحماية حقوق الموكلين بنزاهة وخبرة قانونية استثنائية.' 
              : 'A premier law firm dedicated to achieving justice and protecting clients\' rights with integrity and exceptional legal expertise.'}
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
           <h4 className="text-white font-serif italic font-bold mb-8 text-xl border-b border-white/10 pb-4">{t('nav.services')}</h4>
           <ul className="space-y-4 text-sm font-medium uppercase tracking-widest">
             <li><Link href="/services" className="hover:text-accent transition-colors">{language === 'ar' ? 'قانون الشركات' : 'Corporate Law'}</Link></li>
             <li><Link href="/services" className="hover:text-accent transition-colors">{language === 'ar' ? 'التقاضي والنزاعات' : 'Litigation & Disputes'}</Link></li>
             <li><Link href="/services" className="hover:text-accent transition-colors">{language === 'ar' ? 'قانون الأسرة' : 'Family Law'}</Link></li>
             <li><Link href="/services" className="hover:text-accent transition-colors">{language === 'ar' ? 'الملكية الفكرية' : 'Intellectual Property'}</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="text-white font-serif italic font-bold mb-8 text-xl border-b border-white/10 pb-4">{language === 'ar' ? 'المكتب' : 'The Firm'}</h4>
           <ul className="space-y-4 text-sm font-medium uppercase tracking-widest">
             <li><Link href="/about" className="hover:text-accent transition-colors">{t('nav.about')}</Link></li>
             <li><Link href="/news" className="hover:text-accent transition-colors">{t('nav.news')}</Link></li>
             <li><Link href="/team" className="hover:text-accent transition-colors">{t('nav.team')}</Link></li>
             <li><Link href="/contact" className="hover:text-accent transition-colors">{t('nav.contact')}</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="text-white font-serif italic font-bold mb-8 text-xl border-b border-white/10 pb-4">{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h4>
           <ul className="space-y-6 text-sm">
             <li className="flex items-start gap-4">
               <MapPin size={20} className="text-accent shrink-0" />
               <span className="leading-relaxed italic">Office 402, Al-Faisaliyah Tower, Riyadh, Saudi Arabia</span>
             </li>
             <li className="flex items-center gap-4">
               <Phone size={20} className="text-accent shrink-0" />
               <span className="font-bold">+966 11 123 4567</span>
             </li>
             <li className="flex items-center gap-4">
               <Mail size={20} className="text-accent shrink-0" />
               <span className="font-bold">justice@samianis.com</span>
             </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-[0.2em]">
        <div className="flex items-center gap-3">
           <Scale size={16} className="text-accent" />
           <p>© {new Date().getFullYear()} Sami Anis Law Firm. {t('footer.rights')}.</p>
        </div>
        <div className="flex items-center gap-8 text-slate-500">
          <Link href="/admin" className="hover:text-accent transition-colors">{t('admin.login')}</Link>
          <a href="#" className="hover:text-accent transition-colors">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
          <a href="#" className="hover:text-accent transition-colors">{language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a>
        </div>
      </div>
    </footer>
  );
}
