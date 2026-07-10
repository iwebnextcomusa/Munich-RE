import { Shield, Eye, Heart, Target, Globe, Award, CheckCircle2, Building2 } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Solvency & Resilience",
      description: "Maintaining AAA capital backing and strict balance sheet reserves to absorb catastrophic global volatility on behalf of our clients."
    },
    {
      icon: Target,
      title: "Actuarial Rigor",
      description: "Rooting underwritings in rigorous meteorological archives, telemetry, and empirical statistics—not speculative projections."
    },
    {
      icon: Eye,
      title: "Parametric Trust",
      description: "Championing instantaneous, data-triggered parametric models that eliminate lengthy claims disputes."
    }
  ];

  const leaders = [
    {
      name: "Eric Williams",
      role: "Managing Director & Head of Talent Acquisitions",
      desc: "Architecting global human resource programs to assemble the world's finest catastrophe modelers and quantitative underwriters.",
      contact: "hr.ericwilliams@gmail.com"
    },
    {
      name: "Dr. Marcus Vance",
      role: "Lead Climate Risk Scientist",
      desc: "Ph.D. in Climatology. Oversees geospatial surge simulation matrices and flood plain telemetry in Slidell, LA.",
      contact: "603-513-8973"
    },
    {
      name: "Elena Rostov",
      role: "VP of Enterprise Cyber Underwriting",
      desc: "Cyber threat response strategist. Formulates proactive ransomware exposure and digital liability treaty protections.",
      contact: "Slidell Command Center"
    }
  ];

  return (
    <div className="space-y-24 pb-16 font-sans">
      {/* Overview Hero */}
      <section className="relative pt-12 text-center max-w-4xl mx-auto space-y-6">
        <span className="text-[10px] font-bold font-mono text-blue-400 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider">Corporate Profile</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Our Mission & Global Solvency</h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Operating as an enterprise leader in reinsurance, primary insurance coverage, and data-driven risk consulting, Aether Wealth and Risk Solutions acts as a shock absorber for global commerce. Headquartered in Slidell, Louisiana, we specialize in absorbing extreme risks—from hurricane surges to catastrophic cybersecurity events—so primary insurers can grow confidently.
        </p>
      </section>

      {/* Mission / Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-2xl space-y-4">
          <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
            <Target className="w-5.5 h-5.5" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">Our Mission</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            To provide robust, uncompromised capital resilience for insurance portfolios and global networks. We seek to replace legacy, inefficient litigation-heavy claims models with scientific, data-driven, and near-instant parametric risk financing solutions.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl space-y-4">
          <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
            <Eye className="w-5.5 h-5.5" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">Our Vision</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            A future where climate vulnerability and digital disruption are precisely budgeted and pre-capitalized. By applying active network telemetry and next-generation weather simulation, we aim to prevent business operational halts altogether.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest">Operating Standards</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Underwritten by Core Principles</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <div key={idx} className="glass-panel p-6 rounded-xl space-y-4">
                <div className="w-9 h-9 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center text-blue-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{v.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest">Executive Board</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Senior Leadership</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl space-y-4 hover:border-blue-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="h-44 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 rounded-xl border border-slate-900 flex items-center justify-center text-slate-600 relative overflow-hidden">
                  <Shield className="w-16 h-16 opacity-10 absolute -bottom-4 -right-4" />
                  <div className="text-center p-4">
                    <h5 className="text-sm font-bold text-white tracking-wide">{leader.name}</h5>
                    <p className="text-[10px] text-slate-400 font-mono font-semibold uppercase mt-0.5">{leader.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-2">
                  {leader.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-900 text-[11px] font-mono text-slate-500 flex justify-between items-center">
                <span>Credentials Verified</span>
                <span className="text-blue-400">{leader.contact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Responsibility */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-wider">Social Impact</span>
            <h3 className="text-3xl font-extrabold text-white">Louisiana Resilience Initiative</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We believe a global reinsurer must actively bolster local resilience. Operating in Slidell, Louisiana, we dedicate significant resources to funding structural seawall designs, public drainage diagnostics, and municipal parametric coverage solutions that shelter local schools and services during environmental emergencies.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% Carbon-neutral Louisiana headquarters operations</span>
              </li>
              <li className="flex items-center space-x-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Direct grants to storm hydrology models in Gulf universities</span>
              </li>
              <li className="flex items-center space-x-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Subsidized risk assessments for regional non-profit medical centers</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/40 p-8 rounded-2xl border border-slate-900 flex flex-col items-center justify-center text-center space-y-4 shadow-xl">
            <Award className="w-14 h-14 text-cyan-400 animate-pulse" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Gulf Resilience Award</h4>
            <p className="text-[11px] text-slate-400">
              Honored by the Southern Insurance Federation for pioneering community parametric emergency capital reserves in Slidell.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
