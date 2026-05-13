import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Code, Zap, ExternalLink, Brain, Shield, Globe, Clock, Star, Check, Search, Monitor, FileText, Users, TrendingUp, Building, Bot, Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FEATURES = [
  { icon: Brain, title: "AI-Native Extraction", desc: "Extract structured data from any website using advanced AI models. No brittle selectors." },
  { icon: Shield, title: "Built-in Proxy Rotation", desc: "Automatic proxy rotation and browser automation — CAPTCHAs, rate limits, and blocks handled for you." },
  { icon: Code, title: "Simple REST API", desc: "A clean API with SDKs for Python and JavaScript. Integrate in minutes, not days." },
  { icon: Globe, title: "Any Language, Any Stack", desc: "Works with Python, JavaScript, cURL, and any HTTP client. Your stack, your choice." },
  { icon: Zap, title: "JavaScript Rendering", desc: "Full headless browser support for SPAs, infinite scroll, and dynamically loaded content." },
  { icon: Clock, title: "99.9% Uptime SLA", desc: "Enterprise-grade reliability with automatic retries, fallback proxies, and real-time status." },
];

const API_ENDPOINTS = [
  {
    id: "markdownify",
    name: "Markdownify",
    desc: "Convert any URL to clean markdown, HTML, screenshots, or branding analysis",
    method: "POST",
    endpoint: "/v1/markdownify",
    params: ["url", "format (markdown|html|screenshot)", "screenshot_width"],
    example: `import requests

url = "https://api.leadcrawl.com/v1/markdownify"
payload = {"url": "https://example.com", "format": "markdown"}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
    output: `{
  "data": {
    "markdown": "# Example Domain\n\nThis domain is for use...",
    "html": "<html>...</html>",
    "screenshot": "data:image/png;base64,iVBORw0KGgo..."
  }
}`,
  },
  {
    id: "smartscraper",
    name: "SmartScraper",
    desc: "Extract structured data from any webpage using natural language prompts",
    method: "POST",
    endpoint: "/v1/smartscraper",
    params: ["url", "prompt", "schema (optional)", "model"],
    example: `import requests

url = "https://api.leadcrawl.com/v1/smartscraper"
payload = {
    "url": "https://example.com/product",
    "prompt": "Extract the product title, price, and description"
}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
    output: `{
  "data": {
    "title": "Wireless Noise Cancelling Headphones",
    "price": 299.99,
    "description": "Industry-leading noise canceling..."
  }
}`,
  },
  {
    id: "searchgraph",
    name: "SearchGraph",
    desc: "Search the web and extract data from the top results in a single API call",
    method: "POST",
    endpoint: "/v1/searchgraph",
    params: ["query", "prompt", "max_results", "model"],
    example: `import requests

url = "https://api.leadcrawl.com/v1/searchgraph"
payload = {
    "query": "Top 5 open source LLMs in 2025",
    "prompt": "List the models, their creators, and parameter sizes"
}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
    output: `{
  "data": {
    "models": [
      {"name": "Llama 3", "creator": "Meta", "params": "8B, 70B"},
      {"name": "Mistral", "creator": "Mistral AI", "params": "7B"}
    ]
  }
}`,
  },
  {
    id: "crawlergraph",
    name: "CrawlerGraph",
    desc: "Crawl entire websites and extract data from every page that matches your criteria",
    method: "POST",
    endpoint: "/v1/crawlergraph",
    params: ["url", "prompt", "max_pages", "follow_patterns"],
    example: `import requests

url = "https://api.leadcrawl.com/v1/crawlergraph"
payload = {
    "url": "https://example.com/blog",
    "prompt": "Extract blog post titles and dates",
    "max_pages": 10
}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
    output: `{
  "data": {
    "results": [
      {"url": "https://example.com/blog/post-1", "title": "How to build", "date": "2025-01-15"}
    ]
  }
}`,
  },
  {
    id: "watchgraph",
    name: "WatchGraph",
    desc: "Monitor web pages for changes and get notified automatically via webhook",
    method: "POST",
    endpoint: "/v1/watchgraph",
    params: ["url", "prompt", "interval", "webhook_url"],
    example: `import requests

url = "https://api.leadcrawl.com/v1/watchgraph"
payload = {
    "url": "https://example.com/pricing",
    "prompt": "Extract the price of the Pro tier",
    "interval": "1h",
    "webhook_url": "https://your-app.com/webhook"
}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.post(url, json=payload, headers=headers)`,
    output: `{
  "status": "watching",
  "watch_id": "wch_abc123",
  "url": "https://example.com/pricing",
  "interval": "1h",
  "webhook_url": "https://your-app.com/webhook",
  "next_check": "2025-01-15T13:00:00Z"
}`,
  },
];

const USE_CASES = [
  {
    icon: TrendingUp,
    title: "Price Monitoring Bot",
    tags: ["Amazon", "eBay", "Shopify"],
    desc: "Track competitor prices on Amazon, eBay, and other e-commerce sites. Get alerts when prices drop or inventory changes.",
  },
  {
    icon: Users,
    title: "Lead Generation Tool",
    tags: ["LinkedIn", "Twitter", "Contacts"],
    desc: "Extract LinkedIn profiles, Twitter accounts, and contact information at scale without getting blocked.",
  },
  {
    icon: Building,
    title: "Market Research Dashboard",
    tags: ["Reviews", "Ratings", "Sentiment"],
    desc: "Aggregate reviews, ratings, and sentiment from multiple sites. Build comprehensive competitor analysis.",
  },
  {
    icon: FileText,
    title: "Real Estate Tracker",
    tags: ["Zillow", "Redfin", "Rentals"],
    desc: "Monitor property listings on Zillow, Redfin, and local sites. Track price changes and new listings.",
  },
  {
    icon: Cpu,
    title: "MCP Server",
    tags: ["Claude", "Cursor", "AI Tools"],
    desc: "Connect AI assistants directly to the web via Model Context Protocol. Enable Claude, Cursor, and other AI tools to scrape data in real-time.",
  },
  {
    icon: Bot,
    title: "AI Agent Tool",
    tags: ["RAG", "Agents", "Real-time"],
    desc: "Provide agents with extremely fast web access. Perfect for RAG pipelines, autonomous research, and real-time data enrichment.",
  },
];

const INTEGRATIONS = [
  { name: "Python", logo: "/images/python-logo.webp" },
  { name: "JavaScript", logo: "/images/javascript.webp" },
  { name: "CLI", logo: "/images/cli-dark.webp" },
  { name: "Agno", logo: "/images/agno.webp" },
  { name: "CrewAI", logo: "/images/crewai.webp" },
  { name: "LangChain", logo: "/images/langchain.webp" },
  { name: "LlamaIndex", logo: "/images/llama_index.webp" },
  { name: "n8n", logo: "/images/n8n.webp" },
  { name: "Zapier", logo: "/images/zapier.webp" },
  { name: "Smithery", logo: "/images/smithery.webp" },
  { name: "MCP", logo: "/images/mcp.webp" },
];

export default function Docs() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">

        {/* ── HERO ── */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/[0.10] rounded-full blur-[120px]" />
          </div>
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Documentation
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Everything you need to integrate LeadCrawl into your application.
                No selectors, no maintenance — just reliable structured data.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-20 sm:py-28 bg-white/[0.02] border-y border-white/[0.05]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-14"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Why LeadCrawl
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground max-w-2xl">
                No selectors. No maintenance. Just data.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i % 3}
                  variants={fadeUp}
                  className="p-7 border border-white/[0.07] bg-card/50 rounded-2xl hover:border-white/[0.12] hover:bg-card transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── API REFERENCE ── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-14"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
                API Reference
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground max-w-2xl">
                Five powerful endpoints for every scraping need
              </h2>
            </motion.div>

            <div className="space-y-12">
              {API_ENDPOINTS.map((endpoint, i) => (
                <motion.div
                  key={endpoint.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="p-8 border border-white/[0.07] bg-card/50 rounded-2xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider bg-green-accent/10 text-green-accent rounded">
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-muted-foreground">
                          {endpoint.endpoint}
                        </code>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {endpoint.name}
                      </h3>
                      <p className="text-sm text-foreground/60">{endpoint.desc}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      Parameters
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.params.map((param, j) => (
                        <code
                          key={j}
                          className="px-2.5 py-1 text-[11px] font-mono bg-primary/10 text-primary rounded"
                        >
                          {param}
                        </code>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl border border-border overflow-hidden bg-[#0a0a14]">
                    <div className="p-5 overflow-auto border-b lg:border-b-0 lg:border-r border-border">
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        <span className="ml-2 font-mono text-[11px] text-muted-foreground">scraper.py</span>
                      </div>
                      <pre className="font-mono text-[13px] leading-relaxed text-foreground/85 whitespace-pre-wrap">
                        {endpoint.example}
                      </pre>
                    </div>
                    <div className="p-5 overflow-auto">
                      <div className="flex items-center gap-1.5 mb-4">
                        <span className="font-mono text-[11px] text-muted-foreground">output.json</span>
                      </div>
                      <pre className="font-mono text-[13px] leading-relaxed text-green-accent whitespace-pre-wrap">
                        {endpoint.output}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="py-20 sm:py-28 bg-white/[0.02] border-y border-white/[0.05]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Use Cases
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                Built for every scraping need
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {USE_CASES.map((useCase, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i % 3}
                  variants={fadeUp}
                  className="p-7 border border-white/[0.07] bg-card/50 rounded-2xl hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-200"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {useCase.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 text-[10px] font-mono font-medium uppercase tracking-wider bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <useCase.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/55 leading-relaxed">
                    {useCase.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS ── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Integrations
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                Works with your stack
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {INTEGRATIONS.map((integration, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i % 6}
                  variants={fadeUp}
                  className="flex items-center justify-center p-6 border border-white/[0.07] bg-card/50 rounded-xl hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-200"
                >
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUICK START ── */}
        <section className="py-20 sm:py-28 bg-white/[0.02] border-y border-white/[0.05]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-14"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Quick Start
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground max-w-2xl">
                Get started in minutes
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Get an API key",
                  desc: "Sign up for free and get your API key. No credit card required.",
                },
                {
                  num: "02",
                  title: "Install the SDK",
                  desc: "pip install leadcrawl or npm install @leadcrawl/sdk",
                },
                {
                  num: "03",
                  title: "Start scraping",
                  desc: "Use natural language prompts to extract exactly what you need.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i}
                  variants={fadeUp}
                  className="relative bg-card border border-white/[0.07] rounded-2xl p-8 overflow-hidden group hover:border-primary/30 transition-colors"
                >
                  <div className="absolute top-4 right-6 font-mono text-7xl font-bold text-white/[0.03] leading-none select-none">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary font-mono text-sm font-semibold mb-6 ring-1 ring-primary/20">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}