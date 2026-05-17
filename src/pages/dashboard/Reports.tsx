import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { monthlyStats } from "../../data/mockData";

export function ReportsPage() {
  const maxRevenue = Math.max(...monthlyStats.map((m) => m.revenue));

  const downloadReport = () => {
    const lines = monthlyStats
      .map((m) => `${m.month},${m.imports},${m.exports},${m.revenue}`)
      .join("\n");
    const blob = new Blob([`Month,Imports,Exports,Revenue(M)\n${lines}`], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "performance-report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold">Performance reports</h2>
          <p className="text-sm text-zinc-500">Business insights for decision-making</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={downloadReport}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 px-4 py-2 text-sm font-medium text-cyan-300"
        >
          <Download className="h-4 w-4" />
          Download report
        </motion.button>
      </div>

      <div className="glass rounded-2xl p-6">
        <h3 className="text-sm font-medium text-zinc-400 mb-6">Monthly revenue (M USD)</h3>
        <div className="flex items-end justify-between gap-3 h-48">
          {monthlyStats.map((m, i) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(m.revenue / maxRevenue) * 100}%` }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-12 rounded-t-lg bg-gradient-to-t from-violet-600 to-cyan-400 min-h-[4px]"
              />
              <span className="text-xs text-zinc-500">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {monthlyStats.slice(-1).map((m) => (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-5 sm:col-span-3"
          >
            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Latest month ({m.month})</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-display text-2xl font-bold text-cyan-300">{m.imports}</p>
                <p className="text-xs text-zinc-500 mt-1">Imports</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-pink-300">{m.exports}</p>
                <p className="text-xs text-zinc-500 mt-1">Exports</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold gradient-text">${m.revenue}M</p>
                <p className="text-xs text-zinc-500 mt-1">Revenue</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
