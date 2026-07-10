import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CookieBanner from "./components/CookieBanner";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import RiskSolutions from "./pages/RiskSolutions";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scrolling to toggle Scroll-to-Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Scroll to top automatically when active tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Tab router
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={setActiveTab} />;
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            {(() => {
              switch (activeTab) {
                case "about":
                  return <About />;
                case "services":
                  return <Services />;
                case "industries":
                  return <Industries />;
                case "risk-solutions":
                  return <RiskSolutions />;
                case "insights":
                  return <Insights searchQuery={searchQuery} setSearchQuery={setSearchQuery} />;
                case "careers":
                  return <Careers />;
                case "contact":
                  return <Contact />;
                case "privacy":
                  return <Legal activeSection="privacy" setActiveTab={setActiveTab} />;
                case "terms":
                  return <Legal activeSection="terms" setActiveTab={setActiveTab} />;
                case "sitemap":
                  return <Legal activeSection="sitemap" setActiveTab={setActiveTab} />;
                default:
                  return <Legal activeSection="404" setActiveTab={setActiveTab} />;
              }
            })()}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Global Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onSearch={(query) => setSearchQuery(query)} 
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1 w-full">
        {renderTabContent()}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Persistent AI Chatbot Widget */}
      <Chatbot />

      {/* Privacy cookie consent compliance banner */}
      <CookieBanner />

      {/* Scroll-to-Top Floating Trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-slate-900/90 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500 p-3 rounded-xl shadow-2xl transition-all hover:scale-110 active:scale-90 cursor-pointer z-40 group animate-in fade-in slide-in-from-bottom duration-300"
          title="Scroll back to top"
          id="scroll-to-top-trigger"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
}
