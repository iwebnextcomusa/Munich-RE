import { useState } from "react";
import { BarChart3, ShieldAlert, Cpu, Activity, Clock, Zap, Check, RotateCcw } from "lucide-react";
import { RISK_SOLUTIONS_DATA } from "../data";

export default function RiskSolutions() {
  // Simulator State
  const [region, setRegion] = useState("gulf_coast");
  const [hazard, setHazard] = useState("hurricane");
  const [assetValue, setAssetValue] = useState("500");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResults, setSimResults] = useState<any | null>(null);

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimResults(null);

    setTimeout(() => {
      const assetNum = parseFloat(assetValue);
      let pmlFactor = 0.12; // Base loss factor
      let trigger = "";
      let treatyType = "";

      if (region === "gulf_coast" && hazard === "hurricane") {
        pmlFactor = 0.38;
        trigger = "Central atmospheric pressure < 940 mbar OR sustained winds > 120 mph crossing Slidell coordinate bounds.";
        treatyType = "Parametric Natural Catastrophe Treaty (First-Loss Cover)";
      } else if (region === "europe" && hazard === "cyber") {
        pmlFactor = 0.18;
        trigger = "Systemic cloud outage lasting > 4 hours affecting > 10% of European availability zones.";
        treatyType = "Cyber Aggregation Excess-of-Loss Treaty";
      } else if (region === "asia_pacific" && hazard === "supply_chain") {
        pmlFactor = 0.25;
        trigger = "Geospatial port lockout status of major Singapore transit lanes persisting > 72 consecutive hours.";
        treatyType = "Contingent Business Interruption (CBI) Treaty";
      } else {
        // Fallback calculations
        pmlFactor = hazard === "hurricane" ? 0.30 : hazard === "cyber" ? 0.15 : 0.22;
        trigger = "Objective physical diagnostic trigger matching Level 3 extreme index anomalies.";
        treatyType = "Structured Multi-Line Risk Transfer Treaty";
      }

      const calculatedPML = (assetNum * pmlFactor).toFixed(1);
      const recommendedCapacity = (assetNum * 0.85).toFixed(1);

      setSimResults({
        pml: `$${calculatedPML} Million`,
        capacity: `$${recommendedCapacity} Million`,
        trigger: trigger,
        treaty: treatyType,
        rating: "AA- (S&P Underwritten Guarantee)"
      });
      setIsSimulating(false);
    }, 1800);
  };

  return (
    <div className="space-y-20 pb-16 font-sans">
      {/* Title */}
      <section className="text-center max-w-4xl mx-auto pt-12 space-y-4">
        <span className="text-[10px] font-bold font-mono text-blue-400 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">Analytical Diagnostics</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Actuarial Risk Solutions</h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Pioneering predictive modeling, parametric weather trigger configurations, and AI threat hunting. Utilize our interactive diagnostic console to evaluate structural exposures.
        </p>
      </section>

      {/* Interactive Risk Simulator Console */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-cyan-500/20 shadow-cyan-500/5 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400">
                <Cpu className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide uppercase">Aether Risk Intelligence Simulator</h3>
                <p className="text-[10px] text-slate-400 font-mono">MODEL v4.81-A • SECURED GULF SCENARIO ENGINE</p>
              </div>
            </div>
            <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center space-x-2">
              <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Diagnostic Telemetry Active</span>
            </div>
          </div>

          {/* Simulator Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Input 1: Region */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider">Geographic Region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="gulf_coast">Gulf Coast (Slidell, LA Commands)</option>
                <option value="europe">Europe (Atlantic Maritime & Port Core)</option>
                <option value="asia_pacific">Asia Pacific (Hedge Logistics Hubs)</option>
              </select>
            </div>

            {/* Input 2: Hazard Type */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider">Hazard Model</label>
              <select
                value={hazard}
                onChange={(e) => setHazard(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="hurricane">Category 4/5 Tropical Cyclone Surge</option>
                <option value="cyber">Systemic Cloud Infrastructure Interruption</option>
                <option value="supply_chain">Maritime Logistics Transit Delay</option>
              </select>
            </div>

            {/* Input 3: Asset exposure value */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider">Aggregated Asset Exposure (USD)</label>
              <div className="relative">
                <input
                  type="number"
                  value={assetValue}
                  onChange={(e) => setAssetValue(e.target.value)}
                  min="50"
                  max="10000"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-4 pr-12 py-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-colors font-mono font-bold"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 font-bold">Million</span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="flex justify-center border-t border-slate-800/60 pt-6">
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white px-8 py-3 rounded-xl text-xs font-bold tracking-widest uppercase shadow-md shadow-blue-500/15 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center space-x-2 disabled:bg-slate-800 disabled:text-slate-600 disabled:scale-100"
            >
              {isSimulating ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  <span>Computing Actuarial Metrics...</span>
                </>
              ) : (
                <>
                  <BarChart3 className="w-4 h-4" />
                  <span>Execute Catastrophe Simulation</span>
                </>
              )}
            </button>
          </div>

          {/* Result Output Display */}
          {isSimulating && (
            <div className="bg-slate-950/80 p-8 rounded-2xl border border-slate-900 text-center space-y-4 animate-pulse">
              <div className="flex justify-center">
                <div className="flex space-x-1 px-4 py-2 bg-blue-500/5 rounded-full border border-blue-500/10">
                  <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest">Running geospatial flood planes, pressure dynamics and claims histories</span>
                </div>
              </div>
              <div className="h-2.5 bg-slate-900 rounded-full w-3/4 mx-auto overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full w-2/3 animate-infinite" />
              </div>
            </div>
          )}

          {simResults && !isSimulating && (
            <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate-in fade-in duration-300">
              {/* Output stats */}
              <div className="space-y-4 border-b md:border-b-0 md:border-r border-slate-900 pb-6 md:pb-0 md:pr-8">
                <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest">Simulated Losses</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">PML (Probable Max Loss)</span>
                    <span className="text-2xl font-bold font-mono text-white tracking-tight">{simResults.pml}</span>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">Allocated Treaty Capacity</span>
                    <span className="text-2xl font-bold font-mono text-cyan-400 tracking-tight">{simResults.capacity}</span>
                  </div>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900 flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500">Capital Rating:</span>
                  <span className="text-white font-semibold">{simResults.rating}</span>
                </div>
              </div>

              {/* Parametric metrics and details */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest">Treaty Allocation Instructions</h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-500 font-mono block text-[10px] uppercase font-semibold">Recommended Treaty Structure</span>
                    <span className="text-white font-bold block mt-0.5">{simResults.treaty}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono block text-[10px] uppercase font-semibold">Parametric Claim Payout Trigger</span>
                    <p className="text-slate-300 mt-1 leading-relaxed bg-slate-900/40 p-3 rounded-lg border border-slate-900">{simResults.trigger}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Structured highlighting for core risk capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest">Core Capabilities</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Underwritten Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RISK_SOLUTIONS_DATA.map((sol) => (
            <div key={sol.id} className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 border-b border-slate-900 pb-3">
                  <div className="w-9 h-9 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white leading-tight">{sol.title}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sol.description}
                </p>
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Key Functions</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
                    {sol.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {sol.metricName && (
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-900/60 flex justify-between items-center text-xs font-mono mt-6">
                  <span className="text-slate-500 font-semibold">{sol.metricName}</span>
                  <span className="text-cyan-400 font-extrabold">{sol.metricValue}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
