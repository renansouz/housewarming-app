export interface Gift {
  id: number;
  name: string;
  price: number;
  collected: number;
  image: string;
}

export const gifts: Gift[] = [
  { id: 1, name: "Air Fryer", price: 600, collected: 100, image: "🍳" },
  { id: 2, name: "Micro-ondas", price: 900, collected: 900, image: "🍲" },
  { id: 3, name: "Aspirador de Pó", price: 500, collected: 0, image: "🧹" },
  { id: 4, name: "Carne para Churrasco", price: 300, collected: 0, image: "🥩" },
  { id: 5, name: "Jogo de Panelas", price: 700, collected: 0, image: "🥘" },
  { id: 6, name: "Kit Utensílios", price: 200, collected: 0, image: "🥄" },
  { id: 7, name: "Organizador de Cozinha", price: 250, collected: 0, image: "📦" },
];