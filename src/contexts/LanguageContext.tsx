import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Quiénes Somos',
    'nav.work': 'Áreas de Trabajo',
    'nav.collaborate': 'Cómo Colaborar',
    'nav.donate': 'Doná',
    'nav.news': 'Novedades',
    'nav.contact': 'Contacto',
    
    // Home
    'home.welcome': 'Bienvenidos a Colibrí',
    'home.subtitle': 'Asociación Salteña Síndrome de Down',
    'home.mission': 'Trabajamos por la inclusión, la educación y la alegría de las personas con trisomía 21.',
    'home.cta1': 'Conocé más',
    'home.cta2': 'Sumate',
    'home.cta3': 'Doná',
    
    // About
    'about.title': 'Quiénes Somos',
    'about.founding': 'Nuestra Historia',
    'about.mission.title': 'Misión',
    'about.vision.title': 'Visión',
    'about.values.title': 'Valores',
    
    // Work Areas
    'work.title': 'Áreas de Trabajo',
    'work.families': 'Apoyo a las Familias',
    'work.identification': 'Comité de Identificación',
    'work.education': 'Educación Inclusiva',
    'work.employment': 'Empleo con Apoyo',
    'work.training': 'Capacitación y Biblioteca',
    
    // Collaborate
    'collab.title': 'Cómo Colaborar',
    'collab.companies': 'Para Empresas',
    'collab.community': 'Para la Comunidad',
    'collab.member': 'Hazte socio/a',
    'collab.volunteer': 'Sé voluntario/a',
    'collab.support': 'Apoya nuestras ventas',
    
    // Donate
    'donate.title': 'Doná',
    'donate.subtitle': 'Tu apoyo es vital para que podamos seguir adelante.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.cta': 'Construyamos juntos una sociedad inclusiva para todos y todas. ¡Te necesitamos!',
    'contact.address': 'Dirección',
    'contact.phone': 'Teléfonos',
    'contact.email': 'Email',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.work': 'Our Work',
    'nav.collaborate': 'Get Involved',
    'nav.donate': 'Donate',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Home
    'home.welcome': 'Welcome to Colibrí',
    'home.subtitle': 'Down Syndrome Association of Salta',
    'home.mission': 'We work for inclusion, education and joy for people with Down syndrome.',
    'home.cta1': 'Learn More',
    'home.cta2': 'Join Us',
    'home.cta3': 'Donate',
    
    // About
    'about.title': 'About Us',
    'about.founding': 'Our Story',
    'about.mission.title': 'Mission',
    'about.vision.title': 'Vision',
    'about.values.title': 'Values',
    
    // Work Areas
    'work.title': 'Our Work',
    'work.families': 'Family Support',
    'work.identification': 'Identity Committee',
    'work.education': 'Inclusive Education',
    'work.employment': 'Supported Employment',
    'work.training': 'Training and Library',
    
    // Collaborate
    'collab.title': 'Get Involved',
    'collab.companies': 'For Companies',
    'collab.community': 'For the Community',
    'collab.member': 'Become a member',
    'collab.volunteer': 'Become a volunteer',
    'collab.support': 'Support our sales',
    
    // Donate
    'donate.title': 'Donate',
    'donate.subtitle': 'Your support is vital so we can continue forward.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.cta': 'Let\'s build an inclusive society for everyone together. We need you!',
    'contact.address': 'Address',
    'contact.phone': 'Phones',
    'contact.email': 'Email',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
