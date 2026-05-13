import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, AlertCircle, Clock, ArrowRight } from "lucide-react";

const SERVICES = [
  { name: "Markdownify API", status: "operational", uptime: "99.99%" },
  { name: "SmartScraper API", status: "operational", uptime: "99.98%" },
  { name: "SearchGraph API", status: "operational", uptime: "99.95%" },
  { name: "CrawlerGraph API", status: "operational", uptime: "99.97%" },
  { name: "WatchGraph API", status: "operational", uptime: "99.99%" },
  { name: "Dashboard", status: "operational", uptime: "100%" },
];

const INCIDENTS = [
  {
    date: "Today",
    title: "Minor latency spike on EU servers",
    status: "resolved",
    time: "14:32 UTC",
  },
  {
    date: "2 days ago",
    title: "Scheduled maintenance completed",
    status: "resolved",
    time: "02:00 UTC",
  },
];

export default function Status() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-accent/10 border border-green-accent/20 mb-6">
                <CheckCircle className="w-4 h-4 text-green-accent" />
                <span className="text-sm font-medium text-green-accent">All Systems Operational</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-4">
                System Status
              </h1>
              <p className="text-lg text-foreground/60">
                Real-time status of all LeadCrawl services
              </p>
            </div>

            <div className="bg-card border border-white/[0.07] rounded-2xl overflow-hidden mb-8">
              <div className="p-6 border-b border-white/[0.06]">
                <h2 className="text-lg font-semibold text-foreground">Services</h2>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {SERVICES.map((service, i) => (
                  <div key={i} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${service.status === "operational" ? "bg-green-accent" : "bg-yellow-500"}`} />
                      <span className="text-foreground">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground font-mono">{service.uptime}</span>
                      <span className="text-sm text-green-accent">{service.status === "operational" ? "Operational" : "Degraded"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-white/[0.07] rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/[0.06]">
                <h2 className="text-lg font-semibold text-foreground">Recent Incidents</h2>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {INCIDENTS.map((incident, i) => (
                  <div key={i} className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Clock className="w-3 h-3" />
                      {incident.date} at {incident.time}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">{incident.title}</span>
                      <span className="text-sm text-green-accent">{incident.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}