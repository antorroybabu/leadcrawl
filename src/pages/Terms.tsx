import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 sm:py-28">
          <div className="max-w-[800px] mx-auto px-6 sm:px-10 lg:px-20">
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-8">
              Terms of Service
            </h1>
            <div className="text-foreground/60 space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: January 15, 2025</p>
              
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
              <p>
                By accessing and using LeadCrawl's services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">2. Use of Service</h2>
              <p>
                You agree to use LeadCrawl only for lawful purposes and in accordance with these Terms.
                You are responsible for ensuring that your use of the service complies with all applicable laws and regulations.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">3. API Usage</h2>
              <p>
                Your use of the LeadCrawl API is subject to rate limits and usage quotas as defined in your selected plan.
                Excessive usage may result in temporary suspension of your account.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">4. Data and Privacy</h2>
              <p>
                We respect your privacy. Please refer to our Privacy Policy for information on how we collect,
                use, and protect your personal data.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of LeadCrawl are owned by us and are protected by
                copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, LeadCrawl shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of our services.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at legal@leadcrawl.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}