import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, ArrowUpDown, Download, Search } from "lucide-react";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
  searchKeys?: (keyof T)[];
  exportFilename?: string;
}

type SortDir = "asc" | "desc";

export function DataTable<T extends object>({
  data,
  columns,
  searchKeys = [],
  exportFilename = "export",
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    let rows = [...data];

    if (search && searchKeys.length) {
      const q = search.toLowerCase();
      rows = rows.filter((row) =>
        searchKeys.some((k) => String(row[k] ?? "").toLowerCase().includes(q))
      );
    }

    if (filter !== "all" && data[0] && "status" in data[0]) {
      rows = rows.filter((row) => String((row as Record<string, unknown>).status) === filter);
    }

    if (sortKey) {
      rows.sort((a, b) => {
        const av = (a as Record<string, unknown>)[sortKey];
        const bv = (b as Record<string, unknown>)[sortKey];
        if (typeof av === "number" && typeof bv === "number") {
          return sortDir === "asc" ? av - bv : bv - av;
        }
        const cmp = String(av).localeCompare(String(bv));
        return sortDir === "asc" ? cmp : -cmp;
      });
    }

    return rows;
  }, [data, search, searchKeys, sortKey, sortDir, filter]);

  const toggleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const exportCsv = () => {
    const headers = columns.map((c) => c.label).join(",");
    const body = filtered
      .map((row) =>
        columns.map((c) => {
          const val = c.render ? "" : String(row[c.key as keyof T] ?? "");
          return `"${val.replace(/"/g, '""')}"`;
        }).join(",")
      )
      .join("\n");
    const blob = new Blob([`${headers}\n${body}`], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportFilename}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const statusOptions =
    data[0] && "status" in data[0]
      ? [...new Set(data.map((r) => String((r as Record<string, unknown>).status)))]
      : [];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            placeholder="Search records..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statusOptions.length > 0 && (
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-violet-500/50"
            >
              <option value="all">All statuses</option>
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          )}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={exportCsv}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 px-4 py-2 text-sm font-medium text-cyan-300"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </motion.button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 glass">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-zinc-500">
              {columns.map((col) => (
                <th key={String(col.key)} className="px-4 py-3 font-medium">
                  {col.sortable !== false ? (
                    <button
                      type="button"
                      onClick={() => toggleSort(String(col.key))}
                      className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
                    >
                      {col.label}
                      {sortKey === col.key ? (
                        sortDir === "asc" ? (
                          <ArrowUp className="h-3.5 w-3.5" />
                        ) : (
                          <ArrowDown className="h-3.5 w-3.5" />
                        )
                      ) : (
                        <ArrowUpDown className="h-3.5 w-3.5 opacity-40" />
                      )}
                    </button>
                  ) : (
                    col.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <motion.tr
                key={String((row as Record<string, unknown>).id ?? i)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-4 py-3">
                    {col.render ? col.render(row) : String(row[col.key as keyof T] ?? "")}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-zinc-500">No records match your filters.</p>
        )}
      </div>
      <p className="text-xs text-zinc-600">{filtered.length} of {data.length} records</p>
    </div>
  );
}
