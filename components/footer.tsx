import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white border-t-4"
      style={{ borderColor: "#CD853F" }}
    >
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/newlogo.png"
                alt="Drakon Sports Logo"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your gateway into the rarest, most luxurious expressions of
              cricket excellence. Where elite meets precision.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center transition-colors cursor-pointer border"
                style={{
                  backgroundColor: "#722F37",
                  borderColor: "#CD853F",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8B0000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#722F37";
                }}
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center transition-colors cursor-pointer border"
                style={{
                  backgroundColor: "#722F37",
                  borderColor: "#CD853F",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8B0000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#722F37";
                }}
              >
                <Twitter className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center transition-colors cursor-pointer border"
                style={{
                  backgroundColor: "#722F37",
                  borderColor: "#CD853F",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8B0000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#722F37";
                }}
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold border-b-2 pb-2 inline-block"
              style={{ borderColor: "#CD853F" }}
            >
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#CD853F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Premium Bats
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#CD853F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Protective Gear
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#CD853F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Team Uniforms
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#CD853F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Signed Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#CD853F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold border-b-2 pb-2 inline-block"
              style={{ borderColor: "#C0C0C0" }}
            >
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C0C0C0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Private Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C0C0C0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Cricket Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C0C0C0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Equipment Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C0C0C0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Professional Fitting
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C0C0C0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#D1D5DB";
                  }}
                >
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold border-b-2 pb-2 inline-block"
              style={{ borderColor: "#722F37" }}
            >
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">
                Email: asheesh.kaundal@drakonsports.com
              </li>
              <li className="text-gray-300">Phone: +91-8888813841</li>
              <li className="text-gray-300">
                <div>Sales & Communication:</div>
                <div className="ml-2">FF-69, First Floor, SS Omnia</div>
                <div className="ml-2">
                  Sector-86, Gurugram, Haryana - 122004
                </div>
              </li>
              <li className="text-gray-300 mt-2">
                <div>Head Office:</div>
                <div className="ml-2">Drakon Sports, 619</div>
                <div className="ml-2">Jawalamukhi, Kangra, HP - 176031</div>
              </li>
            </ul>
            <div className="space-y-2 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-300 transition-colors block"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#722F37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#D1D5DB";
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-300 transition-colors block"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#722F37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#D1D5DB";
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="/shipping-policy"
                className="text-gray-300 transition-colors block"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#722F37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#D1D5DB";
                }}
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Drakon Sports Private Limited. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 transform rotate-45"
                  style={{ backgroundColor: "#CD853F" }}
                ></div>
                <span>Premium Quality Assured</span>
              </span>
              <span className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 transform rotate-45"
                  style={{ backgroundColor: "#C0C0C0" }}
                ></div>
                <span>Worldwide Shipping</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
