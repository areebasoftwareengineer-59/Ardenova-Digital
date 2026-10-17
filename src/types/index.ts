export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  techFocus: string[];
  engagementModel: string;
  timelineEstimate: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  typeLabel: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  image: string;
  liveUrl: string;
  isDemonstration: boolean;
  conceptHighlights: {
    label: string;
    value: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  actionPoints: string[];
  typicalDuration: string;
  clientTouchpoints: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquiryFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  country: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
}
