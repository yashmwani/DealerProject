import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">Contact</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Let&apos;s talk <span className="gradient-text">trade</span>
            </h1>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              Reach our team for partnerships, quotes, or portal access. We typically respond within 24 hours.
            </p>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-violet-400" />
                hello@nexustrade.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-violet-400" />
                +1 (555) 012-3456
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-violet-400" />
                88 Marina Bay, Singapore
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Name</label>
              <input
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-500/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-500/50"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-500/50 resize-none"
                placeholder="Tell us about your shipment or partnership..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 py-3.5 font-semibold text-black"
            >
              <Send className="h-4 w-4" />
              Send message
            </motion.button>

            <AnimatePresence>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-sm text-lime-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent! (demo — no backend)
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
