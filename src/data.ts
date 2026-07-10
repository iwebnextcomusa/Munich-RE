import { ServiceItem, IndustryItem, RiskSolutionItem, BlogPostItem, JobOpening, FAQItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "reinsurance",
    title: "Global Reinsurance Solutions",
    category: "reinsurance",
    description: "Capital management, risk transfer, and custom treaty structural services designed for global insurers. We absorb catastrophic exposures, allowing primary insurers to confidently expand their capacity.",
    benefits: [
      "Substantial capital relief and balance sheet optimization",
      "Tailored proportional and non-proportional structures",
      "Expansive risk capacity for volatile event management"
    ],
    industriesServed: ["Financial Services", "Technology", "Government", "Transportation"],
    keyFeatures: ["Treaty Reinsurance", "Facultative Placement", "Structured Risk Transfer"]
  },
  {
    id: "primary-insurance",
    title: "Corporate Primary Insurance",
    category: "primary",
    description: "Premium property, general liability, and specialized risk coverage for enterprise-level entities and multinational clients.",
    benefits: [
      "Worldwide program synchronization and regulatory alignment",
      "Comprehensive umbrella limits",
      "Direct risk consulting and loss control integrations"
    ],
    industriesServed: ["Manufacturing", "Construction", "Energy", "Retail", "Healthcare"],
    keyFeatures: ["All-Risk Property Cover", "Commercial General Liability", "Global Program Coordination"]
  },
  {
    id: "climate-risk",
    title: "Climate & NatCat Solutions",
    category: "specialty",
    description: "Next-generation underwriting and structured financial products tailored to address extreme weather volatility, atmospheric hazards, and environmental transitions.",
    benefits: [
      "Parametric structures with prompt settlement models",
      "Scientific scenario modeling based on IPCC standards",
      "Resiliency capitalization assistance"
    ],
    industriesServed: ["Energy", "Agriculture", "Government", "Construction"],
    keyFeatures: ["Parametric Weather Derivations", "Flood & Windstorm Underwriting", "Carbon Offset Liability"]
  },
  {
    id: "cyber-risk",
    title: "Enterprise Cyber Risk Management",
    category: "specialty",
    description: "End-to-end security, business interruption, and liability coverage paired with active telemetry scanning to proactively defend against modern digital threats.",
    benefits: [
      "Comprehensive ransomware and business loss reimbursement",
      "Immediate 24/7 incident response panel activation",
      "Ongoing network posture and active vulnerability monitoring"
    ],
    industriesServed: ["Healthcare", "Technology", "Financial Services", "Retail"],
    keyFeatures: ["Cyber Extortion Protection", "Business Interruption Cover", "Active Telemetry Auditing"]
  },
  {
    id: "risk-consulting",
    title: "Advanced Risk Consulting",
    category: "consulting",
    description: "Bespoke actuarial analyses, operational audit practices, and engineering evaluations to isolate, quantify, and limit corporate exposures.",
    benefits: [
      "Measurable reduction in Total Cost of Risk (TCOR)",
      "Strengthened supply chain resiliency architectures",
      "Regulatory audit alignment and compliance reports"
    ],
    industriesServed: ["Manufacturing", "Transportation", "Healthcare", "Energy"],
    keyFeatures: ["Loss Prevention Audits", "Supply Chain Integrity Modeling", "Actuarial Diagnostic Reviews"]
  },
  {
    id: "data-analytics",
    title: "Digital Risk Solutions & Analytics",
    category: "consulting",
    description: "Cloud-hosted risk modeling platforms powered by state-of-the-art predictive analytics and geospatial forecasting algorithms.",
    benefits: [
      "Real-time geographic hazard exposure visualizers",
      "Automated portfolio aggregation safety alerts",
      "Data-driven underwriting optimization models"
    ],
    industriesServed: ["Financial Services", "Technology", "Government", "Agriculture"],
    keyFeatures: ["Geospatial Exposure mapping", "Portfolio Accumulation Alerts", "AI Actuarial Engines"]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    description: "Mitigating patient safety exposures, medical malpractice liabilities, clinical trial vulnerabilities, and cybersecurity issues for hospitals, laboratories, and pharmaceutical companies.",
    iconName: "ShieldCheck",
    challenges: [
      "Escalating malpractice claims",
      "Patient record ransomware risks",
      "Clinical trial liability exposures"
    ],
    solutions: [
      "Custom medical professional liability structures",
      "Proactive cyber risk mitigation bundles",
      "Multinational clinical trial coverage frameworks"
    ]
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description: "Protecting conventional grid infrastructure, large-scale drilling platforms, offshore wind arrays, and solar installations from physical losses, environmental incidents, and resource outages.",
    iconName: "Flame",
    challenges: [
      "Physical catastrophe grid failures",
      "Strict environmental liability mandates",
      "Transition volatility to renewable energy"
    ],
    solutions: [
      "Global energy property risk coverage",
      "Parametric wind & solar asset guarantees",
      "Environmental liability pollution products"
    ]
  },
  {
    id: "manufacturing",
    title: "Heavy Manufacturing",
    description: "Securing industrial machinery, massive warehouses, and global supply chains against systemic equipment breakdowns, product liability exposures, and trade blockages.",
    iconName: "Wrench",
    challenges: [
      "Equipment breakdown factory halts",
      "Global supply chain raw material blockages",
      "Product recalls and safety defects"
    ],
    solutions: [
      "Inherent defect and breakdown coverage",
      "Structured contingent business interruption protection",
      "Global product liability umbrella structures"
    ]
  },
  {
    id: "financial-services",
    title: "Financial Institutions",
    description: "Providing capital protection, directors and officers (D&O) liability, credit risk guarantees, and asset recovery coverage for modern investment banks, asset managers, and brokers.",
    iconName: "TrendingUp",
    challenges: [
      "Complex international compliance mandates",
      "Director and officer regulatory lawsuits",
      "Systemic counterparty defaults"
    ],
    solutions: [
      "High-limit Directors & Officers (D&O) protections",
      "Credit risk transfer reinsurance treaties",
      "Portfolio protection asset collateral cover"
    ]
  },
  {
    id: "technology",
    title: "Technology & Software",
    description: "Protecting cloud infrastructure, telecom nodes, and artificial intelligence pioneers from technical errors and omissions, patent challenges, and data breaches.",
    iconName: "Cpu",
    challenges: [
      "System downtime liability lawsuits",
      "Intellectual property trademark claims",
      "Data theft and privacy penalties"
    ],
    solutions: [
      "Technology Professional Errors & Omissions (E&O)",
      "Patent infringement defense structures",
      "Multinational cyber risk transfer plans"
    ]
  },
  {
    id: "transportation",
    title: "Transportation & Logistics",
    description: "Insuring cargo networks, maritime vessels, commercial aviation fleets, and rail networks against physical damages, transport delays, and environmental compliance penalties.",
    iconName: "Truck",
    challenges: [
      "Physical cargo losses and piracy",
      "Marine/aviation fuel price and emission issues",
      "Severe route blockages and delays"
    ],
    solutions: [
      "Hull & Machinery and Protection & Indemnity (P&I) cover",
      "Multimodal freight transportation insurance",
      "Parametric route blockage and delay models"
    ]
  }
];

export const RISK_SOLUTIONS_DATA: RiskSolutionItem[] = [
  {
    id: "risk-assessment",
    title: "Risk Assessment & Diagnostic Audits",
    description: "Rigorous analytical evaluations of physical facilities, supply chains, and business processes to define underlying exposures and identify mitigation pathways.",
    capabilities: ["On-site hazard mapping", "Enterprise risk frameworks", "Safety culture benchmarking"],
    metricName: "Exposures Audited",
    metricValue: "$14B+ annually"
  },
  {
    id: "catastrophe-modeling",
    title: "Catastrophe (NatCat) Modeling",
    description: "Leveraging raw meteorological data, geological archives, and climate projections to simulate hundreds of thousands of simulated hurricane, windstorm, and flood scenarios.",
    capabilities: ["Geospatial hazard modeling", "Accumulation management", "Probable Maximum Loss (PML) analytics"],
    metricName: "Simulated Events",
    metricValue: "1.2M+ Scenarios"
  },
  {
    id: "claims-management",
    title: "Proactive Claims Resolution",
    description: "Rapid, transparent, and fair claim settlement frameworks backed by direct capitalization reserves to ensure business recovery is never delayed.",
    capabilities: ["24/7 disaster claims intake", "Remote damage mapping with satellite imaging", "Arbitration mitigation practices"],
    metricName: "Resolution Speed",
    metricValue: "Under 48 hours for parametric triggers"
  },
  {
    id: "ai-risk-intelligence",
    title: "AI-Powered Risk Intelligence",
    description: "Applying neural networks and natural language understanding models to active threat telemetry and news wires to identify supply chain issues before they halt your operations.",
    capabilities: ["Active threat telemetry scanning", "Natural Language threat detection", "Predictive maintenance metrics"],
    metricName: "Prediction Accuracy",
    metricValue: "94.2% on disruption alerts"
  }
];

export const INSIGHTS_DATA: BlogPostItem[] = [
  {
    id: "insight-1",
    title: "2026 Global Catastrophe Resilience Report",
    category: "Research",
    date: "June 14, 2026",
    author: "Dr. Marcus Vance, Chief Climate Hydrologist",
    summary: "An in-depth scientific review of severe windstorms and rising water tables in Gulf Coast communities, presenting innovative parametric reinsurance frameworks to protect regional infrastructure.",
    content: "Climate transitions require a shift from reactive indemnity models to proactive parametric risk financing. By tying claim payouts directly to wind speeds and flood gauge metrics, primary insurers can bypass lengthy adjusting processes, putting emergency capital directly in the hands of regional responders within hours...",
    readTime: "12 min read"
  },
  {
    id: "insight-2",
    title: "Systemic Cyber Exposures in the Era of LLM Deployments",
    category: "White Paper",
    date: "May 28, 2026",
    author: "Elena Rostov, Head of Cyber Underwriting",
    summary: "As organizations rapidly implement custom machine learning engines, prompt injection, data poisoning, and API exposures present uncharted enterprise liabilities.",
    content: "Our telemetry indicates a 312% increase in cloud-hosted ML model injection vulnerability vectors. This white paper details how to structured cyber policy warranties to protect against machine learning service disruptions, toxic output liabilities, and accidental training set telemetry leaks...",
    readTime: "18 min read"
  },
  {
    id: "insight-3",
    title: "Supply Chain Resiliency: Ocean Transit Risk Transfer",
    category: "Trends",
    date: "April 10, 2026",
    author: "Robert Chen, Director of Marine Cargo Underwriting",
    summary: "Analyzing alternative routes, canal delays, and geopolitical friction points to structure contingent cargo business interruption coverages.",
    content: "Standard marine hull coverage leaves deep gaps when ships are diverted or delayed by weeks. Aether's contingent transit models combine cargo physical loss indemnities with parametric delay policies to guarantee cash flow even when ports are backlogged or shipping channels are obstructed...",
    readTime: "9 min read"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: "General",
    question: "How does Aether Wealth differ from standard retail insurance brokers?",
    answer: "Aether Wealth operates on an enterprise scale as a reinsurer, primary corporate carrier, and advanced risk advisory team. We underwrite high-capacity corporate exposures, provide substantial treaty backing for primary insurers, and engineer analytical risk intelligence models, rather than simply distributing third-party retail packages."
  },
  {
    category: "Solutions",
    question: "What are parametric insurance models and how do they work?",
    answer: "Parametric models trigger payouts based on objective, pre-agreed physical metrics (e.g., a hurricane of Category 3+ crossing a coordinate grid, or an earthquake exceeding 6.5 Magnitude) rather than a subjective assessment of physical damages. This guarantees near-instantaneous liquidity within days of an event, bypassing lengthy adjustment procedures."
  },
  {
    category: "Location",
    question: "Why is your operational center located in Slidell, Louisiana?",
    answer: "Our location in Slidell, Louisiana places us in the heart of the Gulf Coast, a region uniquely exposed to weather-related hazards, flood dynamics, and energy transition developments. This direct experience fuels our climate research models and allows us to test risk resilience solutions on the frontlines of natural catastrophe management."
  }
];

export const CAREERS_DATA: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Catastrophe (NatCat) Risk Modeler",
    department: "Risk Analytics Group",
    location: "Slidell, Louisiana (Hybrid)",
    type: "Full-Time",
    description: "Join our core climate and weather simulation team. You will leverage physical meteorology data, historical hydrology grids, and modern statistical modeling tools to construct premium pricing treaties and predictive exposure maps.",
    requirements: [
      "Master's or Ph.D. in Meteorology, Hydrology, Actuarial Sciences, or Geophysics",
      "3+ years experience with modelers like RMS, AIR, or open-source equivalents",
      "Strong proficiency with Python, SQL, and Geospatial Information Systems (GIS)"
    ],
    benefits: [
      "Competitive base salary ($140k - $185k) with enterprise performance bonuses",
      "Comprehensive medical, dental, and vision cover with full employer-matched 401(k) up to 8%",
      "Generous professional development budgets for meteorological and actuarial certifications"
    ]
  },
  {
    id: "job-2",
    title: "Lead Cyber Risk Telemetry Architect",
    department: "Digital & Specialty Risk Division",
    location: "Slidell, Louisiana or Remote (US)",
    type: "Full-Time",
    description: "Design and implement custom external telemetry diagnostic tools that scan our corporate policyholders' networks. Help businesses detect misconfigured ports, exposed databases, and software vulnerabilities before underwriters issue policies.",
    requirements: [
      "Strong background in Offensive Security, Threat Hunting, or Network Vulnerability Scanning",
      "Familiarity with cloud security compliance frameworks (AWS, GCP, Azure)",
      "Excellent client-facing technical communication skills"
    ],
    benefits: [
      "Competitive salary ($150k - $190k) + Equity options",
      "Flexible hybrid/remote options",
      "Unlimited PTO and robust mental wellness program"
    ]
  }
];
