import { motion } from "framer-motion";
import { Anchor, FileCheck, Package, Plane, Ship, Truck } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ocean freight",
    desc: "Full-container and LCL shipments with end-to-end tracking and customs support.",
    tags: ["FCL", "LCL", "Customs"],
  },
  {
    icon: Plane,
    title: "Air cargo",
    desc: "Express and standard air freight for time-sensitive international deliveries.",
    tags: ["Express", "Charter", "Door-to-door"],
  },
  {
    icon: Truck,
    title: "Land logistics",
    desc: "Cross-border trucking and last-mile delivery across key trade corridors.",
    tags: ["FTL", "Cross-border", "Warehousing"],
  },
  {
    icon: FileCheck,
    title: "Compliance & docs",
    desc: "Import/export documentation, licenses, and regulatory filing handled for you.",
    tags: ["HS codes", "Licenses", "Audit-ready"],
  },
  {
    icon: Package,
    title: "Warehousing",
    desc: "Bonded and standard storage with inventory visibility in your dashboard.",
    tags: ["Bonded", "Pick & pack", "Real-time"],
  },
  {
    icon: Anchor,
    title: "Trade advisory",
    desc: "Route optimization, duty planning, and partner introductions worldwide.",
    tags: ["Consulting", "Partners", "Risk"],
  },
];

export function Services() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">Services</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            End-to-end <span className="gradient-text">trade solutions</span>
          </h1>
          <p className="mt-4 text-zinc-500 leading-relaxed">
            From port to partner — we handle logistics so you can focus on relationships and growth.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 mb-4">
                <s.icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h2 className="font-display text-xl font-bold mb-2">{s.title}</h2>
              <p className="text-sm text-zinc-500 flex-1 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
