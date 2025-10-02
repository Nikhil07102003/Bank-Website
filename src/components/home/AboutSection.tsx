import React from 'react';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Secure Banking",
      description: "Advanced security measures to protect your financial data and transactions 24/7."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Award Winning",
      description: "Recognized as the Best Digital Bank for three consecutive years by industry experts."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Customer First",
      description: "Dedicated customer support team available round the clock for all your banking needs."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Growth Partner",
      description: "Helping you achieve your financial goals with personalized investment and loan solutions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Urban Bank?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 25 years of trusted service, we've been helping individuals and businesses 
            achieve their financial dreams through innovative banking solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your Financial Journey Starts Here
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 1999, Urban Bank has been at the forefront of banking innovation, 
              serving over 2 million customers across the nation. Our commitment to excellence 
              and customer satisfaction has made us one of the most trusted financial institutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We offer a comprehensive range of banking services including savings accounts, 
              fixed deposits, home loans, personal loans, business banking, and investment solutions. 
              Our digital-first approach ensures you can bank anytime, anywhere with complete security.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">2M+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Branch Network</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Banking professionals"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;