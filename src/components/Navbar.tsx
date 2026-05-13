import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "For Startups", href: "/startups" },
    { name: "Changelog", href: "/changelog" },
    { name: "Contact", href: "/contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-20 h-16 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/logo-leadcrawl.svg"
            alt="LeadCrawl"
            className="h-7 w-auto"
          />
          <span className="text-base font-semibold tracking-tight text-foreground">
            LeadCrawl
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-lg transition-colors ${
                location === link.href
                  ? "text-foreground bg-white/[0.05]"
                  : "text-foreground/80 hover:text-foreground hover:bg-white/[0.05]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/leadcrawl"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-white/[0.05]"
          >
            <Star className="w-3.5 h-3.5" />
            <span>9.4k</span>
          </a>
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-4 shadow-[0_0_20px_rgba(137,68,223,0.3)]"
          >
            Get API Key
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/[0.05]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex flex-col gap-1 shadow-2xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-foreground bg-white/[0.06]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
            <Button variant="ghost" className="w-full justify-center">
              Sign In
            </Button>
            <Button className="w-full bg-primary text-primary-foreground">
              Get API Key
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}