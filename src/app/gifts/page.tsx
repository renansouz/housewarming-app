"use client";

import Header from "@/components/Header";
import GiftCard from "@/components/GiftCard";
import { gifts } from "@/data/gifts";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GiftsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <Link 
              href="/" 
              className="text-slate-500 hover:text-slate-800 flex items-center gap-2 text-sm font-medium mb-4 transition-colors"
            >
              <ArrowLeft size={16} /> Voltar para o convite
            </Link>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t.giftList}
            </h2>
            <p className="text-slate-600 mt-2">
              Escolha um item para contribuir. Toda ajuda é muito bem-vinda!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
        </div>
      </div>

      <footer className="mt-20 py-10 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>Feito com ❤️ para nossa nova casa</p>
      </footer>
    </main>
  );
}