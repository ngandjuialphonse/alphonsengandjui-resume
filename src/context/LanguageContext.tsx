// src/context/LanguageContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'es';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
}

const translations: Translations = {
  en: {
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact'
  },
  fr: {
    about: 'À propos',
    experience: 'Expérience',
    education: 'Éducation',
    projects: 'Projets',
    contact: 'Contact'
  },
  es: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    education: 'Educación',
    projects: 'Proyectos',
    contact: 'Contacto'
  }
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  t: (key) => key,
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);