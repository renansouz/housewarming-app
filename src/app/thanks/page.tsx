"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { PartyPopper, Home } from "lucide-react";
import Link from "next/link";

function ThanksContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  
  const name = searchParams.get("name") || "Amigo(a)";
  const amount = searchParams.get("amount");
  const giftName = searchParams.get("giftName");

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <PartyPopper size={40} />
      </div>
      
      <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase">
        {t.thanksTitle}
      </h1>
      
      <p className="text-xl text-slate-700 mb-8 font-medium">
        {name}, sua contribuição de <span className="font-black text-blue-600">R$ {amount}</span> para o item <span className="italic">{giftName}</span> foi registrada com sucesso!
      </p>

      <p className="text-slate-500 mb-12">
        {t.thanksMessage}
      </p>

      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-slate-900 text-white py-4 px-10 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl"
      >
        <Home size={20} />
        {t.backToHome}
      </Link>
    </div>
  );
}

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<div className="p-20 text-center font-black">Carregando...</div>}>
        <ThanksContent />
      </Suspense>
    </main>
  );
}