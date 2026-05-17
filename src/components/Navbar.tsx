import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe2, LogOut, LayoutDashboard } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const publicLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/5 glass-strong"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.05 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500"
          >
            <Globe2 className="h-5 w-5 text-white" />
          </motion.div>
          <span className="font-display text-xl font-bold tracking-tight">
            Nexus<span className="gradient-text">Trade</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {publicLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-cyan-300"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <span className="text-xs text-zinc-500 capitalize">{user?.role}</span>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 hover:border-pink-500/50 hover:text-pink-300 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Log out
              </motion.button>
            </>
          ) : (
            <Link to="/login">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 px-6 py-2.5 text-sm font-semibold text-black"
              >
                Sign in
              </motion.span>
            </Link>
          )}
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-zinc-400 hover:bg-white/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {publicLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-zinc-300 hover:bg-white/5"
                >
                  {link.label}
                </NavLink>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-cyan-300"
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-lg px-4 py-3 text-left text-pink-300"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 px-4 py-3 text-center font-semibold text-black"
                >
                  Sign in
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
