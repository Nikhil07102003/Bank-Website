import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Urban Bank</h1>
            <p className="text-xl">Your Trusted Financial Partner Since 1999</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              Founded in 1999, Urban Bank began its journey with a simple mission: to provide 
              reliable, accessible, and innovative banking services to individuals and businesses 
              across the nation. What started as a small community bank has grown into one of 
              the country's most trusted financial institutions, serving over 2 million customers.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              Our growth has been driven by our unwavering commitment to customer satisfaction, 
              technological innovation, and financial inclusion. We have consistently adapted to 
              changing times, embracing digital transformation while maintaining the personal 
              touch that sets us apart from other banks.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Today, we operate through 500+ branches and 2000+ ATMs nationwide, backed by 
              cutting-edge technology and a team of dedicated professionals who are passionate 
              about helping our customers achieve their financial goals.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Bank building"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-justify">
              To empower individuals and businesses with comprehensive financial solutions, 
              exceptional service, and innovative technology while maintaining the highest 
              standards of integrity and trust.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-justify">
              To be the leading financial institution recognized for innovation, customer-centricity, 
              and sustainable growth, creating value for all stakeholders while contributing to 
              the economic development of our nation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 text-justify">
              Integrity, Excellence, Innovation, Customer Focus, and Social Responsibility. 
              These core values guide our decisions and actions, ensuring we always act in 
              the best interests of our customers and community.
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rajesh Kumar</h3>
              <p className="text-blue-600 mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm text-justify">
                With over 20 years in banking, Rajesh leads our strategic vision and drives 
                innovation across all business units.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Sharma</h3>
              <p className="text-blue-600 mb-3">Chief Operating Officer</p>
              <p className="text-gray-600 text-sm text-justify">
                Priya oversees our operations and ensures seamless delivery of banking services 
                across all channels and touchpoints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Arjun Patel</h3>
              <p className="text-blue-600 mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm text-justify">
                Arjun leads our digital transformation initiatives and ensures our technology 
                infrastructure remains cutting-edge and secure.
              </p>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2023</div>
              <div className="text-sm text-gray-600">Best Digital Bank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2022</div>
              <div className="text-sm text-gray-600">Customer Service Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2021</div>
              <div className="text-sm text-gray-600">Most Innovative Bank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2020</div>
              <div className="text-sm text-gray-600">Best Home Loan Provider</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;