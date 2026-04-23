"use client";

import Header from "@/components/Header";
import Countdown from "@/components/Countdown";
import { useLanguage } from "@/context/LanguageContext";
import { Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <section className="flex-grow flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 leading-tight">
          {t.subtitle}
        </h2>

        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Estamos muito felizes em compartilhar esse momento com você. 
          Criamos este espaço para facilitar a escolha dos presentes e 
          nos ajudar a transformar nossa nova casa em um lar.
        </p>
        
        <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
          {t.movingIn}
        </p>
        
        <div className="transform scale-90 md:scale-100">
          <Countdown />
        </div>

        <div className="mt-8">
          <Link 
            href="/gifts"
            className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-black text-xl md:text-2xl hover:bg-black transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            <Gift size={24} />
            {t.giftList}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <div className="h-8" />
    </main>
  );
}