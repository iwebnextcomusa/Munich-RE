import { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("aether-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("aether-cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-slate-900/95 backdrop-blur-xl border border-slate-800 p-5 rounded-2xl shadow-2xl animate-in slide-in-from-bottom duration-300 font-sans" id="aether-cookie-consent-banner">
      <div className="flex items-start space-x-3.5">
        <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl mt-0.5">
          <ShieldCheck className="w-5.5 h-5.5" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="text-xs font-bold text-white tracking-wide uppercase">Privacy & Regulatory Consent</h4>
            <button 
              onClick={() => setIsVisible(false)} 
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Aether Wealth & Risk Solutions uses proprietary telemetry cookies, analytical logging, and risk mapping tools to secure our site and analyze performance. By clicking "Accept All", you consent to our global risk cookies policy.
          </p>
          <div className="mt-3.5 flex items-center space-x-2.5">
            <button
              onClick={acceptCookies}
              className="bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-lg cursor-pointer transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-lg cursor-pointer transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
