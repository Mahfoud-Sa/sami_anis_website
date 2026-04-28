export interface Image {
  id: string;
  url: string;
  alt: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export interface Service {
  id: string;
  title: Record<'en' | 'ar', string>;
  description: Record<'en' | 'ar', string>;
  icon: string;
}

export interface Article {
  id: string;
  title: Record<'en' | 'ar', string>;
  content: Record<'en' | 'ar', string>;
  summary: Record<'en' | 'ar', string>;
  publishedAt: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: Record<'en' | 'ar', string>;
  position: Record<'en' | 'ar', string>;
  photoUrl: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'unread' | 'read';
  createdAt: string;
}

export interface WebsiteSettings {
  address: string;
  phone: string;
  email: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
  mapUrl: string;
}
