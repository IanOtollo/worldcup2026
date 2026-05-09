import Link from "next/link";

const F = {
  condensed: "var(--font-barlow-condensed), sans-serif",
  bebas: "var(--font-bebas-neue), sans-serif",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p style={{ fontFamily: F.condensed, fontSize: "14px", color: "#555", letterSpacing: "0.1em" }}>
            LAST UPDATED: MAY 09, 2026
          </p>
        </header>

        <div style={{ fontFamily: F.condensed, fontSize: "18px", color: "#AAA", lineHeight: "1.8" }}>
          
          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using this platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">2. Intellectual Property</h2>
            <p className="mb-4">All content on this Platform, including text, graphics, logos, and software, is the property of the Platform or its content suppliers and is protected by international copyright laws.</p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li><strong className="text-white">Tribute Status:</strong> This is an independent tribute project. "FIFA World Cup" and related marks are trademarks of FIFA.</li>
              <li><strong className="text-white">Usage License:</strong> Users are granted a limited, non-exclusive license to view the information provided for personal, non-commercial use only.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">3. User Conduct</h2>
            <p className="mb-6">
              Users agree not to use the Platform for any purpose that is unlawful or prohibited by these Terms. You may not use the Platform in any manner that could damage, disable, overburden, or impair the server or network connected to the Platform.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">4. Disclaimer of Warranties</h2>
            <p className="mb-6 italic bg-white/5 p-8 border-l-4 border-[#C8102E]">
              The materials on the Platform are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">5. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall IOMTechs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Platform.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-2xl uppercase font-bold mb-6 tracking-wider">6. Governing Law</h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with international digital commerce laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="p-12 bg-white/5 border border-white/10 rounded-sm">
            <p className="mb-0">
              Continuing to use this platform constitutes your formal acceptance of these terms.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
