import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Chinese Tea Ceremony"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Traditional Chinese Herbal Wellness
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover the ancient wisdom of Chinese medicinal teas, carefully curated
              for your modern wellness journey.
            </p>
            <Link
              to="/products"
              className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            The Power of Traditional Wisdom
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Healing</h3>
              <p className="text-gray-600">
                Pure, organic herbs selected for their therapeutic properties
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic Wellness</h3>
              <p className="text-gray-600">
                Balance body, mind, and spirit with traditional remedies
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Carefully sourced and tested for purity and potency
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Preview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Popular Herbal Remedies
          </h2>
          {/* Product grid will be populated dynamically */}
        </div>
      </div>
    </div>
  );
}