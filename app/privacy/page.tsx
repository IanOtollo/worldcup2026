import Link from "next/link";

const F = {
  condensed: "var(--font-barlow-condensed), sans-serif",
  bebas: "var(--font-bebas-neue), sans-serif",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-40 pb-32 bg-[#020402] text-white">
      <div className="max-w-[900px] mx-auto px-12 md:px-24 relative">
        
        <Link 
          href="/" 
          style={{ 
            position: "absolute", 
            top: "-60px", 
            left: "48px", 
            fontFamily: F.condensed, 
            fontSize: "13px", 
            color: "#555", 
            textDecoration: "none", 
            display: "flex", 
            alignItems: "center", 
            gap: "8px",
            letterSpacing: "0.15em",
            fontWeight: 700,
            transition: "color 0.2s"
          }}
          className="text-hover-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          BACK TO HOME
        </Link>

        <header className="mb-20 border-b border-white/10 pb-12">
          <p style={{ fontFamily: F.condensed, color: "#C8102E", letterSpacing: "0.3em", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase" }}>
            Legal Documentation
          </p>
          <h1 style={{ fontFamily: F.bebas, fontSize: "clamp(64px, 8vw, 100px)", lineHeight: "0.9", marginBottom: "24px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: F.condensed, fontSize: "14px", color: "#555", letterSpacing: "0.1em" }}>
            LAST UPDATED: MAY 09, 2026
          </p>
        </header>

        <div style={{ fontFamily: F.condensed, fontSize: "18px", color: "#AAA", lineHeight: "1.8" }}>
          
          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">1. Overview</h2>
            <p className="mb-6">
              This Privacy Policy describes how the FIFA World Cup 2026 Tribute Platform ("the Platform," "we," "us," or "our") collects, uses, and discloses your personal information when you visit or use our services. By accessing the Platform, you acknowledge that you have read and understood the practices described in this policy.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">2. Data Collection</h2>
            <p className="mb-4">We collect information that you provide directly to us, as well as information collected automatically during your visit:</p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li><strong className="text-white">Voluntary Information:</strong> Newsletter subscriptions, fan feedback forms, or interactive match predictions.</li>
              <li><strong className="text-white">Automated Data:</strong> IP addresses, browser types, device identifiers, and page interaction data collected via cookies and similar technologies.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">3. Purpose of Processing</h2>
            <p className="mb-4">The data collected is utilized for the following professional purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>To provide, maintain, and improve the high-performance delivery of tournament data.</li>
              <li>To monitor and analyze trends, usage, and activities in connection with our services.</li>
              <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">4. Data Security</h2>
            <p className="mb-6">
              We implement industry-standard administrative, technical, and physical security measures designed to safeguard the information we collect. However, no internet transmission is ever 100% secure or error-free. You use the Platform at your own risk.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">5. International Transfers</h2>
            <p className="mb-6">
              As a global tribute platform, your information may be transferred to and maintained on computers located outside of your state, province, or country. We ensure that any such transfers comply with applicable data protection laws.
            </p>
          </section>

          <section className="p-12 bg-white/5 border border-white/10 rounded-sm">
            <h2 className="text-white text-xl uppercase font-bold mb-4 tracking-wider">Contact Legal</h2>
            <p className="mb-0">
              For any inquiries regarding this Privacy Policy or our data practices, please contact the IOMTechs legal department through the official developer portal.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
