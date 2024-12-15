import React from 'react';
import { categories } from '../../data/categories';
import { Leaf, Brain, Moon, Shield, Heart, Sun } from 'lucide-react';

const iconMap = {
  Leaf,
  Brain,
  Moon,
  Shield,
  Heart,
  Sun,
};

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function CategorySidebar({ selectedCategory, onSelectCategory }: CategorySidebarProps) {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full flex items-center p-2 rounded-md transition-colors ${
                selectedCategory === category.id
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Icon className="h-5 w-5 mr-2" />
              <span className="text-sm">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}