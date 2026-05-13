import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Network, 
  BrainCircuit, 
  Globe, 
  Cpu, 
  Code, 
  Github, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Terminal,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Components ---

const BackgroundNetwork = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
      
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="40%" y1="50%" x2="60%" y2="40%" stroke="hsl(var(--secondary))" strokeWidth="1" />
          <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="40%" y1="50%" x2="50%" y2="70%" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="50%" y1="70%" x2="70%" y2="80%" stroke="hsl(var(--secondary))" strokeWidth="1" />
          <line x1="20%" y1="30%" x2="30%" y2="60%" stroke="hsl(var(--secondary))" strokeWidth="1" />
        </motion.g>

        {/* Nodes */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, staggerChildren: 0.2 }}
        >
          <circle cx="20%" cy="30%" r="6" fill="url(#node-glow)" />
          <circle cx="40%" cy="50%" r="8" fill="url(#node-glow)" />
          <circle cx="60%" cy="40%" r="5" fill="hsl(var(--secondary))" />
          <circle cx="80%" cy="60%" r="7" fill="url(#node-glow)" />
          <circle cx="50%" cy="70%" r="6" fill="hsl(var(--secondary))" />
          <circle cx="70%" cy="80%" r="4" fill="url(#node-glow)" />
          <circle cx="30%" cy="60%" r="5" fill="url(#node-glow)" />
        </motion.g>
      </svg>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Network className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
          <span className="font-bold text-lg tracking-tight">ScrapeGraphAI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#docs" className="hover:text-foreground transition-colors">Docs</Link>
          <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="#github" className="hover:text-foreground transition-colors">GitHub</Link>
          <Link href="#blog" className="hover:text-foreground transition-colors">Blog</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden lg:flex">Sign In</Button>
          <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white border-0">
            Get API Key
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-xl">
          <Link href="#docs" className="text-foreground font-medium">Docs</Link>
          <Link href="#pricing" className="text-foreground font-medium">Pricing</Link>
          <Link href="#github" className="text-foreground font-medium">GitHub</Link>
          <Link href="#blog" className="text-foreground font-medium">Blog</Link>
          <hr className="border-border my-2" />
          <Button className="w-full bg-gradient-to-r from-primary to-purple-600">Get API Key</Button>
        </div>
      )}
    </nav>
  );
};

// --- Page Sections ---

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
          <BackgroundNetwork />
          
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Hero Text */}
              <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  <span>v1.2 Release is now live</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                  Turn any website into <br className="hidden lg:block" />
                  <span className="text-gradient">structured data.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  The open-source AI web scraping library. Just provide a prompt, point to a URL, and get clean JSON back. Powered by GPT-4, Claude, and local LLMs.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity border-0">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base bg-card hover:bg-card/80 border-border">
                    <Github className="mr-2 w-5 h-5" /> View on GitHub
                    <span className="ml-2 pl-2 border-l border-border text-muted-foreground">⭐ 9.2k</span>
                  </Button>
                </div>
              </motion.div>

              {/* Hero Code Snippet */}
              <motion.div 
                className="flex-1 w-full max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-xl overflow-hidden border border-primary/20 bg-[#0d0d1a] shadow-2xl shadow-primary/10">
                  <div className="flex items-center px-4 py-3 border-b border-border/50 bg-black/40">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto text-xs text-muted-foreground font-mono">scraper.py</div>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="font-mono text-sm leading-relaxed text-slate-300">
                      <code>
                        <span className="text-purple-400">from</span> scrapegraphai.graphs <span className="text-purple-400">import</span> SmartScraperGraph<br/><br/>
                        graph = SmartScraperGraph(<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;prompt=<span className="text-green-400">"Find all product prices"</span>,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;source=<span className="text-green-400">"https://example.com"</span>,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;config=&#123;<span className="text-green-400">"llm"</span>: &#123;<span className="text-green-400">"model"</span>: <span className="text-green-400">"gpt-4o-mini"</span>&#125;&#125;<br/>
                        )<br/>
                        <br/>
                        result = graph.run()<br/>
                        <span className="text-blue-400">print</span>(result)
                      </code>
                    </pre>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section className="py-10 border-y border-border/50 bg-black/20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Trusted by innovative teams</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
              {['Acme Corp', 'Nexus', 'CyberDyne', 'Hooli', 'Initech', 'Massive Dynamic'].map(logo => (
                <div key={logo} className="text-xl font-bold font-serif tracking-tighter">{logo}</div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 px-6 relative">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to extract data</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Stop writing brittle CSS selectors. Let AI handle the heavy lifting of parsing and structuring web content.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BrainCircuit, title: "AI-Powered Extraction", desc: "Uses state-of-the-art LLMs to understand page context and extract exactly what you ask for." },
                { icon: Globe, title: "Any Website, Any Structure", desc: "Works on modern SPAs, nested DOMs, and dynamically rendered React/Vue applications." },
                { icon: Cpu, title: "Multiple LLM Support", desc: "Bring your own API key for OpenAI, Anthropic, Gemini, or run local models via Ollama." },
                { icon: Code, title: "JSON Output", desc: "Always returns clean, typed JSON data ready to be inserted directly into your database." },
                { icon: Github, title: "Open Source", desc: "Fully open-source python library with a vibrant community of contributors." },
                { icon: Zap, title: "REST API", desc: "Don't want to manage infrastructure? Use our hosted API for massive scale extraction." },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.15)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-6 bg-black/40 border-y border-border/50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
              <p className="text-muted-foreground">Three steps to robust data extraction.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-secondary/10 -z-10" />
              
              {[
                { step: "1", title: "Define Prompt", desc: "Tell the AI what data you need" },
                { step: "2", title: "Point to URL", desc: "Target any webpage or HTML document" },
                { step: "3", title: "Get JSON", desc: "Receive perfectly structured data" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center max-w-[250px]">
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CODE SHOWCASE */}
        <section className="py-24 px-6 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              
              <div className="flex-1 flex flex-col justify-center mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Developers</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Integrate ScrapeGraphAI into your pipeline in minutes. We handle the browser automation, proxy rotation, and parsing.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Zero configuration required', 'Automatic retry logic', 'Schema validation via Pydantic', 'Async support out of the box'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-fit" variant="outline">Read Documentation</Button>
              </div>

              <div className="flex-1 w-full bg-[#0d0d1a] border border-border rounded-xl overflow-hidden flex flex-col shadow-2xl">
                <div className="flex items-center border-b border-border/50 bg-black/40 px-2">
                  <button className="px-4 py-3 text-sm font-medium text-primary border-b-2 border-primary">Python</button>
                  <button className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">Node.js</button>
                  <button className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">cURL</button>
                </div>
                <div className="flex flex-col md:flex-row flex-1">
                  <div className="flex-1 p-4 md:border-r border-border/50">
                    <pre className="font-mono text-xs text-slate-300">
                      <code>
                        <span className="text-slate-500"># Input</span><br/>
                        graph = SmartScraperGraph(<br/>
                        &nbsp;&nbsp;prompt=<span className="text-green-400">"Extract authors and titles"</span>,<br/>
                        &nbsp;&nbsp;source=<span className="text-green-400">"https://books.toscrape.com"</span><br/>
                        )<br/>
                        <span className="text-blue-400">print</span>(graph.run())
                      </code>
                    </pre>
                  </div>
                  <div className="flex-1 p-4 bg-black/20">
                    <pre className="font-mono text-xs text-green-400">
                      <code>
                        <span className="text-slate-500"># Output JSON</span><br/>
                        &#123;<br/>
                        &nbsp;&nbsp;<span className="text-blue-300">"books"</span>: [<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"title"</span>: <span className="text-green-400">"A Light in the Attic"</span>,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"price"</span>: <span className="text-green-400">"£51.77"</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">...</span><br/>
                        &nbsp;&nbsp;]<br/>
                        &#125;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 px-6 bg-black/40 border-t border-border/50" id="pricing">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-muted-foreground">Self-host for free, or use our managed API.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Tier */}
              <div className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Open Source</h3>
                <div className="text-3xl font-extrabold mb-6">$0<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> Self-hosted</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> Community support</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> All core graphs</li>
                </ul>
                <Button variant="outline" className="w-full">View GitHub</Button>
              </div>

              {/* Pro Tier */}
              <div className="bg-card border-gradient rounded-2xl p-8 flex flex-col relative scale-105 shadow-2xl shadow-primary/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                <h3 className="text-xl font-bold mb-2">API Pro</h3>
                <div className="text-3xl font-extrabold mb-6">$29<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> 10,000 requests/mo</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> Managed proxies</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> Cloud browser rendering</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> Priority email support</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get Started</Button>
              </div>

              {/* Enterprise */}
              <div className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-extrabold mb-6">Custom</div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> Unlimited requests</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> Custom extraction models</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> Dedicated account manager</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-secondary w-4 h-4" /> SLA guarantees</li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 border-t border-border/50 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Loved by developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "ScrapeGraphAI completely replaced our brittle puppeteer setup. What used to be 500 lines of selector logic is now a 3-line prompt.", author: "Alex D.", role: "Data Engineer", handle: "@alexdata" },
                { quote: "The ability to just pass a schema and get structured data from literally any layout is black magic. Saved us weeks of dev time.", author: "Sarah M.", role: "CTO", handle: "@sarah_codes" },
                { quote: "We use the API in production to track competitor pricing. It automatically adapts when they change their DOM. Incredible tool.", author: "James K.", role: "Founder", handle: "@jamesbuilds" }
              ].map((t, i) => (
                <div key={i} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 relative">
                  <div className="text-primary text-4xl font-serif absolute top-4 right-4 opacity-20">"</div>
                  <p className="text-muted-foreground mb-6 relative z-10">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.author}</div>
                      <div className="text-xs text-muted-foreground">{t.handle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-br from-[#1a103c] to-[#0a192f] border border-primary/20 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50" />
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white">Start scraping smarter today</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">Join thousands of developers building intelligent data pipelines with ScrapeGraphAI.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Button size="lg" className="bg-white text-black hover:bg-slate-200 text-base h-14 px-8">
                  Get API Key
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-base h-14 px-8">
                  Read the Docs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black/80 border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Network className="w-5 h-5 text-primary" />
                <span className="font-bold text-lg">ScrapeGraphAI</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                The future of web scraping is intelligent. Extract structured data from any source.
              </p>
              <div className="flex gap-4">
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Terminal className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Open Source</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cloud API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ScrapeGraphAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
