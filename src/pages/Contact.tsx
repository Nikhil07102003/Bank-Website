import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Hello Urban Bank! I would like to inquire about your banking services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const branches = [
    {
      name: "Main Branch",
      address: "123 Banking Street, Financial District, Mumbai 400001",
      phone: "+91 98765 43210",
      timings: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 9:00 AM - 2:00 PM"
    },
    {
      name: "Andheri Branch",
      address: "456 Andheri West, Mumbai 400058",
      phone: "+91 98765 43211",
      timings: "Mon-Fri: 9:30 AM - 4:30 PM, Sat: 9:30 AM - 1:30 PM"
    },
    {
      name: "Bandra Branch", 
      address: "789 Bandra East, Mumbai 400051",
      phone: "+91 98765 43212",
      timings: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 9:00 AM - 2:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3182788/pexels-photo-3182788.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">We're here to help you with all your banking needs</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">24/7 Customer Support</p>
            <a 
              href="tel:+919876543210" 
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              +91 98765 43210
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">Quick Response Guaranteed</p>
            <a 
              href="mailto:info@Urban Bank.com" 
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              info@Urban Bank.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-3">Instant Support</p>
            <button 
              onClick={handleWhatsAppClick}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Chat Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
            <p className="text-gray-600 text-sm">Mon-Fri: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
            <p className="text-gray-600 text-sm">Sunday: Closed</p>
          </div>
        </div>

        {/* WhatsApp CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 mb-16 text-white text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get Instant Support on WhatsApp
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Chat with our banking experts for immediate assistance with your queries, 
            loan applications, and account services.
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-bold text-lg transition-colors duration-300 transform hover:scale-105"
          >
            Start WhatsApp Chat
          </button>
        </div>

        {/* Map and Branch Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Map</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.864277621633!2d72.82771931534914!3d18.913693687224035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c0c4d5ac09%3A0x3c12f7681185f869!2sReserve%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1647875950819!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Urban Bank Location"
              ></iframe>
            </div>
          </div>

          {/* Branch Locations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Branch Locations</h2>
            <div className="space-y-6">
              {branches.map((branch, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{branch.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{branch.address}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      <a 
                        href={`tel:${branch.phone.replace(/\s/g, '')}`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{branch.timings}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a topic</option>
                <option value="account">Account Services</option>
                <option value="loans">Loan Inquiry</option>
                <option value="deposits">Deposit Schemes</option>
                <option value="cards">Credit/Debit Cards</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe your inquiry..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;