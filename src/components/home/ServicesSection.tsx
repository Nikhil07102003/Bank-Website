import React from 'react';
import { Home, CreditCard, PiggyBank, Building, Smartphone, Car } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Home Loans",
      description: "Competitive rates starting from 8.5% with flexible tenure options",
      features: ["Up to 90% financing", "Quick approval", "Minimal documentation"]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Personal Loans",
      description: "Instant personal loans for all your immediate financial needs",
      features: ["Same day approval", "No collateral required", "Flexible EMIs"]
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Savings Account",
      description: "High-interest savings with premium banking benefits",
      features: ["4.5% interest rate", "Zero balance account", "Free debit card"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Fixed Deposits",
      description: "Secure your future with guaranteed high returns up to 7.25%",
      features: ["Guaranteed returns", "Flexible tenure", "Loan against FD"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Banking",
      description: "Complete banking at your fingertips with our mobile app",
      features: ["24/7 banking", "UPI payments", "Investment tracking"]
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Auto Loans",
      description: "Drive your dream car with our attractive auto loan schemes",
      features: ["Up to 85% funding", "Quick processing", "Competitive rates"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Banking Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet all your banking needs 
            with competitive rates and exceptional service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;