import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const COMPARISON = [
  { feature: "AI-Powered Extraction", leadcrawl: true, others: "Limited" },
  { feature: "No CSS Selectors", leadcrawl: true, others: false },
  { feature: "JavaScript Rendering", leadcrawl: true, others: true },
  { feature: "Proxy Rotation Built-in", leadcrawl: true, others: "Extra cost" },
  { feature: "CAPTCHA Handling", leadcrawl: true, others: "Manual" },
  { feature: "REST API", leadcrawl: true, others: true },
  { feature: "Python SDK", leadcrawl: true, others: "Varies" },
  { feature: "JavaScript SDK", leadcrawl: true, others: "Varies" },
  { feature: "99.9% Uptime SLA", leadcrawl: true, others: false },
  { feature: "Free Tier Available", leadcrawl: true, others: "Varies" },
];

const TOOLS = [
  { name: "LeadCrawl", highlight: true, price: "From $0/mo" },
  { name: "ScrapingBee", highlight: false, price: "From $50/mo" },
  { name: "ScrapingAnt", highlight: false, price: "From $19/mo" },
  { name: "Oxylabs", highlight: false, price: "From $300/mo" },
];

export default function Compare() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Why LeadCrawl?
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                See how we compare to other web scraping solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {TOOLS.map((tool, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl ${
                    tool.highlight
                      ? "bg-primary/10 border-2 border-primary"
                      : "bg-card border border-white/[0.07]"
                  }`}
                >
                  <h3 className={`font-semibold mb-1 ${tool.highlight ? "text-primary" : "text-foreground"}`}>
                    {tool.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">{tool.price}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-white/[0.07] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="col-span-2 font-semibold text-foreground">Feature</div>
                <div className="text-center font-semibold text-primary">LeadCrawl</div>
                <div className="text-center font-semibold text-foreground/60">Others</div>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {COMPARISON.map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 p-4 items-center">
                    <div className="col-span-2 text-foreground">{row.feature}</div>
                    <div className="flex justify-center">
                      {row.leadcrawl ? (
                        <Check className="w-5 h-5 text-green-accent" />
                      ) : (
                        <X className="w-5 h-5 text-red-500/50" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {typeof row.others === "boolean" ? (
                        row.others ? (
                          <Check className="w-5 h-5 text-green-accent" />
                        ) : (
                          <X className="w-5 h-5 text-red-500/50" />
                        )
                      ) : (
                        <span className="text-xs text-muted-foreground">{row.others}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-lg transition-colors"
              >
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}