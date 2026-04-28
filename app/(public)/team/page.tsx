'use client';

import { useLanguage } from '../../../src/context/LanguageContext';
import { Linkedin, Twitter, Scale } from 'lucide-react';

export default function Team() {
  const { language, t } = useLanguage();

  const members = [
    {
      id: '1',
      name: { en: 'Sami Anis', ar: 'سامي أنيس' },
      position: { en: 'Founding Partner', ar: 'الشريك المؤسس' },
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: '2',
      name: { en: 'Sarah Khalid', ar: 'سارة خالد' },
      position: { en: 'Senior Counsel', ar: 'كبير المستشارين' },
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      id: '3',
      name: { en: 'Omar Ahmed', ar: 'عمر أحمد' },
      position: { en: 'Lead Litigator', ar: 'رئيس قسم التقاضي' },
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: '4',
      name: { en: 'Layla Mansour', ar: 'ليلى منصور' },
      position: { en: 'Managing Attorney', ar: 'المحامي المسؤول' },
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    },
  ];

  return (
    <div className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 font-serif italic">{t('nav.team')}</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-slate-600 font-serif text-lg italic leading-relaxed">
            {language === 'ar' 
              ? 'نخبة من الكفاءات القانونية المكرسة لحماية حقوقكم وتحقيق أفضل النتائج القانونية.' 
              : 'An elite group of legal professionals dedicated to protecting your rights and achieving the best legal outcomes.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {members.map((member) => (
            <div key={member.id} className="group flex flex-col items-center">
              <div className="w-full aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 relative border-4 border-white shadow-2xl group-hover:border-accent transition-all duration-500">
                <img 
                  src={member.photo} 
                  alt={member.name[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-12">
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white text-primary-900 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-900 mb-2 font-serif italic tracking-tight">{member.name[language]}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                   <Scale size={14} className="text-accent" />
                   <p className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">{member.position[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
