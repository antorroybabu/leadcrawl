import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Gift, Headphones, Calendar, Megaphone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const BENEFITS = [
  { icon: Gift, title: "Extended Credits", desc: "Up to $1,000 in API credits for your first year. Build without limits." },
  { icon: Headphones, title: "Priority Support", desc: "Direct Slack/Discord channel with our engineering team." },
  { icon: Calendar, title: "Office Hours", desc: "1-on-1 sessions with our team to optimize your crawling architecture." },
  { icon: Megaphone, title: "Co-marketing", desc: "Featured case studies and social media amplification from our channels." },
];

const STEPS = [
  { n: "1", title: "Submit Application", desc: "Fill out the form with details about your startup and use case." },
  { n: "2", title: "Review Process", desc: "Our team reviews your application within 2–3 business days." },
  { n: "3", title: "Get Activated", desc: "Once approved, credits are applied directly to your API account." },
];

export default function ForStartups() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">

          {/* Header */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-center mb-20 max-w-2xl mx-auto"
          >
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
              For Startups
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-5">
              LeadCrawl for Startups
            </h1>
            <p className="text-base sm:text-lg text-foreground/55 leading-relaxed">
              Get extended free credits and priority support to scale your AI product.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-card/50 border border-white/[0.07] p-6 rounded-xl hover:border-white/[0.12] hover:bg-card transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold tracking-tight text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* How to Apply + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-8">
                How to apply
              </h2>
              <div className="space-y-8">
                {STEPS.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-9 h-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-semibold text-sm shrink-0 ring-1 ring-primary/20">
                      {step.n}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-foreground/55 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="bg-card border border-white/[0.08] rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight mb-6">Apply Now</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">First Name</label>
                    <Input className="bg-background border-white/[0.1] text-sm h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Last Name</label>
                    <Input className="bg-background border-white/[0.1] text-sm h-10" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Work Email</label>
                  <Input type="email" className="bg-background border-white/[0.1] text-sm h-10" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Company Website</label>
                  <Input type="url" placeholder="https://" className="bg-background border-white/[0.1] text-sm h-10" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">How do you plan to use LeadCrawl?</label>
                  <Textarea className="bg-background border-white/[0.1] text-sm h-28 resize-none" />
                </div>
                <Button className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium mt-2">
                  Submit Application
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
