import { useState } from "react";
import { ShieldCheck, Cpu, Flame, Truck, Building2, Anchor, Wheat, ShoppingBag, Eye, HelpCircle } from "lucide-react";

interface IndustryDetail {
  id: string;
  title: string;
  icon: any;
  desc: string;
  challenges: string[];
  solutions: string[];
}

export default function Industries() {
  const [selectedInd, setSelectedInd] = useState("energy");

  const industriesList: IndustryDetail[] = [
    {
      id: "energy",
      title: "Energy & Utilities",
      icon: Flame,
      desc: "Protecting off-shore wind arrays, solar installations, and conventional electrical grids from severe meteorological occurrences, carbon asset liabilities, and transition outages.",
      challenges: [
        "Grid destruction due to category 4+ cyclones and severe ice storms.",
        "Stricter compliance mandates surrounding pollution liability and emissions.",
        "Revenue drop-offs resulting from seasonal wind or solar droughts."
      ],
      solutions: [
        "Parametric resource guarantees protecting renewable capital.",
        "A-rated comprehensive environmental liability policies.",
        "Physical damage reinsurances underwritten using regional surge modeling."
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare & Life Sciences",
      icon: ShieldCheck,
      desc: "Securing hospitals, clinical trial labs, and medical equipment builders against malpractice litigation, cyber ransom, and operational delays.",
      challenges: [
        "Ransomware encryption of vital, highly confidential patient records.",
        "Severe liability claims arising from multinational clinical trial issues.",
        "Inflationary litigation trends driving professional malpractice costs."
      ],
      solutions: [
        "Specialized cyber-risk treaties paired with active diagnostic scans.",
        "Cross-border medical E&O and clinical trial program structures.",
        "Underwriting pools backed by deep actuarial loss reserves."
      ]
    },
    {
      id: "manufacturing",
      title: "Heavy Manufacturing",
      icon: Cpu,
      desc: "Protecting high-capacity factory machinery, assembly mills, and global cargo logistics lines from contingent business interruption.",
      challenges: [
        "Unpredicted equipment breakdowns halting entire factory production.",
        "Supply chain material freezes resulting from port blockages.",
        "Expensive product recall actions due to factory component defects."
      ],
      solutions: [
        "Inherent defect and machinery breakdown treaty covers.",
        "Structured contingent business interruption protections.",
        "Global product liability and recall logistics covers."
      ]
    },
    {
      id: "transportation",
      title: "Transportation & Logistics",
      icon: Truck,
      desc: "Covering commercial aviation fleets, maritime container vessels, rail lines, and automated cargo warehouses worldwide.",
      challenges: [
        "Severe marine cargo delays resulting from canal blockages.",
        "Escalating environmental compliance and emissions fines.",
        "Physical asset losses due to piracy, weather surges, or accidents."
      ],
      solutions: [
        "Hull & Machinery coverage paired with cargo protections.",
        "Parametric delay risk transfer indices for major shipping lines.",
        "Multimodal transit risk capacity treaty limits."
      ]
    },
    {
      id: "construction",
      title: "Commercial Construction",
      icon: Building2,
      desc: "Securing large-scale real estate, public civil works, and infrastructure programs against builder's risk and labor litigation.",
      challenges: [
        "Physical site destructions due to extreme tropical storms.",
        "Complex subcontractor disputes and third-party safety claims.",
        "Escalating prices of raw construction commodities."
      ],
      solutions: [
        "Builder's Risk Treaty Capacity with high limits.",
        "Structured professional liability and wrapping programs.",
        "Parametric weather models covering project wind/water delays."
      ]
    },
    {
      id: "financial-services",
      title: "Financial Institutions",
      icon: Anchor,
      desc: "Mitigating capital shortages, portfolio devaluations, and management liabilities for banks, brokers, and investment houses.",
      challenges: [
        "Complex D&O lawsuits targeting board members' investment actions.",
        "Systemic counterparty default cycles during market freezes.",
        "Severe cyber-theft breaches compromising transaction nodes."
      ],
      solutions: [
        "High-limit Directors & Officers (D&O) liability covers.",
        "Credit risk transfer and capital relief reinsurance treaties.",
        "Specialist transaction cyber extortion programs."
      ]
    },
    {
      id: "technology",
      title: "Technology & Cloud Services",
      icon: Cpu,
      desc: "Insuring server campuses, SaaS organizations, and advanced artificial intelligence developers from professional liability.",
      challenges: [
        "Severe cloud downtime incidents prompting massive client SLA claims.",
        "Intellectual property lawsuits targeting software patents.",
        "Data leakage penalties due to automated breaches."
      ],
      solutions: [
        "Tech Errors & Omissions (E&O) and system outage covers.",
        "IP litigation defense insurance treaties.",
        "Enterprise-level cybersecurity risk capacity limits."
      ]
    },
    {
      id: "government",
      title: "Government & Public Entities",
      icon: ShieldCheck,
      desc: "Providing custom disaster resilience treaties and municipal risk consulting to city councils, ports, and regional programs.",
      challenges: [
        "Severe natural catastrophes draining emergency budget reserves.",
        "Critical civil infrastructure damage halting vital services.",
        "Shifting regulatory liabilities for public resource systems."
      ],
      solutions: [
        "Parametric NatCat capital pools for disaster recovery.",
        "Public entity structural property reinsurances.",
        "Resilience diagnostic reviews mapping local assets."
      ]
    },
    {
      id: "agriculture",
      title: "Agriculture & Forestry",
      icon: Wheat,
      desc: "Guarantees against severe windstorms, historic crop droughts, and flood damage for agricultural cooperatives and paper mills.",
      challenges: [
        "Long-term crop yield failures stemming from extreme climate shifts.",
        "Severe flooding washing out valuable soil and storage structures.",
        "Unpredictable crop commodity pricing volatility."
      ],
      solutions: [
        "Parametric weather crop yield insurance contracts.",
        "Physical damage coverages for major storage facilities.",
        "Structured agricultural treaty limits."
      ]
    },
    {
      id: "retail",
      title: "Retail & Supply Chains",
      icon: ShoppingBag,
      desc: "Insuring global warehouse logistics networks, retail supply centers, and automated inventory pipelines from trade credit losses.",
      challenges: [
        "Systemic product line blockages halting raw material delivery.",
        "Physical warehouse damage destroying millions in seasonal assets.",
        "Customer transaction payment defaults."
      ],
      solutions: [
        "Contingent Business Interruption (CBI) supply models.",
        "Global logistics property and inventory covers.",
        "Trade Credit Reinsurance protecting accounts receivable."
      ]
    }
  ];

  const activeIndDetail = industriesList.find((i) => i.id === selectedInd) || industriesList[0];

  return (
    <div className="space-y-16 pb-16 font-sans">
      {/* Page Title */}
      <section className="text-center max-w-4xl mx-auto pt-12 space-y-4">
        <span className="text-[10px] font-bold font-mono text-blue-400 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">Industrial Sectors</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Sectors We Safeguard</h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Operational exposures differ dramatically by sector. Our underwriters build industry-specific risk transfer programs covering 10 primary markets.
        </p>
      </section>

      {/* Grid of All 10 Industries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {industriesList.map((ind) => {
            const Icon = ind.icon;
            const isSelected = ind.id === selectedInd;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedInd(ind.id)}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-2 cursor-pointer h-28 ${
                  isSelected
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/15 scale-105"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <Icon className={`w-6 h-6 ${isSelected ? "text-white" : "text-blue-400"}`} />
                <span className="text-[11px] font-bold tracking-wide uppercase leading-tight">{ind.title.split(" & ")[0]}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected Industry Detail Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Column: Icon + Description */}
          <div className="lg:col-span-4 space-y-5">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
              <activeIndDetail.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">{activeIndDetail.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeIndDetail.desc}
            </p>
            <div className="pt-4">
              <a
                href="mailto:hr.ericwilliams@gmail.com?subject=Industrial Underwriting Allocation Inquiry"
                className="inline-flex items-center space-x-2 bg-slate-950 border border-slate-800 hover:bg-slate-900 text-slate-200 px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <span>Request Sector Allocations</span>
              </a>
            </div>
          </div>

          {/* Right Column: Challenges vs Solutions */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Challenges */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 space-y-4">
              <h4 className="text-xs font-bold font-mono text-rose-400 uppercase tracking-widest border-b border-slate-900 pb-3">Critical Challenges</h4>
              <ul className="space-y-4">
                {activeIndDetail.challenges.map((chal, idx) => (
                  <li key={idx} className="space-y-1">
                    <span className="text-[10px] font-bold font-mono text-rose-400/80 uppercase">0{idx + 1}. Exposure Point</span>
                    <p className="text-xs text-slate-300 leading-normal">{chal}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 space-y-4">
              <h4 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-900 pb-3">Aether Solutions</h4>
              <ul className="space-y-4">
                {activeIndDetail.solutions.map((sol, idx) => (
                  <li key={idx} className="space-y-1">
                    <span className="text-[10px] font-bold font-mono text-emerald-400/80 uppercase">0{idx + 1}. Treaty Mitigation</span>
                    <p className="text-xs text-slate-300 leading-normal">{sol}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-950/60 p-5 rounded-2xl border border-slate-900 text-center space-y-2">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Multinational Programs Note</h4>
        <p className="text-[11px] text-slate-400 leading-relaxed max-w-2xl mx-auto">
          We underwrite assets and operations spanning 180+ jurisdictions. All industry treaties are structured to align directly with local solvency codes, environmental limits, and regulatory reporting mandates.
        </p>
      </section>
    </div>
  );
}
