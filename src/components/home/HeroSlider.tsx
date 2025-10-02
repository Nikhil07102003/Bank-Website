import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Percent, TrendingUp, Shield, Clock } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Home Loan Special",
    subtitle: "Starting at 8.5% P.A.",
    description: "Get your dream home with our lowest interest rates and flexible repayment options.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: <TrendingUp className="h-8 w-8" />,
    cta: "Apply Now"
  },
  {
    id: 2,
    title: "Fixed Deposits",
    subtitle: "Up to 7.25% Returns",
    description: "Secure your future with our high-yield fixed deposit schemes and guaranteed returns.",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: <Shield className="h-8 w-8" />,
    cta: "Invest Today"
  },
  {
    id: 3,
    title: "Personal Loans",
    subtitle: "Interest rates from 10.99%",
    description: "Quick approval personal loans for all your immediate financial needs and aspirations.",
    image: "https://images.pexels.com/photos/3943725/pexels-photo-3943725.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: <Clock className="h-8 w-8" />,
    cta: "Get Instant Approval"
  },
  {
    id: 4,
    title: "Savings Account",
    subtitle: "4.5% Interest Rate",
    description: "High-interest savings account with zero balance maintenance and premium banking benefits.",
    image: "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: <Percent className="h-8 w-8" />,
    cta: "Open Account"
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
                  {slide.icon}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;