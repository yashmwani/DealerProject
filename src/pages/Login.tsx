import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Sparkles } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { AnimatedBackground } from "../components/AnimatedBackground";

const demoAccounts = [
  { email: "admin@nexustrade.com", password: "admin123", role: "Admin" },
  { email: "staff@nexustrade.com", password: "staff123", role: "Staff" },
  { email: "client@acme.com", password: "client123", role: "Client" },
];

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? "/dashboard";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.ok) {
      navigate(from, { replace: true });
    } else {
      setError(result.error ?? "Login failed");
    }
  };

  const fillDemo = (acc: (typeof demoAccounts)[0]) => {
    setEmail(acc.email);
    setPassword(acc.password);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center gap-2 text-cyan-400 mb-4"
          >
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">Secure portal</span>
          </motion.div>
          <h1 className="font-display text-3xl font-bold">Sign in</h1>
          <p className="text-zinc-500 text-sm mt-2">Role-based access · Frontend demo</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-5">
          <div>
            <label className="block text-sm text-zinc-400 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm outline-none focus:border-cyan-500/50"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-12 text-sm outline-none focus:border-cyan-500/50"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-pink-400"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 py-3.5 font-semibold text-black disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </motion.button>
        </form>

        <div className="mt-6 glass rounded-2xl p-4">
          <p className="text-xs text-zinc-500 mb-3 text-center">Quick demo logins</p>
          <div className="flex flex-col gap-2">
            {demoAccounts.map((acc) => (
              <motion.button
                key={acc.email}
                type="button"
                whileHover={{ scale: 1.01 }}
                onClick={() => fillDemo(acc)}
                className="rounded-lg border border-white/5 px-3 py-2 text-left text-xs hover:bg-white/5 transition-colors"
              >
                <span className="text-violet-300 font-medium">{acc.role}</span>
                <span className="text-zinc-500"> · {acc.email}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-zinc-500 mt-6">
          <Link to="/" className="text-cyan-400 hover:underline">
            ← Back to home
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
