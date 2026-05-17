import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
}

export function StatCard({ label, value, change, icon: Icon, gradient, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="gradient-border rounded-2xl p-[1px]"
    >
      <div className="glass-strong rounded-2xl p-5 h-full">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</p>
            <p className="mt-2 font-display text-3xl font-bold">{value}</p>
            {change && (
              <p className="mt-1 text-sm text-lime-400">{change}</p>
            )}
          </div>
          <div className={`rounded-xl p-3 bg-gradient-to-br ${gradient}`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
