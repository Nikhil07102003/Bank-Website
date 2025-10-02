import React from 'react';
import { Home, User, Car, GraduationCap, Building, Calculator } from 'lucide-react';

const Loans: React.FC = () => {
  const loanTypes = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Home Loan",
      rate: "8.5% - 9.5% P.A.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 30 Years",
      features: [
        "Up to 90% financing of property value",
        "Flexible repayment options",
        "Quick approval process",
        "Minimal documentation required",
        "No prepayment charges after 1 year"
      ],
      description: "Fulfill your dream of owning a home with our attractive home loan schemes offering competitive rates and flexible terms."
    },
    {
      icon: <User className="h-12 w-12" />,
      title: "Personal Loan",
      rate: "10.99% - 18% P.A.",
      maxAmount: "₹20 Lakhs",
      tenure: "Up to 5 Years",
      features: [
        "No collateral required",
        "Same day approval possible",
        "Minimal documentation",
        "Flexible EMI options",
        "No end-use restrictions"
      ],
      description: "Quick and hassle-free personal loans for all your immediate financial needs including medical emergencies, travel, and more."
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Auto Loan",
      rate: "8.75% - 12% P.A.",
      maxAmount: "₹1 Crore",
      tenure: "Up to 7 Years",
      features: [
        "Up to 85% of vehicle value",
        "New and used car financing",
        "Quick processing and approval",
        "Tie-ups with major dealers",
        "Comprehensive insurance options"
      ],
      description: "Drive your dream car with our competitive auto loan rates and quick processing for both new and pre-owned vehicles."
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Education Loan",
      rate: "9.5% - 11.5% P.A.",
      maxAmount: "₹1.5 Crores",
      tenure: "Up to 15 Years",
      features: [
        "Covers tuition and living expenses",
        "Moratorium period available",
        "Tax benefits under 80E",
        "Covers domestic and international studies",
        "Flexible repayment options"
      ],
      description: "Invest in your future with our education loans covering both domestic and international study programs."
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Business Loan",
      rate: "11% - 16% P.A.",
      maxAmount: "₹10 Crores",
      tenure: "Up to 10 Years",
      features: [
        "Working capital financing",
        "Equipment and machinery loans",
        "Quick approval process",
        "Collateral and collateral-free options",
        "Dedicated relationship manager"
      ],
      description: "Grow your business with our comprehensive business loan solutions designed for enterprises of all sizes."
    },
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "Loan Against Property",
      rate: "9.25% - 12.5% P.A.",
      maxAmount: "₹5 Crores",
      tenure: "Up to 20 Years",
      features: [
        "Up to 75% of property value",
        "Residential and commercial property",
        "Competitive interest rates",
        "Flexible end-use",
        "Quick processing and disbursal"
      ],
      description: "Leverage your property to meet your financial needs with our loan against property at attractive interest rates."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Loan Schemes</h1>
            <p className="text-xl">Competitive rates and flexible terms for all your financial needs</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Loan Type</h2>
          <p className="text-xl text-gray-600">
            We offer a wide range of loan products with competitive interest rates and flexible repayment options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loanTypes.map((loan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full text-blue-600">
                  {loan.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{loan.title}</h3>
                  <p className="text-blue-600 font-semibold">Interest Rate: {loan.rate}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Max Amount</div>
                  <div className="text-xl font-bold text-blue-600">{loan.maxAmount}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Max Tenure</div>
                  <div className="text-xl font-bold text-blue-600">{loan.tenure}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                {loan.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {loan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 font-semibold">
                  Apply Now
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg transition-colors duration-300 font-semibold">
                  Calculate EMI
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Loans?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24-48 Hours</div>
              <div className="text-gray-600">Quick Approval Process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Minimal</div>
              <div className="text-gray-600">Documentation Required</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Flexible</div>
              <div className="text-gray-600">Repayment Options</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;