"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import Header from "@/components/Header";
import { gifts } from "@/data/gifts";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, Copy, CheckCircle2, Globe, Banknote, Edit3 } from "lucide-react";

function ContributeContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const giftId = Number(searchParams.get("id"));
  const gift = gifts.find((g) => g.id === giftId);

  const [name, setName] = useState("");
  const [amountType, setAmountType] = useState<"full" | "custom">("full");
  const [customValue, setCustomValue] = useState("");
  const [method, setMethod] = useState<"pix" | "intl">("pix");
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!gift) return <div className="p-20 text-center font-bold">Presente não encontrado...</div>;

  const finalAmount = amountType === "full" ? gift.price : Number(customValue);

  const handleCopy = () => {
    navigator.clipboard.writeText("renanss2005@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const canContinue = name.length > 2 && (amountType === "full" || (Number(customValue) > 0));

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <button onClick={() => router.back()} className="text-slate-500 font-bold flex items-center gap-2 text-sm mb-6 hover:text-slate-900 transition-colors">
        <ArrowLeft size={16} /> {t.goBack}
      </button>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-slate-100">
        {!showPayment ? (
          <div className="space-y-8">
            <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-100">
              <span className="text-5xl">{gift.image}</span>
              <div>
                <h2 className="text-xl font-black text-slate-900">{gift.name}</h2>
                <p className="text-slate-500 font-bold">Total: R$ {gift.price}</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black mb-2 uppercase text-slate-400 tracking-widest">
                {t.yourName}
              </label>
              <input 
                className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 font-bold focus:border-slate-900 outline-none transition-all text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.yourNamePlaceholder}
              />
            </div>

            <div>
              <label className="block text-xs font-black mb-3 uppercase text-slate-400 tracking-widest">
                {t.howMuchLabel}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setAmountType("full")}
                  className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${
                    amountType === 'full' ? 'border-slate-900 bg-slate-900 text-white shadow-lg' : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <span className="font-black">R$ {gift.price}</span>
                  <span className="text-[10px] uppercase font-bold opacity-60 italic">{t.fullAmountLabel}</span>
                </button>
                <button 
                  onClick={() => setAmountType("custom")}
                  className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${
                    amountType === 'custom' ? 'border-slate-900 bg-slate-900 text-white shadow-lg' : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <Edit3 size={18} />
                  <span className="text-[10px] uppercase font-bold">{t.customAmountLabel}</span>
                </button>
              </div>

              {amountType === "custom" && (
                <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-slate-400">R$</span>
                    <input 
                      type="number"
                      className="w-full p-4 pl-12 rounded-2xl border-2 border-slate-900 bg-white text-slate-900 font-black text-xl outline-none"
                      value={customValue}
                      onChange={(e) => setCustomValue(e.target.value)}
                      placeholder="0,00"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-black mb-3 uppercase text-slate-400 tracking-widest">Forma de Pagamento</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setMethod("pix")}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-center gap-2 transition-all ${
                    method === 'pix' ? 'border-slate-900 bg-slate-100 text-slate-900 font-black' : 'border-slate-50 text-slate-400'
                  }`}
                >
                  <Banknote size={20} /> PIX
                </button>
                <button 
                  onClick={() => setMethod("intl")}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-center gap-2 transition-all ${
                    method === 'intl' ? 'border-slate-900 bg-slate-100 text-slate-900 font-black' : 'border-slate-50 text-slate-400'
                  }`}
                >
                  <Globe size={20} /> Intl.
                </button>
              </div>
            </div>

            <button 
              disabled={!canContinue}
              onClick={() => setShowPayment(true)}
              className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-xl disabled:opacity-10 hover:bg-black transition-all shadow-xl"
            >
                {t.continueBtn}
            </button>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-3xl">
              <p className="text-slate-400 text-[10px] font-black mb-1 uppercase tracking-[0.2em]">{name}</p>
              <h3 className="text-xl font-black mb-1">{gift.name}</h3>
              <p className="text-2xl font-black text-blue-400">R$ {finalAmount.toLocaleString('pt-BR')}</p>
            </div>

            {method === "pix" ? (
              <div className="space-y-6">
                <div className="bg-white border-2 border-slate-900 p-2 rounded-3xl inline-block shadow-lg">
                  <div className="w-48 h-48 bg-slate-50 flex items-center justify-center rounded-2xl overflow-hidden">
                    <div className="text-center p-4">
                      <div className="bg-slate-200 w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center">📸</div>
                      <p className="text-[10px] font-black text-slate-400 uppercase">QR Code<br/>Espaço para Imagem</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t.pixKeyLabel}</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-slate-900 font-mono font-black text-sm">renanss2005@gmail.com</p>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-blue-700 shadow-md transition-all"
                  >
                    {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                    {copied ? t.pixCopied : t.copyPix}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-3xl border-2 border-green-100">
                   <p className="text-green-900 font-bold text-sm leading-relaxed">{t.intlInstructions}</p>
                </div>
                <a href="https://wise.com" target="_blank" className="block bg-[#9FE870] text-[#163300] py-4 rounded-2xl font-black text-lg shadow-sm">Wise.com</a>
                <a href="https://paypal.com" target="_blank" className="block bg-[#003087] text-white py-4 rounded-2xl font-black text-lg shadow-sm">PayPal</a>
              </div>
            )}

            <button 
              onClick={() => router.push(`/thanks?name=${name}&amount=${finalAmount}`)}
              className="w-full text-slate-400 font-black text-xs pt-4 hover:text-slate-900 uppercase tracking-widest"
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
      <Suspense fallback={<div className="p-20 text-center font-black">Carregando...</div>}>
        <ContributeContent />
      </Suspense>
    </main>
  );
}