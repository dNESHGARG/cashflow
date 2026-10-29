import type { Transaction } from './data';
export type Filters = { search: string; category: string; month: string };
export function filterTransactions(rows: Transaction[], filters: Filters): Transaction[] {
  const search = filters.search.trim().toLocaleLowerCase();
  return rows.filter(t => (!search || (t.merchant + ' ' + t.category).toLocaleLowerCase().includes(search)) &&
    (filters.category === 'All' || t.category === filters.category) &&
    (filters.month === 'All' || t.date.startsWith(filters.month)));
}
export function totalSpending(rows: Transaction[]): number {
  return Math.round(rows.reduce((sum, t) => sum + t.amount, 0) * 100) / 100;
}
export function categoryBreakdown(rows: Transaction[]): { category: string; amount: number }[] {
  const sums = new Map<string, number>();
  for (const row of rows) sums.set(row.category, (sums.get(row.category) ?? 0) + row.amount);
  return [...sums].map(([category, amount]) => ({ category, amount: Math.round(amount * 100) / 100 }))
    .sort((a, b) => b.amount - a.amount);
}
export const money = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
