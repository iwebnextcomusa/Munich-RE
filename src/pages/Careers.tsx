import React, { useState } from "react";
import { Users, Award, Heart, Briefcase, ChevronRight, X, ArrowRight, CheckCircle, Upload } from "lucide-react";
import { CAREERS_DATA } from "../data";
import { JobOpening } from "../types";

export default function Careers() {
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    fileName: ""
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  const handleFileUpload = () => {
    setFormData((prev) => ({ ...prev, fileName: "Resume_Aether_Transfer_Ready.pdf" }));
  };

  const benefits = [
    {
      title: "Solvency Backing & Compensation",
      desc: "Top-tier base salaries with discretionary annual performance bonuses tied to underwriting and model accuracy.",
      icon: Award
    },
    {
      title: "Health & Care Security",
      desc: "Comprehensive family medical, dental, and eye-care programs with full health savings account match.",
      icon: Heart
    },
    {
      title: "Slidell Hybrid Adaptability",
      desc: "Flexible remote work options paired with customized office schedules inside our Slidell operations center.",
      icon: Users
    }
  ];

  return (
    <div className="space-y-20 pb-16 font-sans">
      {/* Title */}
      <section className="text-center max-w-4xl mx-auto pt-12 space-y-4">
        <span className="text-[10px] font-bold font-mono text-blue-400 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">Talent Acquisition</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Join Aether's Risk Analysts</h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Pioneer parametric weather triggers and cyber threat telemetry. Work with Dr. Marcus Vance, Elena Rostov, and our team in Slidell, Louisiana.
        </p>
      </section>

      {/* Culture & Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((ben, idx) => {
          const Icon = ben.icon;
          return (
            <div key={idx} className="glass-panel p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                <Icon className="w-5.5 h-5.5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">{ben.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{ben.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Culture callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/30">
          <div className="space-y-4">
            <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-wider">Our Culture</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Engineering Safety Under Volatility</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We operate at the convergence of geophysical sciences, advanced cyber defenses, and institutional finance. Our corporate culture values scientific precision, intellectual humility, and cross-discipline collaboration. From modeling storm surges in Louisiana to security telemetry in European clouds, our engineers solve problems of massive scale.
            </p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 space-y-4 font-mono text-[11px] text-slate-400">
            <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Talent Team Coordinates</div>
            <div>
              <span className="text-slate-500 block">Talent Director:</span>
              <span className="text-white font-semibold">Eric Williams (Managing Director)</span>
            </div>
            <div>
              <span className="text-slate-500 block">Direct Email:</span>
              <a href="mailto:hr.ericwilliams@gmail.com" className="text-blue-400 font-semibold hover:underline">hr.ericwilliams@gmail.com</a>
            </div>
            <div>
              <span className="text-slate-500 block">Review cycle:</span>
              <span className="text-white">All applications reviewed inside 3 operational days.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <Briefcase className="w-10 h-10 text-cyan-400 mx-auto" />
          <h2 className="text-2xl font-extrabold text-white">Active Openings</h2>
          <p className="text-xs text-slate-400">Current structural opportunities in Slidell, LA.</p>
        </div>

        <div className="space-y-4">
          {CAREERS_DATA.map((job) => (
            <div
              key={job.id}
              className="glass-panel p-6 rounded-2xl space-y-4 hover:border-slate-700/60 transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-cyan-400">
                  <span className="font-bold uppercase">{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
                <h3 className="text-base font-bold text-white leading-tight">{job.title}</h3>
                <p className="text-xs text-slate-400 font-mono">{job.type}</p>
              </div>
              <button
                onClick={() => { setActiveJob(job); setFormSubmitted(false); }}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded-xl cursor-pointer transition-colors flex items-center space-x-1.5 self-start sm:self-center"
              >
                <span>Review & Apply</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Equal Opportunity statement */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-950/60 p-5 rounded-2xl border border-slate-900 text-center space-y-2">
        <h4 className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest">Equal Opportunity Employer (EOE)</h4>
        <p className="text-[10px] text-slate-500 leading-relaxed">
          Aether Wealth & Risk Solutions provides equal employment opportunities to all team members and candidates without regard to race, color, religion, age, sex, national origin, disability status, genetics, protected veteran status, sexual orientation, gender identity, or any other characteristic protected by federal, state, or regional rules.
        </p>
      </section>

      {/* Apply Modal */}
      {activeJob && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-950">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">{activeJob.department}</span>
                <h3 className="text-sm font-bold text-white truncate max-w-[400px] mt-0.5">Application: {activeJob.title}</h3>
              </div>
              <button
                onClick={() => setActiveJob(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content & Form */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">Application Authorized</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your credentials and CV are successfully transmitted. Eric Williams and our Slidell recruiting panel will review your application and respond to <span className="text-white font-bold">{formData.email}</span> within 3 operational days.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => { setActiveJob(null); setFormSubmitted(false); }}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Return to Openings
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Job Overview Taster */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 space-y-2 text-xs">
                    <h4 className="font-bold text-white uppercase tracking-wider font-mono">Position Description</h4>
                    <p className="text-slate-300 leading-relaxed">{activeJob.description}</p>
                    <div className="pt-2">
                      <span className="text-slate-500 font-bold block">EXPERIENCE / QUALIFICATIONS REQUIRED:</span>
                      <ul className="list-disc pl-4 space-y-1 text-slate-400 mt-1">
                        {activeJob.requirements.slice(0, 2).map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Application Form */}
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Full Legal Name</label>
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
                        <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="candidate@firm.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Contact Phone</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="603-513-8973"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      {/* Years Experience */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Years of Relational Experience</label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({...formData, experience: e.target.value})}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="">Select Level</option>
                          <option value="entry">Entry/Junior Level (1-3 years)</option>
                          <option value="mid">Mid-Senior Analyst (3-6 years)</option>
                          <option value="director">Director/Lead Specialist (6+ years)</option>
                        </select>
                      </div>
                    </div>

                    {/* Resume Upload Simulator */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Resume / CV Document</label>
                      <div className="border border-dashed border-slate-800 bg-slate-950/60 p-4 rounded-xl text-center space-y-2">
                        {formData.fileName ? (
                          <div className="flex items-center justify-center space-x-2 text-xs text-emerald-400 font-mono">
                            <CheckCircle className="w-4.5 h-4.5" />
                            <span>{formData.fileName} loaded</span>
                          </div>
                        ) : (
                          <>
                            <Upload className="w-6 h-6 text-slate-500 mx-auto" />
                            <p className="text-[11px] text-slate-400">Drag & drop resume, or click to simulation upload</p>
                            <button
                              type="button"
                              onClick={handleFileUpload}
                              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer"
                            >
                              Simulate Upload
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Cover Letter text */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono text-slate-400 uppercase">Operational Qualifications / Cover Letter Summary</label>
                      <textarea
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                        placeholder="Detail how your actuarial, weather, or security background aligns with Aether..."
                        rows={3}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500 font-sans"
                      />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end space-x-2.5 pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveJob(null)}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-xl cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-xl cursor-pointer shadow-md"
                      >
                        Transmit Credentials
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
