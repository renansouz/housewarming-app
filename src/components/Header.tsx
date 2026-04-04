"use client"; 

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react"; 

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
          🏠 {t.title}
        </h1>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-slate-600"
        >
          <Languages size={18} />
          {language === 'pt' ? 'English' : 'Português'}
        </button>
      </div>
    </header>
  );
}