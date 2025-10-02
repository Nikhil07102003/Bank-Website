import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Bank Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">Urban Bank</span>
            </div>
            <p className="text-blue-100 mb-4">
              Your trusted financial partner for over 25 years. We provide comprehensive banking solutions with personalized service and competitive rates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-100 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-blue-100 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="/loans" className="text-blue-100 hover:text-yellow-400 transition-colors">Loans</a></li>
              <li><a href="/deposits" className="text-blue-100 hover:text-yellow-400 transition-colors">Deposits</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-100">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-100">info@Urban Bank.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-1" />
                <span className="text-blue-100">123 Banking Street, Financial District, Mumbai 400001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Urban Bank. All rights reserved. | Licensed by RBI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;