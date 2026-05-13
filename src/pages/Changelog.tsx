import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const LOGS = [
  {
    version: "v2.0.0",
    date: "May 2025",
    type: "major",
    title: "AI-native crawling engine rebuild",
    changes: [
      "Completely rebuilt the core engine for 3x faster extraction speeds.",
      "Introduced SmartCrawler with improved DOM understanding.",
      "Added native support for Claude 3.5 Sonnet and GPT-4o-mini.",
      "New fully managed API dashboard for teams.",
      "REST API v2 with improved rate limiting and error handling.",
    ],
  },
  {
    version: "v1.9.0",
    date: "April 2025",
    type: "feature",
    title: "CrawlerGraph released",
    changes: [
      "Added CrawlerGraph for multi-page extraction workflows.",
      "Improved proxy rotation reliability for high-volume requests.",
      "Added markdown export options in Markdownify.",
      "Fixed several memory leaks in long-running jobs.",
    ],
  },
  {
    version: "v1.8.0",
    date: "March 2025",
    type: "feature",
    title: "WatchGraph — monitor pages for changes",
    changes: [
      "Introduced WatchGraph for automated page polling.",
      "Added webhook integrations to receive data when changes occur.",
      "Expanded documentation with complex Pydantic schema examples.",
    ],
  },
  {
    version: "v1.7.0",
    date: "February 2025",
    type: "feature",
    title: "JavaScript SDK released",
    changes: [
      "Official JavaScript/TypeScript SDK published to npm.",
      "Added async execution mode for Python.",
      "Improved anti-bot evasion techniques.",
      "Community forum launched.",
    ],
  },
];

const TYPE_STYLES: Record<string, string> = {
  major: "bg-primary/15 text-primary border-primary/25",
  feature: "bg-[hsl(152,60%,50%)]/10 text-[hsl(152,60%,50%)] border-[hsl(152,60%,50%)]/20",
  fix: "bg-amber-400/10 text-amber-400 border-amber-400/20",
};

export default function Changelog() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-20">
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Changelog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-5">
              What's new
            </h1>
            <p className="text-base sm:text-lg text-foreground/55 max-w-xl">
              Updates, improvements, and new features in LeadCrawl.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl relative">
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/[0.07] hidden md:block" />

            <div className="space-y-10">
              {LOGS.map((log, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                  variants={fadeUp}
                  className="flex flex-col md:flex-row gap-4 md:gap-10"
                >
                  {/* Date column */}
                  <div className="md:w-20 shrink-0 md:pt-5">
                    <span className="font-mono text-xs text-muted-foreground">{log.date}</span>
                  </div>

                  {/* Timeline dot + card */}
                  <div className="relative flex-1">
                    <div className="absolute -left-[42px] top-5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background hidden md:block" />

                    <div className="bg-card/50 border border-white/[0.07] rounded-2xl p-6 md:p-8 hover:border-white/[0.12] transition-colors">
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${TYPE_STYLES[log.type]}`}>
                          {log.version}
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">{log.title}</h3>
                      </div>

                      <ul className="space-y-2.5">
                        {log.changes.map((change, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-foreground/60 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-2" />
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
