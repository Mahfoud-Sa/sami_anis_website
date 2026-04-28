import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
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
import { cn } from '../../lib/utils';

export default function AdminLayout() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

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
      <aside className="w-72 bg-slate-900 text-slate-400 flex flex-col shrink-0 border-r border-white/5">
        <div className="p-8 pb-10">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-white">
              SAMI <span className="text-blue-500">ADMIN</span>
            </span>
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
                  isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon size={20} className={cn(isActive ? "text-white" : "text-slate-500 group-hover:text-white")} />
                {item.name}
                {isActive && <ChevronRight size={16} className="ml-auto" />}
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
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">
            {menuItems.find(i => i.path === location.pathname)?.name || 'Admin Panel'}
          </h2>
          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900 uppercase">Super Admin</p>
                <p className="text-[10px] text-slate-500 font-medium tracking-wider">online</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold">
                SA
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
