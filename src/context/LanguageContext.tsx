'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'The Firm',
    'nav.services': 'Practice Areas',
    'nav.news': 'Legal Insights',
    'nav.team': 'Our Attorneys',
    'nav.contact': 'Book Consultation',
    'nav.consultancy': 'Legal Advice',
    'hero.title': 'Justice & Excellence in Legal Practice',
    'hero.subtitle': 'Defending your rights with integrity and unparalleled legal expertise.',
    'hero.watch': 'Firm Overview',
    'home.stats.strategic': 'Litigation & Disputes',
    'home.stats.growth': 'Corporate Law',
    'home.stats.team': 'Senior Partners',
    'home.stats.analysis': 'Case Analysis',
    'home.services.title': 'Our Practice Areas',
    'home.services.subtitle': 'Specialized legal solutions for individuals and corporations',
    'home.cta.title': 'Facing a Legal Challenge?',
    'home.cta.subtitle': 'Our dedicated team of lawyers is ready to provide the strategic defense you deserve.',
    'home.cta.button': 'Request Consultation',
    'about.title': 'Sami Anis Law Firm',
    'about.leadership': 'Expert Advocacy',
    'about.excellence': 'Legal Integrity',
    'about.description': 'Sami Anis Law Firm stands at the forefront of the legal industry, providing sophisticated legal counsel to a diverse clientele. With a legacy built on trust and results, we navigate the complexities of the law to secure our clients\' interests.',
    'about.mission': 'Our Mission',
    'about.vision': 'Our Vision',
    'about.values': 'Our Values',
    'contact.title': 'Contact Our Firm',
    'contact.subtitle': 'Professional Legal Support is One Message Away',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Case Details',
    'contact.form.submit': 'Send Inquiry',
    'contact.form.sent': 'Inquiry Received',
    'footer.rights': 'All rights reserved',
    'admin.dashboard': 'Law Admin',
    'admin.login': 'Attorney Login',
    'admin.logout': 'Logout',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عن المكتب',
    'nav.services': 'مجالات الاختصاص',
    'nav.news': 'رؤى قانونية',
    'nav.team': 'محامونا',
    'nav.contact': 'حجز استشارة',
    'nav.consultancy': 'استشارة قانونية',
    'hero.title': 'العدالة والتميز في الممارسة القانونية',
    'hero.subtitle': 'الدفاع عن حقوقكم بنزاهة وخبرة قانونية لا تضاهى.',
    'hero.watch': 'نبذة عن المكتب',
    'home.stats.strategic': 'التقاضي والنزاعات',
    'home.stats.growth': 'قانون الشركات',
    'home.stats.team': 'كبار الشركاء',
    'home.stats.analysis': 'تحليل القضايا',
    'home.services.title': 'مجالات اختصاصنا',
    'home.services.subtitle': 'حلول قانونية متخصصة للأفراد والشركات',
    'home.cta.title': 'هل تواجه تحدياً قانونياً؟',
    'home.cta.subtitle': 'فريقنا المخلص من المحامين مستعد لتقديم الدفاع الاستراتيجي الذي تستحقه.',
    'home.cta.button': 'اطلب استشارة',
    'about.title': 'مكتب سامي أنيس للمحاماة',
    'about.leadership': 'دفاع خبير',
    'about.excellence': 'نزاهة قانونية',
    'about.description': 'يقف مكتب سامي أنيس للمحاماة في طليعة الصناعة القانونية، حيث يقدم استشارات قانونية رفيعة المستوى لعملاء متنوعين. مع إرث بني على الثقة والنتائج، نتنقل في تعقيدات القانون لضمان مصالح عملائنا.',
    'about.mission': 'مهمتنا',
    'about.vision': 'رؤيتنا',
    'about.values': 'قيمنا',
    'contact.title': 'اتصل بمكتبنا',
    'contact.subtitle': 'الدعم القانوني المهني على بعد رسالة واحدة',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'تفاصيل القضية',
    'contact.form.submit': 'إرسال الطلب',
    'contact.form.sent': 'تم استلام طلبكم',
    'footer.rights': 'جميع الحقوق محفوظة',
    'admin.dashboard': 'إدارة المكتب',
    'admin.login': 'دخول المحامين',
    'admin.logout': 'تسجيل الخروج',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction: language === 'ar' ? 'rtl' : 'ltr', t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
