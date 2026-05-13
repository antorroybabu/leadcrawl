import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

const INTEGRATIONS = [
  { name: "Python", logo: "python", category: "SDK" },
  { name: "JavaScript", logo: "javascript", category: "SDK" },
  { name: "LangChain", logo: "langchain", category: "AI Framework" },
  { name: "LlamaIndex", logo: "llama_index", category: "AI Framework" },
  { name: "CrewAI", logo: "crewai", category: "AI Framework" },
  { name: "Agno", logo: "agno", category: "AI Framework" },
  { name: "n8n", logo: "n8n", category: "Automation" },
  { name: "Zapier", logo: "zapier", category: "Automation" },
  { name: "MCP", logo: "mcp", category: "Protocol" },
  { name: "Smithery", logo: "smithery", category: "Marketplace" },
  { name: "CLI", logo: "cli", category: "Developer Tools" },
];

const CATEGORIES = ["All", "SDK", "AI Framework", "Automation", "Protocol", "Marketplace", "Developer Tools"];

export default function Integrations() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Integrations
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Connect LeadCrawl with your favorite tools and frameworks.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
              {INTEGRATIONS.map((integration, i) => (
                <div
                  key={i}
                  className="p-6 bg-card border border-white/[0.07] rounded-xl hover:border-primary/30 hover:bg-primary/[0.03] transition-all cursor-pointer group"
                >
                  <div className="h-12 w-12 bg-white/[0.05] rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <span className="font-bold text-lg text-foreground">{integration.name[0]}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{integration.name}</h3>
                  <span className="text-xs text-muted-foreground">{integration.category}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-white/[0.07] rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Need a custom integration?</h2>
              <p className="text-foreground/60 mb-6 max-w-lg mx-auto">
                Our REST API works with any HTTP client. Contact us if you need help with your integration.
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}