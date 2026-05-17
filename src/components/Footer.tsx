import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="h-6 w-6 text-cyan-400" />
              <span className="font-display text-lg font-bold">NexusTrade</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Your partner in global import & export. Built for trust, scale, and transparency.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-400 mb-4">Quick links</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link to="/services" className="hover:text-cyan-300 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-300 transition-colors">Contact</Link></li>
              <li><Link to="/login" className="hover:text-cyan-300 transition-colors">Client portal</Link></li>
            </ul>
          </div>
          <div className="space-y-3 text-sm text-zinc-500">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-violet-400" /> hello@nexustrade.com</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-violet-400" /> +1 (555) 012-3456</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-violet-400" /> Global HQ — Singapore</p>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center text-xs text-zinc-600"
        >
          © {new Date().getFullYear()} NexusTrade. Frontend demo — no live backend.
        </motion.p>
      </div>
    </footer>
  );
}
