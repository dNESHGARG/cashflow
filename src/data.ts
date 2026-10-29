export type Transaction = { id: string; date: string; merchant: string; category: string; amount: number };
export const transactions: Transaction[] = [
  { id: '1', date: '2026-10-25', merchant: 'Grocery Market', category: 'Groceries', amount: 82.45 },
  { id: '2', date: '2026-10-24', merchant: 'Metro Pass', category: 'Transport', amount: 28.00 },
  { id: '3', date: '2026-10-22', merchant: 'Coffee House', category: 'Dining', amount: 6.75 },
  { id: '4', date: '2026-10-20', merchant: 'Electric Utility', category: 'Bills', amount: 94.30 },
  { id: '5', date: '2026-10-18', merchant: 'Bookstore', category: 'Shopping', amount: 24.99 },
  { id: '6', date: '2026-10-15', merchant: 'Farmers Market', category: 'Groceries', amount: 36.20 },
  { id: '7', date: '2026-09-29', merchant: 'Internet Provider', category: 'Bills', amount: 69.00 },
  { id: '8', date: '2026-09-22', merchant: 'Restaurant', category: 'Dining', amount: 48.50 },
  { id: '9', date: '2026-09-12', merchant: 'Train Ticket', category: 'Transport', amount: 17.25 },
  { id: '10', date: '2026-08-19', merchant: 'Grocery Market', category: 'Groceries', amount: 56.40 },
];
