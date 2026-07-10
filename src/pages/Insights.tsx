import { useState, useEffect } from "react";
import { Search, Filter, BookOpen, Clock, X, Download, FileText, CheckCircle } from "lucide-react";
import { INSIGHTS_DATA } from "../data";
import { BlogPostItem } from "../types";

interface InsightsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Insights({ searchQuery, setSearchQuery }: InsightsProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<BlogPostItem | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Filter lists
  const categories = ["All", "Trends", "White Paper", "Research", "Announcement"];

  const filteredArticles = INSIGHTS_DATA.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadBrochure = (title: string) => {
    setIsDownloading(true);
    setDownloadSuccess(false);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      // Create a temporary simulated text download
      const element = document.createElement("a");
      const file = new Blob([`Munich RE\nPublication: ${title}\n\nDisclaimer: This is a generated broker brochure preview provided for structural analysis. Please coordinate with core underwriters at 603-513-8973 for official documents.`], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `${title.replace(/ /g, "_")}_Brochure.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1500);
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      {/* Title */}
      <section className="text-center max-w-4xl mx-auto pt-12 space-y-4">
        <span className="text-[10px] font-bold font-mono text-blue-400 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">Strategic Knowledge</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Research & Publications</h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Access authoritative white papers, risk reports, and meteorological briefs compiled by our Slidell-based research hydrologists and cyber forensic analysts.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide cursor-pointer transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar inside page */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-950 border border-slate-900 rounded-xl pl-10 pr-4 py-2 text-xs text-white w-full focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          // Custom Skeleton Loading Screen Cards
          [1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Category Skeleton */}
                  <div className="h-2.5 bg-blue-500/20 rounded w-16 animate-pulse" />
                  {/* Date Skeleton */}
                  <div className="h-2.5 bg-slate-800 rounded w-12 animate-pulse" />
                </div>
                {/* Title Skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-slate-800 rounded w-11/12 animate-pulse" />
                  <div className="h-4 bg-slate-800 rounded w-2/3 animate-pulse" />
                </div>
                {/* Summary Skeleton */}
                <div className="space-y-2 pt-2">
                  <div className="h-3 bg-slate-800/60 rounded w-full animate-pulse" />
                  <div className="h-3 bg-slate-800/60 rounded w-11/12 animate-pulse" />
                  <div className="h-3 bg-slate-800/60 rounded w-4/5 animate-pulse" />
                </div>
              </div>

              {/* Footer row skeleton */}
              <div className="border-t border-slate-900 mt-6 pt-3 flex items-center justify-between">
                <div className="h-2.5 bg-slate-800 rounded w-20 animate-pulse" />
                <div className="h-2.5 bg-slate-800 rounded w-10 animate-pulse" />
              </div>
            </div>
          ))
        ) : filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => { setSelectedArticle(article); setDownloadSuccess(false); }}
              className="glass-panel p-6 rounded-2xl hover:border-slate-700/60 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-blue-400 font-bold uppercase tracking-wider">{article.category}</span>
                  <span className="text-slate-500">{article.date}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">{article.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-4 leading-relaxed">{article.summary}</p>
              </div>

              <div className="border-t border-slate-900 mt-6 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="truncate max-w-[150px]">{article.author.split(",")[0]}</span>
                <span className="flex items-center space-x-1 flex-shrink-0">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-1 md:col-span-3 text-center py-16 bg-slate-900/10 border border-slate-900/60 rounded-2xl space-y-2">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
            <h4 className="text-xs font-bold text-slate-300 uppercase">No documents found</h4>
            <p className="text-[11px] text-slate-500 max-w-xs mx-auto">Try widening your search terms or selecting another category.</p>
          </div>
        )}
      </section>

      {/* Downloadable Brochure Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl hidden sm:block">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">Download Global Risk Brochure</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed max-w-lg">Get our consolidated treaty guidelines, parametric weather trigger coordinates, and Solvency II credit ratings packaged inside our 2026 brochures.</p>
            </div>
          </div>
          <button
            onClick={() => handleDownloadBrochure("MunichRe_Global_Risk_Guide_2026")}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-xl cursor-pointer transition-colors flex items-center space-x-2 self-stretch sm:self-auto justify-center"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? "Generating..." : "Download PDF Brochure"}</span>
          </button>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800/80 flex justify-between items-center bg-slate-950">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase font-bold">{selectedArticle.category}</span>
                <h3 className="text-sm font-bold text-white truncate max-w-[500px] mt-0.5">{selectedArticle.title}</h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-slate-950/20">
              {/* Author & Date */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-slate-900 gap-2">
                <div>
                  <span className="text-slate-400 block font-bold">WRITTEN BY:</span>
                  <span className="text-white font-semibold">{selectedArticle.author}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold">RELEASE DATE:</span>
                  <span>{selectedArticle.date}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold">READ TIME:</span>
                  <span className="text-cyan-400">{selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Summary box */}
              <div className="bg-slate-900/60 border border-slate-800/40 p-4 rounded-xl italic text-xs leading-relaxed text-slate-300">
                "{selectedArticle.summary}"
              </div>

              {/* Content */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
                {"\n\n[Full paper content available inside our printed treaties. To request access to Munich RE's internal hydrology database, geospatial simulations, or specific historical storm wind portfolios, please contact our Managing Director Eric Williams in Slidell, LA.]"}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[10px] font-mono text-slate-500">Document ID: MR-{selectedArticle.id.toUpperCase()}-2026</span>
              <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end">
                {downloadSuccess ? (
                  <div className="flex items-center space-x-1 text-emerald-400 text-xs font-bold bg-emerald-500/10 py-2 px-4 rounded-xl border border-emerald-500/20">
                    <CheckCircle className="w-4 h-4" />
                    <span>Brochure Downloaded</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDownloadBrochure(selectedArticle.title)}
                    disabled={isDownloading}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-xl cursor-pointer transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isDownloading ? "Generating PDF..." : "Download Whitepaper"}</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-xl cursor-pointer transition-colors w-full sm:w-auto justify-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
