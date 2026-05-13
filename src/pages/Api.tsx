import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Database, Zap, Shield } from "lucide-react";

export default function Api() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                Powerful REST API
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Integrate LeadCrawl into your applications with our simple REST API.
                Works with any programming language and framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Code, title: "REST Endpoints", desc: "Clean, predictable API endpoints for all operations" },
                { icon: Database, title: "JSON Responses", desc: "All responses return structured JSON data" },
                { icon: Zap, title: "Fast & Reliable", desc: "Average response time under 2 seconds" },
                { icon: Shield, title: "Secure", desc: "API key authentication with HTTPS encryption" },
              ].map((feature, i) => (
                <div key={i} className="p-6 border border-white/[0.07] bg-card/50 rounded-xl">
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/60">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-card border border-white/[0.07] rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Base URL</h2>
              <div className="bg-[#0a0a14] rounded-xl p-4 font-mono text-sm">
                <span className="text-muted-foreground">https://</span>
                <span className="text-green-accent">api.leadcrawl.com/v1</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}