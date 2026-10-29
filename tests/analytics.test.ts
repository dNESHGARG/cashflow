import { describe, expect, it } from 'vitest';
import { categoryBreakdown, filterTransactions, totalSpending } from '../src/analytics';
import type { Transaction } from '../src/data';
const rows: Transaction[] = [
  { id: '1', date: '2026-10-01', merchant: 'Cafe', category: 'Dining', amount: 10.10 },
  { id: '2', date: '2026-10-02', merchant: 'Market', category: 'Groceries', amount: 20.20 },
  { id: '3', date: '2026-09-01', merchant: 'Cafe', category: 'Dining', amount: 3.30 },
];
describe('analytics', () => {
  it('filters by month', () => expect(filterTransactions(rows, { search: '', category: 'All', month: '2026-10' })).toHaveLength(2));
  it('filters category and case-insensitive search', () => expect(filterTransactions(rows, { search: 'CAFE', category: 'Dining', month: 'All' })).toHaveLength(2));
  it('calculates total spending', () => expect(totalSpending(rows)).toBe(33.6));
  it('aggregates and sorts categories', () => expect(categoryBreakdown(rows)).toEqual([{ category: 'Groceries', amount: 20.2 }, { category: 'Dining', amount: 13.4 }]));
  it('handles empty results', () => expect(categoryBreakdown([])).toEqual([]));
});
