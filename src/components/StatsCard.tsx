import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface StatsCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendPositive?: boolean;
  icon: LucideIcon;
  color?: "blue" | "emerald" | "amber" | "purple";
}

const colorMap = {
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
  emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  amber: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  purple: "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
};

export default function StatsCard({ label, value, trend, trendPositive, icon: Icon, color = "blue" }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-[#1e1e1e] p-6 rounded-3xl border border-[#1a1a1a]/5 dark:border-white/5 shadow-sm transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-3 rounded-2xl", colorMap[color])}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span className={cn(
            "text-xs font-semibold px-2 py-1 rounded-full",
            trendPositive ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
          )}>
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-[#1a1a1a]/60 dark:text-[#f5f2ed]/60 text-sm font-medium mb-1 uppercase tracking-wider">{label}</p>
        <h3 className="text-3xl font-serif font-bold text-[#1a1a1a] dark:text-[#f5f2ed]">{value}</h3>
      </div>
    </motion.div>
  );
}
