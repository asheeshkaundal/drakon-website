"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Check, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function PremiumBallsPage() {
  const { addToCart, updateQuantity, removeFromCart, cartItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  const balls = [
    {
      id: 1,
      name: "Test Match Red Ball",
      category: "test",
      price: "₹2,499",
      image: "/premium-cricket-equipment.jpg",
      rating: 5,
      description: "Professional grade red leather ball for test matches",
      features: [
        "4-piece construction",
        "Alum tanned leather",
        "Hand-stitched",
      ],
    },
    {
      id: 2,
      name: "ODI White Ball",
      category: "odi",
      price: "₹2,199",
      image: "/premium-cricket-bat.jpg",
      rating: 5,
      description: "Premium white ball for one-day internationals",
      features: ["Enhanced visibility", "Consistent seam", "Superior grip"],
    },
    {
      id: 3,
      name: "T20 White Ball",
      category: "t20",
      price: "₹1,999",
      image: "/cricket-equipment-signed-by-professional-players-c.jpg",
      rating: 4,
      description: "High-performance ball for T20 cricket",
      features: ["Fast delivery", "Durable cover", "Perfect bounce"],
    },
    {
      id: 4,
      name: "Practice Red Ball",
      category: "practice",
      price: "₹899",
      image: "/custom-cricket-gear-equipment.jpg",
      rating: 4,
      description: "Durable practice ball for training sessions",
      features: ["Cost-effective", "Long-lasting", "Match-like feel"],
    },
    {
      id: 5,
      name: "Tennis Ball (Cricket)",
      category: "practice",
      price: "₹499",
      image: "/cricket-accessories-gloves-pads.jpg",
      rating: 4,
      description: "Heavy tennis ball for street cricket",
      features: ["Seam grip", "High bounce", "Weather resistant"],
    },
    {
      id: 6,
      name: "Leather Practice Ball",
      category: "practice",
      price: "₹1,299",
      image: "/bespoke-cricket-bat-creation.jpg",
      rating: 4,
      description: "Quality leather ball for regular practice",
      features: ["Genuine leather", "Machine stitched", "Value for money"],
    },
  ];

  const categories = [
    { id: "all", name: "All Balls" },
    { id: "test", name: "Test Match" },
    { id: "odi", name: "ODI" },
    { id: "t20", name: "T20" },
    { id: "practice", name: "Practice" },
  ];

  const filteredBalls =
    selectedCategory === "all"
      ? balls
      : balls.filter((ball) => ball.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-blue to-teal-blue text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif">
              Premium Balls
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90">
              Experience the perfect blend of craftsmanship and performance with
              our premium cricket balls
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cricket-red rounded-full"></div>
                <span>Match Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-wicket-green rounded-full"></div>
                <span>Hand-Stitched</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Premium Leather</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-cricket-red text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBalls.map((ball) => (
              <div
                key={ball.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Image */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={ball.image}
                    alt={ball.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-cricket-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
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

                  {/* Name & Price */}
                  <h3 className="text-xl font-bold text-navy-blue mb-2 group-hover:text-cricket-red transition-colors">
                    {ball.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {ball.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
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

                  {/* Price & Button */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cricket-red">
                        {ball.price}
                      </span>
                    </div>

                    {/* Quantity Controls or Add to Cart */}
                    {cartItems.find((item) => item.id === ball.id) ? (
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <span className="text-sm font-medium text-gray-600">
                          Quantity:
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const currentItem = cartItems.find(
                                (item) => item.id === ball.id
                              );
                              if (currentItem) {
                                if (currentItem.quantity > 1) {
                                  updateQuantity(
                                    ball.id,
                                    currentItem.quantity - 1
                                  );
                                } else {
                                  removeFromCart(ball.id);
                                }
                              }
                            }}
                            className="h-8 w-8 p-0 border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-lg font-bold text-navy-blue min-w-[2rem] text-center">
                            {
                              cartItems.find((item) => item.id === ball.id)
                                ?.quantity
                            }
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const currentItem = cartItems.find(
                                (item) => item.id === ball.id
                              );
                              if (currentItem) {
                                updateQuantity(
                                  ball.id,
                                  currentItem.quantity + 1
                                );
                              }
                            }}
                            className="h-8 w-8 p-0 border-teal-blue text-teal-blue hover:bg-teal-blue hover:text-white"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button
                        onClick={() => {
                          addToCart({
                            id: ball.id,
                            name: ball.name,
                            price: ball.price,
                            image: ball.image,
                          });
                          setAddedItems((prev) => ({
                            ...prev,
                            [ball.id]: true,
                          }));
                          setTimeout(() => {
                            setAddedItems((prev) => ({
                              ...prev,
                              [ball.id]: false,
                            }));
                          }, 2000);
                        }}
                        className={`w-full transition-all duration-300 ${
                          addedItems[ball.id]
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-navy-blue hover:bg-teal-blue"
                        } text-white`}
                      >
                        {addedItems[ball.id] ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Added!
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
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-navy-blue font-serif">
            Why Choose Our Premium Balls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cricket-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-cricket-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-blue">
                Match Quality
              </h3>
              <p className="text-gray-600">
                All our balls meet international cricket standards and are used
                in professional matches
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-blue">
                Premium Materials
              </h3>
              <p className="text-gray-600">
                Crafted from finest leather and cork, ensuring durability and
                consistent performance
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-wicket-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-wicket-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy-blue">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-600">
                Hand-stitched by experienced craftsmen with decades of
                ball-making expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
