import { motion } from "framer-motion";
import { Activity, DollarSign, Package, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { StatCard } from "../../components/StatCard";
import { activityLogs, tradeRecords } from "../../data/mockData";
import { useAuth } from "../../context/AuthContext";

export function DashboardOverview() {
  const { user } = useAuth();
  const pending = tradeRecords.filter((r) => r.status === "pending").length;
  const totalValue = tradeRecords.reduce((s, r) => s + r.value, 0);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Active records"
          value={String(tradeRecords.length)}
          change="+12% this month"
          icon={Package}
          gradient="from-cyan-400 to-blue-600"
          delay={0}
        />
        <StatCard
          label="Pending clearance"
          value={String(pending)}
          icon={Activity}
          gradient="from-violet-400 to-purple-600"
          delay={0.1}
        />
        <StatCard
          label="Portfolio value"
          value={`$${(totalValue / 1000).toFixed(0)}k`}
          change="USD equivalent"
          icon={DollarSign}
          gradient="from-pink-400 to-rose-600"
          delay={0.2}
        />
        <StatCard
          label="Your role"
          value={user?.role ?? "—"}
          icon={Users}
          gradient="from-lime-400 to-emerald-600"
          delay={0.3}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="font-display text-lg font-bold mb-4">Recent activity</h2>
          <ul className="space-y-3">
            {activityLogs.slice(0, 4).map((log, i) => (
              <motion.li
                key={log.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex justify-between gap-4 text-sm border-b border-white/5 pb-3 last:border-0"
              >
                <div>
                  <p className="text-zinc-300">{log.action}</p>
                  <p className="text-xs text-zinc-600">{log.user}</p>
                </div>
                <span className="text-xs text-zinc-500 shrink-0">{log.timestamp.split(" ")[1]}</span>
              </motion.li>
            ))}
          </ul>
          <Link to="/dashboard/activity" className="inline-block mt-4 text-sm text-cyan-400 hover:underline">
            View all activity →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="font-display text-lg font-bold mb-4">Quick actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { to: "/dashboard/records", label: "Trade records", emoji: "📦" },
              { to: "/dashboard/reports", label: "Reports", emoji: "📊" },
              { to: "/dashboard/users", label: "Users", emoji: "👥" },
              { to: "/contact", label: "Support", emoji: "💬" },
            ].map((action, i) => (
              <Link key={action.to} to={action.to}>
                <motion.div
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 + i * 0.05 }}
                  className="rounded-xl bg-white/5 p-4 text-center border border-white/5"
                >
                  <span className="text-2xl">{action.emoji}</span>
                  <p className="text-sm font-medium mt-2">{action.label}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
