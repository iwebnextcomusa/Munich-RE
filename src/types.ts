export interface ServiceItem {
  id: string;
  title: string;
  category: "reinsurance" | "primary" | "specialty" | "consulting";
  description: string;
  benefits: string[];
  industriesServed: string[];
  keyFeatures: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  challenges: string[];
  solutions: string[];
}

export interface RiskSolutionItem {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  metricName?: string;
  metricValue?: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  category: "Trends" | "White Paper" | "Research" | "Announcement";
  date: string;
  author: string;
  summary: string;
  content: string;
  readTime: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
