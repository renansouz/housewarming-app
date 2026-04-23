"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense, useEffect } from "react";
import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, Copy, CheckCircle2, Globe, Banknote, Edit3 } from "lucide-react";

interface Gift {
  id: number;
  name: string;
  price: number;
  collected: number;
  image: string;
}

function ContributeContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const giftId = Number(searchParams.get("id"));
  
  const [gift, setGift] = useState<Gift | null>(null);
  const [name, setName] = useState("");
  const [amountType, setAmountType] = useState<"full" | "custom">("full");
  const [customValue, setCustomValue] = useState("");
  const [method, setMethod] = useState<"pix" | "intl">("pix");
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function getGift() {
      const { data } = await supabase.from('gifts').select('*').eq('id', giftId).single();
      if (data) setGift(data);
    }
    if (giftId) getGift();
  }, [giftId]);

  if (!gift) return <div className="p-20 text-center font-black">Carregando presente...</div>;

  const finalAmount = amountType === "full" ? (gift.price - gift.collected) : Number(customValue);

  const handleCopy = () => {
    navigator.clipboard.writeText("renanss2005@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = async () => {
    if (!name || finalAmount <= 0) return;
    setIsSaving(true);

    try {
      await supabase.from('supporters').insert([
        { gift_id: gift.id, name: name, amount: finalAmount }
      ]);

      await supabase.rpc('increment_collected', {
        gift_id: gift.id,
        amount_to_add: finalAmount
      });

      router.push(`/thanks?name=${encodeURIComponent(name)}&amount=${finalAmount}&giftName=${encodeURIComponent(gift.name)}`);
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao salvar. Tente novamente.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <button onClick={() => router.back()} className="text-slate-500 font-bold flex items-center gap-2 text-sm mb-6">
        <ArrowLeft size={16} /> {t.goBack}
      </button>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-2xl">
        {!showPayment ? (
          <div className="space-y-8">
            <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-100">
              <span className="text-5xl">{gift.image}</span>
              <div>
                <h2 className="text-xl font-black text-slate-900">{gift.name}</h2>
                <p className="text-slate-500 font-bold">Falta: R$ {gift.price - gift.collected}</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black mb-2 uppercase text-slate-400 tracking-widest">{t.yourName}</label>
              <input 
                className="w-full p-4 rounded-2xl border-2 border-slate-100 text-slate-900 font-bold focus:border-slate-900 outline-none text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.yourNamePlaceholder}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setAmountType("full")} className={`p-4 rounded-2xl border-2 transition-all ${amountType === 'full' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-100 text-slate-500'}`}>
                <span className="font-black">R$ {gift.price - gift.collected}</span>
                <span className="text-[10px] block uppercase font-bold opacity-60">{t.fullAmountLabel}</span>
              </button>
              <button onClick={() => setAmountType("custom")} className={`p-4 rounded-2xl border-2 transition-all ${amountType === 'custom' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-100 text-slate-500'}`}>
                <Edit3 size={18} className="mx-auto mb-1" />
                <span className="text-[10px] block uppercase font-bold">{t.customAmountLabel}</span>
              </button>
            </div>

            {amountType === "custom" && (
              <input 
                type="number"
                className="w-full p-4 rounded-2xl border-2 border-slate-900 font-black text-xl outline-none"
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
                placeholder="0,00"
              />
            )}

            <button 
              disabled={!name || (amountType === 'custom' && !customValue)}
              onClick={() => setShowPayment(true)}
              className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black text-xl disabled:opacity-10"
            >
              {t.continueBtn}
            </button>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-3xl">
              <h3 className="text-xl font-black mb-1">{gift.name}</h3>
              <p className="text-2xl font-black text-blue-400">R$ {finalAmount}</p>
            </div>

            {method === "pix" ? (
              <div className="space-y-6 text-center">
                 <div className="bg-slate-100 w-48 h-48 mx-auto rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-300 font-bold text-slate-400 text-xs p-4">
                    QR Code do Banco aparecerá aqui
                 </div>
                 <button onClick={handleCopy} className="w-full bg-blue-600 text-white py-4 rounded-xl font-black flex items-center justify-center gap-2">
                   {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />} {copied ? t.pixCopied : t.copyPix}
                 </button>
              </div>
            ) : (
              <div className="space-y-4">
                 <p className="text-sm font-bold text-slate-700">{t.intlInstructions}</p>
                 <a href="https://wise.com" target="_blank" className="block bg-[#9FE870] text-[#163300] py-4 rounded-xl font-black text-lg">Wise.com</a>
              </div>
            )}

            <button 
              onClick={handleConfirm}
              disabled={isSaving}
              className="w-full text-slate-900 font-black text-sm pt-4 hover:text-blue-600 disabled:opacity-50"
            >
              {isSaving ? "PROCESSANDO..." : t.confirmPayment}
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