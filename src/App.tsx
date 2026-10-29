import { useMemo, useState } from 'react';
import { transactions } from './data';
import { categoryBreakdown, filterTransactions, money, totalSpending } from './analytics';
const months = [...new Set(transactions.map(t => t.date.slice(0, 7)))].sort().reverse();
const categories = [...new Set(transactions.map(t => t.category))].sort();
export function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [month, setMonth] = useState('All');
  const filtered = useMemo(() => filterTransactions(transactions, { search, category, month }), [search, category, month]);
  const breakdown = useMemo(() => categoryBreakdown(filtered), [filtered]);
  const total = totalSpending(filtered);
  const largest = breakdown[0]?.amount ?? 0;
  return <div className="shell">
    <aside className="sidebar"><div className="brand"><span className="brandmark">◈</span> cashflow</div><div className="navactive">▦ &nbsp; Overview</div><div className="sidebarfoot">Personal finance, simplified.<br/><small>Demo data · v0.1</small></div></aside>
    <main className="main"><header><div><p className="eyebrow">FINANCIAL OVERVIEW</p><h1>Know where your money goes.</h1><p className="sub">A clearer picture of everyday spending.</p></div><div className="avatar" aria-label="Demo profile">CF</div></header>
    <section className="metrics"><div className="metric"><span>Total spending</span><strong>{money(total)}</strong><small>For the selected filters</small></div><div className="metric"><span>Transactions</span><strong>{filtered.length}</strong><small>Matching your selection</small></div><div className="metric"><span>Top category</span><strong className="categoryname">{breakdown[0]?.category ?? '—'}</strong><small>{breakdown.length ? money(largest) : 'No spending yet'}</small></div></section>
    <section className="panel chartpanel"><div className="sectionhead"><div><h2>Spending breakdown</h2><p>Where your money is going</p></div></div>{breakdown.length ? <div className="bars">{breakdown.map(({ category: name, amount }) => <div className="barrow" key={name}><span>{name}</span><div className="track"><div className="fill" style={{ width: `${total ? amount / total * 100 : 0}%` }} /></div><strong>{money(amount)}</strong></div>)}</div> : <p className="empty">No transactions match these filters.</p>}</section>
    <section className="panel"><div className="sectionhead"><div><h2>Transactions</h2><p>Explore and filter your activity</p></div><span className="count">{filtered.length} records</span></div><div className="filters"><input aria-label="Search transactions" placeholder="Search merchants or categories..." value={search} onChange={e => setSearch(e.target.value)} /><select aria-label="Filter category" value={category} onChange={e => setCategory(e.target.value)}><option>All</option>{categories.map(c => <option key={c}>{c}</option>)}</select><select aria-label="Filter month" value={month} onChange={e => setMonth(e.target.value)}><option>All</option>{months.map(m => <option key={m}>{m}</option>)}</select></div><div className="tablewrap"><table><thead><tr><th>Merchant</th><th>Category</th><th>Date</th><th className="right">Amount</th></tr></thead><tbody>{filtered.map(t => <tr key={t.id}><td className="merchant">{t.merchant}</td><td><span className="tag">{t.category}</span></td><td>{t.date}</td><td className="right amount">{money(t.amount)}</td></tr>)}</tbody></table>{!filtered.length && <p className="empty">No matching transactions.</p>}</div></section><footer>Cashflow v0.1 · Sample data only · No bank connections</footer></main></div>;
}
