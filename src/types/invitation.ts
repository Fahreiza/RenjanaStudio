export interface CatalogItem {
  id: string;
  slug: string;
  title: string;
  category: 'sosial' | 'minimalist' | 'lumina' | 'popup';
  hasPhoto: boolean;
  tag: string;
  description: string;
  price: string;
  discountPrice?: string;
  colorScheme: string[];
  thumbnailUrl: string;
  demoUrl: string;
  isPopular?: boolean;
}

export interface GroomBrideInfo {
  name: string;
  fullName: string;
  parentInfo: string;
  instagram?: string;
  photoUrl: string;
}

export interface EventDetail {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  googleMapsUrl: string;
}

export interface LoveStoryItem {
  year: string;
  title: string;
  description: string;
  dateRange?: string;
  imageUrl?: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
  logoUrl?: string;
}

export interface RsvpSubmission {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  guestCount: number;
  message: string;
  createdAt: string;
}

export interface WeddingData {
  groom: GroomBrideInfo;
  bride: GroomBrideInfo;
  eventDateISO: string;
  akad: EventDetail;
  resepsi: EventDetail;
  loveStories: LoveStoryItem[];
  galleryPhotos: string[];
  bankAccounts: BankAccount[];
  qrisUrl?: string;
  giftAddress: string;
}
