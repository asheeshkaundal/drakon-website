"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Heart,
  XCircle,
  ArrowRight,
  Menu,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ChevronUp,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export default function FurSureLandingPage() {
  // Hero slideshow state
  const heroImages = [
    {
      src: "/hero-slideshow/cricket-equipment-hero-bg.jpg",
      alt: "Premium Cricket Equipment Background",
    },
    {
      src: "/hero-slideshow/crick_hero.jpg",
      alt: "Cricket Action Shot",
    },
    {
      src: "/hero-slideshow/cricket-stadium-experience.jpg",
      alt: "Cricket Stadium Experience",
    },
    {
      src: "/hero-slideshow/hero_team.jpg",
      alt: "Professional Athletes",
    },
    {
      src: "/hero-slideshow/hero_5.jpg",
      alt: "Premium Cricket Equipment",
    },
  ];

  // Hero content that rotates with images
  const heroContent = [
    {
      badge: "Where the Elite Play Their Own Game",
      heading: "Discretion. Precision. Excellence.",
      description:
        "DRAKON SPORTS PRIVATE LIMITED is not just a brand. It is a private gateway into the rarest, most luxurious expressions of the gentleman's game.",
    },
    {
      badge: "MRF PREMIUM BATS",
      heading: "Power. Precision. Performance.",
      description:
        "Discover our range of Premium MRF cricket bats, crafted for power, precision, and durability. Perfect for professionals and enthusiasts who want top-notch performance on the field.",
    },
    {
      badge: "SS EQUIPMENTS",
      heading: "Comfort. Protection. Excellence.",
      description:
        "Explore our wide range of SS cricket equipment, including gloves, pads, and accessories—engineered for comfort, protection, and superior performance on the pitch.",
    },
    {
      badge: "ADIDAS APPAREL",
      heading: "Style. Performance. Professionalism.",
      description:
        "Step onto the field in style with our premium cricket apparel, designed for comfort, performance, and a professional look.",
    },
    {
      badge: "HERITAGE COLLECTION",
      heading: "Tradition. Quality. Legacy.",
      description:
        "Celebrate the legacy of cricket with our Heritage collection, blending tradition with timeless quality and craftsmanship.",
    },
    {
      badge: "BALLS AND GEAR",
      heading: "Reliability. Precision. Every Time.",
      description:
        "From practice sessions to big matches, our cricket balls and training gear deliver reliability and precision every time.",
    },
    {
      badge: "FOOTWEAR",
      heading: "Grip. Comfort. Endurance.",
      description:
        "Experience unmatched grip and comfort with our cricket footwear, built to support speed, agility, and endurance on the pitch.",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-advance slideshow every 5 seconds for optimal viewing experience
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-gray text-navy-blue">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Full-screen cricket equipment background slideshow */}
          <div className="absolute inset-0 z-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>{" "}
          {/* Navigation Arrows - Hidden on very small screens, positioned safely on mobile */}
          <button
            onClick={prevImage}
            className="hidden sm:block absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 p-1.5 sm:p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 text-white hover:bg-black/70 transition-all duration-300 group touch-manipulation"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform text-teal-blue" />
          </button>
          <button
            onClick={nextImage}
            className="hidden sm:block absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 p-1.5 sm:p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 text-white hover:bg-black/70 transition-all duration-300 group touch-manipulation"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform text-teal-blue" />
          </button>
          {/* Slide Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1.5 md:space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-teal-blue scale-110 md:scale-125 shadow-lg"
                    : "bg-silver-gray/60 hover:scale-105 md:hover:scale-110"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Hero Content */}
          <div className="relative z-10 container px-5 md:px-6 text-center text-white flex flex-col items-center justify-center h-full pt-8">
            <div className="max-w-3xl mx-auto pt-4 pb-8 space-y-6">
              {/* Animated badge with rotating content */}
              <div
                className={`inline-block mb-6 transition-opacity duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="inline-block bg-black/70 backdrop-blur-md border-2 border-white/50 px-5 py-2.5 text-base font-medium text-white shadow-2xl">
                  <span className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-semibold">
                    {heroContent[currentImageIndex % heroContent.length].badge}
                  </span>
                </div>
              </div>

              {/* Main heading with animation and rotating content */}
              <div
                className={`mb-8 transition-opacity duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white font-serif leading-tight"
                  style={{
                    textShadow:
                      "0 4px 12px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.8)",
                  }}
                >
                  {heroContent[currentImageIndex % heroContent.length].heading}
                </h1>
              </div>

              {/* Subtitle with rotating content */}
              <div
                className={`mb-10 transition-opacity duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <p
                  className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium"
                  style={{
                    textShadow:
                      "0 3px 10px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.7)",
                  }}
                >
                  {
                    heroContent[currentImageIndex % heroContent.length]
                      .description
                  }
                </p>
              </div>

              {/* Three CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 animation-delay-900">
                <Button
                  size="lg"
                  className="bg-teal-blue text-white shadow-2xl px-8 py-4 text-lg font-semibold border-2 border-transparent hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-teal-blue/80"
                  asChild
                >
                  <Link href="/coming-soon">Explore Collection</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent hover:text-navy-blue hover:bg-white"
                  asChild
                >
                  <Link href="/coming-soon">Custom Orders</Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-cricket-red border-2 border-cricket-red text-white hover:bg-red-700 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact-us">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Official Partners & Suppliers Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-gray">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-blue mb-4 font-serif">
                Official Partners & Suppliers
              </h2>
              <p className="text-xl text-silver-gray max-w-2xl mx-auto">
                Trusted partnerships with the world's leading cricket brands and
                manufacturers
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 max-w-7xl mx-auto">
              {/* DSC */}
              <div className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-light-silver hover:bg-light-gray transition-all duration-300 hover:border-teal-blue">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-light-silver">
                  <Image
                    src="/dsc.jpeg"
                    alt="DSC Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-sm font-medium text-center">
                  Cricket Bats
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:group-hover:block z-50 w-64 bg-white text-black text-sm p-4 rounded-lg shadow-xl border-2 border-gray-300">
                  <div className="font-semibold mb-2 text-teal-blue">
                    DSC CRICKET BATS
                  </div>
                  <div className="text-xs leading-relaxed">
                    Premium cricket bats designed for exceptional performance,
                    power, and precision on the field.
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                </div>
              </div>

              {/* SG */}
              <div className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-light-silver hover:bg-light-gray transition-all duration-300 hover:border-teal-blue">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-light-silver">
                  <Image
                    src="/sg.jpeg"
                    alt="SG Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-sm font-medium text-center">
                  Premium Gear
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:group-hover:block z-50 w-64 bg-white text-black text-sm p-4 rounded-lg shadow-xl border-2 border-gray-300">
                  <div className="font-semibold mb-2 text-teal-blue">
                    SG PREMIUM GEAR
                  </div>
                  <div className="text-xs leading-relaxed">
                    High-quality cricket equipment and gear designed for
                    professional performance and durability.
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                </div>
              </div>

              {/* MRF */}
              <div className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-light-silver hover:bg-light-gray transition-all duration-300 hover:border-teal-blue">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-light-silver">
                  <Image
                    src="/mrf.jpeg"
                    alt="MRF Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-sm font-medium text-center">
                  Premium Bats
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:group-hover:block z-50 w-64 bg-white text-black text-sm p-4 rounded-lg shadow-xl border-2 border-gray-300">
                  <div className="font-semibold mb-2 text-teal-blue">
                    MRF PREMIUM BATS
                  </div>
                  <div className="text-xs leading-relaxed">
                    Discover our range of Premium MRF cricket bats, crafted for
                    power, precision, and durability. Perfect for professionals
                    and enthusiasts who want top-notch performance on the field.
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                </div>
              </div>

              {/* SS */}
              <div className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-light-silver hover:bg-light-gray transition-all duration-300 hover:border-teal-blue">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-light-silver">
                  <Image
                    src="/ss.jpeg"
                    alt="SS Cricket Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-sm font-medium text-center">
                  Equipment
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:group-hover:block z-50 w-64 bg-white text-black text-sm p-4 rounded-lg shadow-xl border-2 border-gray-300">
                  <div className="font-semibold mb-2 text-teal-blue">
                    SS EQUIPMENTS
                  </div>
                  <div className="text-xs leading-relaxed">
                    Explore our wide range of SS cricket equipment, including
                    gloves, pads, and accessories—engineered for comfort,
                    protection, and superior performance on the pitch.
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                </div>
              </div>

              {/* Adidas */}
              <div className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-light-silver hover:bg-light-gray transition-all duration-300 hover:border-teal-blue">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-light-silver">
                  <Image
                    src="/adidasnew.jpeg"
                    alt="Adidas Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-sm font-medium text-center">
                  Apparel
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:group-hover:block z-50 w-64 bg-white text-black text-sm p-4 rounded-lg shadow-xl border-2 border-gray-300">
                  <div className="font-semibold mb-2 text-teal-blue">
                    ADIDAS APPAREL
                  </div>
                  <div className="text-xs leading-relaxed">
                    Step onto the field in style with our premium cricket
                    apparel, designed for comfort, performance, and a
                    professional look.
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                </div>
              </div>

              {/* Gray-Nicolls */}
              <div className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-light-silver hover:bg-light-gray transition-all duration-300 hover:border-teal-blue">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-light-silver">
                  <Image
                    src="/grayn.jpeg"
                    alt="Gray-Nicolls Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-sm font-medium text-center">
                  Heritage
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:group-hover:block z-50 w-64 bg-white text-black text-sm p-4 rounded-lg shadow-xl border-2 border-gray-300">
                  <div className="font-semibold mb-2 text-teal-blue">
                    HERITAGE COLLECTION
                  </div>
                  <div className="text-xs leading-relaxed">
                    Celebrate the legacy of cricket with our Heritage
                    collection, blending tradition with timeless quality and
                    craftsmanship.
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                </div>
              </div>

              {/* Kookaburra */}
              <div className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-light-silver hover:bg-light-gray transition-all duration-300 hover:border-teal-blue">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-light-silver">
                  <Image
                    src="/kooko.jpeg"
                    alt="Kookaburra Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-sm font-medium text-center">
                  Balls & Gear
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:group-hover:block z-50 w-64 bg-white text-black text-sm p-4 rounded-lg shadow-xl border-2 border-gray-300">
                  <div className="font-semibold mb-2 text-teal-blue">
                    BALLS AND GEAR
                  </div>
                  <div className="text-xs leading-relaxed">
                    From practice sessions to big matches, our cricket balls and
                    training gear deliver reliability and precision every time.
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                </div>
              </div>

              {/* New Balance */}
              <div className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-light-silver hover:bg-light-gray transition-all duration-300 hover:border-teal-blue">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-light-silver">
                  <Image
                    src="/nbnew.jpeg"
                    alt="New Balance Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="text-charcoal text-sm font-medium text-center">
                  Footwear
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden lg:group-hover:block z-50 w-64 bg-white text-black text-sm p-4 rounded-lg shadow-xl border-2 border-gray-300">
                  <div className="font-semibold mb-2 text-teal-blue">
                    FOOTWEAR
                  </div>
                  <div className="text-xs leading-relaxed">
                    Experience unmatched grip and comfort with our cricket
                    footwear, built to support speed, agility, and endurance on
                    the pitch.
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Drakon Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-blue mb-6">
                  Why Choose Drakon?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 hover:bg-light-gray p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-navy-blue rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        Premium Quality Materials
                      </h3>
                      <p className="text-gray-600">
                        Designed for durability and comfort
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-light-gray p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-navy-blue rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        Performance-Driven Design
                      </h3>
                      <p className="text-gray-600">
                        Crafted for serious athletes and casual players alike
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-light-gray p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-navy-blue rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        Custom Solutions
                      </h3>
                      <p className="text-gray-600">
                        Team kits, personalized gear & bulk orders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-light-gray p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-navy-blue rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        Sustainable Manufacturing
                      </h3>
                      <p className="text-gray-600">
                        We care about your performance and the planet
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:bg-light-gray p-3 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-navy-blue rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
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
                  className="border-2 border-light-silver object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/custom-team-uniforms.jpg"
                  alt="Custom Team Uniforms"
                  width={300}
                  height={200}
                  className="border-2 border-light-silver object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/sustainable-manufacturing.jpg"
                  alt="Sustainable Manufacturing"
                  width={300}
                  height={200}
                  className="border-2 border-light-silver object-cover hover:scale-105 transition-transform duration-300"
                />
                <Image
                  src="/professional-athletes.jpg"
                  alt="Professional Athletes"
                  width={300}
                  height={200}
                  className="border-2 border-light-silver object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Grid Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-gray">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-blue mb-4 font-serif">
                Our Premium Collection
              </h2>
              <p className="text-xl text-silver-gray max-w-2xl mx-auto">
                Discover our curated selection of elite cricket equipment and
                experiences
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {/* Premium Bats */}
              <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl rounded-lg">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/premium-cricket-bat.jpg"
                    alt="Premium Cricket Bats"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-navy-blue/30 to-transparent"></div>

                  {/* Main Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 tracking-wide font-serif">
                      Premium Bats
                    </h3>
                    <p className="text-sm font-light opacity-90 italic text-white">
                      Handcrafted Excellence
                    </p>
                  </div>

                  {/* Accent Corner */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-teal-blue transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Custom Gear */}
              <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl rounded-lg">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/custom-cricket-gear-equipment.jpg"
                    alt="Custom Cricket Gear"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-navy-blue/30 to-transparent"></div>

                  {/* Main Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 tracking-wide font-serif">
                      Custom Gear
                    </h3>
                    <p className="text-sm font-light opacity-90 italic text-white">
                      Personalized Equipment
                    </p>
                  </div>

                  {/* Accent Corner */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-silver-gray transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Stadium Experiences */}
              <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl rounded-lg">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/hero-slideshow/cricket-stadium-experience.jpg"
                    alt="Stadium Experiences"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-navy-blue/30 to-transparent"></div>

                  {/* Main Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 tracking-wide font-serif">
                      Stadium Experiences
                    </h3>
                    <p className="text-sm font-light opacity-90 italic text-white">
                      Elite Events
                    </p>
                  </div>

                  {/* Accent Corner */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-cricket-red transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Legacy Items */}
              <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl rounded-lg">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/vintage-cricket-legacy-items.jpg"
                    alt="Legacy Cricket Items"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-navy-blue/30 to-transparent"></div>

                  {/* Main Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 tracking-wide font-serif">
                      Legacy Items
                    </h3>
                    <p className="text-sm font-light opacity-90 italic text-white">
                      Collector's Edition
                    </p>
                  </div>

                  {/* Accent Corner */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-wicket-green transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Accessories */}
              <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl rounded-lg">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/cricket-accessories-gloves-pads.jpg"
                    alt="Cricket Accessories"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-navy-blue/30 to-transparent"></div>

                  {/* Main Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 tracking-wide font-serif">
                      Accessories
                    </h3>
                    <p className="text-sm font-light opacity-90 italic text-white">
                      Essential Gear
                    </p>
                  </div>

                  {/* Accent Corner */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-light-silver transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Exclusive Kits */}
              <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl rounded-lg">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/exclusive-cricket-team-kits-uniforms.jpg"
                    alt="Exclusive Cricket Kits"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-navy-blue/30 to-transparent"></div>

                  {/* Main Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 tracking-wide font-serif">
                      Exclusive Kits
                    </h3>
                    <p className="text-sm font-light opacity-90 italic text-white">
                      Team Uniforms
                    </p>
                  </div>

                  {/* Accent Corner */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-cricket-red transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
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
                <div className="aspect-[4/3] relative overflow-hidden border-2 border-light-silver hover:border-teal-blue transition-colors duration-300">
                  <Image
                    src="/cricket-action-hero-shot.jpg"
                    alt="Cricket Action Shot"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* Geometric overlay elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-l-4 border-b-4 border-teal-blue/30"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-r-4 border-t-4 border-teal-blue/30"></div>
                </div>
                {/* Sharp geometric accent elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-light-gray border-2 border-light-silver opacity-60"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-teal-blue/10 border-2 border-teal-blue/20 opacity-50"></div>
              </div>

              {/* Right: Brand story content */}
              <div className="animate-fade-in-right">
                {/* Since 2020 Badge */}
                <div className="inline-block mb-6">
                  <div className="bg-gradient-to-r from-light-gray to-light-gray border-2 border-cricket-red px-6 py-2">
                    <span className="font-semibold text-sm tracking-wide text-cricket-red">
                      SINCE 2020
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-blue mb-6 font-serif">
                  Our Journey to Cricket Excellence
                </h2>

                <div className="space-y-6 text-charcoal leading-relaxed">
                  <p className="text-lg">
                    Founded in 2020 with a vision to revolutionize the cricket
                    equipment industry, DRAKON SPORTS emerged from a simple
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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-silver-gray">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cricket-red transform rotate-45"></div>
                        <span>4+ Years of Excellence</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-blue transform rotate-45"></div>
                        <span>Global Partnerships</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-wicket-green transform rotate-45"></div>
                        <span>Trusted by Champions</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link href="/about">
                    <Button
                      size="lg"
                      className="bg-cricket-red text-white shadow-lg px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-red-700"
                    >
                      Learn More About Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Showcase */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-gray">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-navy-blue mb-4 font-serif">
                Exclusive Collections
              </h2>
              <p className="text-xl text-silver-gray max-w-3xl mx-auto leading-relaxed">
                Discover our curated selection of premium cricket offerings,
                each representing the pinnacle of craftsmanship and exclusivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Grade 1 English Willow Bats */}
              <div className="group relative bg-white border-2 border-light-silver overflow-hidden hover:border-teal-blue transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/premium-english-willow-cricket-bat-handcrafted.jpg"
                    alt="Grade 1 English Willow Bats"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-navy-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-teal-blue border border-teal-blue text-white px-3 py-1 text-xs font-semibold">
                      PREMIUM
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 border-teal-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-blue mb-3 transition-colors">
                    Grade 1 English Willow Bats
                  </h3>
                  <p className="text-silver-gray leading-relaxed mb-4">
                    Handcrafted from the finest English willow, each bat is
                    meticulously selected and shaped by master craftsmen for
                    unparalleled performance.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-teal-blue">
                      ARTISAN CRAFTED
                    </span>
                    <ArrowRight className="h-5 w-5 text-silver-gray group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Platinum-Stitched Collector's Kits */}
              <div className="group relative bg-white border-2 border-light-silver overflow-hidden hover:border-silver-gray transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/luxury-cricket-team-kit-platinum-stitching-collect.jpg"
                    alt="Platinum-Stitched Collector's Kits"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-navy-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-silver-gray border border-silver-gray text-white px-3 py-1 text-xs font-semibold">
                      COLLECTOR'S
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 border-silver-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-blue mb-3 transition-colors">
                    Platinum-Stitched Collector's Kits
                  </h3>
                  <p className="text-silver-gray leading-relaxed mb-4">
                    Limited edition team kits featuring platinum threading and
                    exclusive designs, reserved for the most discerning
                    collectors.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-silver-gray">
                      LIMITED EDITION
                    </span>
                    <ArrowRight className="h-5 w-5 text-silver-gray group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Custom Signed Equipment */}
              <div className="group relative bg-white border-2 border-light-silver overflow-hidden hover:border-cricket-red transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/cricket-equipment-signed-by-professional-players-c.jpg"
                    alt="Custom Signed Equipment"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-navy-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-cricket-red border border-cricket-red text-white px-3 py-1 text-xs font-semibold">
                      SIGNED
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 border-cricket-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-blue mb-3 transition-colors">
                    Custom Signed Equipment
                  </h3>
                  <p className="text-silver-gray leading-relaxed mb-4">
                    Authentic equipment personally signed by cricket legends and
                    current stars, complete with certificates of authenticity.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-cricket-red">
                      AUTHENTICATED
                    </span>
                    <ArrowRight className="h-5 w-5 text-silver-gray group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Private Tournament Arrangements */}
              <div className="group relative bg-white border-2 border-light-silver overflow-hidden hover:border-wicket-green transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/private-cricket-tournament-exclusive-venue-luxury-.jpg"
                    alt="Private Tournament Arrangements"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-navy-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-wicket-green border border-wicket-green text-white px-3 py-1 text-xs font-semibold">
                      EXCLUSIVE
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 border-wicket-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-blue mb-3 transition-colors">
                    Private Tournament Arrangements
                  </h3>
                  <p className="text-silver-gray leading-relaxed mb-4">
                    Bespoke tournament experiences at world-class venues,
                    complete with professional umpiring and luxury hospitality.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-wicket-green">
                      BESPOKE
                    </span>
                    <ArrowRight className="h-5 w-5 text-silver-gray group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Master Artisan Collections */}
              <div className="group relative bg-white border-2 border-light-silver overflow-hidden hover:border-charcoal transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/master-craftsman-cricket-equipment-artisan-collect.jpg"
                    alt="Master Artisan Collections"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-navy-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-charcoal border border-charcoal text-white px-3 py-1 text-xs font-semibold">
                      ARTISAN
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 border-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-blue mb-3 transition-colors">
                    Master Artisan Collections
                  </h3>
                  <p className="text-silver-gray leading-relaxed mb-4">
                    Exceptional pieces crafted by renowned artisans,
                    representing centuries of traditional craftsmanship and
                    modern innovation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-charcoal">
                      MASTERPIECE
                    </span>
                    <ArrowRight className="h-5 w-5 text-silver-gray group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Exclusive Cricket Retreats */}
              <div className="group relative bg-white border-2 border-light-silver overflow-hidden hover:border-cricket-red transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/luxury-cricket-retreat-exclusive-training-camp-sce.jpg"
                    alt="Exclusive Cricket Retreats"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-navy-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-cricket-red border border-cricket-red text-white px-3 py-1 text-xs font-semibold">
                      RETREAT
                    </div>
                  </div>
                  {/* Geometric corner accents */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-r-2 border-t-2 border-cricket-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-blue mb-3 transition-colors">
                    Exclusive Cricket Retreats
                  </h3>
                  <p className="text-silver-gray leading-relaxed mb-4">
                    Immersive cricket experiences in breathtaking locations,
                    combining intensive training with luxury accommodations and
                    fine dining.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-cricket-red">
                      IMMERSIVE
                    </span>
                    <ArrowRight className="h-5 w-5 text-silver-gray group-hover:translate-x-1 transition-all duration-300" />
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
                    <p className="text-white font-medium">
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
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-gray-800/30 backdrop-blur-sm border border-gray-600/50 px-4 sm:px-8 py-4">
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <MapPin className="w-4 h-4 text-green-400 animate-pulse" />
                  <span className="text-white font-medium text-sm sm:text-base">
                    North America
                  </span>
                </div>
                <div className="hidden sm:block w-1 h-6 bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 animate-pulse animation-delay-500" />
                  <span className="text-white font-medium text-sm sm:text-base">
                    Europe
                  </span>
                </div>
                <div className="hidden sm:block w-1 h-6 bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <MapPin className="w-4 h-4 text-yellow-400 animate-pulse animation-delay-1000" />
                  <span className="text-white font-medium text-sm sm:text-base">
                    Asia Pacific
                  </span>
                </div>
                <div className="hidden sm:block w-1 h-6 bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                  <MapPin className="w-4 h-4 text-red-400 animate-pulse animation-delay-1500" />
                  <span className="text-white font-medium text-sm sm:text-base">
                    Australia
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                Serving cricket enthusiasts across four continents
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 text-white relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/nbg.jpeg"
              alt="Cricket Action Background"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-navy-blue/60"></div>
          </div>

          {/* Call to Action Content */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-white drop-shadow-lg font-serif">
                Ready to Take Your Cricket Game to the Next Level?
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Upgrade your equipment, experience, and partnerships with Drakon
                Sports.
              </p>
            </div>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-cricket-red shadow-lg px-8 py-4 text-lg font-semibold border-2 border-white hover:bg-cricket-red hover:text-white transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/coming-soon">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cricket-red text-white hover:bg-cricket-red backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                asChild
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-teal-blue hover:bg-teal-blue/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-blue focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
