import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ginseng Root Tea',
    chineseName: '人参茶',
    price: 45.99,
    description: 'Premium Korean red ginseng tea known for its energy-boosting and immune-supporting properties.',
    benefits: ['Energy Boost', 'Immune Support', 'Mental Clarity'],
    category: 'energy',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.8,
    reviews: []
  },
  {
    id: '2',
    name: 'Chrysanthemum Tea',
    chineseName: '菊花茶',
    price: 28.99,
    description: 'Traditional cooling herb that helps reduce internal heat and supports eye health.',
    benefits: ['Eye Health', 'Cooling Properties', 'Stress Relief'],
    category: 'relaxation',
    image: 'https://images.unsplash.com/photo-1576089073624-b5751a8f4de4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.5,
    reviews: []
  },
  {
    id: '3',
    name: 'Pu-erh Tea',
    chineseName: '普洱茶',
    price: 52.99,
    description: 'Aged fermented tea that aids digestion and supports healthy weight management.',
    benefits: ['Digestive Health', 'Weight Management', 'Detoxification'],
    category: 'detox',
    image: 'https://images.unsplash.com/photo-1557816274-5d7acd40cbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.9,
    reviews: []
  },
  {
    id: '4',
    name: 'Longjing Green Tea',
    chineseName: '龙井茶',
    price: 39.99,
    description: 'Premium Dragon Well green tea with a sweet, gentle flavor and numerous health benefits.',
    benefits: ['Antioxidant Rich', 'Mental Focus', 'Metabolism Support'],
    category: 'cognitive',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.7,
    reviews: []
  },
  {
    id: '5',
    name: 'Astragalus Root Tea',
    chineseName: '黄芪茶',
    price: 34.99,
    description: 'Traditional immune-boosting herb known for its adaptogenic properties.',
    benefits: ['Immune Support', 'Energy', 'Longevity'],
    category: 'immunity',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.6,
    reviews: []
  },
  {
    id: '6',
    name: 'Schisandra Berry Tea',
    chineseName: '五味子茶',
    price: 42.99,
    description: 'Five-flavor berry known for its adaptogenic properties and liver support.',
    benefits: ['Liver Health', 'Stress Relief', 'Energy'],
    category: 'energy',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.4,
    reviews: []
  }
];