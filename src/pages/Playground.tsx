import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Terminal, Play, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Playground() {
  const [url, setUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                API Playground
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Test our API endpoints directly in your browser. No code required.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border border-white/[0.07] rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Request</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-foreground/60 mb-2">URL</label>
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full bg-[#0a0a14] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground/60 mb-2">Prompt</label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Extract the title and description..."
                      rows={4}
                      className="w-full bg-[#0a0a14] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                    />
                  </div>
                  <button
                    onClick={handleRun}
                    disabled={loading}
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                    {loading ? "Running..." : "Run Request"}
                  </button>
                </div>
              </div>

              <div className="bg-card border border-white/[0.07] rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Response</h3>
                <div className="bg-[#0a0a14] rounded-lg p-4 min-h-[200px] font-mono text-sm overflow-auto">
                  <span className="text-muted-foreground">{"// Response will appear here"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}