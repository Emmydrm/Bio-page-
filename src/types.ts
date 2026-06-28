export interface CarouselImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  features: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Booking {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  date: string;
  eventType: string;
  eventLocation?: string;
  specialRequests?: string;
  createdAt: string;
}

export interface QuestionnaireResponse {
  id: string;
  fullName: string;
  contactMethod: "email" | "whatsapp" | "call";
  contactValue: string;
  eventType: string;
  estimatedGuests: number;
  estimatedBudget: string;
  eventStyle: string[]; // e.g., ['Modern', 'Traditional', 'Regal', 'Intimate']
  primaryNeed: string;
  additionalNotes?: string;
  submittedAt: string;
}
