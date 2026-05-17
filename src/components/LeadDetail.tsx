import React from "react";
import { Lead, LeadStatus, Note } from "../types";
import { X, Calendar, Phone, Mail, MapPin, DollarSign, Clock, MessageSquare, Save } from "lucide-react";
import { cn, formatCurrency } from "../lib/utils";
import { STATUS_OPTIONS, STATUS_COLORS } from "../constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { noteSchema, type NoteFormData } from "../lib/validations";

interface LeadDetailProps {
  lead: Lead;
  onUpdateStatus: (id: string, status: LeadStatus) => void;
  onAddNote: (id: string, content: string) => void;
  onClose: () => void;
}

export default function LeadDetail({ lead, onUpdateStatus, onAddNote, onClose }: LeadDetailProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema)
  });

  const onSubmitNote = (data: NoteFormData) => {
    onAddNote(lead.id, data.content);
    reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-[#1a1a1a]/40 dark:bg-black/60 backdrop-blur-sm transition-colors" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#fbfbfb] dark:bg-[#121212] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 transition-colors">
        <div className="p-8 border-b border-[#1a1a1a]/5 dark:border-white/5 flex items-center justify-between bg-white dark:bg-[#1a1a1a] transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#1a1a1a] dark:bg-[#f5f2ed] rounded-2xl flex items-center justify-center text-white dark:text-[#1a1a1a] text-2xl font-serif transition-colors">
              {lead.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">{lead.name}</h2>
              <div className="flex items-center gap-4 mt-1 opacity-50 text-sm font-medium uppercase tracking-widest text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {lead.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {lead.email}</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#1a1a1a]/5 dark:hover:bg-white/5 rounded-full transition-colors text-[#1a1a1a] dark:text-[#f5f2ed]">
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-12">
          {/* Status Section */}
          <section className="bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl border border-[#1a1a1a]/5 dark:border-white/5 shadow-sm transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 dark:text-[#f5f2ed]/40 transition-colors">Pipeline Status</h3>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-colors", STATUS_COLORS[lead.status])}>
                {lead.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATUS_OPTIONS.map((status) => (
                <button
                  key={status}
                  onClick={() => onUpdateStatus(lead.id, status as LeadStatus)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all",
                    lead.status === status 
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a] dark:bg-[#f5f2ed] dark:text-[#1a1a1a] dark:border-[#f5f2ed]" 
                      : "bg-white text-[#1a1a1a]/40 border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30 dark:bg-[#121212] dark:text-[#f5f2ed]/40 dark:border-white/10 dark:hover:border-white/30"
                  )}
                >
                  {status}
                </button>
              ))}
            </div>
          </section>

          {/* Details Grid */}
          <section className="grid grid-cols-2 gap-8 text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">
            <div className="space-y-1 border-l-2 border-[#d4af37] pl-4">
              <label className="text-[10px] uppercase font-bold text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30 italic tracking-widest transition-colors">Target Budget</label>
              <p className="text-xl font-serif font-bold text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">{formatCurrency(lead.budget)}</p>
            </div>
            <div className="space-y-1 border-l-2 border-[#1a1a1a]/10 dark:border-white/10 pl-4 transition-colors">
              <label className="text-[10px] uppercase font-bold text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30 italic tracking-widest transition-colors">Requirement</label>
              <p className="text-lg font-medium text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">{lead.propertyType}</p>
            </div>
            <div className="space-y-1 border-l-2 border-[#1a1a1a]/10 dark:border-white/10 pl-4 transition-colors">
              <label className="text-[10px] uppercase font-bold text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30 italic tracking-widest transition-colors">Preferred Location</label>
              <p className="text-lg font-medium text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">{lead.location}</p>
            </div>
            <div className="space-y-1 border-l-2 border-[#1a1a1a]/10 dark:border-white/10 pl-4 transition-colors">
              <label className="text-[10px] uppercase font-bold text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30 italic tracking-widest transition-colors">Lead Source</label>
              <p className="text-lg font-medium text-[#1a1a1a] dark:text-[#f5f2ed] underline decoration-[#d4af37] decoration-2 underline-offset-4 transition-colors">{lead.source}</p>
            </div>
          </section>

          {/* Notes Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#1a1a1a]/5 dark:border-white/5 pb-4 transition-colors">
              <MessageSquare className="w-5 h-5 text-[#1a1a1a]/40 dark:text-[#f5f2ed]/40 transition-colors" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">Client Communication Logs</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmitNote)} className="space-y-4">
              <textarea
                {...register("content")}
                placeholder="Log a client interaction or site visit note..."
                className="w-full h-32 px-6 py-4 rounded-3xl bg-white dark:bg-[#1a1a1a] border border-[#1a1a1a]/10 dark:border-white/10 focus:border-[#1a1a1a] dark:focus:border-[#f5f2ed] outline-none transition-all resize-none text-sm placeholder:italic shadow-sm text-[#1a1a1a] dark:text-[#f5f2ed]"
              />
              {errors.content && <p className="text-red-500 text-xs italic font-bold">{errors.content.message}</p>}
              <button 
                type="submit"
                className="flex items-center gap-2 px-8 py-3 bg-[#1a1a1a] dark:bg-[#f5f2ed] text-white dark:text-[#1a1a1a] rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-95 transition-all transition-colors"
              >
                <Save className="w-4 h-4" />
                Commit Note
              </button>
            </form>

            <div className="space-y-6 pt-4">
              {lead.notes.length === 0 ? (
                <div className="text-center py-12 bg-[#1a1a1a]/[0.02] dark:bg-white/[0.02] rounded-3xl border border-dashed border-[#1a1a1a]/10 dark:border-white/10 transition-colors">
                  <p className="text-xs text-[#1a1a1a]/30 dark:text-[#f5f2ed]/30 italic font-medium">No archived notes for this lead</p>
                </div>
              ) : (
                lead.notes.map((note) => (
                  <div key={note.id} className="bg-white dark:bg-[#1e1e1e] p-6 rounded-[2rem] border border-[#1a1a1a]/5 dark:border-white/5 shadow-sm space-y-4 transition-colors">
                    <p className="text-sm text-[#1a1a1a]/80 dark:text-[#f5f2ed]/80 leading-relaxed italic">"{note.content}"</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a]/5 dark:border-white/5 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                          <Clock className="w-3 h-3 text-[#d4af37]" />
                        </div>
                        <span className="text-[10px] font-bold opacity-40 uppercase tracking-wider text-[#1a1a1a] dark:text-[#f5f2ed] transition-colors">
                          {new Date(note.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-[#1a1a1a]/60 dark:text-[#f5f2ed]/60 uppercase tracking-widest bg-[#1a1a1a]/5 dark:bg-white/5 px-3 py-1 rounded-full transition-colors">
                        Agent Log
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
