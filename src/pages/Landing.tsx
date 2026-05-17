import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  Lock,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global reach",
    desc: "Import & export operations across continents with one trusted partner.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Lock,
    title: "Secure access",
    desc: "Role-based login so admins, staff, and clients see only what they need.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Live insights",
    desc: "Sortable tables, filters, and exportable reports — no tech degree required.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    desc: "Modern stack ready for more users, data, and features as you grow.",
    color: "from-lime-400 to-emerald-500",
  },
];

const benefits = [
  { label: "Professional image", desc: "Build trust with international partners" },
  { label: "Ease of use", desc: "Intuitive dashboard — zero tech stress" },
  { label: "Security", desc: "Peace of mind for sensitive business data" },
  { label: "Future-proof", desc: "Grows with your business" },
  { label: "Transparency", desc: "Clear reports for better control" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Landing() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-cyan-300 mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by partners in 40+ countries</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              Trade global.{" "}
              <span className="gradient-text">Stay in control.</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              A sleek operations hub for import/export firms — professional presence,
              secure portal, and dashboards that actually make sense.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 px-8 py-4 text-base font-bold text-black"
                >
                  Get in touch
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Link>
              <Link to="/login">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-zinc-300 hover:bg-white/5 transition-colors"
                >
                  Client portal
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 mx-auto max-w-5xl"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="gradient-border rounded-3xl p-[1px]"
            >
              <div className="glass-strong rounded-3xl p-6 sm:p-8 overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Active shipments", value: "128" },
                    { label: "Countries", value: "42" },
                    { label: "Clients", value: "340+" },
                    { label: "On-time rate", value: "98.2%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="rounded-2xl bg-white/5 p-4 text-center"
                    >
                      <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold">
              Everything you need. <span className="text-zinc-500">Nothing you don&apos;t.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 group"
              >
                <div className={`inline-flex rounded-xl p-3 bg-gradient-to-br ${f.color} mb-4`}>
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-lime-400 mb-4">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Why NexusTrade</span>
              </div>
              <h2 className="font-display text-4xl font-bold mb-6">
                Built for partners who move <span className="gradient-text">fast</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <motion.li
                    key={b.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    <Shield className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">{b.label}</span>
                      <span className="text-zinc-500"> → {b.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="gradient-border rounded-3xl p-[1px]"
            >
              <div className="glass-strong rounded-3xl p-8">
                <p className="text-6xl font-display font-bold gradient-text mb-2">24/7</p>
                <p className="text-xl font-semibold mb-4">Responsive on every device</p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Desktop in the office, tablet on the tarmac, phone while traveling —
                  your team and clients always have access.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center glass-strong rounded-3xl p-12"
        >
          <h2 className="font-display text-3xl font-bold mb-4">Ready to level up?</h2>
          <p className="text-zinc-500 mb-8">Explore the demo portal or reach out to our team.</p>
          <Link to="/services">
            <motion.span
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold"
            >
              View our services <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
