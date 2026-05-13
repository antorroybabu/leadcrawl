import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Github } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const CHANNELS = [
  {
    icon: Mail,
    color: "text-primary bg-primary/10",
    title: "Email Us",
    desc: "For general inquiries and support.",
    link: "mailto:hello@leadcrawl.com",
    linkText: "hello@leadcrawl.com",
  },
  {
    icon: MessageSquare,
    color: "text-[#5865F2] bg-[#5865F2]/10",
    title: "Discord Community",
    desc: "Chat with our engineers and community in real time.",
    link: "#",
    linkText: "Join our Discord server",
  },
  {
    icon: Github,
    color: "text-foreground bg-white/[0.07]",
    title: "GitHub",
    desc: "Report bugs or request features on our open-source repo.",
    link: "https://github.com/leadcrawl",
    linkText: "github.com/leadcrawl",
  },
];

export default function Contacts() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16 max-w-xl mx-auto">
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-5">
              Get in touch
            </h1>
            <p className="text-base text-foreground/55 leading-relaxed">
              Have questions about our API, enterprise plans, or just want to say hi? We'd love to hear from you.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">

            {/* Contact channels */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="space-y-4"
            >
              {CHANNELS.map((ch, i) => (
                <div key={i} className="bg-card/50 border border-white/[0.07] p-5 rounded-xl flex items-start gap-4 hover:border-white/[0.12] transition-colors">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${ch.color}`}>
                    <ch.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground mb-1">{ch.title}</h3>
                    <p className="text-sm text-foreground/55 mb-2">{ch.desc}</p>
                    <a
                      href={ch.link}
                      target={ch.link.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      {ch.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="bg-card border border-white/[0.08] rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight mb-6">Send a message</h3>
              <form className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Name</label>
                  <Input className="bg-background border-white/[0.1] text-sm h-10" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Email</label>
                  <Input type="email" className="bg-background border-white/[0.1] text-sm h-10" placeholder="john@example.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Subject</label>
                  <Input className="bg-background border-white/[0.1] text-sm h-10" placeholder="How can we help?" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Message</label>
                  <Textarea className="bg-background border-white/[0.1] text-sm h-32 resize-none" placeholder="Write your message here..." />
                </div>
                <Button className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium mt-2">
                  Send Message
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
