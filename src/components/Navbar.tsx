import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [schemesDropdown, setSchemesDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-blue-700">Urban Bank</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-700 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-blue-700 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              About Us
            </Link>
            
            {/* Schemes Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSchemesDropdown(true)}
              onMouseLeave={() => setSchemesDropdown(false)}
            >
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                Schemes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {schemesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                  <Link
                    to="/loans"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Loans
                  </Link>
                  <Link
                    to="/deposits"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Deposits
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-700 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-blue-700 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? 'text-blue-700 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              About Us
            </Link>
            <div className="px-3 py-2">
              <div className="text-sm font-medium text-gray-500 mb-2">Schemes</div>
              <Link
                to="/loans"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-1 text-sm text-gray-700 hover:text-blue-700"
              >
                Loans
              </Link>
              <Link
                to="/deposits"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-1 text-sm text-gray-700 hover:text-blue-700"
              >
                Deposits
              </Link>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') 
                  ? 'text-blue-700 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;