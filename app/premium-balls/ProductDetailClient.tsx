"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Star,
  Check,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Ball {
  id: number;
  name: string;
  original_Price: number;
  discount_Percentage: number;
  image: string;
  images?: string[];
  rating: number;
  description: string;
  features: string[];
}

export default function ProductDetailClient({ ball }: { ball: Ball }) {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const [added, setAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = ball.images || [ball.image];

  // Check if item is in cart and get its quantity
  const cartItem = cartItems.find((item) => item.id === ball.id);
  const itemQuantity = cartItem?.quantity || 0;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const discountedPrice = Math.round(
    ball.original_Price * (1 - (ball.discount_Percentage || 0) / 100)
  );

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.round(value));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/premium-balls"
            className="inline-flex items-center text-navy-blue hover:text-cricket-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Premium Balls
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Left: Image Carousel */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden group">
                <Image
                  src={carouselImages[currentImageIndex]}
                  alt={`${ball.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover transition-opacity duration-500"
                />

                {/* NEW Badge */}
                <div className="absolute top-4 right-4 bg-cricket-red text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  NEW
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy-blue rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy-blue rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? "bg-cricket-red w-8 h-2"
                          : "bg-white/60 hover:bg-white/80 w-2 h-2"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {carouselImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? "border-cricket-red shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${ball.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-navy-blue mb-2">
                  {ball.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < ball.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({ball.rating}.0)
                  </span>
                </div>

                <p className="text-gray-600">{ball.description}</p>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-cricket-red">
                    {formatPrice(discountedPrice)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    M.R.P.: {formatPrice(ball.original_Price)}
                  </span>
                  {ball.discount_Percentage > 0 && (
                    <span className="text-sm font-medium text-green-600">
                      -{ball.discount_Percentage}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-green-600">✓ In stock</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {ball.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-teal-blue rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart / Quantity Controls */}
              {cartItem ? (
                <div className="space-y-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 border-2 border-navy-blue">
                    <span className="text-sm font-semibold text-gray-700">
                      Quantity:
                    </span>
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          if (itemQuantity > 1) {
                            updateQuantity(ball.id, itemQuantity - 1);
                          }
                        }}
                        className="h-10 w-10 p-0 border-2 border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white transition-all"
                      >
                        <Minus className="h-5 w-5" />
                      </Button>

                      <span className="text-2xl font-bold text-navy-blue min-w-[3rem] text-center">
                        {itemQuantity}
                      </span>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          updateQuantity(ball.id, itemQuantity + 1);
                        }}
                        className="h-10 w-10 p-0 border-2 border-teal-blue text-teal-blue hover:bg-teal-blue hover:text-white transition-all"
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-sm font-semibold text-gray-700">
                      Subtotal:
                    </span>
                    <span className="text-xl font-bold text-green-600">
                      {formatPrice(discountedPrice * itemQuantity)}
                    </span>
                  </div>

                  {/* Delete Button */}
                  <Button
                    onClick={() => {
                      removeFromCart(ball.id);
                    }}
                    variant="outline"
                    className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove from Cart
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    addToCart({
                      id: ball.id,
                      name: ball.name,
                      price: discountedPrice,
                      image: ball.image,
                    });
                    setAdded(true);
                    setTimeout(() => setAdded(false), 2000);
                  }}
                  className={`w-full transition-all duration-300 ${
                    added
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-navy-blue hover:bg-teal-blue"
                  } text-white`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
