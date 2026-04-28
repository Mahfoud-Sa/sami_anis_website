'use client';

import Image from 'next/image';
import { Scale } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  showSubtitle?: boolean;
  useImage?: boolean;
}

export default function Logo({ className, variant = 'gold', showSubtitle = true, useImage = false }: LogoProps) {
  const { language } = useLanguage();

  if (useImage) {
    return (
      <div className={cn("relative h-16 w-48", className)}>
        <Image 
          src="/logo.png" 
          alt="Sami Anis Law Firm" 
          fill 
          className="object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center select-none", className)}>
      {/* Top Part: SAMI with Scale */}
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-3xl md:text-4xl font-serif tracking-widest font-medium",
          variant === 'gold' ? "text-accent" : variant === 'light' ? "text-white" : "text-primary-900"
        )}>
          SA
        </span>
        <div className={cn(
          "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2",
          variant === 'gold' ? "border-accent text-accent" : variant === 'light' ? "border-white/20 text-white" : "border-primary-900/10 text-primary-900"
        )}>
          <Scale size={20} className="md:w-6 md:h-6" />
        </div>
        <span className={cn(
          "text-3xl md:text-4xl font-serif tracking-widest font-medium",
          variant === 'gold' ? "text-accent" : variant === 'light' ? "text-white" : "text-primary-900"
        )}>
          MI
        </span>
      </div>

      {showSubtitle && (
        <>
          {/* Arabic Name */}
          <div className={cn(
            "text-[10px] md:text-xs font-bold mt-2",
            variant === 'gold' ? "text-accent" : variant === 'light' ? "text-white/80" : "text-primary-900/80"
          )}>
            سامي أنيس الكثيري
          </div>

          {/* English Name */}
          <div className={cn(
            "text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mt-1",
            variant === 'gold' ? "text-accent" : variant === 'light' ? "text-white" : "text-primary-900"
          )}>
            Sami Anis Alkatheri
          </div>

          {/* Services */}
          <div className={cn(
            "text-[6px] md:text-[7px] font-medium uppercase tracking-[0.1em] mt-1 border-t pt-1 w-full text-center",
            variant === 'gold' ? "border-accent/20 text-accent/80" : variant === 'light' ? "border-white/10 text-white/60" : "border-primary-900/10 text-primary-900/60"
          )}>
            {language === 'ar' 
              ? 'للمحاماة - التحكيم - الخدمات قانونية' 
              : 'Law Firm - Arbitration - Legal Services'}
          </div>
        </>
      )}
    </div>
  );
}
