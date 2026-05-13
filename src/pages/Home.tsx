import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, Check, Brain, Shield, Code, Globe, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const CODE_TABS = [
  {
    id: "markdownify",
    label: "Markdownify",
    desc: "URL to markdown, HTML, screenshot",
    code: `import requests

url = "https://api.leadcrawl.com/v1/markdownify"
payload = {"url": "https://example.com"}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
    output: `{
  "data": {
    "markdown": "# Example Domain\\n\\nThis domain is for use...",
    "html": "<html>...</html>",
    "screenshot": "data:image/png;base64,iVBORw0KGgo..."
  }
}`,
  },
  {
    id: "smartscraper",
    label: "SmartScraper",
    desc: "Structured data with prompts",
    code: `import requests

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
    label: "SearchGraph",
    desc: "Web search + extraction",
    code: `import requests

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
      {"name": "Mistral", "creator": "Mistral AI", "params": "7B"},
      "..."
    ]
  }
}`,
  },
  {
    id: "crawlergraph",
    label: "CrawlerGraph",
    desc: "Crawl entire websites",
    code: `import requests

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
      {"url": "https://example.com/blog/post-1",
       "title": "How to build an AI agent",
       "date": "2025-01-15"},
      "..."
    ]
  }
}`,
  },
  {
    id: "watchgraph",
    label: "WatchGraph",
    desc: "Monitor page changes",
    code: `import requests

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

const INTEGRATIONS = [
  "python-logo.webp", "javascript.webp", "cli-dark.webp", "agno.webp",
  "crewai.webp", "langchain.webp", "llama_index.webp", "n8n.webp",
  "zapier.webp", "smithery.webp", "mcp.webp",
];

const FEATURES = [
  { icon: Brain, title: "AI-Native Extraction", desc: "Extract structured data from any website using advanced AI models. No brittle selectors." },
  { icon: Shield, title: "Built-in Proxy Rotation", desc: "Automatic proxy rotation and browser automation — CAPTCHAs, rate limits, and blocks handled for you." },
  { icon: Code, title: "Simple REST API", desc: "A clean API with SDKs for Python and JavaScript. Integrate in minutes, not days." },
  { icon: Globe, title: "Any Language, Any Stack", desc: "Works with Python, JavaScript, cURL, and any HTTP client. Your stack, your choice." },
  { icon: Zap, title: "JavaScript Rendering", desc: "Full headless browser support for SPAs, infinite scroll, and dynamically loaded content." },
  { icon: Clock, title: "99.9% Uptime SLA", desc: "Enterprise-grade reliability with automatic retries, fallback proxies, and real-time status." },
];

const FAQS = [
  {
    q: "How does AI-powered web crawling work?",
    a: "LeadCrawl uses large language models to parse and understand page content semantically. Instead of writing CSS selectors, you describe what you want in plain English — the AI handles the rest.",
  },
  {
    q: "Do I need CSS selectors or XPath?",
    a: "No. LeadCrawl understands page content using LLMs. You describe what you want in plain English — no selectors, no regex, no DOM traversal. The model figures out where the data lives.",
  },
  {
    q: "What output formats are supported?",
    a: "All responses come back as structured JSON matching your prompt. You can also provide a JSON schema to enforce exact output shapes — perfect for feeding data directly into your pipeline or database.",
  },
  {
    q: "Can it scrape JavaScript-rendered pages and SPAs?",
    a: "Yes. LeadCrawl handles JavaScript-heavy pages, single-page applications, and dynamically loaded content out of the box. No need to manage headless browsers yourself.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The free tier includes 100 credits per day — enough to test your use case and get started. No credit card required.",
  },
];

function CodeBlock({ code, output }: { code: string; output: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl border border-border overflow-hidden bg-[#0a0a14]">
      <div className="p-5 overflow-auto border-b lg:border-b-0 lg:border-r border-border">
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">scraper.py</span>
        </div>
        <pre className="font-mono text-[13px] leading-relaxed text-foreground/85 whitespace-pre-wrap">{code}</pre>
      </div>
      <div className="p-5 overflow-auto">
        <div className="flex items-center gap-1.5 mb-4">
          <span className="font-mono text-[11px] text-muted-foreground">output.json</span>
        </div>
        <pre className="font-mono text-[13px] leading-relaxed text-green-accent whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col overflow-x-hidden bg-background">
      <Navbar />

      <main className="flex-1 pt-16">

        {/* ── HERO ── */}
        <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/[0.10] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[hsl(152,60%,50%)]/[0.06] rounded-full blur-[100px]" />
          </div>

          <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">

              {/* Hero text */}
              <motion.div
                className="flex-1 text-center lg:text-left w-full"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <motion.div
                  variants={fadeUp}
                  custom={0}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/35 bg-primary/[0.07] text-primary text-xs font-medium mb-7 tracking-wide"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  v2.0 is here — Read the release notes
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="text-[2.75rem] sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem] font-medium tracking-tight leading-[1.06] mb-6 text-foreground"
                >
                  The Crawler
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(130deg, hsl(273,75%,72%) 10%, hsl(152,60%,58%) 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    for the AI era.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="text-base sm:text-lg text-foreground/55 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                >
                  The only web crawling API designed for autonomous AI agents.
                  No proxies to manage. No selectors to maintain. Just reliable structured data.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-8"
                >
                  <Button
                    size="lg"
                    className="h-11 px-7 text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_28px_rgba(137,68,223,0.4)] rounded-lg"
                  >
                    Get API Key — Free
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-11 px-7 text-sm font-medium border border-white/[0.1] hover:bg-white/[0.06] rounded-lg"
                  >
                    View the Docs
                  </Button>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  custom={4}
                  className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span>9,400+ stars</span>
                  </div>
                  <span className="w-px h-3.5 bg-white/[0.15]" />
                  <span>No credit card required</span>
                </motion.div>
              </motion.div>

              {/* Hero code panel */}
              <motion.div
                className="flex-1 w-full lg:max-w-[520px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rounded-xl overflow-hidden border border-white/[0.09] bg-[#080810] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
                  {/* Window bar */}
                  <div className="flex items-center px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="ml-3 font-mono text-[11px] text-white/30">scraper.py</span>
                  </div>
                  {/* Code */}
                  <div className="p-5 overflow-x-auto">
                    <pre className="font-mono text-[12.5px] sm:text-[13px] leading-[1.75] text-foreground/80 min-w-0">
{`from leadcrawl.graphs import SmartCrawler

crawler = SmartCrawler(
    prompt=`}<span className="text-green-accent">{`"Extract product name and price"`}</span>{`,
    source=`}<span className="text-green-accent">{`"https://example.com/product"`}</span>{`,
    config={`}<span className="text-green-accent">{`"llm"`}</span>{`: {`}<span className="text-green-accent">{`"model"`}</span>{`: `}<span className="text-green-accent">{`"gpt-4o-mini"`}</span>{`}}
)
result = crawler.run()
`}<span className="text-white/30">{`# → {"name": "...", "price": "..."}`}</span>
                    </pre>
                  </div>
                  {/* Output strip */}
                  <div className="border-t border-white/[0.06] px-5 py-3 bg-[hsl(152,60%,50%)]/[0.04] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-accent shrink-0" />
                    <span className="font-mono text-[11.5px] text-green-accent/80 truncate">
                      {'{"name": "Pro Headphones", "price": "$299.99"}'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center lg:justify-start gap-4 opacity-50">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    Works with
                  </span>
                  <img src="/leadcrawl/images/logos/claude.svg" alt="Claude" className="h-3.5 w-auto brightness-0 invert" />
                  <img src="/leadcrawl/images/logos/gemini.png" alt="Gemini" className="h-3.5 w-auto" />
                  <img src="/leadcrawl/images/logos/openai.png" alt="OpenAI" className="h-3.5 w-auto brightness-0 invert" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS TICKER ── */}
        <section className="py-8 border-y border-white/[0.05] overflow-hidden bg-white/[0.015]">
          <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground text-center mb-6 px-5">
            Works with your stack
          </p>
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
            <div className="flex animate-marquee" style={{ width: "max-content" }}>
              {[...INTEGRATIONS, ...INTEGRATIONS].map((img, i) => (
                <div key={i} className="flex-shrink-0 px-6 sm:px-8">
                  <img
                    src={`/leadcrawl/images/${img}`}
                    alt="Integration"
                    className="h-7 sm:h-9 w-auto opacity-45 hover:opacity-75 transition-all grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-12"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground max-w-2xl">
                Everything you need to crawl the web
              </h2>
            </motion.div>

            <Tabs defaultValue="markdownify" className="w-full">
              <TabsList className="flex flex-wrap h-auto bg-transparent border-b border-white/[0.08] w-full justify-start rounded-none p-0 mb-8 gap-0">
                {CODE_TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex-col items-start px-5 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-left shrink-0"
                  >
                    <span className="font-mono text-[13px] font-medium mb-0.5 whitespace-nowrap">{tab.label}</span>
                    <span className="text-[11px] text-muted-foreground hidden md:block whitespace-nowrap">{tab.desc}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {CODE_TABS.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0 outline-none">
                  <CodeBlock code={tab.code} output={tab.output} />
                  <p className="mt-5 text-sm text-foreground/60 leading-relaxed max-w-3xl">
                    {tab.desc === "URL to markdown, HTML, screenshot" &&
                      "Convert any URL to clean markdown, HTML, screenshots, or branding analysis. Perfect for feeding raw page content into RAG pipelines."}
                    {tab.desc === "Structured data with prompts" &&
                      "Extract structured data from any webpage using natural language prompts. The AI model figures out the structure and extracts exactly what you need."}
                    {tab.desc === "Web search + extraction" &&
                      "Search the web and extract data from the top results in a single API call. Perfect for real-time market research and competitive intelligence."}
                    {tab.desc === "Crawl entire websites" &&
                      "Crawl entire websites and extract data from every page that matches your criteria. Automates pagination and deep link traversal."}
                    {tab.desc === "Monitor page changes" &&
                      "Monitor web pages for changes and get notified automatically via webhook. Track competitor pricing, stock availability, or news updates."}
                  </p>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
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
                How it works
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground max-w-2xl">
                From URL to structured data in seconds
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Define your prompt",
                  desc: "Describe what data you want in plain English. No selectors, no XPath, no DOM knowledge needed.",
                },
                {
                  num: "02",
                  title: "Point to any URL",
                  desc: "Provide the URL. LeadCrawl handles JavaScript rendering, proxy rotation, and CAPTCHAs automatically.",
                },
                {
                  num: "03",
                  title: "Get clean JSON",
                  desc: "Receive perfectly structured JSON matching your prompt. Feed it directly into your pipeline or database.",
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

        {/* ── FEATURES GRID ── */}
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

        {/* ── USE CASES ── */}
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
                Use Cases
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                Built for every scraping need
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Price Monitoring Bot",
                  tags: ["Amazon products", "eBay listings", "Shopify stores"],
                  desc: "Track competitor prices on Amazon, eBay, and other e-commerce sites. Get alerts when prices drop or inventory changes.",
                },
                {
                  title: "Lead Generation Tool",
                  tags: ["LinkedIn profiles", "Twitter users", "Company contacts"],
                  desc: "Extract LinkedIn profiles, Twitter accounts, and contact information at scale without getting blocked.",
                },
                {
                  title: "Market Research Dashboard",
                  tags: ["Product reviews", "App ratings", "Customer sentiment"],
                  desc: "Aggregate reviews, ratings, and sentiment from multiple sites. Build comprehensive competitor analysis.",
                },
                {
                  title: "Real Estate Tracker",
                  tags: ["Zillow listings", "Redfin data", "Rental properties"],
                  desc: "Monitor property listings on Zillow, Redfin, and local sites. Track price changes and new listings.",
                },
                {
                  title: "MCP Server",
                  tags: ["Claude Desktop", "Cursor IDE", "AI Workflows"],
                  desc: "Connect AI assistants directly to the web via Model Context Protocol. Enable Claude, Cursor, and other AI tools to scrape data in real-time.",
                },
                {
                  title: "AI Agent Tool",
                  tags: ["RAG pipelines", "Autonomous agents", "Real-time data"],
                  desc: "Provide agents with extremely fast web access. Perfect for RAG pipelines, autonomous research, and real-time data enrichment.",
                },
              ].map((useCase, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i % 3}
                  variants={fadeUp}
                  className="p-7 border border-white/[0.07] bg-card/50 rounded-2xl hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-200 group"
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
                  <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed mb-5">
                    {useCase.desc}
                  </p>
                  <Link
                    href="/docs"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Read more
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING PREVIEW ── */}
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
                Pricing
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                Simple, usage-based pricing
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "Free",
                  price: "$0",
                  desc: "Great for individuals or small projects",
                  features: ["100 credits/day", "Basic Proxy Rotation", "Python & JS SDKs", "Community support"],
                  cta: "Get Started",
                  highlight: false,
                },
                {
                  name: "Pro",
                  price: "$29",
                  desc: "Recommended for growing businesses",
                  features: ["10,000 credits/mo", "Advanced Proxy Rotation", "Priority support", "All endpoints"],
                  cta: "Start Free Trial",
                  highlight: true,
                },
                {
                  name: "Scale",
                  price: "$99",
                  desc: "Optimized for data-driven teams",
                  features: ["50,000 credits/mo", "Advanced Proxy Rotation", "Dedicated support", "Custom endpoints"],
                  cta: "Get Started",
                  highlight: false,
                },
              ].map((tier, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                  variants={fadeUp}
                  className={`flex flex-col p-8 rounded-2xl relative ${
                    tier.highlight
                      ? "bg-card border-2 border-primary shadow-[0_0_40px_rgba(137,68,223,0.12)]"
                      : "bg-background border border-white/[0.08]"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold tracking-tight mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 min-h-[2.5rem]">{tier.desc}</p>
                  <div className="mb-7">
                    <span className="text-4xl font-semibold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                  <ul className="flex-1 space-y-3.5 mb-8">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-foreground/75">
                        <Check className="w-4 h-4 text-green-accent shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full h-10 text-sm font-medium ${
                      tier.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-white/[0.06] text-foreground hover:bg-white/[0.09] border border-white/[0.1]"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/pricing"
                className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                View full pricing →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-14 max-w-2xl mx-auto"
            >
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/[0.08]">
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-foreground/60 leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.12] via-transparent to-[hsl(152,60%,50%)]/[0.06]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[100px]" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-5 max-w-2xl mx-auto">
                Give your AI agents superpowers with lightning-fast web data
              </h2>
              <p className="text-base text-foreground/55 mb-10 max-w-lg mx-auto">
                Start crawling in minutes with our free tier. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-11 px-8 text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(137,68,223,0.35)]"
                >
                  Get API Key for Free
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full sm:w-auto h-11 px-8 text-sm font-medium border border-white/[0.1] hover:bg-white/[0.05]"
                >
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
