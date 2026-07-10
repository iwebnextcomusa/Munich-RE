import { ShieldAlert, BookOpen, Map, HelpCircle, ArrowRight, CornerDownRight } from "lucide-react";

interface LegalProps {
  activeSection: "privacy" | "terms" | "sitemap" | "404";
  setActiveTab: (tab: string) => void;
}

export default function Legal({ activeSection, setActiveTab }: LegalProps) {
  
  if (activeSection === "privacy") {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
        <div className="border-b border-slate-900 pb-4">
          <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-widest">Legal & Solvency</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Privacy & Data Governance Policy</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Last Updated: July 10, 2026 • Aether Security Compliance</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Aether Wealth & Risk Solutions (formerly Munich RE's Louisiana operational enterprise pivot) is committed to protecting the telemetry, personal identifiers, and underwriting documents of our brokers, primary carriers, and corporate clients.
          </p>

          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">1. Information We Secure</h3>
          <p>
            We process two main categories of data: (a) <strong>Corporate Exposure Logs</strong> (including historical claims files, property blueprints, and geographic coordinates submitted via secure forms), and (b) <strong>Diagnostic Telemetry Cookies</strong> (such as active geospatial interaction parameters used to power our real-time 3D storm risk modeling canvases).
          </p>

          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">2. Analytical Integrity</h3>
          <p>
            Under no circumstances do we distribute or sell operational schedules, cyber asset logs, or emails to secondary marketing aggregators. All telemetry is parsed strictly on our secure server-side environments (using <code>GEMINI_API_KEY</code> proxies for our floating Virtual Analyst chatbot) or loaded within sandboxed client buffers.
          </p>

          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">3. Regulatory Alignments</h3>
          <p>
            Our governance frameworks are built to align with the Louisiana Insurance Code, federal cybersecurity guidelines, and European Solvency II capital privacy mandates. You may request full auditing or erasure of your consultation submissions by emailing Eric Williams at <strong>hr.ericwilliams@gmail.com</strong>.
          </p>
        </div>
      </div>
    );
  }

  if (activeSection === "terms") {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
        <div className="border-b border-slate-900 pb-4">
          <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-widest">Governance Disclosures</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Treaty Terms & Conditions</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Authorized for Broker Distribution • Version 2026.3</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            The structural calculations, meteorology simulations, and risk indicators presented throughout the Aether Wealth portal are provided for educational and pre-underwriting analysis only.
          </p>

          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">1. Binding Underwritings Require Authorization</h3>
          <p>
            No statement, simulation result (including Probable Maximum Loss outputs computed inside our diagnostic risk intelligence console), or chatbot transcript constitutes a binding treaty placement, primary policy contract, or solvency guarantee. Binding underwritings require direct physical evaluation and formal capacity allotment signed by our Slidell operations board.
          </p>

          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">2. Parametric Index Declarations</h3>
          <p>
            All parametric hurricane surge and severe climate treaties are governed by objective physical measurements supplied by verified third-party scientific stations (e.g., NOAA wind meters or regional water table gauges). In the event of network telemetry delays, official measurements take priority over local portal displays.
          </p>

          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">3. Trademark Trademark Pivots</h3>
          <p>
            Munich RE is a registered trademark of Munich Reinsurance Company. This portal operates under the pivoted, distinct placeholder branding of <strong>Aether Wealth & Risk Solutions</strong>, an independent operational simulation located in Slidell, Louisiana. For any inquiries regarding compliance, contact our core team directly at <strong>603-513-8973</strong>.
          </p>
        </div>
      </div>
    );
  }

  if (activeSection === "sitemap") {
    const pagesList = [
      {
        title: "Primary Navigation",
        links: [
          { label: "Home Page (3D Globe & Stats)", tab: "home" },
          { label: "About (Mission, Solvency, Leaders)", tab: "about" },
          { label: "12 Core Services Portfolio", tab: "services" },
          { label: "10 Main Industrial Sectors", tab: "industries" },
          { label: "Predictive Risk Solutions Console", tab: "risk-solutions" },
          { label: "Research Publications & Blog", tab: "insights" },
          { label: "Careers & Open Openings", tab: "careers" },
          { label: "Slidell Operations Contact Desk", tab: "contact" }
        ]
      },
      {
        title: "Legal & Governance Map",
        links: [
          { label: "Privacy & Data Governance Policy", tab: "privacy" },
          { label: "Treaty Terms & Conditions", tab: "terms" },
          { label: "Geospatial Alignment Sitemap", tab: "sitemap" }
        ]
      }
    ];

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans">
        <div className="border-b border-slate-900 pb-4 text-center">
          <Map className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
          <h1 className="text-3xl font-extrabold text-white">Geospatial Portal Sitemap</h1>
          <p className="text-xs text-slate-400 mt-1">Direct interactive navigation pathways mapping every module on our server.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {pagesList.map((sec, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl space-y-4">
              <h3 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-slate-950 pb-2">{sec.title}</h3>
              <ul className="space-y-3">
                {sec.links.map((lnk, lIdx) => (
                  <li key={lIdx}>
                    <button
                      onClick={() => setActiveTab(lnk.tab)}
                      className="text-xs sm:text-sm text-slate-300 hover:text-blue-400 flex items-center space-x-2 cursor-pointer transition-colors text-left"
                    >
                      <CornerDownRight className="w-4 h-4 text-slate-500 flex-shrink-0" />
                      <span>{lnk.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 404
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6 font-sans">
      <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
        <ShieldAlert className="w-9 h-9" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-white tracking-tight font-mono">404 ERROR</h1>
        <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider font-mono">Telemetry Coordinates Lost</h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          The requested coordinate grid or server file path is not mapped on Aether's active index logs.
        </p>
      </div>
      <div className="pt-4">
        <button
          onClick={() => setActiveTab("home")}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-xl cursor-pointer transition-all flex items-center justify-center mx-auto space-x-2"
        >
          <span>Return to Slidell HQ Map</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
