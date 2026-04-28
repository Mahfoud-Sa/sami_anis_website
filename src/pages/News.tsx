import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const { language, t } = useLanguage();

  const articles = [
    {
      id: '1',
      title: { en: 'Navigating New Regional Labor Laws', ar: 'التنقل في قوانين العمل الإقليمية الجديدة' },
      summary: { en: 'A comprehensive look at how the latest labor regulations impact international employers.', ar: 'نظرة شاملة على كيفية تأثير أحدث لوائح العمل على أصحاب العمل الدوليين.' },
      category: language === 'ar' ? 'قانون العمل' : 'Labor Law',
      date: 'April 20, 2026',
      author: 'Sami Anis',
      image: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop',
    },
    {
      id: '2',
      title: { en: 'Intellectual Property in the AI Era', ar: 'الملكية الفكرية في عصر الذكاء الاصطناعي' },
      summary: { en: 'Protecting your innovations when technologies are evolving faster than legislation.', ar: 'حماية ابتكاراتك عندما تتطور التقنيات بشكل أسرع من التشريعات.' },
      category: language === 'ar' ? 'الملكية الفكرية' : 'IP Rights',
      author: 'Dr. Ahmad Khalid',
      date: 'April 14, 2026',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: '3',
      title: { en: 'Strategic Corporate Transparency', ar: 'الشفافية الاستراتيجية للشركات' },
      summary: { en: 'Understanding the shift towards global transparency standards and compliance.', ar: 'فهم التحول نحو معايير الشفافية العالمية والامتثال.' },
      category: language === 'ar' ? 'الشركات' : 'Corporate',
      author: 'Legal Research Team',
      date: 'April 05, 2026',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <div className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 font-serif italic">{t('nav.news')}</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-slate-600 font-serif text-xl italic leading-relaxed">
            {language === 'ar' 
              ? 'مقالات تحليليّة ورؤى قانونية من خبرائنا لمساعدتكم على فهم التحولات التشريعية المعاصرة.' 
              : 'Analytical articles and legal insights from our experts to help you understand contemporary legislative shifts.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all group flex flex-col h-full">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-8 left-8 rtl:left-auto rtl:right-8">
                  <span className="bg-primary-900 px-5 py-2 rounded-xl text-xs font-black text-white uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                    <BookOpen size={14} className="text-accent" />
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 text-xs text-slate-400 mb-8 font-black uppercase tracking-widest border-b border-slate-100 pb-6">
                  <span className="flex items-center gap-2 italic"><Calendar size={14} className="text-accent" /> {article.date}</span>
                  <span className="flex items-center gap-2 italic"><User size={14} className="text-accent" /> {article.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-6 leading-tight min-h-[4rem] font-serif italic">
                  {article.title[language]}
                </h3>
                <p className="text-slate-600 mb-10 line-clamp-3 text-base leading-relaxed font-serif italic">
                  {article.summary[language]}
                </p>
                <Link 
                  to={`/news/${article.id}`} 
                  className="mt-auto inline-flex items-center gap-3 text-accent font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all text-xs"
                >
                  {language === 'ar' ? 'اقرأ المقال كاملاً' : 'Read Full Insight'}
                  <ArrowRight size={18} className="rtl:rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
