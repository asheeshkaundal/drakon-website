import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Search,
  Globe,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Region");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header - Absolute positioned */}
      <header className="absolute top-0 left-0 w-full z-50 overflow-visible">
        <div className="bg-navy-blue text-white px-3 md:px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Left side - Social Links */}
            <div className="flex items-center space-x-4">
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
                href="https://www.linkedin.com/in/asheesh-kaundal-304575221/"
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
                href="https://twitter.com/drakonsports"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-blue transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>

            {/* Centered Text */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-sm">
              <span>
                💥 50% OFF! THE BEST SALE OF THE SEASON IS LIVE. SHOP NOW! 💥
              </span>
            </div>

            {/* Right side - Empty for balance */}
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-12 bg-transparent"></div>

      {/* Gap between header and navbar */}
      <div className="h-4 bg-transparent"></div>

      {/* Main Navigation - Fixed during scroll */}
      <nav className="fixed w-full z-40" style={{ top: "calc(3rem + 1rem)" }}>
        <div className="bg-white/70 backdrop-blur-md border-b border-gray-200/20 px-3 md:px-4 py-1 flex items-center justify-between w-full h-12 sm:h-14 md:h-16 transition-all duration-300 overflow-visible">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/about"
              className="text-sm px-4 py-2 font-medium relative group transition-colors duration-200 text-navy-blue hover:text-teal-blue"
            >
              About Us
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link>
            <div className="w-px h-6 bg-light-silver mx-2"></div>
            <Link
              href="/contact-us"
              className="text-sm px-4 py-2 font-medium relative group transition-colors duration-200 text-navy-blue hover:text-teal-blue"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </Link>
            <div className="w-px h-6 bg-light-silver mx-2"></div>
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-gray-100/50 text-navy-blue hover:text-teal-blue transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Centered Logo */}
          <Link
            href="/"
            className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10"
            prefetch={false}
          >
            <Image
              src="/newlogo.png"
              alt="Drakon Sports Logo"
              width={240}
              height={170}
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
            />
          </Link>

          {/* Right Navigation - Region Dropdown */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-navy-blue hover:text-teal-blue transition-colors duration-200"
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
                <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-lg shadow-lg py-2 z-50">
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
                      className="w-full text-left px-4 py-2 text-sm text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200"
                    >
                      {region}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 sm:p-2 hover:bg-gray-100/50"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 sm:h-9 sm:w-9 text-navy-blue" />
              ) : (
                <Menu className="h-8 w-8 sm:h-9 sm:w-9 text-navy-blue" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-12 sm:top-14 w-48 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/about"
                  className="block px-4 py-3 text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <div className="border-t border-gray-200/30 mx-2"></div>
                <Link
                  href="/contact-us"
                  className="block px-4 py-3 text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="border-t border-gray-200/30 mx-2"></div>
                <button
                  className="w-full text-left flex items-center px-4 py-3 text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </button>
                <div className="border-t border-gray-200/30 mx-2"></div>
                <button
                  className="w-full text-left flex items-center px-4 py-3 text-navy-blue hover:text-teal-blue hover:bg-teal-blue/5 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {selectedRegion}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-12 sm:h-14 md:h-16 bg-transparent"></div>
    </>
  );
};
