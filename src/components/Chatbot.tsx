import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, ShieldAlert, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am your Munich RE Virtual Risk Analyst. How can I assist you with reinsurance, catastrophe risk modeling, or ERGO primary insurance solutions today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages, // Send current context
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with AI");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I encountered a communication interruption. Please try again shortly or contact our core team in Slidell, LA at 603-513-8973.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  const suggestions = [
    "What is Reinsurance?",
    "Climate & Catastrophe Modeling",
    "Current openings in Slidell, LA",
    "How to file a primary claim",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="aether-chatbot-widget">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white shadow-lg shadow-blue-500/20 hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer relative group"
          title="Speak with Munich RE AI Analyst"
        >
          <MessageSquare className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <div className="absolute right-16 bg-slate-900/95 text-white text-xs py-1.5 px-3 rounded-lg border border-slate-700/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with Risk AI Analyst
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[380px] sm:w-[420px] h-[550px] max-h-[85vh] bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 border-b border-slate-700/50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/10">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="font-semibold text-sm text-white tracking-wide">Munich RE AI Risk Analyst</h3>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[11px] text-slate-400 font-mono">Secured Sandbox Engine</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-950/60 to-slate-900/30">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-[13px] leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-slate-800/80 text-slate-100 border border-slate-700/30 rounded-bl-none"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex items-center space-x-1 mb-1 text-[10px] text-cyan-400 font-mono font-bold tracking-wider uppercase">
                      <Bot className="w-3 h-3" />
                      <span>Munich RE Intelligence</span>
                    </div>
                  )}
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 border border-slate-700/30 rounded-2xl rounded-bl-none p-3 max-w-[80%] shadow-sm">
                  <div className="flex items-center space-x-1 mb-1 text-[10px] text-cyan-400 font-mono font-bold tracking-wider uppercase">
                    <Bot className="w-3 h-3 animate-spin" />
                    <span>Analyzing Risks...</span>
                  </div>
                  <div className="flex space-x-1.5 py-1 px-2">
                    <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-slate-950/40 border-t border-slate-800/40">
              <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mb-1.5">Suggested Queries</p>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(sug)}
                    className="text-[11px] bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/40 text-slate-300 py-1 px-2 rounded-lg transition-colors cursor-pointer text-left"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about reinsurance, risks, or services..."
              className="flex-1 bg-slate-900 border border-slate-800 text-slate-100 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
