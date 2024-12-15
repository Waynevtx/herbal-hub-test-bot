import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { categories } from '../data/categories';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl animate-slide-in">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <div className="space-y-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-emerald-600" onClick={onClose}>
              Home
            </Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-emerald-600" onClick={onClose}>
              Shop
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-emerald-600" onClick={onClose}>
              About
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-emerald-600" onClick={onClose}>
              Contact
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">Categories</h3>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="block py-2 text-gray-700 hover:text-emerald-600"
                onClick={onClose}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}