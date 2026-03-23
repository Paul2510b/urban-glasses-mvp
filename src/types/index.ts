export interface Product {
  id: string;
  brand: string;
  model: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  category: string;
  description?: string;
  tags?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  product: string;
  rating: number;
  text: string;
  initial: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Benefit {
  id: string;
  number: string;
  color: 'gold' | 'silver';
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  color: 'gold' | 'silver';
  title: string;
  description: string;
  icon: string;
}

export interface LookbookItem {
  id: string;
  category: string;
  title: string;
  image: string;
  span: 'large' | 'medium' | 'small';
}
