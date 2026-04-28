'use client';

import { useLanguage } from '../../../src/context/LanguageContext';
import { Mail, Phone, MapPin, Send, Scale, Clock, Globe } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 font-serif italic">{t('contact.title')}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-slate-600 font-serif text-xl italic leading-relaxed">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="bg-primary-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-3xl font-bold mb-10 font-serif italic border-b border-white/10 pb-6">{language === 'ar' ? 'معلومات التواصل' : 'Practice Information'}</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-100 mb-1 font-serif">{language === 'ar' ? 'المكتب الرئيسي' : 'Primary Chambers'}</h4>
                    <p className="text-slate-300 leading-relaxed">Office 402, Al-Faisaliyah Tower, King Fahd Rd, Riyadh, Saudi Arabia</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 text-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-100 mb-1 font-serif">{language === 'ar' ? 'رقم الهاتف' : 'Inquiry Line'}</h4>
                    <p className="text-slate-300">+966 11 123 4567</p>
                    <p className="text-slate-500 text-sm">{language === 'ar' ? 'متاح من الأحد إلى الخميس' : 'Available Sun-Thu, 9am - 6pm'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white/10 text-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-100 mb-1 font-serif">{language === 'ar' ? 'البريد الإلكتروني' : 'Electronic Inquiry'}</h4>
                    <p className="text-slate-300">justice@samianis.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 px-6">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Clock size={20} />
                 </div>
                 <span className="text-sm font-bold text-primary-900 uppercase tracking-widest">{language === 'ar' ? 'رد خلال 24 ساعة' : '24h Response'}</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Globe size={20} />
                 </div>
                 <span className="text-sm font-bold text-primary-900 uppercase tracking-widest">{language === 'ar' ? 'حضور عالمي' : 'Global Reach'}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl shadow-primary-900/5 border border-slate-200">
            <h3 className="text-3xl font-bold text-primary-900 mb-10 font-serif italic border-b border-slate-100 pb-6">
               {language === 'ar' ? 'طلب استشارة قانونية' : 'Formal Case Inquiry'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-1 rtl:mr-1 rtl:ml-0">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border-slate-200 border rounded-2xl px-8 py-5 outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all text-primary-900 font-medium placeholder:italic"
                  placeholder={language === 'ar' ? 'الاسم الثلاثي الكامل' : 'Full Legal Name'}
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-1 rtl:mr-1 rtl:ml-0">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border-slate-200 border rounded-2xl px-8 py-5 outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all text-primary-900 font-medium placeholder:italic"
                  placeholder="name@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-1 rtl:mr-1 rtl:ml-0">{t('contact.form.message')}</label>
                <textarea 
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border-slate-200 border rounded-2xl px-8 py-5 outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all text-primary-900 font-medium resize-none placeholder:italic"
                  placeholder={language === 'ar' ? 'يرجى تقديم ملخص موجز للقضية...' : 'Please provide a brief summary of the legal matter...'}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={submitted}
                className="w-full bg-primary-900 text-white font-black py-6 rounded-2xl hover:bg-black transition-all flex items-center justify-center gap-4 group shadow-xl shadow-primary-900/20"
              >
                <span className="uppercase tracking-[0.2em]">
                   {submitted ? t('contact.form.sent') : t('contact.form.submit')}
                </span>
                {!submitted && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:-scale-x-100" />}
                {submitted && <Scale size={20} className="animate-pulse" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
