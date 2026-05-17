/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import LeadTable from "./components/LeadTable";
import LeadForm from "./components/LeadForm";
import LeadDetail from "./components/LeadDetail";
import Settings from "./components/Settings";
import LoginPage from "./components/LoginPage";
import { Lead, LeadStatus, LeadSource, PropertyType, Note } from "./types";

// Mock Data Initializer
const MOCK_LEADS: Lead[] = [
  {
    id: "1",
    name: "Chetan Parse",
    phone: "+91 9876543210",
    email: "chetan@example.com",
    budget: 75000000,
    location: "Worli, Mumbai",
    propertyType: PropertyType.BHK_3,
    source: LeadSource.REFERRAL,
    status: LeadStatus.SITE_VISIT,
    createdAt: Date.now() - 86400000,
    updatedAt: Date.now() - 3600000,
    notes: [
      {
        id: "n1",
        content: "High intent client. Interested in properties with sea view. Scheduled site visit for next Tuesday.",
        author: "Agent",
        createdAt: Date.now() - 3600000
      }
    ]
  },
  {
    id: "2",
    name: "Aparna Sharma",
    phone: "+91 9988776655",
    email: "aparna.s@luxuryestates.in",
    budget: 120000000,
    location: "Banjara Hills, Hyderabad",
    propertyType: PropertyType.PENTHOUSE,
    source: LeadSource.GOOGLE,
    status: LeadStatus.NEW,
    createdAt: Date.now() - 432000000,
    updatedAt: Date.now() - 432000000,
    notes: []
  },
  {
    id: "3",
    name: "Vikram Malhotra",
    phone: "+91 9000100020",
    email: "v.malhotra@corporate.com",
    budget: 250000000,
    location: "Golf Links, Delhi",
    propertyType: PropertyType.VILLA,
    source: LeadSource.FACEBOOK,
    status: LeadStatus.CLOSED,
    createdAt: Date.now() - 1296000000,
    updatedAt: Date.now() - 259200000,
    notes: [
      {
        id: "n2",
        content: "Deal closed. Documents finalized and registration initiated.",
        author: "Agent",
        createdAt: Date.now() - 259200000
      }
    ]
  }
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [leads, setLeads] = React.useState<Lead[]>(() => {
    const savedLeads = localStorage.getItem("uptown_leads");
    return savedLeads ? JSON.parse(savedLeads) : MOCK_LEADS;
  });
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [selectedLead, setSelectedLead] = React.useState<Lead | null>(null);

  React.useEffect(() => {
    // Check if user was previously logged in
    const auth = localStorage.getItem("uptown_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    document.documentElement.classList.add("dark");
  }, []);

  React.useEffect(() => {
    localStorage.setItem("uptown_leads", JSON.stringify(leads));
  }, [leads]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("uptown_auth", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("uptown_auth");
  };

  const handleAddLead = (data: any) => {
    const newLead: Lead = {
      ...data,
      status: LeadStatus.NEW,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      notes: []
    };
    setLeads([newLead, ...leads]);
    setShowAddForm(false);
    setActiveTab("leads");
  };

  const handleUpdateLeadStatus = (id: string, status: LeadStatus) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status, updatedAt: Date.now() } : l));
    if (selectedLead?.id === id) {
      setSelectedLead(prev => prev ? { ...prev, status, updatedAt: Date.now() } : null);
    }
  };

  const handleAddNote = (leadId: string, content: string) => {
    const newNote: Note = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      author: "Agent",
      createdAt: Date.now()
    };
    setLeads(leads.map(l => l.id === leadId ? { ...l, notes: [newNote, ...l.notes], updatedAt: Date.now() } : l));
    if (selectedLead?.id === leadId) {
      setSelectedLead(prev => prev ? { ...prev, notes: [newNote, ...prev.notes], updatedAt: Date.now() } : null);
    }
  };

  const handleTabChange = (tab: string) => {
    if (tab === "add") {
      setShowAddForm(true);
    } else {
      setActiveTab(tab);
    }
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-[#fafaf9] dark:bg-[#0c0c0c] text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors duration-500 overflow-hidden">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        onLogout={handleLogout}
      />
      
      <main className="flex-1 overflow-hidden h-screen bg-[#fafaf9] dark:bg-[#0c0c0c] flex flex-col">
        {activeTab === "dashboard" && (
          <div className="flex-1 overflow-y-auto p-8 lg:p-12">
            <Dashboard leads={leads} />
          </div>
        )}
        {activeTab === "leads" && (
          <div className="flex-1 overflow-hidden flex flex-col p-8 lg:p-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-serif font-bold text-[#1a1a1a] dark:text-[#f5f2ed] tracking-tight transition-colors">Active Pipeline</h2>
                <p className="text-sm text-[#1a1a1a]/60 dark:text-[#f5f2ed]/60 font-medium tracking-wide">Manage and track your high-intent potential clients</p>
              </div>
              <button 
                onClick={() => setShowAddForm(true)}
                className="px-6 py-3 bg-[#1a1a1a] dark:bg-[#f5f2ed] text-white dark:text-[#1a1a1a] rounded-2xl text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                Register New Lead
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <LeadTable leads={leads} onSelectLead={setSelectedLead} />
            </div>
          </div>
        )}
        {activeTab === "settings" && (
          <div className="flex-1 overflow-y-auto p-8 lg:p-12">
            <Settings />
          </div>
        )}
      </main>

      {showAddForm && (
        <LeadForm onSubmit={handleAddLead} onClose={() => setShowAddForm(false)} />
      )}

      {selectedLead && (
        <LeadDetail 
          lead={selectedLead} 
          onUpdateStatus={handleUpdateLeadStatus} 
          onAddNote={handleAddNote}
          onClose={() => setSelectedLead(null)} 
        />
      )}
    </div>
  );
}
