'use client';

import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Image as ImageIcon, Eye } from 'lucide-react';
import { cn } from '../../../src/lib/utils';

export default function ManageNews() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [articles, setArticles] = useState([
    { id: '1', title: 'Navigating Regional Labor Laws', category: 'Labor Law', status: 'Published', date: '2026-04-20' },
    { id: '2', title: 'Intellectual Property in AI Era', category: 'IP Rights', status: 'Published', date: '2026-04-14' },
    { id: '3', title: 'Strategic Corporate Transparency', category: 'Corporate', status: 'Draft', date: '2026-04-05' },
  ]);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-accent shadow-sm transition-all"
          />
        </div>
        
        <button className="bg-accent text-white font-bold px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-amber-600 transition-all shadow-lg shadow-accent/20">
          <Plus size={20} />
          New Legal Insight
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse rtl:text-right">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Article Information</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Category</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Status</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Publish Date</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] text-right rtl:text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      <ImageIcon size={20} />
                    </div>
                    <span className="font-bold text-primary-900 font-serif italic line-clamp-1">{article.title}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{article.category}</span>
                </td>
                <td className="px-8 py-6">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                    article.status === 'Published' ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                  )}>
                    {article.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-medium text-slate-500">{article.date}</span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-end gap-2 rtl:justify-start">
                    <button className="p-2 text-slate-400 hover:text-accent hover:bg-white rounded-lg transition-all shadow-sm shadow-transparent hover:shadow-slate-200">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-accent hover:bg-white rounded-lg transition-all shadow-sm shadow-transparent hover:shadow-slate-200">
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(article.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition-all shadow-sm shadow-transparent hover:shadow-slate-200"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing {articles.length} insights</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-400 disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-2 border border-accent bg-accent text-white rounded-lg text-xs font-bold">1</button>
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
