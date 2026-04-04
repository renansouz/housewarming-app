"use client";

import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { PartyPopper, Home as HomeIcon } from "lucide-react";
import Link from "next/link";

export default function ThanksPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <PartyPopper size={48} />
        </div>
        
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
          {t.thanksTitle}
        </h1>
        
        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
          {t.thanksMessage}
        </p>

        <div className="flex flex-col gap-4">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 px-8 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
          >
            <HomeIcon size={20} />
            {t.backToHome}
          </Link>
        </div>
      </div>
    </main>
  );
}