import React from 'react';
import { PiggyBank, TrendingUp, Shield, Clock } from 'lucide-react';

const Deposits: React.FC = () => {
  const depositSchemes = [
    {
      icon: <PiggyBank className="h-12 w-12" />,
      title: "Savings Account",
      rate: "4.5% P.A.",
      minBalance: "Zero Balance",
      features: [
        "High interest rate of 4.5% per annum",
        "Zero minimum balance requirement",
        "Free debit card with attractive rewards",
        "Mobile and internet banking",
        "Unlimited free ATM transactions",
        "Overdraft facility available"
      ],
      description: "Start your banking journey with our feature-rich savings account that offers high returns and premium banking services."
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Fixed Deposit",
      rate: "7.25% P.A.",
      minBalance: "₹1,000",
      features: [
        "Attractive interest rates up to 7.25%",
        "Flexible tenure from 7 days to 10 years",
        "Loan facility up to 90% of FD value",
        "Auto-renewal option available",
        "Premature withdrawal facility",
        "Tax saving FD under Section 80C"
      ],
      description: "Secure your future with guaranteed returns through our fixed deposit schemes offering competitive interest rates."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Recurring Deposit",
      rate: "6.75% P.A.",
      minBalance: "₹100/month",
      features: [
        "Disciplined monthly savings approach",
        "Flexible monthly installments from ₹100",
        "Tenure ranging from 6 months to 10 years",
        "Attractive interest rates up to 6.75%",
        "Loan facility against RD",
        "Auto-debit facility available"
      ],
      description: "Build a habit of regular savings with our recurring deposit scheme that helps you achieve your financial goals systematically."
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Senior Citizen FD",
      rate: "7.75% P.A.",
      minBalance: "₹1,000",
      features: [
        "Additional 0.5% interest for senior citizens",
        "Special rates up to 7.75% per annum",
        "Flexible tenure options",
        "Monthly interest payout option",
        "No penalty for premature withdrawal",
        "Dedicated senior citizen banking services"
      ],
      description: "Special fixed deposit scheme designed exclusively for senior citizens with higher interest rates and additional benefits."
    }
  ];

  const interestRates = [
    { tenure: "7 Days - 45 Days", general: "5.50%", senior: "6.00%" },
    { tenure: "46 Days - 179 Days", general: "6.00%", senior: "6.50%" },
    { tenure: "180 Days - 364 Days", general: "6.50%", senior: "7.00%" },
    { tenure: "1 Year - 2 Years", general: "7.00%", senior: "7.50%" },
    { tenure: "2 Years - 3 Years", general: "7.15%", senior: "7.65%" },
    { tenure: "3 Years - 5 Years", general: "7.25%", senior: "7.75%" },
    { tenure: "5 Years - 10 Years", general: "7.25%", senior: "7.75%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Deposit Schemes</h1>
            <p className="text-xl">Grow your wealth with our attractive deposit products and guaranteed returns</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Deposit Type</h2>
          <p className="text-xl text-gray-600">
            Safe, secure, and profitable deposit options to help you achieve your financial goals
          </p>
        </div>

        {/* Deposit Schemes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {depositSchemes.map((scheme, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-green-100 rounded-full text-green-600">
                  {scheme.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{scheme.title}</h3>
                  <p className="text-green-600 font-semibold">Interest Rate: {scheme.rate}</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="text-sm text-gray-600">Minimum Balance</div>
                <div className="text-xl font-bold text-green-600">{scheme.minBalance}</div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                {scheme.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {scheme.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 font-semibold">
                  Open Account
                </button>
                <button className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 rounded-lg transition-colors duration-300 font-semibold">
                  Calculate Returns
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interest Rate Table */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Fixed Deposit Interest Rates
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tenure
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    General Public (% P.A.)
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Senior Citizens (% P.A.)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {interestRates.map((rate, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {rate.tenure}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {rate.general}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 text-center font-semibold">
                      {rate.senior}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-600 text-center">
            * Interest rates are subject to change. Senior citizen rates applicable for depositors aged 60 years and above.
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Deposits?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Safe & Secure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">7.75%</div>
              <div className="text-gray-600">Highest Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Flexible</div>
              <div className="text-gray-600">Tenure Options</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Online Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;