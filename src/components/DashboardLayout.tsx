import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  FileText,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { AnimatedBackground } from "./AnimatedBackground";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Overview", end: true },
  { to: "/dashboard/records", icon: FileText, label: "Trade records" },
  { to: "/dashboard/reports", icon: BarChart3, label: "Reports" },
  { to: "/dashboard/activity", icon: Activity, label: "Activity log" },
  { to: "/dashboard/users", icon: Users, label: "Users", roles: ["admin", "staff"] as const },
];

export function DashboardLayout() {
  const { user, hasRole } = useAuth();

  const visibleNav = navItems.filter(
    (item) => !item.roles || item.roles.some((r) => hasRole(r))
  );

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-cyan-400/80 font-medium"
          >
            Welcome back ✦
          </motion.p>
          <h1 className="font-display text-3xl font-bold mt-1">
            Hey, {user?.name.split(" ")[0]}
          </h1>
          <p className="text-zinc-500 text-sm mt-1 capitalize">
            {user?.role} portal · Manage operations in one place
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="lg:w-56 shrink-0">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0">
              {visibleNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30"
                        : "text-zinc-500 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
