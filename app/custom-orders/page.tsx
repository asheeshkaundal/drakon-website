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
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[600px]">
        {/* Left Content */}
        <div className="bg-red-600 text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <p className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wider">
            FOR YOU AND YOUR TEAM
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
            CUSTOMISED
            <br />
            CRICKET
            <br />
            EQUIPMENT
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl">
            Design professional-quality cricket equipment for yourself or your
            club. From jerseys to helmets, bats to balls - we create custom gear
            tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-transparent border-2 border-white text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold hover:bg-white hover:text-red-600 transition">
              View our designs
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-gray-900 flex items-center justify-center p-6 sm:p-8 lg:p-16">
          <div className="relative max-w-2xl w-full">
            <img
              src="/custom-cricket-gear-equipment.jpg"
              alt="Custom Cricket Equipment"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="bg-black text-white py-4 sm:py-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-around text-xs sm:text-sm lg:text-base font-bold px-4 gap-2 sm:gap-0">
          <span className="whitespace-nowrap">
            PROFESSIONAL QUALITY - 100% MADE IN INDIA
          </span>
          <span className="text-yellow-400 mx-2 sm:mx-4 hidden sm:inline">
            //
          </span>
          <span className="whitespace-nowrap">ALL PRINTING COSTS INCLUDED</span>
          <span className="text-yellow-400 mx-2 sm:mx-4 hidden sm:inline">
            //
          </span>
          <span className="whitespace-nowrap">FAST PRODUCTION & DELIVERY</span>
        </div>
      </div>

      {/* Inspiration Section with Carousel */}
      <div className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs sm:text-sm font-semibold mb-2 tracking-wider px-2">
            SIMPLY CLICK ON A DESIGN & CUSTOMISE IT WITHOUT OBLIGATION.
          </p>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 sm:mb-12 px-2 leading-tight">
            NEED SOME INSPIRATION? TAKE A LOOK AT
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            THESE EQUIPMENT DESIGNS
          </h2>

          {/* Carousel */}
          <div className="relative px-8 sm:px-12 md:px-16">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-800 transition shadow-lg"
              aria-label="Previous design"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-800 transition shadow-lg"
              aria-label="Next design"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Carousel Items */}
            <div className="overflow-hidden">
              <div className="flex gap-3 sm:gap-4 md:gap-6">
                {getVisibleDesigns().map((design, index) => (
                  <div
                    key={`${design.id}-${index}`}
                    className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/4 bg-gradient-to-b ${design.color} rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-all duration-300`}
                  >
                    <div className="aspect-square flex items-center justify-center p-4 sm:p-6 md:p-8">
                      <img
                        src="/custom-team-uniforms.jpg"
                        alt={design.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {designs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-black w-6 sm:w-8"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to design ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 sm:mb-12 md:mb-16 px-2 leading-tight">
            YOUR ADVANTAGES WITH
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            CUSTOM CRICKET EQUIPMENT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Advantage 1 */}
            <div className="text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 border-3 sm:border-4 border-black rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 px-2">
                WIDE RANGE OF PRODUCTS
              </h3>
              <p className="text-sm sm:text-base text-gray-700 px-2">
                You can design a lot more than just jerseys. We also have
                helmets, bats, balls, pads, gloves and more cricket equipment.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 border-3 sm:border-4 border-black rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 px-2">
                FROM 1 PIECE
              </h3>
              <p className="text-sm sm:text-base text-gray-700 px-2">
                We produce almost every item without minimum order quantity and
                guarantee you your last price for reorders.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 border-3 sm:border-4 border-black rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 px-2">
                NO ADDITIONAL COSTS
              </h3>
              <p className="text-sm sm:text-base text-gray-700 px-2">
                All printing costs are included, no matter how many different
                elements you include on your equipment.
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <button className="bg-black text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold hover:bg-gray-800 transition">
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
