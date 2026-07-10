import React, { useState, useRef, useEffect } from "react";
import { Shield, ChevronDown, Menu, X, Search, Phone, Mail, MapPin, ExternalLink, Globe } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearch: (query: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, onSearch }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
      setActiveTab("insights"); // Switch to blog/news or a search page
      setSearchOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", tab: "home" },
    { label: "About", tab: "about" },
    { label: "Services", tab: "services", hasMega: "services" },
    { label: "Industries", tab: "industries", hasMega: "industries" },
    { label: "Risk Solutions", tab: "risk-solutions" },
    { label: "Insights", tab: "insights" },
    { label: "Careers", tab: "careers" },
    { label: "Contact", tab: "contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-md">
      {/* Top Bar (Contact Info & Telemetry) */}
      <div className="w-full bg-slate-950 border-b border-slate-900/60 py-2 px-6 text-[11px] text-slate-400 font-mono hidden sm:flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <a href="tel:603-513-8973" className="hover:text-blue-400 transition-colors">603-513-8973</a>
          </span>
          <span className="flex items-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <a href="mailto:hr.ericwilliams@gmail.com" className="hover:text-blue-400 transition-colors">hr.ericwilliams@gmail.com</a>
          </span>
          <span className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Slidell, Louisiana</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1 text-emerald-400">
            <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
            <span>Underwriting Active</span>
          </span>
          <span className="text-slate-500">|</span>
          <span className="hover:text-white cursor-pointer flex items-center space-x-1">
            <Globe className="w-3.5 h-3.5" />
            <span>EN (Global)</span>
          </span>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => { setActiveTab("home"); setIsOpen(false); }} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center transform rotate-45 transition-transform group-hover:rotate-90 duration-300 shadow-md shadow-blue-500/20">
            <div className="w-3.5 h-3.5 bg-white transform -rotate-45"></div>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight uppercase italic text-slate-100 group-hover:text-blue-400 transition-colors">Munich RE</span>
            <span className="text-[10px] block text-slate-500 font-mono -mt-1.5 tracking-widest uppercase font-semibold">Reinsurance & ERGO</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-1 relative">
          {menuItems.map((item) => (
            <div 
              key={item.tab} 
              onMouseEnter={() => item.hasMega ? setActiveMegaMenu(item.hasMega) : setActiveMegaMenu(null)}
              className="relative"
            >
              <button
                onClick={() => {
                  setActiveTab(item.tab);
                  setActiveMegaMenu(null);
                }}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-lg transition-all flex items-center space-x-1 cursor-pointer ${
                  activeTab === item.tab 
                    ? "bg-slate-900 text-blue-400 shadow-inner" 
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                <span>{item.label}</span>
                {item.hasMega && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </button>
            </div>
          ))}
        </nav>

        {/* Right Section (Search & Urgent CTA) */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Search Bar Toggle */}
          <div className="relative" ref={searchRef}>
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center animate-in fade-in slide-in-from-right-3 duration-200">
                <input
                  type="text"
                  placeholder="Search articles, policies..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-xs text-white rounded-l-lg px-3 py-1.5 w-44 focus:outline-none focus:border-blue-500 font-sans"
                  autoFocus
                />
                <button type="submit" className="bg-slate-800 border-y border-r border-slate-800 px-2 py-1.5 rounded-r-lg hover:bg-slate-700 text-slate-300">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)} 
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
                title="Search Munich RE portal"
              >
                <Search className="w-4.5 h-4.5" />
              </button>
            )}
          </div>

          {/* Underwriting Contact CTA */}
          <button
            onClick={() => setActiveTab("contact")}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-md shadow-blue-500/10 hover:scale-105 transition-all cursor-pointer"
          >
            Request Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Mobile Search Icon */}
          <button 
            onClick={() => {
              setActiveTab("insights");
              onSearch("");
            }} 
            className="p-2 text-slate-400 hover:text-white"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdowns (Desktop) */}
      {activeMegaMenu && (
        <div 
          className="absolute left-0 w-full bg-slate-950 border-b border-slate-900/90 shadow-2xl py-8 px-6 transition-all animate-in fade-in slide-in-from-top-3 duration-200 z-30"
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
            {activeMegaMenu === "services" ? (
              <>
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Treaty & Capacity</h4>
                  <ul className="space-y-2 text-sm">
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Global Reinsurance</button></li>
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Parametric Weather Derivations</button></li>
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Climate & Natural Catastrophes</button></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Enterprise Primary</h4>
                  <ul className="space-y-2 text-sm">
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Commercial General Liability</button></li>
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Umbrella Property Covers</button></li>
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Cyber Risk Underwriting</button></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Advisory & Analytics</h4>
                  <ul className="space-y-2 text-sm">
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Actuarial Loss Auditing</button></li>
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Predictive Exposure mapping</button></li>
                    <li><button onClick={() => { setActiveTab("services"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Supply Chain Resiliency Consulting</button></li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-white mb-1">Slidell Climate Hub</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Access real-time wind, flood, and atmospheric models generated from our Louisiana Gulf headquarters.</p>
                  </div>
                  <button onClick={() => { setActiveTab("risk-solutions"); setActiveMegaMenu(null); }} className="text-xs text-cyan-400 font-bold hover:underline flex items-center space-x-1 mt-3">
                    <span>Open NatCat Models</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Industrial Sectors</h4>
                  <ul className="space-y-2 text-sm">
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Heavy Manufacturing</button></li>
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Commercial Construction</button></li>
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Transportation & Logistics</button></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Infrastructure & Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Energy & Utilities</button></li>
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Agriculture & Forestry</button></li>
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Retail & Supply Distribution</button></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Institutional Markets</h4>
                  <ul className="space-y-2 text-sm">
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Financial Institutions</button></li>
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Healthcare & Life Sciences</button></li>
                    <li><button onClick={() => { setActiveTab("industries"); setActiveMegaMenu(null); }} className="text-slate-300 hover:text-blue-400 text-xs transition-colors block text-left">Government & Public Entity</button></li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-white mb-1">Strategic Solutions</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Discover how we coordinate risk transfer for multi-billion dollar municipal development programs.</p>
                  </div>
                  <button onClick={() => { setActiveTab("risk-solutions"); setActiveMegaMenu(null); }} className="text-xs text-cyan-400 font-bold hover:underline flex items-center space-x-1 mt-3">
                    <span>Learn More</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer (Accordion-style) */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-900 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-200">
          {menuItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => {
                setActiveTab(item.tab);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider block transition-colors ${
                activeTab === item.tab
                  ? "bg-slate-900 text-blue-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-900/60 flex flex-col space-y-3 px-4">
            <div className="flex flex-col text-[11px] text-slate-400 font-mono space-y-1">
              <span>TEL: 603-513-8973</span>
              <span>EMAIL: hr.ericwilliams@gmail.com</span>
              <span>SLIDELL, LOUISIANA</span>
            </div>
            <button
              onClick={() => {
                setActiveTab("contact");
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-center py-2 text-xs font-bold tracking-widest uppercase rounded-lg text-white"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
