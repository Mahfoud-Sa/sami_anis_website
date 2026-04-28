import { useLanguage } from '../context/LanguageContext';
import { Gavel, Scale, Award, ShieldCheck, Heart, Users } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop" 
              alt="Lawyers in Meeting"
              className="rounded-[4rem] shadow-2xl relative z-10 border-8 border-white"
            />
            <div className="absolute -bottom-10 -left-10 bg-primary-900 text-white p-10 rounded-[3rem] shadow-2xl z-20">
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm font-black uppercase tracking-widest leading-tight">
                {language === 'ar' ? 'سنة من' : 'Years of'}<br/>{language === 'ar' ? 'التميز القانوني' : 'Legal Excellence'}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-900 mb-8 leading-tight font-serif italic">
              {language === 'ar' ? (
                <>إرث من <span className="text-accent underline decoration-accent/20 underline-offset-8">الدفاع الخبير</span> والنزاهة القانونية</>
              ) : (
                <>A Legacy of <span className="text-accent underline decoration-accent/20 underline-offset-8">Expert Advocacy</span> & Legal Integrity</>
              )}
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-serif italic">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-2 gap-10 border-t border-slate-100 pt-10">
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">500+</div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{language === 'ar' ? 'قضية ناجحة' : 'Successful Cases'}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">10+</div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{language === 'ar' ? 'شركاء كبار' : 'Senior Partners'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-slate-100">
          {[
            { 
              title: t('about.mission'), 
              icon: Gavel, 
              desc: language === 'ar' 
                ? 'مهمتنا هي توفير تمثيل قانوني قوي وحلول استراتيجية مبتكرة تحمي حقوق ومصالح موكلينا بكل نزاهة.' 
                : 'Our mission is to provide vigorous legal representation and innovative strategic solutions that protect our clients\' rights and interests with absolute integrity.' 
            },
            { 
              title: t('about.vision'), 
              icon: Scale, 
              desc: language === 'ar' 
                ? 'أن نكون المرجع القانوني الأول الموثوق به محلياً وإقليمياً، والمعروف بالتميز المهني والنتائج الاستثنائية.' 
                : 'To be the premier trusted legal reference locally and regionally, recognized for professional excellence and exceptional results.' 
            },
            { 
              title: t('about.values'), 
              icon: Award, 
              desc: language === 'ar' 
                ? 'الصدق، الشفافية، الالتزام التام بتحقيق العدالة، والتركيز المستمر على تقديم قيمة حقيقية لموكلينا.' 
                : 'Honesty, transparency, absolute commitment to achieving justice, and continuous focus on delivering real value for our clients.' 
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 hover:shadow-2xl hover:shadow-primary-900/5 transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent shadow-xl mb-8 group-hover:bg-primary-900 group-hover:text-white transition-all">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 font-serif italic">{item.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Preview Section */}
        <div className="mt-40 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-serif italic">{t('nav.team')}</h2>
             <p className="text-slate-500 font-medium text-lg leading-relaxed italic">{language === 'ar' ? 'فريقنا من المحامين ذوي الخبرة العالية مكرس لخدمتكم بأقصى درجات المهنية.' : 'Our highly experienced team of attorneys is dedicated to serving you with the highest degree of professionalism.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Sami Anis', role: language === 'ar' ? 'الشريك المؤسس' : 'Founding Partner', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
              { name: 'Dr. Ahmad Khalid', role: language === 'ar' ? 'كبير المستشارين' : 'Senior Counsel', image: 'https://images.unsplash.com/photo-1556157302-3230edbb4d44?q=80&w=2070&auto=format&fit=crop' },
              { name: 'Layla Mansour', role: language === 'ar' ? 'رئيسة قسم التقاضي' : 'Head of Litigation', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' }
            ].map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                 <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 relative border-4 border-slate-100 shadow-xl group-hover:border-accent transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                       <div className="flex gap-4">
                          <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                             <Users size={16} />
                          </div>
                          <div className="w-10 h-10 bg-white text-primary-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                             <Heart size={16} />
                          </div>
                       </div>
                    </div>
                 </div>
                 <h4 className="text-2xl font-bold text-primary-900 font-serif italic mb-2 tracking-tight">{member.name}</h4>
                 <p className="text-accent font-black uppercase tracking-[0.2em] text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
