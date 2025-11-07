"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Check, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Ball {
  id: number;
  name: string;
  original_Price: number;
  discount_Percentage: number;
  image: string;
  rating: number;
  description: string;
  features: string[];
}

export default function ProductDetailClient({ ball }: { ball: Ball }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

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
            {/* Left: Image */}
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={ball.image}
                alt={ball.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-cricket-red text-white px-3 py-1 rounded-full text-sm font-bold">
                NEW
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
                <p className="text-sm text-green-600">
                  ✓ In stock
                </p>
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

              {/* Add to Cart */}
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
                  added ? "bg-green-600 hover:bg-green-700" : "bg-navy-blue hover:bg-teal-blue"
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}