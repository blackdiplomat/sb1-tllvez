import { LucideIcon } from 'lucide-react';

export interface Wine {
  id: number;
  name: string;
  winery: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
}

export interface Winery {
  id: number;
  name: string;
  location: string;
  distance: string;
  image: string;
  description?: string;
}

export interface NavItem {
  icon: LucideIcon;
  label: string;
  value: string;
  active?: boolean;
}

export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}