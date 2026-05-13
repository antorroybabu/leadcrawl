import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const TIERS = [
  {
    name: "Free", priceM: "$0", priceA: "$0",
    desc: "Great for individuals or small projects",
    features: ["100 credits/day", "Basic Proxy Rotation", "Python & JS SDKs", "Community support"],
    cta: "Get Started", highlight: false,
  },
  {
    name: "Pro", priceM: "$29", priceA: "$23",
    desc: "Recommended for growing businesses",
    features: ["10,000 credits/mo", "Advanced Proxy Rotation", "Priority support", "All endpoints"],
    cta: "Start Free Trial", highlight: true,
  },
  {
    name: "Scale", priceM: "$99", priceA: "$79",
    desc: "Optimized for data-driven teams",
    features: ["50,000 credits/mo", "Advanced Proxy Rotation", "Dedicated support", "Custom endpoints"],
    cta: "Contact Sales", highlight: false,
  },
];

const ROWS = [
  { label: "API Credits", free: "100 / day", pro: "10,000 / mo", scale: "50,000 / mo" },
  { label: "Rate Limit", free: "1 req / sec", pro: "5 req / sec", scale: "20 req / sec" },
  { label: "SmartScraper", free: true, pro: true, scale: true },
  { label: "Markdownify", free: true, pro: true, scale: true },
  { label: "SearchGraph / CrawlerGraph", free: false, pro: true, scale: true },
  { label: "Premium Proxies", free: false, pro: true, scale: true },
  { label: "Support", free: "Community", pro: "Priority Email", scale: "Slack Channel" },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">

          {/* Hero */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-5">
              Simple, transparent pricing
            </h1>
            <p className="text-base sm:text-lg text-foreground/55 max-w-xl mx-auto mb-10">
              Only pay for what you use. Scale as you grow.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm font-medium">
              <span className={!isAnnual ? "text-foreground" : "text-muted-foreground"}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`w-11 h-6 rounded-full relative transition-colors focus:outline-none ${isAnnual ? "bg-primary" : "bg-white/[0.12]"}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform shadow-sm ${isAnnual ? "left-6" : "left-1"}`} />
              </button>
              <span className={`flex items-center gap-2 ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Annual
                <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  20% off
                </span>
              </span>
            </div>
          </motion.div>

          {/* Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {TIERS.map((tier, i) => (
              <motion.div
                key={i} initial="hidden" animate="visible" custom={i} variants={fadeUp}
                className={`flex flex-col p-8 rounded-2xl relative ${
                  tier.highlight
                    ? "bg-card border-2 border-primary shadow-[0_0_40px_rgba(137,68,223,0.12)]"
                    : "bg-card/40 border border-white/[0.08]"
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
                  <span className="text-4xl font-semibold text-foreground">
                    {isAnnual ? tier.priceA : tier.priceM}
                  </span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                  {isAnnual && tier.priceA !== "$0" && (
                    <p className="text-xs text-muted-foreground mt-1">Billed annually</p>
                  )}
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

          {/* Feature Comparison */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-24"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-10 text-center">
              Compare features
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                    <th className="py-4 px-6 text-left font-semibold text-foreground">Features</th>
                    <th className="py-4 px-6 font-semibold text-foreground text-center">Free</th>
                    <th className="py-4 px-6 font-semibold text-primary text-center">Pro</th>
                    <th className="py-4 px-6 font-semibold text-foreground text-center">Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {ROWS.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 text-foreground/80 flex items-center gap-2">
                        {row.label}
                        {row.label === "Rate Limit" && <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />}
                      </td>
                      {[row.free, row.pro, row.scale].map((val, j) => (
                        <td key={j} className="py-4 px-6 text-center text-foreground/65">
                          {val === true ? (
                            <Check className="w-4 h-4 mx-auto text-green-accent" />
                          ) : val === false ? (
                            <span className="text-muted-foreground/40">—</span>
                          ) : (
                            <span className={j === 1 ? "text-foreground font-medium" : ""}>{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Pricing FAQ */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-10 text-center">
              Pricing FAQ
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What happens if I run out of credits?", a: "If you exceed your monthly credit limit, additional requests are billed at $0.005 per credit, so your workflows never stop unexpectedly." },
                { q: "How are credits consumed?", a: "Markdownify uses 1 credit per page. SmartScraper uses 2 credits. SearchGraph and CrawlerGraph usage depends on the depth and number of pages processed." },
                { q: "Can I upgrade or downgrade anytime?", a: "Yes, you can change your plan at any time. Upgrades are applied immediately and prorated. Downgrades take effect at the next billing cycle." },
                { q: "Do you offer enterprise plans?", a: "Yes. If you need more than 100,000 credits per month or have custom requirements like dedicated IP pools, please contact us for a custom plan." },
              ].map((faq, i) => (
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
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
