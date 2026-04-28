'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../src/context/AuthContext';
import { Lock, LayoutDashboard, Loader2 } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const success = await login(password);
    if (success) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid password. Try "admin123"');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white mb-6 shadow-xl shadow-blue-900/40">
            <LayoutDashboard size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Sami Anis Admin</h1>
          <p className="text-slate-500 mt-2">Enter credentials to manage content</p>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Admin Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border-slate-800 border rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500 transition-all font-sans"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <p className="text-red-400 text-xs mt-3 font-medium">{error}</p>}
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Access Dashboard'}
            </button>
          </form>
        </div>
        
        <p className="text-center text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em] mt-12">
          Secure System • Authorized Personnel Only
        </p>
      </div>
    </div>
  );
}
