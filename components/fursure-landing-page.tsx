"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, XCircle, ArrowRight, Menu, Check } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function FurSureLandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-white border-b-2 border-gray-200 px-6 py-3 flex items-center justify-between backdrop-blur-sm bg-white/95 w-full h-20">
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

      <main className="flex-1 pt-[64px]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
          {/* Full-screen cricket equipment background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/cricket-equipment-hero-bg.jpg"
              alt="Premium Cricket Equipment Background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container px-5 md:px-6 text-center text-white flex flex-col items-center justify-center h-full">
            <div className="max-w-4xl mx-auto pt-8 pb-12 space-y-8">
              {/* Animated badge */}
              <div className="inline-block animate-fade-in-up opacity-0 animation-delay-300 mb-8">
                <div className="inline-block bg-black/30 backdrop-blur-sm border border-white/30 px-6 py-3 text-lg font-medium text-white shadow-lg">
                  <span className="animate-pulse drop-shadow-lg">
                    Where the Elite Play Their Own Game
                  </span>
                </div>
              </div>

              {/* Main heading with animation */}
              <div className="mb-10">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl text-white font-serif animate-fade-in-up opacity-0 animation-delay-500 drop-shadow-2xl leading-tight">
                  Discretion. Precision. Excellence.
                </h1>
              </div>

              {/* Subtitle */}
              <div className="mb-12">
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animation-delay-700 drop-shadow-lg">
                  DRAKON SPORTS PRIVATE LIMITED is not just a brand. It is a
                  private gateway into the rarest, most luxurious expressions of
                  the gentleman's game.
                </p>
              </div>

              {/* Three CTAs */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 animation-delay-900">
                <Button
                  size="lg"
                  className="text-white shadow-2xl px-8 py-4 text-lg font-semibold border-2 border-transparent hover:border-white/20 transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#CD853F" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#B8860B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#CD853F";
                  }}
                >
                  Explore Collection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Custom Orders
                </Button>
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="#contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Official Partners & Suppliers Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4 font-serif">
                Official Partners & Suppliers
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted partnerships with the world's leading cricket brands and
                manufacturers
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {/* MRF */}
              <div
                className="group flex flex-col items-center p-6 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: "inherit" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#CD853F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "inherit";
                }}
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-gray-200">
                  <Image
                    src="/mrf.jpeg"
                    alt="MRF Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  Premium Bats
                </span>
              </div>

              {/* SS */}
              <div
                className="group flex flex-col items-center p-6 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: "inherit" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#CD853F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "inherit";
                }}
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-gray-200">
                  <Image
                    src="/ss.jpeg"
                    alt="SS Cricket Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  Equipment
                </span>
              </div>

              {/* Adidas */}
              <div
                className="group flex flex-col items-center p-6 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: "inherit" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#CD853F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "inherit";
                }}
              >
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-gray-200">
                  <Image
                    src="/adidasnew.jpeg"
                    alt="Adidas Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  Apparel
                </span>
              </div>

              {/* Gray-Nicolls */}
              <div
                className="group flex flex-col items-center p-6 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: "inherit" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#CD853F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "inherit";
                }}
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-gray-200">
                  <Image
                    src="/grayn.jpeg"
                    alt="Gray-Nicolls Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  Heritage
                </span>
              </div>

              {/* Kookaburra */}
              <div
                className="group flex flex-col items-center p-6 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: "inherit" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#CD853F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "inherit";
                }}
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-gray-200">
                  <Image
                    src="/kooko.jpeg"
                    alt="Kookaburra Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  Balls & Gear
                </span>
              </div>

              {/* New Balance */}
              <div
                className="group flex flex-col items-center p-6 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: "inherit" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#CD853F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "inherit";
                }}
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-gray-200">
                  <Image
                    src="/nbnew.jpeg"
                    alt="New Balance Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  Footwear
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Drakon Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-6">
                  Why Choose Drakon?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Premium Quality Materials
                      </h3>
                      <p className="text-gray-600">
                        Designed for durability and comfort
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Performance-Driven Design
                      </h3>
                      <p className="text-gray-600">
                        Crafted for serious athletes and casual players alike
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Custom Solutions
                      </h3>
                      <p className="text-gray-600">
                        Team kits, personalized gear & bulk orders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Sustainable Manufacturing
                      </h3>
                      <p className="text-gray-600">
                        We care about your performance and the planet
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Trusted by Champions
                      </h3>
                      <p className="text-gray-600">
                        Endorsed by professionals and rising stars
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
                <Image
                  src="/premium-cricket-equipment.jpg"
                  alt="Premium Cricket Equipment"
                  width={300}
                  height={200}
                  className="border-2 border-gray-200 object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/custom-team-uniforms.jpg"
                  alt="Custom Team Uniforms"
                  width={300}
                  height={200}
                  className="border-2 border-gray-200 object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/sustainable-manufacturing.jpg"
                  alt="Sustainable Manufacturing"
                  width={300}
                  height={200}
                  className="border-2 border-gray-200 object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/professional-athletes.jpg"
                  alt="Professional Athletes"
                  width={300}
                  height={200}
                  className="border-2 border-gray-200 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Grid Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                Our Premium Collection
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our curated selection of elite cricket equipment and
                experiences
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {/* Premium Bats */}
              <div className="group relative bg-white border-2 border-gray-200 overflow-hidden hover:border-[#CD853F] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                  <Image
                    src="/premium-cricket-bat.jpg"
                    alt="Premium Cricket Bats"
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">Premium Bats</h3>
                  <p className="text-sm text-gray-600">
                    Handcrafted Excellence
                  </p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                  style={{ backgroundColor: "#CD853F" }}
                >
                  <div className="text-center">
                    <span className="text-white font-semibold text-lg">
                      Explore Collection
                    </span>
                    <p className="text-white text-sm mt-1">
                      Handcrafted Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom Gear */}
              <div className="group relative bg-white border-2 border-gray-200 overflow-hidden hover:border-[#C0C0C0] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                  <Image
                    src="/custom-cricket-gear-equipment.jpg"
                    alt="Custom Cricket Gear"
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">Custom Gear</h3>
                  <p className="text-sm text-gray-600">
                    Personalized Equipment
                  </p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                  style={{ backgroundColor: "#C0C0C0" }}
                >
                  <div className="text-center">
                    <span className="text-white font-semibold text-lg">
                      Customize Now
                    </span>
                    <p className="text-white text-sm mt-1">
                      Personalized Equipment
                    </p>
                  </div>
                </div>
              </div>

              {/* Stadium Experiences */}
              <div className="group relative bg-white border-2 border-gray-200 overflow-hidden hover:border-[#722F37] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                  <Image
                    src="/cricket-stadium-experience.jpg"
                    alt="Stadium Experiences"
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Stadium Experiences
                  </h3>
                  <p className="text-sm text-gray-600">Elite Events</p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                  style={{ backgroundColor: "#722F37" }}
                >
                  <div className="text-center">
                    <span className="text-white font-semibold text-lg">
                      Book Experience
                    </span>
                    <p className="text-white text-sm mt-1">Elite Events</p>
                  </div>
                </div>
              </div>

              {/* Legacy Items */}
              <div className="group relative bg-white border-2 border-gray-200 overflow-hidden hover:border-[#B8860B] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                  <Image
                    src="/vintage-cricket-legacy-items.jpg"
                    alt="Legacy Cricket Items"
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">Legacy Items</h3>
                  <p className="text-sm text-gray-600">Collector's Edition</p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                  style={{ backgroundColor: "#B8860B" }}
                >
                  <div className="text-center">
                    <span className="text-white font-semibold text-lg">
                      View Collection
                    </span>
                    <p className="text-white text-sm mt-1">
                      Collector's Edition
                    </p>
                  </div>
                </div>
              </div>

              {/* Accessories */}
              <div className="group relative bg-white border-2 border-gray-200 overflow-hidden hover:border-[#A8A8A8] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                  <Image
                    src="/cricket-accessories-gloves-pads.jpg"
                    alt="Cricket Accessories"
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">Accessories</h3>
                  <p className="text-sm text-gray-600">Essential Gear</p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                  style={{ backgroundColor: "#A8A8A8" }}
                >
                  <div className="text-center">
                    <span className="text-white font-semibold text-lg">
                      Shop Now
                    </span>
                    <p className="text-white text-sm mt-1">Essential Gear</p>
                  </div>
                </div>
              </div>

              {/* Exclusive Kits */}
              <div className="group relative bg-white border-2 border-gray-200 overflow-hidden hover:border-[#8B0000] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                  <Image
                    src="/exclusive-cricket-team-kits-uniforms.jpg"
                    alt="Exclusive Cricket Kits"
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Exclusive Kits
                  </h3>
                  <p className="text-sm text-gray-600">Team Uniforms</p>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                  style={{ backgroundColor: "#8B0000" }}
                >
                  <div className="text-center">
                    <span className="text-white font-semibold text-lg">
                      Order Kits
                    </span>
                    <p className="text-white text-sm mt-1">Team Uniforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4 font-serif">
                Our Elite Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive cricket solutions tailored for champions and
                enthusiasts alike
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Bespoke Bat Creation */}
              <div className="group bg-white border-2 border-gray-200 p-8 hover:border-[#CD853F] transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ backgroundColor: "#CD853F" }}
                  >
                    <span className="text-white font-bold text-lg">🏏</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bespoke Bat Creation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Handcrafted cricket bats tailored to your exact
                  specifications, playing style, and preferences by master
                  craftsmen.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent transition-all duration-300"
                  style={{
                    borderColor: "#CD853F",
                    color: "#CD853F",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#CD853F";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#CD853F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#CD853F";
                    e.currentTarget.style.borderColor = "#CD853F";
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Stadium Bookings */}
              <div className="group bg-white border-2 border-gray-200 p-8 hover:border-[#C0C0C0] transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ backgroundColor: "#C0C0C0" }}
                  >
                    <span className="text-white font-bold text-lg">🏟️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Stadium Bookings
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Exclusive access to premium cricket facilities and stadiums
                  for training, matches, and special events worldwide.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent transition-all duration-300"
                  style={{
                    borderColor: "#C0C0C0",
                    color: "#722F37",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C0C0C0";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#C0C0C0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#722F37";
                    e.currentTarget.style.borderColor = "#C0C0C0";
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Exclusive Experiences */}
              <div className="group bg-white border-2 border-gray-200 p-8 hover:border-[#722F37] transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ backgroundColor: "#722F37" }}
                  >
                    <span className="text-white font-bold text-lg">⭐</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Exclusive Experiences
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  VIP cricket experiences including private coaching with
                  legends, exclusive tournaments, and behind-the-scenes access.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent transition-all duration-300"
                  style={{
                    borderColor: "#722F37",
                    color: "#722F37",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#722F37";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#722F37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#722F37";
                    e.currentTarget.style.borderColor = "#722F37";
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Global Partnerships */}
              <div className="group bg-white border-2 border-gray-200 p-8 hover:border-[#B8860B] transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ backgroundColor: "#B8860B" }}
                  >
                    <span className="text-white font-bold text-lg">🌍</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Global Partnerships
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic partnerships with international cricket brands,
                  academies, and professional teams for unmatched opportunities.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent transition-all duration-300"
                  style={{
                    borderColor: "#B8860B",
                    color: "#B8860B",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#B8860B";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#B8860B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#B8860B";
                    e.currentTarget.style.borderColor = "#B8860B";
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Large cricket action image */}
              <div className="relative animate-fade-in-left">
                <div className="aspect-[4/3] relative overflow-hidden border-2 border-gray-300 hover:border-primary-400 transition-colors duration-300">
                  <Image
                    src="/cricket-action-hero-shot.jpg"
                    alt="Cricket Action Shot"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* Geometric overlay elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-l-4 border-b-4 border-primary-600/30"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-r-4 border-t-4 border-primary-600/30"></div>
                </div>
                {/* Sharp geometric accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary-100 border-2 border-primary-200 opacity-60"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-orange-100 border-2 border-orange-200 opacity-50"></div>
              </div>

              {/* Right: Brand story content */}
              <div className="animate-fade-in-right">
                {/* Since 2020 Badge */}
                <div className="inline-block mb-6">
                  <div
                    className="bg-gradient-to-r from-gray-100 to-gray-50 border-2 px-6 py-2"
                    style={{ borderColor: "#CD853F" }}
                  >
                    <span
                      className="font-semibold text-sm tracking-wide"
                      style={{ color: "#722F37" }}
                    >
                      SINCE 2020
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-6 font-serif">
                  Our Journey to Cricket Excellence
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Founded in 2020 with a vision to revolutionize the cricket
                    equipment industry, Drakon Sports emerged from a simple
                    belief: every cricketer deserves access to world-class gear
                    that matches their passion and dedication.
                  </p>

                  <p>
                    What started as a small venture by cricket enthusiasts has
                    grown into a trusted name among professionals and amateurs
                    alike. Our founders, former cricketers themselves,
                    understood the frustration of settling for mediocre
                    equipment when excellence was within reach.
                  </p>

                  <p>
                    Today, we partner with the finest manufacturers across the
                    globe, curating a collection that represents the pinnacle of
                    cricket craftsmanship. From handcrafted bats to
                    precision-engineered protective gear, every product in our
                    catalog tells a story of innovation, quality, and unwavering
                    commitment to the game.
                  </p>

                  <div className="pt-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 transform rotate-45"
                          style={{ backgroundColor: "#CD853F" }}
                        ></div>
                        <span>4+ Years of Excellence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 transform rotate-45"
                          style={{ backgroundColor: "#C0C0C0" }}
                        ></div>
                        <span>Global Partnerships</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 transform rotate-45"
                          style={{ backgroundColor: "#722F37" }}
                        ></div>
                        <span>Trusted by Champions</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    size="lg"
                    className="text-white shadow-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: "#722F37" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#8B0000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#722F37";
                    }}
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Showcase */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4 font-serif">
                Exclusive Collections
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our curated selection of premium cricket offerings,
                each representing the pinnacle of craftsmanship and exclusivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Grade 1 English Willow Bats */}
              <div className="group relative bg-white border-2 border-gray-300 overflow-hidden hover:border-[#CD853F] transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/premium-english-willow-cricket-bat-handcrafted.jpg"
                    alt="Grade 1 English Willow Bats"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div
                      className="text-white px-3 py-1 text-xs font-semibold border"
                      style={{
                        backgroundColor: "#CD853F",
                        borderColor: "#CD853F",
                      }}
                    >
                      PREMIUM
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "#CD853F" }}
                  ></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                    Grade 1 English Willow Bats
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Handcrafted from the finest English willow, each bat is
                    meticulously selected and shaped by master craftsmen for
                    unparalleled performance.
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "#CD853F" }}
                    >
                      ARTISAN CRAFTED
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Platinum-Stitched Collector's Kits */}
              <div className="group relative bg-white border-2 border-gray-300 overflow-hidden hover:border-[#C0C0C0] transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/luxury-cricket-team-kit-platinum-stitching-collect.jpg"
                    alt="Platinum-Stitched Collector's Kits"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div
                      className="text-white px-3 py-1 text-xs font-semibold border"
                      style={{
                        backgroundColor: "#C0C0C0",
                        borderColor: "#A8A8A8",
                      }}
                    >
                      COLLECTOR'S
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "#C0C0C0" }}
                  ></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                    Platinum-Stitched Collector's Kits
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Limited edition team kits featuring platinum threading and
                    exclusive designs, reserved for the most discerning
                    collectors.
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "#A8A8A8" }}
                    >
                      LIMITED EDITION
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Custom Signed Equipment */}
              <div className="group relative bg-white border-2 border-gray-300 overflow-hidden hover:border-[#722F37] transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/cricket-equipment-signed-by-professional-players-c.jpg"
                    alt="Custom Signed Equipment"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div
                      className="text-white px-3 py-1 text-xs font-semibold border"
                      style={{
                        backgroundColor: "#722F37",
                        borderColor: "#8B0000",
                      }}
                    >
                      SIGNED
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "#722F37" }}
                  ></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                    Custom Signed Equipment
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Authentic equipment personally signed by cricket legends and
                    current stars, complete with certificates of authenticity.
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "#722F37" }}
                    >
                      AUTHENTICATED
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Private Tournament Arrangements */}
              <div className="group relative bg-white border-2 border-gray-300 overflow-hidden hover:border-[#B8860B] transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/private-cricket-tournament-exclusive-venue-luxury-.jpg"
                    alt="Private Tournament Arrangements"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div
                      className="text-white px-3 py-1 text-xs font-semibold border"
                      style={{
                        backgroundColor: "#B8860B",
                        borderColor: "#B8860B",
                      }}
                    >
                      EXCLUSIVE
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "#B8860B" }}
                  ></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                    Private Tournament Arrangements
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Bespoke tournament experiences at world-class venues,
                    complete with professional umpiring and luxury hospitality.
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "#B8860B" }}
                    >
                      BESPOKE
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Master Artisan Collections */}
              <div className="group relative bg-white border-2 border-gray-300 overflow-hidden hover:border-[#A8A8A8] transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/master-craftsman-cricket-equipment-artisan-collect.jpg"
                    alt="Master Artisan Collections"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div
                      className="text-white px-3 py-1 text-xs font-semibold border"
                      style={{
                        backgroundColor: "#A8A8A8",
                        borderColor: "#A8A8A8",
                      }}
                    >
                      ARTISAN
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "#A8A8A8" }}
                  ></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                    Master Artisan Collections
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Exceptional pieces crafted by renowned artisans,
                    representing centuries of traditional craftsmanship and
                    modern innovation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "#A8A8A8" }}
                    >
                      MASTERPIECE
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Exclusive Cricket Retreats */}
              <div className="group relative bg-white border-2 border-gray-300 overflow-hidden hover:border-[#8B0000] transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/luxury-cricket-retreat-exclusive-training-camp-sce.jpg"
                    alt="Exclusive Cricket Retreats"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div
                      className="text-white px-3 py-1 text-xs font-semibold border"
                      style={{
                        backgroundColor: "#8B0000",
                        borderColor: "#8B0000",
                      }}
                    >
                      RETREAT
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "#8B0000" }}
                  ></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors">
                    Exclusive Cricket Retreats
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Immersive cricket experiences in breathtaking locations,
                    combining intensive training with luxury accommodations and
                    fine dining.
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "#8B0000" }}
                    >
                      IMMERSIVE
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500 italic text-lg">
                Each collection represents our commitment to excellence and
                exclusivity
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Trusted by Cricket's Finest Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="trustedGrid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.2"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#trustedGrid)" />
            </svg>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-20 right-32 w-20 h-20 transform rotate-45 animate-pulse"
              style={{ backgroundColor: "#CD853F" }}
            ></div>
            <div
              className="absolute bottom-32 left-16 w-16 h-16 border-4 animate-pulse animation-delay-1000"
              style={{ backgroundColor: "#C0C0C0", borderColor: "#CD853F" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-white border-2 animate-pulse animation-delay-2000"
              style={{ borderColor: "#A8A8A8" }}
            ></div>
            <div
              className="absolute bottom-20 right-20 w-12 h-12 transform rotate-12 animate-pulse animation-delay-3000"
              style={{ backgroundColor: "#722F37" }}
            ></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div
                  className="backdrop-blur-sm border-2 px-8 py-3"
                  style={{
                    backgroundColor: "rgba(205, 133, 63, 0.2)",
                    borderColor: "rgba(205, 133, 63, 0.3)",
                  }}
                >
                  <span
                    className="font-semibold text-sm tracking-wider"
                    style={{ color: "#CD853F" }}
                  >
                    TRUSTED WORLDWIDE
                  </span>
                </div>
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6 text-white drop-shadow-lg font-serif">
                Trusted by Cricket's Finest
              </h2>
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 mb-4"
                style={{ color: "#C0C0C0" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 transform rotate-45 animate-pulse"
                    style={{ backgroundColor: "#CD853F" }}
                  ></div>
                  <span className="text-xl font-bold">20,000+</span>
                  <span className="text-lg">Satisfied Customers</span>
                </div>
                <div
                  className="hidden sm:block w-1 h-1 transform rotate-45"
                  style={{ backgroundColor: "#CD853F" }}
                ></div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 transform rotate-45 animate-pulse animation-delay-500"
                    style={{ backgroundColor: "#722F37" }}
                  ></div>
                  <span className="text-xl font-bold">50+</span>
                  <span className="text-lg">Countries Served</span>
                </div>
              </div>
              <p className="text-xl text-gray-200 font-light italic drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                From grassroots clubs to international champions, our commitment
                to excellence spans across continents
              </p>
            </div>

            {/* Client Partnerships */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {/* US Cricket Store */}
              <div className="group bg-gray-800/30 backdrop-blur-sm border-2 border-gray-600 p-8 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:border-primary-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Image
                      src="/uscricket.webp"
                      alt="US Cricket Store Logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                      US Cricket Store
                    </h3>
                    <p className="text-primary-400 font-medium">
                      Premium Retail Partner
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Leading cricket equipment retailer across North America,
                  serving professional teams and amateur enthusiasts.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
                  <span>California, USA</span>
                </div>
              </div>

              {/* CricKingdom Academy */}
              <div className="group bg-gray-800/30 backdrop-blur-sm border-2 border-gray-600 p-8 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:border-primary-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Image
                      src="/crickingdom.avif"
                      alt="CricKingdom Academy Logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      CricKingdom Academy
                    </h3>
                    <p className="text-orange-400 font-medium">
                      By Rohit Sharma
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  International cricket academy network providing world-class
                  training facilities and coaching programs.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
                  <span>Global Locations</span>
                </div>
              </div>

              {/* DWF Indoor Sports */}
              <div className="group bg-gray-800/30 backdrop-blur-sm border-2 border-gray-600 p-8 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:border-primary-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Image
                      src="/dwf.png"
                      alt="DWF Indoor Sports Logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                      DWF Indoor Sports
                    </h3>
                    <p className="text-green-400 font-medium">
                      Professional Facilities
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  State-of-the-art indoor cricket facilities providing
                  year-round training and competitive opportunities.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
                  <span>Texas, USA</span>
                </div>
              </div>
            </div>

            {/* Global Presence */}
            <div className="text-center">
              <div className="inline-flex items-center gap-6 bg-gray-800/30 backdrop-blur-sm border border-gray-600/50 px-8 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 animate-pulse"></div>
                  <span className="text-white font-medium">North America</span>
                </div>
                <div className="w-1 h-6 bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 animate-pulse animation-delay-500"></div>
                  <span className="text-white font-medium">Europe</span>
                </div>
                <div className="w-1 h-6 bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 animate-pulse animation-delay-1000"></div>
                  <span className="text-white font-medium">Asia Pacific</span>
                </div>
                <div className="w-1 h-6 bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 animate-pulse animation-delay-1500"></div>
                  <span className="text-white font-medium">Australia</span>
                </div>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                Serving cricket enthusiasts across four continents
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
          {/* Call to Action Content */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-white drop-shadow-lg font-serif">
                Ready to Take Your Cricket Game to the Next Level?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Upgrade your equipment, experience, and partnerships with Drakon
                Sports.
              </p>
            </div>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white shadow-lg px-8 py-4 text-lg font-semibold border-2 border-transparent hover:border-white/20 transition-all duration-300 hover:scale-105"
                style={{ color: "#722F37" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#722F37";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#722F37";
                }}
                asChild
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                style={{ borderColor: "#C0C0C0" }}
                asChild
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white border-t-4 border-primary-600">
          <div className="container px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <Link href="#" className="flex items-center space-x-2">
                  <Heart className="h-8 w-8 text-primary-500" />
                  <div>
                    <div className="text-2xl font-bold">drakon</div>
                    <div className="text-sm text-gray-300 -mt-1">sports</div>
                  </div>
                </Link>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                  Your gateway into the rarest, most luxurious expressions of
                  cricket excellence. Where elite meets precision.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-primary-600 border border-primary-500 flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-primary-600 border border-primary-500 flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-primary-600 border border-primary-500 flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b-2 border-primary-600 pb-2 inline-block">
                  Products
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Premium Bats
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Protective Gear
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Team Uniforms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Signed Equipment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Custom Orders
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b-2 border-primary-600 pb-2 inline-block">
                  Services
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Private Tournaments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Cricket Retreats
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Equipment Consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Professional Fitting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      Maintenance Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact & Legal */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b-2 border-primary-600 pb-2 inline-block">
                  Contact
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-300">
                    Email: info@drakonsports.com
                  </li>
                  <li className="text-gray-300">Phone: +1 (555) 123-4567</li>
                  <li className="text-gray-300">Global Headquarters</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors block"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors block"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors block"
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
                    <div className="w-2 h-2 bg-green-400 transform rotate-45"></div>
                    <span>Premium Quality Assured</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-400 transform rotate-45"></div>
                    <span>Worldwide Shipping</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
