"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function CustomOrderPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const designs = [
    { id: 1, color: "from-red-600 to-red-800", name: "Cricket Jersey 1" },
    {
      id: 2,
      color: "from-gray-200 to-gray-300",
      name: "Cricket Jersey 2",
      dark: true,
    },
    { id: 3, color: "from-blue-400 to-blue-600", name: "Cricket Jersey 3" },
    { id: 4, color: "from-gray-900 to-black", name: "Cricket Jersey 4" },
    { id: 5, color: "from-green-600 to-green-800", name: "Cricket Jersey 5" },
    { id: 6, color: "from-purple-600 to-purple-800", name: "Cricket Jersey 6" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % designs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + designs.length) % designs.length);
  };

  // Get visible designs (current and next 3)
  const getVisibleDesigns = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(designs[(currentIndex + i) % designs.length]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Content */}
        <div className="bg-red-600 text-white p-12 lg:p-16 flex flex-col justify-center">
          <p className="text-sm font-semibold mb-4 tracking-wider">
            FOR YOU AND YOUR TEAM
          </p>
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            CUSTOMISED
            <br />
            CRICKET
            <br />
            EQUIPMENT
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            Design professional-quality cricket equipment for yourself or your
            club. From jerseys to helmets, bats to balls - we create custom gear
            tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-red-600 transition">
              View our designs
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-gray-900 flex items-center justify-center p-8 lg:p-16">
          <div className="relative max-w-2xl">
            <img
              src="https://via.placeholder.com/800x800/1e40af/ffffff?text=Custom+Cricket+Equipment+Front+%26+Back"
              alt="Custom Cricket Equipment"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="bg-black text-white py-6 overflow-hidden">
        <div className="flex items-center justify-around text-sm lg:text-base font-bold whitespace-nowrap px-4">
          <span>PROFESSIONAL QUALITY - 100% MADE IN INDIA</span>
          <span className="text-yellow-400 mx-4">//</span>
          <span>ALL PRINTING COSTS INCLUDED</span>
          <span className="text-yellow-400 mx-4">//</span>
          <span>FAST PRODUCTION & DELIVERY</span>
        </div>
      </div>

      {/* Inspiration Section with Carousel */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-semibold mb-2 tracking-wider">
            SIMPLY CLICK ON A DESIGN & CUSTOMISE IT WITHOUT OBLIGATION.
          </p>
          <h2 className="text-center text-5xl lg:text-6xl font-black mb-12">
            NEED SOME INSPIRATION? TAKE A LOOK AT
            <br />
            THESE EQUIPMENT DESIGNS
          </h2>

          {/* Carousel */}
          <div className="relative px-16">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-4 rounded-full hover:bg-gray-800 transition shadow-lg"
              aria-label="Previous design"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-4 rounded-full hover:bg-gray-800 transition shadow-lg"
              aria-label="Next design"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Items */}
            <div className="overflow-hidden">
              <div className="flex gap-6">
                {getVisibleDesigns().map((design, index) => (
                  <div
                    key={`${design.id}-${index}`}
                    className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/4 bg-gradient-to-b ${design.color} rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-all duration-300`}
                  >
                    <div className="aspect-square flex items-center justify-center p-8">
                      <img
                        src={`https://via.placeholder.com/400x400/${
                          design.dark ? "e5e7eb/000000" : "1e40af/ffffff"
                        }?text=${design.name}`}
                        alt={design.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {designs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-black w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to design ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl lg:text-6xl font-black mb-16">
            YOUR ADVANTAGES WITH
            <br />
            CUSTOM CRICKET EQUIPMENT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Advantage 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 border-4 border-black rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4">
                WIDE RANGE OF PRODUCTS
              </h3>
              <p className="text-gray-700">
                You can design a lot more than just jerseys. We also have
                helmets, bats, balls, pads, gloves and more cricket equipment.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 border-4 border-black rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4">FROM 1 PIECE</h3>
              <p className="text-gray-700">
                We produce almost every item without minimum order quantity and
                guarantee you your last price for reorders.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 border-4 border-black rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4">NO ADDITIONAL COSTS</h3>
              <p className="text-gray-700">
                All printing costs are included, no matter how many different
                elements you include on your equipment.
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center mt-12">
            <button className="bg-black text-white px-12 py-4 text-lg font-bold hover:bg-gray-800 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
