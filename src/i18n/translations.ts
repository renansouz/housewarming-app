export type Language = 'pt' | 'en';

export interface TranslationContent {
  title: string;
  subtitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  contribute: string;
  viewDetails: string;
  giftList: string;
  ranking: string;
  language: string;
  totalGoal: string;
  missing: string;
  collected: string;
  yourName: string;
  paymentMethod: string;
  pixMethod: string;
  intlMethod: string;
  intlInstructions: string;
  copyPix: string;
  pixCopied: string;
  confirmPayment: string;
  goBack: string;
  thanksTitle: string;
  thanksMessage: string;
  backToHome: string;
  errorValue: string;
}

export const translations: Record<Language, TranslationContent> = {
  pt: {
    title: "Nosso Chá de Casa Nova",
    subtitle: "Ajude-nos a montar nosso novo lar com carinho.",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    contribute: "Contribuir",
    viewDetails: "Ver Detalhes",
    giftList: "Lista de Presentes",
    ranking: "Mural de Apoiadores",
    language: "Idioma",
    totalGoal: "Meta",
    missing: "Falta",
    collected: "Arrecadado",
    yourName: "Seu Nome",
    paymentMethod: "Como deseja contribuir?",
    pixMethod: "PIX (Brasil)",
    intlMethod: "Internacional (USD/CAD)",
    intlInstructions: "Para transferências internacionais, use Wise ou PayPal para: renanss2005@gmail.com",
    copyPix: "Copiar Chave PIX",
    pixCopied: "Copiado!",
    confirmPayment: "Já realizei o envio",
    goBack: "Voltar",
    thanksTitle: "Muito obrigado!",
    thanksMessage: "Sua contribuição aquece nosso coração e nos ajuda a realizar esse sonho.",
    backToHome: "Voltar ao início",
    errorValue: "O valor não pode ser maior que o restante.",
  },
  en: {
    title: "Our Housewarming Party",
    subtitle: "Help us build our new home with love.",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    contribute: "Contribute",
    viewDetails: "View Details",
    giftList: "Gift List",
    ranking: "Supporter Wall",
    language: "Language",
    totalGoal: "Goal",
    missing: "Missing",
    collected: "Collected",
    yourName: "Your Name",
    paymentMethod: "How would you like to contribute?",
    pixMethod: "PIX (Brazil Only)",
    intlMethod: "International (USD/CAD)",
    intlInstructions: "For international transfers, use Wise or PayPal to: renanss2005@gmail.com",
    copyPix: "Copy PIX Key",
    pixCopied: "Copied!",
    confirmPayment: "I've sent the payment",
    goBack: "Back",
    thanksTitle: "Thank you so much!",
    thanksMessage: "Your contribution warms our hearts and helps us achieve this dream.",
    backToHome: "Back to Home",
    errorValue: "The value cannot exceed the remaining amount.",
  }
};