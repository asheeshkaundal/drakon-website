"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Package, Box, Truck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-16">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Static Inventory SVG */}
          <div className="relative mx-auto w-full max-w-md h-64 mb-8">
            {/* Shelves */}
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Back wall */}
              <rect
                x="50"
                y="20"
                width="300"
                height="260"
                fill="#f3f4f6"
                stroke="#d1d5db"
                strokeWidth="2"
              />

              {/* Top Shelf */}
              <rect x="40" y="80" width="320" height="8" fill="#1e3a5f" />
              <rect x="40" y="88" width="320" height="4" fill="#152a45" />

              {/* Middle Shelf */}
              <rect x="40" y="160" width="320" height="8" fill="#1e3a5f" />
              <rect x="40" y="168" width="320" height="4" fill="#152a45" />

              {/* Bottom Shelf */}
              <rect x="40" y="240" width="320" height="8" fill="#1e3a5f" />
              <rect x="40" y="248" width="320" height="4" fill="#152a45" />

              {/* Boxes - Static */}
              {/* Top shelf boxes */}
              <g>
                <rect
                  x="70"
                  y="50"
                  width="40"
                  height="30"
                  fill="#3b82f6"
                  stroke="#2563eb"
                  strokeWidth="1"
                />
                <line
                  x1="70"
                  y1="65"
                  x2="110"
                  y2="65"
                  stroke="#2563eb"
                  strokeWidth="1"
                />
                <line
                  x1="90"
                  y1="50"
                  x2="90"
                  y2="80"
                  stroke="#2563eb"
                  strokeWidth="1"
                />
              </g>

              <g>
                <rect
                  x="130"
                  y="50"
                  width="40"
                  height="30"
                  fill="#10b981"
                  stroke="#059669"
                  strokeWidth="1"
                />
                <line
                  x1="130"
                  y1="65"
                  x2="170"
                  y2="65"
                  stroke="#059669"
                  strokeWidth="1"
                />
                <line
                  x1="150"
                  y1="50"
                  x2="150"
                  y2="80"
                  stroke="#059669"
                  strokeWidth="1"
                />
              </g>

              <g>
                <rect
                  x="190"
                  y="50"
                  width="40"
                  height="30"
                  fill="#f59e0b"
                  stroke="#d97706"
                  strokeWidth="1"
                />
                <line
                  x1="190"
                  y1="65"
                  x2="230"
                  y2="65"
                  stroke="#d97706"
                  strokeWidth="1"
                />
                <line
                  x1="210"
                  y1="50"
                  x2="210"
                  y2="80"
                  stroke="#d97706"
                  strokeWidth="1"
                />
              </g>

              {/* Middle shelf boxes */}
              <g>
                <rect
                  x="60"
                  y="130"
                  width="50"
                  height="30"
                  fill="#ef4444"
                  stroke="#dc2626"
                  strokeWidth="1"
                />
                <line
                  x1="60"
                  y1="145"
                  x2="110"
                  y2="145"
                  stroke="#dc2626"
                  strokeWidth="1"
                />
                <line
                  x1="85"
                  y1="130"
                  x2="85"
                  y2="160"
                  stroke="#dc2626"
                  strokeWidth="1"
                />
              </g>

              <g>
                <rect
                  x="140"
                  y="130"
                  width="50"
                  height="30"
                  fill="#8b5cf6"
                  stroke="#7c3aed"
                  strokeWidth="1"
                />
                <line
                  x1="140"
                  y1="145"
                  x2="190"
                  y2="145"
                  stroke="#7c3aed"
                  strokeWidth="1"
                />
                <line
                  x1="165"
                  y1="130"
                  x2="165"
                  y2="160"
                  stroke="#7c3aed"
                  strokeWidth="1"
                />
              </g>

              {/* Bottom shelf boxes */}
              <g>
                <rect
                  x="80"
                  y="210"
                  width="45"
                  height="30"
                  fill="#14b8a6"
                  stroke="#0d9488"
                  strokeWidth="1"
                />
                <line
                  x1="80"
                  y1="225"
                  x2="125"
                  y2="225"
                  stroke="#0d9488"
                  strokeWidth="1"
                />
                <line
                  x1="102.5"
                  y1="210"
                  x2="102.5"
                  y2="240"
                  stroke="#0d9488"
                  strokeWidth="1"
                />
              </g>

              <g>
                <rect
                  x="150"
                  y="210"
                  width="45"
                  height="30"
                  fill="#ec4899"
                  stroke="#db2777"
                  strokeWidth="1"
                />
                <line
                  x1="150"
                  y1="225"
                  x2="195"
                  y2="225"
                  stroke="#db2777"
                  strokeWidth="1"
                />
                <line
                  x1="172.5"
                  y1="210"
                  x2="172.5"
                  y2="240"
                  stroke="#db2777"
                  strokeWidth="1"
                />
              </g>

              <g>
                <rect
                  x="220"
                  y="210"
                  width="45"
                  height="30"
                  fill="#f97316"
                  stroke="#ea580c"
                  strokeWidth="1"
                />
                <line
                  x1="220"
                  y1="225"
                  x2="265"
                  y2="225"
                  stroke="#ea580c"
                  strokeWidth="1"
                />
                <line
                  x1="242.5"
                  y1="210"
                  x2="242.5"
                  y2="240"
                  stroke="#ea580c"
                  strokeWidth="1"
                />
              </g>

              {/* Static forklift/cart */}
              <g>
                <rect
                  x="280"
                  y="200"
                  width="60"
                  height="40"
                  fill="#64748b"
                  stroke="#475569"
                  strokeWidth="2"
                />
                <circle cx="295" cy="245" r="8" fill="#334155" />
                <circle cx="325" cy="245" r="8" fill="#334155" />
                <rect
                  x="285"
                  y="180"
                  width="50"
                  height="20"
                  fill="#94a3b8"
                  stroke="#64748b"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>

          {/* Static Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <Package className="w-12 h-12 text-navy-blue" />
            <Box className="w-12 h-12 text-teal-blue" />
            <Truck className="w-12 h-12 text-navy-blue" />
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-navy-blue">
              We're Stocking Up!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Our inventory is loading...
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-gray-700">
              We're currently preparing an exceptional collection of premium
              cricket equipment and gear. Our team is working hard to bring you
              the finest selection of bats, accessories, and exclusive
              experiences.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="flex items-center gap-3 text-left">
                <Calendar className="w-6 h-6 text-teal-blue flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-blue">
                    Expected Launch
                  </h3>
                  <p className="text-gray-600">Coming Soon - Stay Tuned!</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left">
                <Package className="w-6 h-6 text-teal-blue flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-blue">
                    What's Coming
                  </h3>
                  <p className="text-gray-600">
                    Premium cricket equipment, bespoke gear, and exclusive
                    experiences
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-4">
                Want to be notified when we launch?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-navy-blue hover:bg-navy-blue/90 text-white px-8"
                  >
                    Get Notified
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white px-8"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
