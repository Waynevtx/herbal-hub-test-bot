import { Category } from '../types/product';
import { Leaf, Brain, Moon, Shield, Heart, Sun } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'detox',
    name: 'Detox Teas',
    icon: 'Leaf',
    description: 'Natural cleansing and detoxification blends'
  },
  {
    id: 'immunity',
    name: 'Immunity Boosters',
    icon: 'Shield',
    description: 'Strengthen your natural defenses'
  },
  {
    id: 'relaxation',
    name: 'Relaxation Teas',
    icon: 'Moon',
    description: 'Calming blends for peace and tranquility'
  },
  {
    id: 'energy',
    name: 'Energy & Vitality',
    icon: 'Sun',
    description: 'Natural energy-boosting herbs'
  },
  {
    id: 'cognitive',
    name: 'Cognitive Health',
    icon: 'Brain',
    description: 'Support mental clarity and focus'
  },
  {
    id: 'digestive',
    name: 'Digestive Health',
    icon: 'Heart',
    description: 'Soothing blends for digestive wellness'
  }
];