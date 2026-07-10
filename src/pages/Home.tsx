import { Shield, ArrowRight, Zap, Globe, Cpu, BarChart3, Users, Building2, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA, INSIGHTS_DATA } from "../data";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const stats = [
    { label: "Active Reinsurance Capital", value: "$48B+" },
    { label: "Catastrophe Scenarios Simulated", value: "1.2M+" },
    { label: "Parametric Claim Settlements", value: "< 48 Hrs" },
    { label: "Operational Risk Advisories", value: "12,000+" }
  ];

  const testimonials = [
    {
      quote: "Aether's parametric storm risk modeling saved our Louisiana manufacturing logistics pipeline from complete capital freezing after last season's weather disruptions. Their claims settled inside two days.",
      author: "Chief Risk Officer",
      company: "Gulf Energy & Transport Corp"
    },
    {
      quote: "By placing their treaty directly behind our primary casualty portfolio, Aether Wealth unlocked critical balance sheet capacity, allowing us to expand our construction lines across the southern United States.",
      author: "VP of Specialty Programs",
      company: "Atlas Insurance Alliance"
    }
  ];

  return (
    <div className="space-y-24 pb-16 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 text-center">
        {/* Background glow behind centered content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-blue-400 text-xs font-mono font-bold tracking-wider uppercase animate-pulse">
            <Zap className="w-3.5 h-3.5" />
            <span>Louisiana Operational Hub • Underwriting Active</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl">
            Pivoting Enterprise Volatility into <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Capital Stability</span>
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Aether Wealth & Risk Solutions coordinates world-class reinsurance capacity, robust primary insurance policies, and parametric climate models to safeguard multinational balance sheets against tomorrow's extreme hazards.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("services")}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all shadow-lg shadow-blue-600/10 hover:shadow-blue-600/30 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab("risk-solutions")}
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Simulate Risk Models</span>
            </button>
          </div>

          {/* Micro details */}
          <div className="flex items-center justify-center space-x-6 text-[11px] text-slate-400 font-mono border-t border-slate-900 pt-6 w-full max-w-md">
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>S&P Rated AA-</span>
            </span>
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Fully Solvency II Compliant</span>
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-950/60 border-y border-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((st, idx) => (
            <div key={idx} className="text-center md:text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-mono">{st.value}</div>
              <div className="text-[10px] sm:text-xs font-bold font-mono text-slate-400 uppercase tracking-widest leading-normal">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest">Enterprise Offerings</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Underwriting Sophisticated Risk</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            We operate across multiple risk tiers. Whether backing regional casualty providers or orchestrating direct industrial safety programs, our models are optimized for financial recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 3).map((srv) => (
            <div key={srv.id} className="glass-panel p-6 rounded-2xl space-y-6 hover:border-slate-700/60 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">{srv.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{srv.description}</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-900">
                <div className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Key Capacity Features</div>
                <ul className="space-y-1">
                  {srv.keyFeatures.slice(0, 2).map((kf, i) => (
                    <li key={i} className="text-[11px] text-slate-300 flex items-center space-x-1.5">
                      <span className="h-1 w-1 bg-cyan-400 rounded-full" />
                      <span>{kf}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setActiveTab("services")}
                  className="text-xs text-blue-400 font-bold hover:text-white flex items-center space-x-1 mt-4 transition-colors cursor-pointer"
                >
                  <span>Review full underwriting criteria</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Climate Modeling Feature (Detailed Callout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-bold font-mono bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-cyan-400 uppercase tracking-wider">Climate & Natural Catastrophe Focus</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">Securing the Gulf Coast & Global Ports against Climatic Surges</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Operating our regional command from Slidell, Louisiana, we specialize in constructing high-capacity reinsurance portfolios and parametric shields that trigger immediate liquidity. Our models assess water tables, atmospheric wind pressure, and surge metrics to safeguard municipal networks, heavy offshore energy arrays, and coastal transport lanes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-2.5">
                <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Advanced Geospatial Data</h4>
                  <p className="text-[11px] text-slate-400">High-resolution tracking of meteorological changes, water elevations, and tropical pressures.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Cpu className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Algorithmic Underwriting</h4>
                  <p className="text-[11px] text-slate-400">Parametric treaties engineered with instantaneous payout triggers tied to scientific data.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button 
                onClick={() => setActiveTab("risk-solutions")} 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
              >
                Access Geospatial Models
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-900 space-y-6 shadow-xl">
            <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-3">Active Gulf Simulation</h4>
            <div className="space-y-4 font-mono text-xs text-slate-300">
              <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded border border-slate-800/40">
                <span className="text-slate-500">Location:</span>
                <span className="text-white font-semibold">Slidell, LA (Gulf Coast)</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded border border-slate-800/40">
                <span className="text-slate-500">Simulation Iteration:</span>
                <span className="text-cyan-400 font-semibold">LA-CAT-2026-V5</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded border border-slate-800/40">
                <span className="text-slate-500">PML (Probable Max Loss):</span>
                <span className="text-white font-semibold">Calculated on $2.5B exposure</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded border border-slate-800/40">
                <span className="text-slate-500">Parametric Trigger Level:</span>
                <span className="text-amber-400 font-semibold">Wind speeds &gt; 115mph</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 leading-normal font-mono text-center pt-2">
              ⚠️ Simulated environment only. Contact core underwriters for official treaty capacity allocations.
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-950/40 border-y border-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest">Corporate Endorsements</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Trust In Our Capacity</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/60 relative flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-900 pt-4 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-white">{t.author}</h5>
                    <p className="text-[10px] text-slate-400 font-mono font-semibold">{t.company}</p>
                  </div>
                  <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400 text-xs font-bold font-mono">
                    Broker Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Taster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-900 pb-6">
          <div>
            <h2 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest">Industry Briefings</h2>
            <h3 className="text-3xl font-extrabold text-white">Latest Strategic Intelligence</h3>
          </div>
          <button
            onClick={() => setActiveTab("insights")}
            className="text-xs text-blue-400 font-bold hover:text-white hover:underline flex items-center space-x-1 transition-all cursor-pointer"
          >
            <span>Review all publications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSIGHTS_DATA.map((blog) => (
            <div 
              key={blog.id} 
              onClick={() => setActiveTab("insights")}
              className="glass-panel p-6 rounded-xl hover:bg-slate-900/50 hover:border-slate-800 cursor-pointer transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-blue-400 font-bold uppercase tracking-wider">{blog.category}</span>
                  <span className="text-slate-500">{blog.date}</span>
                </div>
                <h4 className="text-sm font-bold text-white hover:text-blue-400 transition-colors leading-snug">{blog.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{blog.summary}</p>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-900 pt-3">
                <span>{blog.author.split(",")[0]}</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Footer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-blue-900/40 via-cyan-950/20 to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Coordinate with Core Underwriters</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Aether's corporate risk structures require comprehensive evaluation of underlying schedules, asset logs, and geological exposures. Initiate a diagnostic audit with our core team today.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 pt-2">
            <button 
              onClick={() => setActiveTab("contact")} 
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all shadow-md cursor-pointer"
            >
              Initiate Risk Consultation
            </button>
            <a 
              href="mailto:hr.ericwilliams@gmail.com" 
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-5 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center cursor-pointer"
            >
              Email Core Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
