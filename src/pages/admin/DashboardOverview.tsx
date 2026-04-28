import { 
  Users, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  Calendar,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function DashboardOverview() {
  const stats = [
    { label: 'Total Articles', value: '24', icon: FileText, change: '+2 this month', trend: 'up' },
    { label: 'Unread Messages', value: '8', icon: MessageSquare, change: '12 total', trend: 'neutral' },
    { label: 'Team Members', value: '6', icon: Users, change: 'No change', trend: 'neutral' },
    { label: 'Website Visitors', value: '1.2k', icon: TrendingUp, change: '+12%', trend: 'up' },
  ];

  const recentMessages = [
    { id: '1', name: 'John Doe', email: 'john@example.com', date: '2 hours ago', subject: 'Inquiry about strategy' },
    { id: '2', name: 'Fatima Ahmed', email: 'fatima@business.ae', date: '5 hours ago', subject: 'Collaboration request' },
    { id: '3', name: 'Robert Smith', email: 'r.smith@global.com', date: 'Yesterday', subject: 'Consultation booking' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600">
                <stat.icon size={20} />
              </div>
              {stat.trend === 'up' ? (
                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                  <ArrowUpRight size={10} /> {stat.change}
                </span>
              ) : stat.trend === 'down' ? (
                <span className="flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full uppercase">
                  <ArrowDownRight size={10} /> {stat.change}
                </span>
              ) : (
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full uppercase">
                  {stat.change}
                </span>
              )}
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Messages */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm flex items-center gap-3">
              <MessageSquare size={18} className="text-blue-600" />
              Recent Messages
            </h3>
            <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 uppercase tracking-widest">
              View All <ChevronRight size={14} />
            </button>
          </div>
          <div className="divide-y divide-slate-50">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="p-8 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {msg.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{msg.name}</h4>
                    <p className="text-xs font-medium text-slate-500 flex items-center gap-3">
                      <span>{msg.subject}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className="text-slate-400">{msg.date}</span>
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors">
                    Mark Read
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Status */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4">Quick Post</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Share your latest business insights with your audience. Draft and publish a new article in seconds.
            </p>
            
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-950">
                <FileText size={20} />
                Create Article
              </button>
              <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all border border-white/10">
                <ImageIcon size={20} className="text-slate-400" />
                Add Hero Slide
              </button>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex items-center gap-3">
            <Calendar size={12} />
            System Up to Date
          </div>
        </div>
      </div>
    </div>
  );
}
import { Image as ImageIcon } from 'lucide-react';
