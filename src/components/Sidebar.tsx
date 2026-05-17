import React from "react";
import { LayoutDashboard, Users, PlusCircle, Settings, LogOut, Building2, Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "leads", label: "Leads", icon: Users },
    { id: "add", label: "Add Lead", icon: PlusCircle },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#f5f2ed] dark:bg-[#1e1e1e] border-r border-[#1a1a1a]/10 dark:border-white/10 flex flex-col h-screen sticky top-0 transition-colors duration-300">
      <div className="p-6 flex items-center gap-3 border-bottom border-[#1a1a1a]/10 dark:border-white/10">
        <div className="w-10 h-10 bg-[#1a1a1a] dark:bg-[#f5f2ed] rounded-xl flex items-center justify-center transition-colors">
          <Building2 className="text-white dark:text-[#1a1a1a] w-6 h-6" />
        </div>
        <div>
          <h1 className="font-serif text-xl font-bold tracking-tight text-[#1a1a1a] dark:text-[#f5f2ed]">UPTOWN</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 text-[#1a1a1a] dark:text-[#f5f2ed]">Real Estate CRM</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
              activeTab === item.id
                ? "bg-[#1a1a1a] text-white shadow-lg shadow-[#1a1a1a]/20 dark:bg-[#f5f2ed] dark:text-[#1a1a1a] dark:shadow-white/5"
                : "text-[#1a1a1a]/60 dark:text-[#f5f2ed]/60 hover:bg-[#1a1a1a]/5 dark:hover:bg-white/5 hover:text-[#1a1a1a] dark:hover:text-[#f5f2ed]"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-4 py-6 space-y-4">
        <div className="p-4 border-t border-[#1a1a1a]/10 dark:border-white/10">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
