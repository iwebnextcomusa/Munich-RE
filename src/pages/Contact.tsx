import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Shield, Globe, Compass } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firm: "",
    subject: "reinsurance",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 pb-16 font-sans">
      {/* Title */}
      <section className="text-center max-w-4xl mx-auto pt-12 space-y-4">
        <span className="text-[10px] font-bold font-mono text-blue-400 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">Underwriting Command</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Connect with Our Desk</h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Our core risk consulting specialists and treaty underwriters are stationed in Slidell, Louisiana. Reach out to coordinate capacity audits.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Coordinates & Map */}
        <div className="lg:col-span-5 space-y-6">
          {/* Coordinates Card */}
          <div className="glass-panel p-6 rounded-2xl space-y-6">
            <h3 className="text-sm font-bold font-mono text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-3">Strategic Coordinates</h3>
            
            <div className="space-y-4 text-xs">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[10px]">Primary Direct Desk</h4>
                  <a href="tel:603-513-8973" className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-semibold">603-513-8973</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[10px]">Secure Telemetry Email</h4>
                  <a href="mailto:hr.ericwilliams@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-semibold">hr.ericwilliams@gmail.com</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[10px]">Operations Command</h4>
                  <p className="text-slate-300 text-sm">Slidell, Louisiana, USA</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">Gulf Resilience Grid Coordinate: 30.2755° N, 89.7812° W</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[10px]">Underwriting Desk Hours</h4>
                  <p className="text-slate-300 text-sm">Monday to Friday, 8:00 AM – 6:00 PM CST</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">Closed during extreme Gulf storm closures.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Vector Representation */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-900 pb-2">
              <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest flex items-center space-x-2">
                <Compass className="w-4 h-4 text-cyan-400 animate-spin" />
                <span>Geospatial Alignment</span>
              </h4>
              <span className="text-[10px] font-mono text-slate-500 font-bold">SLIDELL HUB</span>
            </div>
            
            {/* Custom SVG Coordinate Grid */}
            <div className="h-44 bg-slate-950 border border-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden group">
              {/* Grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
              {/* Radar circles */}
              <div className="absolute w-32 h-32 border border-blue-500/10 rounded-full animate-ping" />
              <div className="absolute w-24 h-24 border border-cyan-500/10 rounded-full" />
              
              {/* Coordinates Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50">
                  <span className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
                </div>
                <span className="text-[10px] font-mono font-bold text-white bg-slate-900/90 border border-slate-800 py-1 px-2.5 rounded-lg mt-2 tracking-wider">
                  Slidell HQ Command
                </span>
              </div>

              {/* Surrounding Scenarios */}
              <div className="absolute top-4 left-6 text-[9px] font-mono text-slate-600">Pontchartrain Basin</div>
              <div className="absolute bottom-4 right-6 text-[9px] font-mono text-slate-600">NatCat Grid V5</div>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal text-center font-mono">
              Vector grid mapping our headquarters location on the Pontchartrain shoreline.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7 bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/80 min-h-[480px]">
          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-wide">Audit Inquiry Transmitted</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>. Your underwriting audit request for <span className="text-white font-bold">{formData.firm}</span> is logged. Our core desk will evaluate your schedule and respond within 1 operational day.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", firm: "", subject: "reinsurance", message: "" }); }}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Submit Secondary Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white">Underwriting Inquiry Form</h3>
                <p className="text-xs text-slate-400">Request capital allocations or diagnostic consulting.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Consultant Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Eric Williams"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Secure Corporate Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@firm.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Firm Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Operating Firm / Carrier</label>
                  <input
                    type="text"
                    required
                    value={formData.firm}
                    onChange={(e) => setFormData({...formData, firm: e.target.value})}
                    placeholder="Atlas Re Ltd"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Inquiry Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Treaty Exposure Category</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="reinsurance">Global Reinsurance treaties</option>
                    <option value="primary">Corporate Primary Property limits</option>
                    <option value="climate">Parametric NatCat models</option>
                    <option value="consulting">Operational Risk Consulting Audits</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Underwriting Scope / Message Details</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Detail your carrier schedules, aggregated property locations, or security assets..."
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500 font-sans"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold tracking-widest uppercase py-3 rounded-xl cursor-pointer shadow-md shadow-blue-500/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Underwriting Scope</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
