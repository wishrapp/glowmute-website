import React from 'react';
import { Monitor, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GlowMute</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-red-600">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-red-600">Pricing</a>
            <a href="#compatibility" className="text-gray-600 hover:text-red-600">Compatibility</a>
            <a href="#contact" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-red-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-red-600">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-red-600">Pricing</a>
            <a href="#compatibility" className="block px-3 py-2 text-gray-600 hover:text-red-600">Compatibility</a>
            <a href="#contact" className="block px-3 py-2 text-red-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
