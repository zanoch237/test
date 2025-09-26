import React from 'react';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">slothui</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Product</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-700 font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Try For Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#" className="block px-3 py-2 text-gray-900 font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Product</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#" className="block px-3 py-2 text-blue-600 font-medium">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
              <button className="w-full mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Try For Free
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}