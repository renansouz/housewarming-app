"use client";

import Header from "@/components/Header";
import Countdown from "@/components/Countdown";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Gift } from "lucide-react";
import Link from "next/link";
import SupporterWall from "@/components/SupporterWall";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          ✨ Save the date
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          {t.subtitle}
        </h2>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Estamos muito felizes em compartilhar esse momento com você. 
          Criamos este espaço para facilitar a escolha dos presentes e 
          nos ajudar a transformar nossa nova casa em um lar.
        </p>

        <Countdown />

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <Link 
            href="/gifts"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            <Gift size={20} />
            {t.giftList}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 italic">&quot;Onde há amor, há um lar.&quot;</h3>
            <p className="text-slate-600 leading-relaxed">
              O evento acontecerá no dia 06 de junho. Mal podemos esperar para 
              receber cada um de vocês com um sorriso no rosto e um abraço apertado.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-left p-4">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">📍</div>
              <div>
                <h4 className="font-bold text-slate-800">Localização</h4>
                <p className="text-slate-600">Rua Manoel Jorge Correa, 40, Churrasqueira - São Paulo, SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">⏰</div>
              <div>
                <h4 className="font-bold text-slate-800">Horário</h4>
                <p className="text-slate-600">A partir das 17:00h</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <SupporterWall />
      </section>
    </main>
  );
}