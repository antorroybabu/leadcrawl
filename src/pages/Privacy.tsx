import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-[800px] mx-auto px-6 sm:px-10 lg:px-20">
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-8">
              Privacy Policy
            </h1>
            <div className="text-foreground/60 space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: January 15, 2025</p>
              
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account,
                subscribe to our service, or contact us for support.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                process transactions, and communicate with you about our products and services.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties
                without your consent, except as described in this policy.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and
                hold certain information to improve your experience.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data. Contact us at
                privacy@leadcrawl.com to exercise these rights.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@leadcrawl.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}