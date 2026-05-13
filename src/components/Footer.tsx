import { Link } from "wouter";
import { Github, Twitter, MessageSquare, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-background pt-16 sm:pt-20 pb-8 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
               <img src="/leadcrawl/logo-leadcrawl.svg" alt="LeadCrawl" className="h-7 w-auto" />
              <span className="text-base font-semibold tracking-tight text-foreground">LeadCrawl</span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6 max-w-sm">
              The web crawling API built for the AI era. Extract structured data from any website — no selectors, no maintenance.
            </p>
           
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-tight">Product</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="/api" className="hover:text-foreground transition-colors">API</Link></li>
              <li><Link href="/playground" className="hover:text-foreground transition-colors">Playground</Link></li>
              <li><Link href="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
              <li><Link href="/status" className="hover:text-foreground transition-colors">Status</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-tight">Resources</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><a href="https://github.com/leadcrawl" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
              <li><Link href="/integrations" className="hover:text-foreground transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-tight">Company</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="/startups" className="hover:text-foreground transition-colors">For Startups</Link></li>
              <li><Link href="/compare" className="hover:text-foreground transition-colors">Compare</Link></li>
              <li><Link href="/contacts" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
            <h4 className="text-sm font-semibold text-foreground mt-8 mb-4 tracking-tight">Legal</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.06] pt-8 gap-4">
          <div className="text-sm text-foreground/40">
            © 2025 LeadCrawl. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-foreground/40">
            <a href="#" className="hover:text-foreground transition-colors"><Github className="w-4 h-4" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><MessageSquare className="w-4 h-4" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <img
        src="/leadcrawl/images/spider-footer-dark.webp"
        alt=""
        className="absolute bottom-0 right-0 h-56 w-auto object-contain opacity-30 pointer-events-none select-none mix-blend-screen"
      />
    </footer>
  );
}
