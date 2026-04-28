import { useLanguage } from '../context/LanguageContext';
import { Gavel, Scale, ShieldCheck, Briefcase, Home, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const { language, t } = useLanguage();

  const services = [
    {
      title: { en: 'Corporate Law', ar: 'قانون الشركات' },
      desc: { en: 'Expert guidance on mergers, acquisitions, and compliance for businesses of all sizes.', ar: 'إرشادات خبيرة حول عمليات الاندماج والاستحواذ والامتثال للشركات بجميع أحجامها.' },
      icon: Briefcase,
    },
    {
      title: { en: 'Family Law', ar: 'قانون الأسرة' },
      desc: { en: 'Compassionate handling of divorce, custody, and inheritance matters with complete discretion.', ar: 'تعامل رحيم مع مسائل الطلاق والحضانة والميراث مع سرية تامة.' },
      icon: UserCheck,
    },
    {
      title: { en: 'Criminal Defense', ar: 'الدفاع الجنائي' },
      desc: { en: 'Vigorous defense strategies to protect your rights and freedom in criminal proceedings.', ar: 'استراتيجيات دفاع قوية لحماية حقوقكم وحريتكم في الإجراءات الجنائية.' },
      icon: Gavel,
    },
    {
      title: { en: 'Real Estate Law', ar: 'القانون العقاري' },
      desc: { en: 'Comprehensive services for property transactions, leasing, and development projects.', ar: 'خدمات شاملة للمعاملات العقارية والتأجير ومشاريع التطوير.' },
      icon: Home,
    },
    {
      title: { en: 'Intellectual Property', ar: 'الملكية الفكرية' },
      desc: { en: 'Protecting your creative assets, trademarks, and patents in a global marketplace.', ar: 'حماية أصولكم الإبداعية وعلاماتكم التجارية وبراءات اختراعكم في السوق العالمية.' },
      icon: ShieldCheck,
    },
    {
      title: { en: 'Litigation & Disputes', ar: 'التقاضي والنزاعات' },
      desc: { en: 'Strategic representation in commercial disputes and alternative dispute resolution.', ar: 'تمثيل استراتيجي في النزاعات التجارية والوسائل البديلة لتسوية النزاعات.' },
      icon: Scale,
    },
  ];

  return (
    <div className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight font-serif italic">
            {language === 'ar' ? 'حلول قانونية شاملة مصممة' : 'Comprehensive Legal Solutions Tailored for'} <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">{language === 'ar' ? 'لحمايتكم' : 'Your Protection'}</span>
          </h2>
          <p className="text-xl text-slate-600 font-serif max-w-2xl mx-auto leading-relaxed italic">
            {language === 'ar' 
              ? 'نحن نؤمن بالتميز القانوني والنزاهة المطلقة. خدماتنا مصممة لمواجهة التحديات القانونية المعقدة بأعلى معايير المهنية.' 
              : 'We believe in legal excellence and unwavering integrity. Our services are designed to meet complex legal challenges with the highest professional standards.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="group p-12 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-16 h-16 bg-primary-900 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary-900/20 mb-10 group-hover:bg-accent transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4 tracking-tight font-serif italic">
                {service.title[language]}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {service.desc[language]}
              </p>
              <div className="pt-6 border-t border-slate-200 mt-auto">
                <Link to="/contact" className="text-accent font-black uppercase tracking-widest text-xs flex items-center justify-between group-hover:text-amber-700 transition-colors">
                  {language === 'ar' ? 'طلب استشارة' : 'Book Consultation'}
                  <ArrowRight size={16} className="rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
