import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Code, Zap, ExternalLink } from "lucide-react";

const DOCS = [
  {
    category: "Getting Started",
    items: [
      { title: "Quick Start Guide", desc: "Get up and running in 5 minutes" },
      { title: "Authentication", desc: "API keys and secure access" },
      { title: "Rate Limits", desc: "Understanding API limits" },
    ],
  },
  {
    category: "API Reference",
    items: [
      { title: "Markdownify", desc: "Convert URLs to markdown" },
      { title: "SmartScraper", desc: "AI-powered data extraction" },
      { title: "SearchGraph", desc: "Web search with extraction" },
      { title: "CrawlerGraph", desc: "Website crawling" },
      { title: "WatchGraph", desc: "Monitor page changes" },
    ],
  },
  {
    category: "SDKs",
    items: [
      { title: "Python SDK", desc: "Official Python library" },
      { title: "JavaScript SDK", desc: "Node.js and browser support" },
    ],
  },
];

export default function Docs() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Documentation
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Everything you need to integrate LeadCrawl into your application.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {DOCS.map((section, i) => (
                <div key={i} className="bg-card border border-white/[0.07] rounded-2xl p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-6">{section.category}</h2>
                  <div className="space-y-4">
                    {section.items.map((item, j) => (
                      <a
                        key={j}
                        href="#"
                        className="block p-4 rounded-lg border border-white/[0.05] hover:border-primary/30 hover:bg-primary/[0.05] transition-all group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-foreground group-hover:text-primary">{item.title}</span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}