import React, { useState } from "react";
import { Shield, Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Twitter, FileText } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand & Mission Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center transform rotate-45 shadow-md shadow-blue-500/20">
              <div className="w-3.5 h-3.5 bg-white transform -rotate-45"></div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight uppercase italic text-slate-100">Aether Wealth</span>
              <span className="text-[10px] block text-slate-500 font-mono -mt-1.5 tracking-widest uppercase font-semibold">Risk Solutions</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Pivoting legacy capacity into modern predictive resilience. Providing world-class reinsurance, corporate primary solutions, and natural catastrophe modeling worldwide.
          </p>
          <div className="flex space-x-3.5 pt-2">
            <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors">
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dynamic Navigation Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">Solutions Map</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => setActiveTab("services")} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                Global Reinsurance
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("services")} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                Primary Corporate Insurance
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("risk-solutions")} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                Climate & Parametric NatCat
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("risk-solutions")} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                Predictive Risk Analytics
              </button>
            </li>
          </ul>
        </div>

        {/* Contact info & Operations */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">Louisiana Center</h4>
          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>Slidell, Louisiana, USA</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a href="tel:603-513-8973" className="hover:text-white transition-colors">603-513-8973</a>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a href="mailto:hr.ericwilliams@gmail.com" className="hover:text-white transition-colors">hr.ericwilliams@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">Insights Bulletin</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Subscribe to receive our seasonal white papers, severe weather briefs, and quarterly actuarial reports.
          </p>
          {isSubscribed ? (
            <div className="flex items-center space-x-2 text-emerald-400 text-xs bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
              <CheckCircle className="w-4.5 h-4.5" />
              <span>Subscription authorized.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex space-x-1.5">
              <input
                type="email"
                required
                placeholder="Name@firm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-900 border border-slate-800 text-xs text-white rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors cursor-pointer"
                title="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Underbar with copyright and specific requested Developed By link */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/60 text-center space-y-3.5">
        <div className="flex flex-wrap justify-center gap-6 text-[11px] text-slate-500 font-mono">
          <button onClick={() => setActiveTab("privacy")} className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</button>
          <span>•</span>
          <button onClick={() => setActiveTab("terms")} className="hover:text-slate-300 transition-colors cursor-pointer">Terms & Conditions</button>
          <span>•</span>
          <button onClick={() => setActiveTab("sitemap")} className="hover:text-slate-300 transition-colors cursor-pointer">Sitemap</button>
          <span>•</span>
          <button onClick={() => setActiveTab("careers")} className="hover:text-slate-300 transition-colors cursor-pointer">Careers</button>
        </div>
        <p className="text-[11px] text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} Aether Wealth & Risk Solutions. All rights reserved. Registered trademark pivots of corporate entities.
        </p>
        <div className="text-[11px] text-slate-400 font-sans pt-1">
          Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-400 font-semibold underline transition-colors">iWebNext</a>
        </div>
      </div>
    </footer>
  );
}
