import { useState } from "react";
import { ShieldCheck, Activity, Globe, Cpu, Zap, Heart, Database, HelpCircle, FileText, Check, ArrowRight } from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  desc: string;
  benefits: string[];
  industries: string[];
  features: string[];
  capacityLimit: string;
}

export default function Services() {
  const [activeService, setActiveService] = useState("reinsurance");

  const servicesList: ServiceDetail[] = [
    {
      id: "reinsurance",
      title: "Reinsurance Solutions",
      category: "Reinsurance & Capital",
      desc: "Comprehensive treaty and facultative backing designed to manage carrier capital, stabilize earnings, and absorb massive catastrophe aggregations. We transfer and hold large scale risk books under solvent structures.",
      benefits: [
        "Unlocks severe loss buffer limits for primary portfolios",
        "Significantly lowers your operational Solvency II capital burdens",
        "Bespoke proportional and aggregate stop-loss treaties"
      ],
      industries: ["Financial Institutions", "Government", "Transportation", "Technology"],
      features: ["Quota Share Treaty", "Catastrophe Excess of Loss (XL)", "Loss Portfolio Transfers"],
      capacityLimit: "Up to $1.2B per Treaty Treaty"
    },
    {
      id: "primary-insurance",
      title: "Primary Insurance (Enterprise Property)",
      category: "Primary & Casualty",
      desc: "A-rated commercial property risk structures safeguarding massive manufacturing plants, physical logistics chains, and real estate assets around the world.",
      benefits: [
        "Protects physical capital assets against wind, fire, and flood",
        "Global programmatic insurance that bridges geographical divisions",
        "Comprehensive replacement-cost loss valuations"
      ],
      industries: ["Manufacturing", "Construction", "Retail", "Energy"],
      features: ["All-Risk Property Coverage", "Equipment Breakdown Liability", "Business Interruption Integration"],
      capacityLimit: "Up to $250M per Incident"
    },
    {
      id: "property-insurance",
      title: "Commercial Property Coverages",
      category: "Primary & Casualty",
      desc: "Specialized asset protection underwritten for hazardous physical environments, including chemical processors, heavy industrial mills, and marine shipping hubs.",
      benefits: [
        "Integrated damage assessments using high-resolution drone scanning",
        "Loss control adjustments to lower ongoing renewal premiums",
        "Direct coverage for secondary environmental exposures"
      ],
      industries: ["Manufacturing", "Energy", "Transportation"],
      features: ["Difference-in-Conditions (DIC) policy", "Inland Marine Cargo Cover", "Valued Asset Underwritings"],
      capacityLimit: "Up to $150M Allocation"
    },
    {
      id: "casualty-insurance",
      title: "Casualty Insurance Solutions",
      category: "Primary & Casualty",
      desc: "Defending large-scale enterprises against severe general liability claims, product failures, and complex third-party legal challenges.",
      benefits: [
        "Mitigates heavy class-action legal defense costs",
        "Tailored products for high-risk corporate operational profiles",
        "Saves long-term capital using structured resolution metrics"
      ],
      industries: ["Healthcare", "Manufacturing", "Construction", "Transportation"],
      features: ["General Liability Umbrella", "Product Recall & Safety Liability", "Environmental Damage Indemnity"],
      capacityLimit: "Up to $100M Umbrella Capacity"
    },
    {
      id: "life-health",
      title: "Life & Health (Group Plans)",
      category: "Specialty & Benefit Risks",
      desc: "High-value corporate group life, accidental death, and specialized disability programs mapped for multinational workforces and executive teams.",
      benefits: [
        "Reduces premium volatility with deep reinsurance pools",
        "Provides competitive talent recruitment advantages",
        "Streamlined automated claim processing dashboards"
      ],
      industries: ["Healthcare", "Technology", "Retail", "Financial Services"],
      features: ["Group Accident & Disability Treaties", "Key Person Protection Policies", "Multinational Pool Underwriting"],
      capacityLimit: "Flexible Pool Allocation"
    },
    {
      id: "cyber-risk",
      title: "Cyber Risk Management & E&O",
      category: "Specialty & Benefit Risks",
      desc: "Defending corporate networks from systemic ransomware lockouts, data thefts, and system interruption liabilities with active vulnerability telemetries.",
      benefits: [
        "Immediate mitigation panel response within 60 minutes",
        "Covers regulatory GDPR/HIPAA violation penalty costs",
        "Active server port vulnerability scanning integrated"
      ],
      industries: ["Technology", "Healthcare", "Financial Services", "Retail"],
      features: ["Ransomware Extortion Protection", "Business Interruption Losses", "Third-Party Data Liability"],
      capacityLimit: "Up to $75M Cover"
    },
    {
      id: "specialty-risks",
      title: "Specialty Operational Risks",
      category: "Specialty & Benefit Risks",
      desc: "Underwriting highly atypical, volatile, or non-standard exposures—including trade credit locks, kidnap & ransom, and event cancellations.",
      benefits: [
        "Protects foreign assets from geopolitical seizures",
        "Guarantees critical accounts receivable balances",
        "Covers severe weather event cancellations instantly"
      ],
      industries: ["Government", "Transportation", "Financial Services", "Retail"],
      features: ["Geopolitical Trade Credit Guarantees", "Kidnap & Ransom (K&R) Protection", "Enterprise Event Non-Appearance Covers"],
      capacityLimit: "Up to $50M Capacity"
    },
    {
      id: "climate-risk",
      title: "Climate Risk & Transitions",
      category: "Climate & Environmental",
      desc: "Scientific models and parametric weather derivatives designed to shield businesses against wind droughts, severe heat, and agricultural failure.",
      benefits: [
        "Protects renewable solar & wind revenues from weather variances",
        "Guarantees stable cash flow during climate transition cycles",
        "Underwritten with scientific climate projections"
      ],
      industries: ["Energy", "Agriculture", "Government", "Construction"],
      features: ["Parametric Weather Derivatives", "Transition Asset Risk Safeguards", "Renewable Energy Capacity Guarantees"],
      capacityLimit: "Up to $200M per Underwriting Cycle"
    },
    {
      id: "nat-cat",
      title: "Natural Catastrophe (NatCat) Solutions",
      category: "Climate & Environmental",
      desc: "Pioneering high-capacity parametric structures safeguarding coastal infrastructures from severe windstorms, storm surges, and earthquakes.",
      benefits: [
        "Bypasses lengthy loss adjustments—instant payout within days",
        "Scientific data triggers based on wind/seismic measurements",
        "Direct emergency capital infusion for municipal restoration"
      ],
      industries: ["Government", "Energy", "Construction", "Agriculture"],
      features: ["Parametric Hurricane Surge Cover", "Seismic Motion Trigger Treaties", "Severe Flood Indexing Policies"],
      capacityLimit: "Up to $500M Parametric Limits"
    },
    {
      id: "risk-consulting",
      title: "Operational Risk Consulting",
      category: "Advisory & Analytics",
      desc: "Direct advisory programs analyzing logistics layouts, factory assembly points, and facility guidelines to lower the Total Cost of Risk (TCOR).",
      benefits: [
        "Direct reduction in frequency of primary liability incidents",
        "Optimizes corporate safety rules to earn lower premiums",
        "Strengthens supply chain integrity checkpoints"
      ],
      industries: ["Manufacturing", "Transportation", "Construction", "Healthcare"],
      features: ["Business Continuity Auditing", "Facility Fire Safety Assessments", "Offshore Logistics Engineering"],
      capacityLimit: "Continuous Global Consulting"
    },
    {
      id: "data-analytics",
      title: "Geospatial Risk & Data Analytics",
      category: "Advisory & Analytics",
      desc: "Cloud platforms utilizing advanced machine learning and GIS maps to model real-time exposure accumulation.",
      benefits: [
        "Identifies localized geo-hazards inside portfolio boundaries",
        "Interactive dashboard displaying critical tracking changes",
        "Pre-empts asset exposure overlays dynamically"
      ],
      industries: ["Financial Services", "Technology", "Government", "Agriculture"],
      features: ["Geospatial Exposure Visualizers", "Real-time Accumulation Models", "Actuarial Diagnostic Dashboards"],
      capacityLimit: "Secure Web Access Engine"
    },
    {
      id: "digital-risk",
      title: "Digital Risk Solutions",
      category: "Advisory & Analytics",
      desc: "Automating underwriting APIs, smart contracts, and parametric claims settlement systems for modern digital platforms.",
      benefits: [
        "Seamless API integration into retail travel or flight platforms",
        "Automated, cryptographically verified smart treaty payouts",
        "Highly streamlined low-overhead policy issuance"
      ],
      industries: ["Technology", "Financial Services", "Retail", "Transportation"],
      features: ["Smart Contract Insurance", "Transactional Underwriting APIs", "Instant Digital Claims Settlers"],
      capacityLimit: "Scalable API Transaction Limits"
    }
  ];

  const selectedService = servicesList.find((s) => s.id === activeService) || servicesList[0];

  const categories = Array.from(new Set(servicesList.map((s) => s.category)));

  return (
    <div className="space-y-16 pb-16 font-sans">
      {/* Header Banner */}
      <section className="text-center max-w-4xl mx-auto pt-12 space-y-4">
        <span className="text-[10px] font-bold font-mono text-blue-400 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">Underwriting Offerings</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Enterprise Portfolio Coverages</h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          From high-volume treaty reinsurance limits to parametric climate models, we underwrite the most complex global risks. Discover our 12 core solutions mapped to your industrial exposures.
        </p>
      </section>

      {/* Interactive Sidebar / Tab Interface */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List of Services by Category */}
        <div className="lg:col-span-4 space-y-6">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-2">
              <h4 className="text-[11px] font-bold font-mono text-slate-500 uppercase tracking-widest px-3">{cat}</h4>
              <div className="space-y-1">
                {servicesList
                  .filter((s) => s.category === cat)
                  .map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setActiveService(srv.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider block transition-all cursor-pointer ${
                        activeService === srv.id
                          ? "bg-gradient-to-r from-blue-900/60 to-slate-900 border-l-4 border-blue-400 text-white shadow-md font-bold"
                          : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                      }`}
                    >
                      {srv.title.replace("Primary Insurance (", "").replace(")", "").replace("Solutions", "").trim()}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Detailed Service Panel with animations */}
        <div className="lg:col-span-8 bg-slate-900/40 p-6 sm:p-10 rounded-3xl border border-slate-800/80 space-y-8 min-h-[500px] flex flex-col justify-between">
          <div className="space-y-6">
            {/* Service Category & Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-[10px] font-bold font-mono text-cyan-400 tracking-wider uppercase">{selectedService.category}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">{selectedService.title}</h2>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-lg text-blue-400 font-mono text-xs font-bold text-center self-start sm:self-center">
                Capacity Limit: {selectedService.capacityLimit}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedService.desc}
            </p>

            {/* Features & Benefits Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Underwriting Features</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Measurable Benefits</h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Industries served */}
            <div className="pt-4 border-t border-slate-900 space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Core Industries Served</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-mono py-1 px-2.5 rounded-lg"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Underwriting Contact CTA */}
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <div>
              <h4 className="text-xs font-bold text-white">Require custom treaty structuring?</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Connect directly with our Slidell-based risk advisory panel.</p>
            </div>
            <a
              href="mailto:hr.ericwilliams@gmail.com?subject=Munich RE Underwriting Inquiry"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center space-x-2 cursor-pointer self-stretch sm:self-auto justify-center text-center"
            >
              <span>Initiate Audit Request</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-12">
        <div className="text-center space-y-2">
          <HelpCircle className="w-10 h-10 text-cyan-400 mx-auto" />
          <h3 className="text-2xl font-extrabold text-white">Underwriting FAQs</h3>
          <p className="text-xs text-slate-400">Common structural inquiries regarding Munich RE's reinsurance limits.</p>
        </div>

        <div className="space-y-4">
          <div className="glass-panel p-5 rounded-xl space-y-2">
            <h4 className="text-sm font-bold text-white">What is the standard onboarding cycle for a treaty placement?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard placements undergo a 14-day data-gathering period where our Slidell engineers run your historical loss ledgers through our active catastrophe modeling simulator. Following PML calculations, pricing is finalized and issued via treaty agreement.
            </p>
          </div>
          <div className="glass-panel p-5 rounded-xl space-y-2">
            <h4 className="text-sm font-bold text-white">Are parametric settlements available to retail commercial policyholders?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Yes, our parametric NatCat products are structured for large corporate policyholders who require rapid cash-flow preservation (e.g., ports, factories, hotels). We trigger claims based on verified meteorological readings, distributing settlement capital directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
