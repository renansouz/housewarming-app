export type Language = 'pt' | 'en';

export interface TranslationContent {
  title: string;
  subtitle: string;
  description: string; 
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
  yourNamePlaceholder: string; 
  howMuchLabel: string; 
  fullAmountLabel: string; 
  customAmountLabel: string; 
  paymentMethodLabel: string; 
  pixKeyLabel: string; 
  continueBtn: string; 
  helpingWith: string; 
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
  movingIn: string;
}

export const translations: Record<Language, TranslationContent> = {
  pt: {
    title: "Nosso Chá de Casa Nova",
    subtitle: "Ajude-nos a montar nosso novo lar com carinho",
    description: "Estamos muito felizes em compartilhar esse momento com você. Criamos este espaço para facilitar a escolha dos presentes e nos ajudar a transformar nossa nova casa em um lar.",
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
    yourNamePlaceholder: "Ex: Renan Silva",
    howMuchLabel: "Quanto deseja contribuir?",
    fullAmountLabel: "Valor Total",
    customAmountLabel: "Outro Valor",
    paymentMethodLabel: "Forma de Pagamento",
    pixKeyLabel: "Chave PIX (E-mail)",
    continueBtn: "CONTINUAR",
    helpingWith: "Você está ajudando com:",
    paymentMethod: "Como deseja contribuir?",
    pixMethod: "PIX",
    intlMethod: "Internacional",
    intlInstructions: "Para transferências internacionais, use Wise ou PayPal para: renanss2005@gmail.com",
    copyPix: "Copiar Chave",
    pixCopied: "Copiado!",
    confirmPayment: "Já realizei o envio",
    goBack: "Voltar",
    thanksTitle: "Muito obrigado!",
    thanksMessage: "Sua contribuição aquece nosso coração.",
    backToHome: "Voltar ao início",
    errorValue: "Valor inválido",
    movingIn: "Tempo para a mudança",
  },
  en: {
    title: "Our Housewarming Party",
    subtitle: "Help us build our new home with love",
    description: "We are so happy to share this moment with you. We created this space to make it easier to choose gifts and help us turn our new house into a home.",
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
    yourNamePlaceholder: "Ex: John Doe",
    howMuchLabel: "How much do you want to contribute?",
    fullAmountLabel: "Full Amount",
    customAmountLabel: "Custom Amount",
    paymentMethodLabel: "Payment Method",
    pixKeyLabel: "PIX Key (Email)",
    continueBtn: "CONTINUE",
    helpingWith: "You are helping with:",
    paymentMethod: "How would you like to contribute?",
    pixMethod: "PIX",
    intlMethod: "Intl.",
    intlInstructions: "For international transfers, use Wise or PayPal to: renanss2005@gmail.com",
    copyPix: "Copy Key",
    pixCopied: "Copied!",
    confirmPayment: "I've sent the payment",
    goBack: "Back",
    thanksTitle: "Thank you so much!",
    thanksMessage: "Your contribution warms our hearts.",
    backToHome: "Back to Home",
    errorValue: "Invalid value",
    movingIn: "Time until moving",
  }
};