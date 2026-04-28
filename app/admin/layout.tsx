'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../../src/context/AuthContext';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  FileText, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut,
  ChevronRight,
  Bell
} from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '../../src/lib/utils';
import Logo from '../../src/components/ui/Logo';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [isAuthenticated, router, pathname]);

  if (!isAuthenticated && pathname !== '/admin/login') return null;

  // We don't want the sidebar/header on the login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const menuItems = [
    { name: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Hero Slides', path: '/admin/slider', icon: ImageIcon },
    { name: 'Services', path: '/admin/services', icon: Briefcase },
    { name: 'News & Articles', path: '/admin/news', icon: FileText },
    { name: 'Team Members', path: '/admin/team', icon: Users },
    { name: 'Messages', path: '/admin/messages', icon: MessageSquare },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-primary-900 text-slate-400 flex flex-col shrink-0 border-r border-white/5 shadow-2xl">
        <div className="p-8 pb-10">
          <Link href="/" className="flex flex-col items-start gap-2">
            <Logo variant="light" className="items-start" showSubtitle={false} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mt-2">Admin Dashboard</span>
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-[11px] font-black uppercase tracking-[0.1em]",
                  isActive 
                    ? "bg-accent text-white shadow-lg shadow-accent/20" 
                    : "hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon size={18} className={cn(isActive ? "text-white" : "text-slate-500 group-hover:text-accent")} />
                {item.name}
                {isActive && <ChevronRight size={14} className="ml-auto" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-white/5">
          <button 
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-4 rounded-xl text-sm font-bold text-rose-400 hover:bg-rose-400/10 transition-colors"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 shrink-0">
          <h2 className="text-lg font-serif italic font-bold text-primary-900 border-l-4 border-accent pl-4">
            {menuItems.find(i => i.path === pathname)?.name || 'Admin Management'}
          </h2>
          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-accent transition-all">
              <Bell size={18} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right">
                <p className="text-[10px] font-black text-primary-900 uppercase tracking-widest">Sami Anis</p>
                <p className="text-[8px] text-emerald-500 font-black uppercase tracking-[0.2em]">Principal Partner</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-accent font-black text-xs shadow-inner">
                SA
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
