import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

const CATEGORIES = ["All", "Tutorials", "Updates", "Use Cases", "Company"];

const POSTS = [
  { tag: "Tutorial", title: "Crawling JavaScript-Heavy SPA Sites with LeadCrawl", date: "May 12, 2025", read: "5 min read", author: "JD" },
  { tag: "Update", title: "Introducing WatchGraph: Monitor Web Changes in Real-Time", date: "April 28, 2025", read: "3 min read", author: "MS" },
  { tag: "Use Case", title: "Building a Market Intelligence Dashboard with LLM Extraction", date: "April 15, 2025", read: "8 min read", author: "AL" },
  { tag: "Tutorial", title: "Using Pydantic Schemas to Enforce JSON Output Shapes", date: "March 30, 2025", read: "6 min read", author: "JD" },
  { tag: "Company", title: "LeadCrawl raises seed round to build the AI web crawler", date: "March 10, 2025", read: "4 min read", author: "MS" },
  { tag: "Use Case", title: "Automating Competitor Price Tracking with CrawlerGraph", date: "Feb 22, 2025", read: "7 min read", author: "AL" },
];

const TAG_COLORS: Record<string, string> = {
  Tutorial: "text-primary bg-primary/10",
  Update: "text-[hsl(152,60%,50%)] bg-[hsl(152,60%,50%)]/10",
  "Use Case": "text-amber-400 bg-amber-400/10",
  Company: "text-blue-400 bg-blue-400/10",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? POSTS
    : POSTS.filter((p) => p.tag === activeCategory || (activeCategory === "Use Cases" && p.tag === "Use Case"));

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-5">
              Stories & Updates
            </h1>
            <p className="text-base sm:text-lg text-foreground/55 max-w-xl">
              News, tutorials, and updates from the LeadCrawl team.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="mb-16"
          >
            <Link href="/blog/v2" className="block group">
              <div className="bg-card border border-white/[0.08] rounded-2xl p-8 md:p-12 relative overflow-hidden hover:border-primary/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-primary/20">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground mb-4 group-hover:text-primary/90 transition-colors max-w-3xl">
                    LeadCrawl v2: The AI Crawling Revolution
                  </h2>
                  <p className="text-base text-foreground/55 mb-8 max-w-3xl leading-relaxed">
                    Today we're thrilled to announce v2 of LeadCrawl. We've completely rebuilt the engine from the ground up to be faster, more reliable, and capable of understanding complex page structures better than ever before.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>May 15, 2025</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-10 hide-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                  activeCategory === cat
                    ? "bg-primary/15 text-primary border-primary/30"
                    : "bg-transparent text-muted-foreground border-white/[0.08] hover:border-white/[0.15] hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i % 3}
                variants={fadeUp}
              >
                <Link href="#" className="block group h-full">
                  <div className="bg-card/50 border border-white/[0.07] rounded-xl p-6 h-full flex flex-col hover:border-white/[0.14] hover:bg-card transition-all duration-200">
                    <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md mb-4 self-start ${TAG_COLORS[post.tag] ?? "text-muted-foreground bg-muted"}`}>
                      {post.tag}
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-foreground mb-4 group-hover:text-primary/90 transition-colors flex-1 leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.06]">
                      <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-[11px] font-bold text-primary">
                        {post.author}
                      </div>
                      <div className="text-xs text-muted-foreground text-right">
                        <p>{post.date}</p>
                        <p>{post.read}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
