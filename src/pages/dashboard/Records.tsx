import { motion } from "framer-motion";
import { DataTable } from "../../components/DataTable";
import { tradeRecords, type TradeRecord } from "../../data/mockData";

const statusColors: Record<string, string> = {
  pending: "text-amber-400 bg-amber-400/10",
  "in-transit": "text-cyan-400 bg-cyan-400/10",
  cleared: "text-violet-400 bg-violet-400/10",
  delivered: "text-lime-400 bg-lime-400/10",
};

export function RecordsPage() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "client", label: "Client" },
    {
      key: "type",
      label: "Type",
      render: (row: TradeRecord) => (
        <span className={`capitalize ${row.type === "import" ? "text-cyan-300" : "text-pink-300"}`}>
          {row.type}
        </span>
      ),
    },
    { key: "origin", label: "Origin" },
    { key: "destination", label: "Destination" },
    {
      key: "value",
      label: "Value (USD)",
      render: (row: TradeRecord) => `$${row.value.toLocaleString()}`,
    },
    {
      key: "status",
      label: "Status",
      render: (row: TradeRecord) => (
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusColors[row.status]}`}>
          {row.status.replace("-", " ")}
        </span>
      ),
    },
    { key: "date", label: "Date" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-2xl p-6"
    >
      <h2 className="font-display text-xl font-bold mb-1">Trade records</h2>
      <p className="text-sm text-zinc-500 mb-6">Sort, filter, and export import/export data</p>
      <DataTable<TradeRecord>
        data={tradeRecords}
        columns={columns}
        searchKeys={["id", "client", "origin", "destination"]}
        exportFilename="trade-records"
      />
    </motion.div>
  );
}
