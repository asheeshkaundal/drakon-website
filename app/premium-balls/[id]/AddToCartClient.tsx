"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Star, Check, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

type Ball = {
  id: number;
  name: string;
  original_Price: number;
  discount_Percentage?: number;
  image: string;
  rating?: number;
  description?: string;
  features?: string[];
};

export default function ProductDetailClient({ ball }: { ball: Ball }) {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(ball.image);
  const [localQty, setLocalQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  const cartItem = cartItems.find((i) => i.id === ball.id);
  const displayedQty = cartItem ? cartItem.quantity : localQty;

  const discounted = Math.round(
    (ball.original_Price ?? 0) * (1 - (ball.discount_Percentage || 0) / 100)
  );
  const formatPrice = (v: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.round(v));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // keep localQty in sync if user navigates back and item is already in cart
  useEffect(() => {
    if (cartItem) setLocalQty(cartItem.quantity);
  }, [cartItem]);

  function handleAddToCart() {
    addToCart({
      id: ball.id,
      name: ball.name,
      price: discounted,
      image: ball.image,
      quantity: localQty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  function handleDecrease() {
    if (!cartItem) {
      setLocalQty((q) => Math.max(1, q - 1));
      return;
    }
    if (cartItem.quantity > 1) updateQuantity(ball.id, cartItem.quantity - 1);
    else removeFromCart(ball.id);
  }

  function handleIncrease() {
    if (!cartItem) {
      setLocalQty((q) => q + 1);
      return;
    }
    updateQuantity(ball.id, cartItem.quantity + 1);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/premium-balls" className="hover:underline">
          Premium Balls
        </Link>
        <span className="mx-2">/</span>
        <span aria-current="page" className="font-semibold">
          {ball.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Image gallery */}
        <div className="space-y-4">
          <div
            className="relative w-full rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in"
            onClick={() => setZoomOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Open image viewer"
            onKeyDown={(e) => {
              if (e.key === "Enter") setZoomOpen(true);
            }}
          >
            <Image
              src={selectedImage}
              alt={ball.name}
              width={1200}
              height={900}
              className="object-cover w-full h-[420px] sm:h-[520px] transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-cricket-red text-white px-3 py-1 rounded-full text-sm font-bold">
              NEW
            </div>
          </div>

          {/* Thumbnails */}
          <div ref={thumbnailsRef} className="flex gap-3 overflow-x-auto py-1">
            {[ball.image /* add more images here if available */].map((src, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(src)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border ${
                  selectedImage === src ? "ring-2 ring-cricket-red" : "border-gray-200"
                } focus:outline-none`}
                aria-label={`Select image ${idx + 1}`}
              >
                <Image src={src} alt={`${ball.name} ${idx + 1}`} width={80} height={80} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Details & actions */}
        <div className="sticky top-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{ball.name}</h1>

          {/* rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex -ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < (ball.rating ?? 0) ? "text-yellow-400" : "text-gray-200"}`} />
              ))}
            </div>
            <span className="text-sm text-gray-600">({ball.rating ?? 0}.0)</span>
          </div>

          <p className="text-gray-700 mb-4">{ball.description}</p>

          <div className="mb-4">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-cricket-red">{formatPrice(discounted)}</span>
              <span className="text-sm text-gray-500 line-through">M.R.P.: {formatPrice(ball.original_Price ?? 0)}</span>
              {ball.discount_Percentage ? <span className="ml-2 text-sm text-green-600">-{ball.discount_Percentage}%</span> : null}
            </div>
          </div>

          {/* features */}
          <ul className="mb-4 space-y-2">
            {ball.features?.map((f, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="mt-1 w-2 h-2 bg-teal-blue rounded-full block" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

         
          {/* Quantity + Add to cart (shows cart quantity if item in cart) */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center border rounded-lg p-1 bg-white">
              <button 
                aria-label="Decrease quantity" 
                onClick={handleDecrease} 
                className="p-2 text-navy-blue disabled:opacity-50"
              >
                <Minus className="w-4 h-4" />
              </button>

              <input
                aria-label="Quantity"
                value={displayedQty}
                onChange={(e) => {
                  const val = Number(e.target.value || 1);
                  if (Number.isNaN(val)) return;
                  if (cartItem) updateQuantity(ball.id, Math.max(1, Math.floor(val)));
                  else setLocalQty(Math.max(1, Math.floor(val)));
                }}
                className="w-12 text-center outline-none"
                inputMode="numeric"
              />

              <button 
                aria-label="Increase quantity" 
                onClick={handleIncrease} 
                className="p-2 text-teal-blue"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <Button
              onClick={cartItem ? undefined : handleAddToCart}
              className={`flex-1 items-center justify-center gap-2 px-4 py-2 ${
                cartItem 
                  ? "bg-green-600 cursor-default"
                  : added 
                    ? "bg-green-600" 
                    : "bg-navy-blue hover:bg-teal-blue"
              } text-white`}
            >
              {cartItem ? (
                <><Check className="w-4 h-4" /> In Cart</>
              ) : added ? (
                <><Check className="w-4 h-4" /> Added</>
              ) : (
                <><ShoppingCart className="w-4 h-4" /> Add to cart</>
              )}
            </Button>
          </div>


          <p className="text-sm text-gray-500">Free shipping over ₹2,000 • 30-day returns</p>
        </div>
      </div>

      {/* Zoom modal */}
      {zoomOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setZoomOpen(false)}>
          <div className="relative max-w-3xl w-full rounded" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close image viewer" onClick={() => setZoomOpen(false)} className="absolute top-3 right-3 bg-white/80 rounded-full p-2">
              <X className="w-4 h-4" />
            </button>
            <div className="w-full h-[70vh] overflow-hidden rounded">
              <Image src={selectedImage} alt={ball.name} width={1600} height={1200} className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}