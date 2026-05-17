import { motion } from "framer-motion";
import { DataTable } from "../../components/DataTable";
import { allUsers, type User } from "../../data/mockData";

const roleBadge: Record<string, string> = {
  admin: "text-pink-300 bg-pink-400/10",
  staff: "text-violet-300 bg-violet-400/10",
  client: "text-cyan-300 bg-cyan-400/10",
};

export function UsersPage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    {
      key: "role",
      label: "Role",
      render: (row: User) => (
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${roleBadge[row.role]}`}>
          {row.role}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (row: User) => (
        <span className={row.status === "active" ? "text-lime-400" : "text-zinc-500"}>
          {row.status}
        </span>
      ),
    },
    { key: "lastActive", label: "Last active" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-2xl p-6"
    >
      <h2 className="font-display text-xl font-bold mb-1">User management</h2>
      <p className="text-sm text-zinc-500 mb-6">Role-based access — admin & staff only</p>
      <DataTable<User>
        data={allUsers}
        columns={columns}
        searchKeys={["name", "email"]}
        exportFilename="users"
      />
    </motion.div>
  );
}
