import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitch from './language/LanguageSwitch';

export default function Navbar() {
  const { cart } = useCart();
  const { t } = useTranslation();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold text-emerald-800">茶药坊</span>
              <span className="ml-2 text-sm text-gray-600">Herbal Wellness</span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-700">{t('home')}</Link>
            <Link to="/products" className="text-gray-700 hover:text-emerald-700">{t('shop')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-700">{t('about')}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-700">{t('contact')}</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-700">
              <Search className="h-5 w-5" />
            </button>
            <LanguageSwitch />
            <Link to="/cart" className="text-gray-700 hover:text-emerald-700 relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="sm:hidden text-gray-700 hover:text-emerald-700">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}