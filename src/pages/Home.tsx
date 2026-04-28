import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Gavel, Scale, ShieldCheck, BookOpen, ArrowRight, Play } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary-900 border-b border-primary-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
            alt="Law Office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/80 to-transparent rtl:bg-gradient-to-l"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent font-bold text-xs uppercase tracking-[0.2em] mb-8">
              <Scale size={14} />
              {language === 'ar' ? 'منذ 2008' : 'Established Since 2008'}
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight font-serif italic">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-slate-300 mb-12 max-w-xl font-medium leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact" className="bg-accent text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-amber-600 transition-all shadow-2xl shadow-accent/40 hover:scale-105">
                {t('home.cta.button')}
              </Link>
              
              <button className="flex items-center gap-4 text-white font-black uppercase tracking-widest group px-6 py-4 hover:bg-white/5 rounded-full transition-all">
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10">
                  <Play size={16} fill="currentColor" />
                </span>
                {t('hero.watch')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Summary */}
      <section className="py-12 bg-white px-6 shadow-sm relative z-20 -mt-10 max-w-7xl mx-auto rounded-3xl border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:divide-x md:divide-slate-100 rtl:md:divide-x-reverse">
          {[
            { label: t('home.stats.strategic'), icon: Gavel },
            { label: t('home.stats.growth'), icon: ShieldCheck },
            { label: t('home.stats.team'), icon: Scale },
            { label: t('home.stats.analysis'), icon: BookOpen },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-5 px-8 py-4 group cursor-pointer hover:bg-slate-50 transition-colors rounded-xl"
            >
              <item.icon size={28} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="font-serif text-lg font-bold text-primary-900 leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Hint */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
              alt="Statue of Justice"
              className="rounded-[3rem] shadow-2xl relative z-10"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8 font-serif leading-tight">
              {language === 'ar' ? 'التزام بالدفاع عن حقوقكم بصلابة ونزاهة' : 'Committed to Defending Your Rights with Integrity'}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed italic">
              {t('about.description')}
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 text-accent font-black uppercase tracking-[0.2em] hover:gap-5 transition-all text-sm">
              {language === 'ar' ? 'اكتشف المزيد عن مكتبنا' : 'Discover Our Legacy'} <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Practice Areas */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 tracking-tight font-serif italic">{t('home.services.title')}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: language === 'ar' ? 'قانون الشركات' : 'Corporate Law', icon: ShieldCheck, desc: language === 'ar' ? 'حلول قانونية ذكية للمعاملات التجارية المعقدة وتأسيس الشركات.' : 'Intelligent legal solutions for complex business transactions and firm establishment.' },
            { title: language === 'ar' ? 'التقاضي والتحكيم' : 'Litigation & Arbitration', icon: Gavel, desc: language === 'ar' ? 'دفاع قوي في المحاكم ومراكز التحكيم الدولية للنزاعات التجارية.' : 'Strong defense in courts and international arbitration centers for commercial disputes.' },
            { title: language === 'ar' ? 'القانون العقاري' : 'Real Estate Law', icon: BookOpen, desc: language === 'ar' ? 'حماية استثماراتك العقارية وضمان صحة جميع العقود والاتفاقيات.' : 'Protecting your real estate investments and ensuring validity of all contracts.' }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-primary-900 text-white flex items-center justify-center mb-8 shadow-xl shadow-primary-900/20 group-hover:bg-accent transition-colors">
                <service.icon size={30} />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4 font-serif">{service.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8">{service.desc}</p>
              <Link to="/services" className="text-accent text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform rtl:-scale-x-100 rtl:translate-x-0 rtl:hover:-translate-x-2">
                 <span className="rtl:scale-x-100">{language === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span> <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary-900 rounded-[3rem] px-8 py-20 text-center text-white relative overflow-hidden shadow-2xl border-4 border-accent/20">
           <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
           
           <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 font-serif italic">{t('home.cta.title')}</h2>
           <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-serif">
             {t('home.cta.subtitle')}
           </p>
           <Link to="/contact" className="inline-block bg-accent text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl hover:scale-105 relative z-10">
             {t('home.cta.button')}
           </Link>
        </div>
      </section>
    </div>
  );
}
