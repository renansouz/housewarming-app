export interface Supporter {
  id: number;
  name: string;
  giftName: string;
  amount: number;
  date: string;
}

export const supporters: Supporter[] = [
  { id: 1, name: "Maria Silva", giftName: "Air Fryer", amount: 150, date: "20/10/2024" },
  { id: 2, name: "Uncle Bob", giftName: "Micro-ondas", amount: 900, date: "19/10/2024" },
  { id: 3, name: "John Doe", giftName: "Aspirador de Pó", amount: 50, date: "18/10/2024" },
];