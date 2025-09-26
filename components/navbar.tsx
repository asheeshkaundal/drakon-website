import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/60 border-b border-gray-200/20 px-4 md:px-6 py-3 flex items-center justify-between backdrop-blur-lg w-full h-20 transition-all duration-300">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src="/newlogo.png"
            alt="Drakon Sports Logo"
            width={200}
            height={80}
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center">
          <div className="w-px h-6 bg-light-silver mx-4"></div>
          <Link
            href="/about"
            className="text-sm px-4 py-2 font-medium relative group transition-colors duration-200 text-navy-blue hover:text-teal-blue"
          >
            About Us
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
          <div className="w-px h-6 bg-light-silver mx-4"></div>
          <Link
            href="/contact-us"
            className="text-sm px-4 py-2 font-medium relative group transition-colors duration-200 text-navy-blue hover:text-teal-blue"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100/50"
          >
            {isMenuOpen ? (
              <X className="h-8 w-8 text-navy-blue" />
            ) : (
              <Menu className="h-8 w-8 text-navy-blue" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-14 w-48 bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-lg shadow-lg py-2 z-50">
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
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
