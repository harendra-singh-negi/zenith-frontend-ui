import React from 'react';
import { Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Mail className="h-8 w-8" />
            <span className="ml-2 font-bold text-xl">Logo</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Admission</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>

          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;