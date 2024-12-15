import React from 'react';
import { Globe2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types/language';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-gray-700 hover:text-emerald-700 transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
    >
      <Globe2 className="h-5 w-5" />
      <span className="text-sm font-medium">{language === 'en' ? 'EN' : '中'}</span>
    </button>
  );
}