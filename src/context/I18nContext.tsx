import {createContext, type ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import {DEFAULT_LANG, translations} from '../constants/translations';
import type { LangKey } from '../constants/translations';

export type I18nContextType = {
  lang: LangKey;
  setLang: (lang: LangKey) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'iog26.lang';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<LangKey>(DEFAULT_LANG);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as LangKey | null);
    if (saved && ['en','es','it'].includes(saved)) {
      setLangState(saved as LangKey);
    }
  }, []);

  // Keep <html lang> in sync for SEO & a11y
  useEffect(() => {
    try {
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', 'ltr');
    } catch {
        console.error('Error setting lang attribute');
    }
  }, [lang]);

  const setLang = (l: LangKey) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch (error){ console.error('Error setting language:', error);}
  };

  const t = useMemo(() => {
    return (key: string) => {
      const dict = translations[lang] || translations[DEFAULT_LANG];
      return (dict[key] ?? translations[DEFAULT_LANG][key] ?? key);
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
