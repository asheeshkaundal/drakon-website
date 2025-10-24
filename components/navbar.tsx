"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Search,
  Globe,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";

// Custom X (formerly Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Region");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const promotionalTexts = [
    "💥Up to 50% OFF! THE BEST SALE OF THE SEASON IS LIVE. SHOP NOW! 💥",
    "Own the Pitch. Rule with Drakon.",
    "Where Every Ball Tells a Story of Glory",
    "Elevate Your Game with Drakon's Elite Gear",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isBannerVisible) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === promotionalTexts.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isBannerVisible, promotionalTexts.length]);

  return (
    <>
      {/* Top Header - Fixed positioned */}
      {isBannerVisible && (
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="bg-navy-blue text-white px-4 md:px-6 py-2">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* Left side - Close button */}
              <button
                onClick={() => setIsBannerVisible(false)}
                className="hover:text-teal-blue transition-colors duration-200 p-1"
                aria-label="Close banner"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Centered Text Carousel */}
              <div className="flex-1 text-center text-xs sm:text-sm px-4 relative h-6 flex items-center justify-center">
                {promotionalTexts.map((text, index) => (
                  <span
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center font-bold transition-all duration-1000 ease-in-out ${
                      index === currentTextIndex
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-2"
                    }`}
                  >
                    {text}
                  </span>
                ))}
              </div>

              {/* Right side - Social Links */}
              <div className="hidden sm:flex items-center space-x-4">
                <Link
                  href="https://www.facebook.com/share/1GtMBPEXRB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-blue transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/drakonsports/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-blue transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/drakon-sports/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-blue transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.youtube.com/@DrakonSports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-blue transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
                <Link
                  href="https://x.com/drakon_sports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-blue transition-colors duration-200"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Navigation - Fixed */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled || !isBannerVisible ? "top-0 shadow-lg" : "top-10"
        } bg-white border-b border-gray-100`}
      >
        <div
          className={`px-4 md:px-6 lg:px-8 transition-all duration-300 ${
            isScrolled ? "py-1" : "py-1.5"
          }`}
        >
          <div className="flex items-center justify-between w-full h-[50px] md:h-[60px]">
            {/* Left Navigation - Desktop and Mobile Search */}
            <div className="flex items-center space-x-1 lg:space-x-2">
              {/* Mobile search button (mobile-only, left side) */}
              <Button
                variant="ghost"
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 hover:bg-gray-100 text-navy-blue hover:text-teal-blue transition-colors duration-200"
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Link
                href="/about"
                className="hidden md:block text-sm px-3 py-2 font-medium text-navy-blue hover:text-teal-blue transition-colors duration-200"
              >
                About Us
              </Link>
              <div className="hidden md:block w-px h-5 bg-gray-300"></div>
              <Link
                href="/contact-us"
                className="hidden md:block text-sm px-3 py-2 font-medium text-navy-blue hover:text-teal-blue transition-colors duration-200"
              >
                Contact Us
              </Link>
              <div className="hidden md:block w-px h-5 bg-gray-300"></div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden md:flex p-2 hover:bg-gray-100 text-navy-blue hover:text-teal-blue transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* Centered Logo */}
            <Link
              href="/"
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2"
              prefetch={false}
            >
              <Image
                src="/newlogo.png"
                alt="Drakon Sports Logo"
                width={320}
                height={220}
                className="w-auto object-contain h-[110px] md:h-[135px] lg:h-[135px]"
                priority
              />
            </Link>

            {/* Right Navigation - Cart + Region Dropdown + Mobile Menu */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Cart Button - Always visible */}
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-gray-100 text-navy-blue hover:text-teal-blue transition-colors duration-200 relative"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="h-4 w-4" />
                {/* Cart item count badge */}
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cricket-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px] font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>

              {/* Region Dropdown - Desktop only */}
              <div className="hidden md:block relative">
                <button
                  onClick={() => setIsRegionOpen(!isRegionOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-navy-blue hover:text-teal-blue transition-colors duration-200"
                  aria-label="Select Region"
                >
                  <Globe className="h-4 w-4" />
                  <span>{selectedRegion}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      isRegionOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Region Dropdown Menu */}
                {isRegionOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {[
                      "India",
                      "Australia",
                      "Europe",
                      "North America",
                      "Asia Pacific",
                    ].map((region) => (
                      <button
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setIsRegionOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-navy-blue hover:text-teal-blue hover:bg-gray-50 transition-colors duration-200"
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 relative z-50"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-navy-blue" />
                ) : (
                  <Menu className="h-6 w-6 text-navy-blue" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Area */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-30 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 p-6 animate-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-navy-blue">
                Search Products
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for cricket bats, gear, accessories..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-blue focus:border-teal-blue outline-none text-navy-blue"
                autoFocus
              />
            </div>

            <div className="mt-4 flex gap-2">
              <Button
                onClick={() => {
                  // Handle search logic here
                  console.log("Searching for:", searchQuery);
                  setIsSearchOpen(false);
                }}
                className="bg-teal-blue hover:bg-teal-blue/80 text-white"
              >
                Search
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setIsSearchOpen(false);
                }}
              >
                Cancel
              </Button>
            </div>

            {/* Quick Search Suggestions */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cricket Bats",
                  "Protective Gear",
                  "Team Uniforms",
                  "Custom Orders",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchQuery(suggestion)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-navy-blue transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Full Screen Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close button inside panel */}
            <div className="flex justify-end p-4 border-b border-gray-200">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-navy-blue" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="py-4">
              <Link
                href="/about"
                className="block px-6 py-3 text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200 font-medium border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="block px-6 py-3 text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200 font-medium border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              {/* Region Selector */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsRegionOpen(!isRegionOpen)}
                  className="w-full text-left flex items-center justify-between px-6 py-3 text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200 font-medium"
                >
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-3" />
                    {selectedRegion}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isRegionOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isRegionOpen && (
                  <div className="bg-gray-50 py-2">
                    {[
                      "India",
                      "Australia",
                      "Europe",
                      "North America",
                      "Asia Pacific",
                    ].map((region) => (
                      <button
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setIsRegionOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-10 py-2 text-sm text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200"
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Links in Mobile Menu */}
              <div className="px-6 py-4 mt-4">
                <p className="text-xs text-gray-500 mb-3 font-medium">
                  Follow Us
                </p>
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://www.facebook.com/share/1GtMBPEXRB/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-blue hover:text-teal-blue transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/drakonsports/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-blue hover:text-teal-blue transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/drakon-sports/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-blue hover:text-teal-blue transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@DrakonSports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-blue hover:text-teal-blue transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://x.com/drakon_sports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-blue hover:text-teal-blue transition-colors duration-200"
                    aria-label="X (formerly Twitter)"
                  >
                    <XIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer for fixed navbar - matches navbar height only */}
      <div className="h-[54px] md:h-[64px]"></div>
    </>
  );
};
