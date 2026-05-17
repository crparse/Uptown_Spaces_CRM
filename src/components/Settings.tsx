import React from "react";
import { Settings as SettingsIcon, Building2, Bell, Shield, Palette, Globe, Save } from "lucide-react";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4 border-b border-[#1a1a1a]/5 dark:border-white/5 pb-6">
        <div className="p-3 bg-[#d4af37]/10 rounded-2xl">
          <SettingsIcon className="w-6 h-6 text-[#d4af37]" />
        </div>
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] dark:text-[#f5f2ed]">System Settings</h2>
          <p className="text-sm text-[#1a1a1a]/50 dark:text-[#f5f2ed]/50 font-medium">Configure your CRM environment and agency preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] dark:bg-[#f5f2ed] text-white dark:text-[#1a1a1a] rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
            <Building2 className="w-4 h-4" />
            Agency Profile
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#1a1a1a]/5 dark:hover:bg-white/5 text-[#1a1a1a] dark:text-[#f5f2ed] rounded-xl text-xs font-bold uppercase tracking-widest transition-colors">
            <Bell className="w-4 h-4" />
            Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#1a1a1a]/5 dark:hover:bg-white/5 text-[#1a1a1a] dark:text-[#f5f2ed] rounded-xl text-xs font-bold uppercase tracking-widest transition-colors">
            <Shield className="w-4 h-4" />
            Security & Team
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#1a1a1a]/5 dark:hover:bg-white/5 text-[#1a1a1a] dark:text-[#f5f2ed] rounded-xl text-xs font-bold uppercase tracking-widest transition-colors">
            <Palette className="w-4 h-4" />
            Appearance
          </button>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="bg-white dark:bg-[#161616] rounded-3xl border border-[#1a1a1a]/5 dark:border-white/5 p-8 shadow-sm space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 dark:text-[#f5f2ed]/40">General Configuration</h3>
              
              <div className="grid gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30 tracking-widest">Agency Name</label>
                  <input 
                    type="text" 
                    defaultValue="Uptown Real Estate Group"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a]/5 dark:bg-white/5 border-none text-sm focus:ring-1 focus:ring-[#d4af37] outline-none text-[#1a1a1a] dark:text-[#f5f2ed]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30 tracking-widest">Default Currency</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a]/5 dark:bg-[#262626] border-none text-sm focus:ring-1 focus:ring-[#d4af37] outline-none text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">
                      <option className="dark:bg-[#161616]">INR (₹)</option>
                      <option className="dark:bg-[#161616]">USD ($)</option>
                      <option className="dark:bg-[#161616]">EUR (€)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30 tracking-widest">Region</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30" />
                      <select className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1a1a1a]/5 dark:bg-[#262626] border-none text-sm focus:ring-1 focus:ring-[#d4af37] outline-none text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">
                        <option className="dark:bg-[#161616]">India</option>
                        <option className="dark:bg-[#161616]">North America</option>
                        <option className="dark:bg-[#161616]">Europe</option>
                        <option className="dark:bg-[#161616]">Asia Pacific</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#1a1a1a]/5 dark:border-white/5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1a1a1a] dark:text-[#f5f2ed]">Automated Follow-ups</h4>
                  <p className="text-xs text-[#1a1a1a]/50 dark:text-[#f5f2ed]/50 italic">Send auto-SMS when new lead is registered</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#1a1a1a]/10 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4af37]"></div>
                </label>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button className="flex items-center gap-2 px-8 py-3 bg-[#1a1a1a] dark:bg-[#f5f2ed] text-white dark:text-[#1a1a1a] rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-[#d4af37]/5 dark:bg-[#d4af37]/10 p-8 rounded-3xl border border-[#d4af37]/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2">Premium Support</h4>
            <p className="text-sm text-[#1a1a1a]/70 dark:text-[#f5f2ed]/70 leading-relaxed italic">
              Need custom CRM integrations for your agency? Contact the Uptown Systems engineering team for bespoke development and enterprise-grade security auditing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
