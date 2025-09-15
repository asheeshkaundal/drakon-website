import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/60 border-b border-gray-200/20 px-6 py-3 flex items-center justify-between backdrop-blur-lg w-full h-20 transition-all duration-300">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src="/drakon_logo-removebg.png"
            alt="Drakon Sports Logo"
            width={200}
            height={80}
            className="h-32 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center">
          <div className="w-px h-6 bg-gray-300 mx-4"></div>
          <Link
            href="/about"
            className="text-sm px-4 py-2 font-medium relative group transition-colors duration-200"
            style={{ color: "#722F37" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#8B0000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#722F37";
            }}
          >
            About Us
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
              style={{ backgroundColor: "#CD853F" }}
            ></span>
          </Link>
          <div className="w-px h-6 bg-gray-300 mx-4"></div>
          <Link
            href="#contact"
            className="text-sm px-4 py-2 font-medium relative group transition-colors duration-200"
            style={{ color: "#722F37" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#8B0000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#722F37";
            }}
          >
            Contact Us
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
              style={{ backgroundColor: "#CD853F" }}
            ></span>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-xs">
            <nav className="mt-8 flex flex-col gap-6">
              <Link
                href="/about"
                className="text-base font-medium text-gray-900 relative group py-2 border-b border-gray-200 transition-colors duration-200"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#722F37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#111827";
                }}
              >
                About Us
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  style={{ backgroundColor: "#CD853F" }}
                ></span>
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium text-gray-900 relative group py-2 border-b border-gray-200 transition-colors duration-200"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#722F37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#111827";
                }}
              >
                Contact Us
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  style={{ backgroundColor: "#CD853F" }}
                ></span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
