import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

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

export const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white border-t-4 border-teal-blue">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/footer logo final.png"
                alt="Drakon Sports Logo"
                width={180}
                height={72}
                className="h-[180px] w-auto object-contain"
              />
            </div>
            <p className="text-silver-gray text-sm leading-relaxed max-w-xs">
              Your gateway into the rarest, most luxurious expressions of
              cricket excellence. Where elite meets precision.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/drakonsports/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cricket-red hover:bg-red-700 border border-cricket-red flex items-center justify-center transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/asheesh-kaundal-304575221/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cricket-red hover:bg-red-700 border border-cricket-red flex items-center justify-center transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://www.youtube.com/@DrakonSports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cricket-red hover:bg-red-700 border border-cricket-red flex items-center justify-center transition-colors cursor-pointer"
              >
                <Youtube className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://x.com/drakon_sports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cricket-red hover:bg-red-700 border border-cricket-red flex items-center justify-center transition-colors cursor-pointer"
              >
                <XIcon className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-teal-blue pb-2 inline-block">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Premium Bats
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Protective Gear
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Team Uniforms
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Signed Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-silver-gray pb-2 inline-block">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Private Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Cricket Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Equipment Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Professional Fitting
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-silver-gray hover:text-teal-blue transition-colors"
                >
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-cricket-red pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-silver-gray">
                Email: asheesh.kaundal@drakonsports.com
              </li>
              <li className="text-silver-gray">Phone: +91-8888813841</li>
              <li className="text-silver-gray">
                <div>Sales & Communication:</div>
                <div>FF-69, First Floor, SS Omnia</div>
                <div>Sector-86, Gurugram, Haryana - 122004</div>
              </li>
              <li className="text-silver-gray mt-2">
                <div>Head Office:</div>
                <div>DRAKON SPORTS, 619</div>
                <div>Jawalamukhi, Kangra, HP - 176031</div>
              </li>
            </ul>
            <div className="space-y-2 text-sm">
              <Link
                href="/privacy-policy"
                className="text-silver-gray hover:text-teal-blue transition-colors block"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-silver-gray hover:text-teal-blue transition-colors block"
              >
                Terms of Service
              </Link>
              <Link
                href="/shipping-policy"
                className="text-silver-gray hover:text-teal-blue transition-colors block"
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-blue/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-silver-gray">
              © 2025 DRAKON SPORTS Private Limited. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-silver-gray">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-blue transform rotate-45"></div>
                <span>Premium Quality Assured</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-blue transform rotate-45"></div>
                <span>Worldwide Shipping</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
