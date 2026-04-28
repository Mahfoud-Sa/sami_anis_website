import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import Logo from '../ui/Logo';

export default function Navbar() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.team'), path: '/team' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo variant="gold" showSubtitle={!isScrolled} className="scale-75 md:scale-100 origin-left" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-xs font-black uppercase tracking-[0.2em] transition-colors hover:text-accent",
                pathname === item.path ? "text-accent" : "text-slate-500"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary-900 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-primary-900/10"
          >
            {t('nav.consultancy')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-bold py-2 uppercase tracking-widest transition-colors",
                pathname === item.path ? "text-accent" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary-900 text-white px-6 py-4 rounded-xl text-center font-black uppercase tracking-widest mt-4 shadow-xl"
          >
            {t('nav.consultancy')}
          </Link>
        </div>
      )}
    </nav>
  );
}
