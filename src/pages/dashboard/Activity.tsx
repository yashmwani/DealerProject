import { motion } from "framer-motion";
import { DataTable } from "../../components/DataTable";
import { activityLogs } from "../../data/mockData";

export function ActivityPage() {
  const columns = [
    { key: "user", label: "User" },
    { key: "action", label: "Action" },
    { key: "timestamp", label: "Time" },
    { key: "ip", label: "IP" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-2xl p-6"
    >
      <h2 className="font-display text-xl font-bold mb-1">Activity log</h2>
      <p className="text-sm text-zinc-500 mb-6">Track user actions across the platform</p>
      <DataTable
        data={activityLogs}
        columns={columns}
        searchKeys={["user", "action"]}
        exportFilename="activity-log"
      />
    </motion.div>
  );
}
