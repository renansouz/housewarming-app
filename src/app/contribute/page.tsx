"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import Header from "@/components/Header";
import { gifts } from "@/data/gifts";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, Copy, CheckCircle2, Globe, Banknote } from "lucide-react";
import Link from "next/link";

function ContributeContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const giftId = Number(searchParams.get("id"));
  
  const gift = gifts.find((g) => g.id === giftId);

  const [name, setName] = useState("");
  const [method, setMethod] = useState<"pix" | "intl">("pix");
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!gift) return <div className="p-10 text-center">Gift not found...</div>;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button onClick={() => router.back()} className="text-slate-500 flex items-center gap-2 text-sm mb-8">
        <ArrowLeft size={16} /> {t.goBack}
      </button>

      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm">
        {!showPayment ? (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{gift.image}</span>
              <div>
                <h2 className="text-2xl font-bold">{gift.name}</h2>
                <p className="text-slate-500">Valor total: R$ {gift.price}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 uppercase text-slate-400">Seu Nome / Your Name</label>
              <input 
                className="w-full p-4 rounded-2xl border border-slate-200 focus:outline-slate-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Fulano"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-4 uppercase text-slate-400">{t.paymentMethod}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => setMethod("pix")}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all ${method === 'pix' ? 'border-slate-900 bg-slate-50' : 'border-slate-100'}`}
                >
                  <Banknote className="text-blue-600" />
                  <span className="font-bold">{t.pixMethod}</span>
                </button>
                <button 
                  onClick={() => setMethod("intl")}
                  className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all ${method === 'intl' ? 'border-slate-900 bg-slate-50' : 'border-slate-100'}`}
                >
                  <Globe className="text-green-600" />
                  <span className="font-bold">{t.intlMethod}</span>
                </button>
              </div>
            </div>

            <button 
              disabled={!name}
              onClick={() => setShowPayment(true)}
              className="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold disabled:opacity-20 hover:scale-[1.02] transition-transform shadow-xl"
            >
              Continuar / Continue
            </button>
          </div>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in zoom-in-95">
            <div className="bg-slate-50 p-6 rounded-3xl">
              <p className="text-slate-500 mb-2">{name}, você escolheu ajudar com:</p>
              <h3 className="text-3xl font-black">{gift.name}</h3>
            </div>

            {method === "pix" ? (
              <div className="space-y-6">
                <div className="bg-white border-2 border-slate-100 p-4 rounded-2xl inline-block">
                  <div className="w-48 h-48 bg-slate-100 flex items-center justify-center mx-auto rounded-xl border border-dashed border-slate-300">
                    <span className="text-xs text-slate-400 px-4 text-center">QR Code do seu Banco aqui</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-slate-600">Ou use o PIX Copia e Cola:</p>
                  <div className="flex flex-col gap-2">
                    <div className="bg-slate-50 p-3 rounded-lg text-xs font-mono break-all border border-slate-200">
                      renanss2005@gmail.com
                    </div>
                    <button 
                      onClick={() => handleCopy("renanss2005@gmail.com")}
                      className="flex items-center justify-center gap-2 bg-blue-50 text-blue-700 py-3 rounded-xl font-bold hover:bg-blue-100"
                    >
                      {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                      {copied ? t.pixCopied : t.copyPix}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* INTERNACIONAL */
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-2xl text-left border border-green-100">
                  <p className="text-green-800 font-medium leading-relaxed">
                    {t.intlInstructions}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <a 
                    href="https://wise.com" 
                    target="_blank" 
                    className="flex items-center justify-center gap-2 bg-[#9FE870] text-[#163300] py-4 rounded-xl font-bold hover:opacity-90"
                  >
                    Open Wise.com
                  </a>
                  <a 
                    href="https://paypal.com" 
                    target="_blank" 
                    className="flex items-center justify-center gap-2 bg-[#003087] text-white py-4 rounded-xl font-bold hover:opacity-90"
                  >
                    Open PayPal
                  </a>
                </div>
              </div>
            )}

            <button 
              onClick={() => router.push('/thanks')}
              className="w-full text-slate-400 font-medium pt-4 hover:text-slate-900 transition-colors"
            >
              {t.confirmPayment}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContributePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
        <ContributeContent />
      </Suspense>
    </main>
  );
}