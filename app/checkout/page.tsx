"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Truck, Package, Lock, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, getCartTotal, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const [shippingMethod, setShippingMethod] = useState<"delivery" | "pickup">(
    "delivery"
  );
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const subtotal = getCartTotal();
  const shipping = shippingMethod === "delivery" ? 5.0 : 0;
  const total = subtotal + shipping - discount;

  useEffect(() => {
    if (cartItems.length === 0) {
      // Redirect to cart or home if cart is empty
      // router.push("/premium-balls");
    }
  }, [cartItems, router]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyDiscount = () => {
    // Simple discount logic - you can make this more sophisticated
    if (discountCode.toUpperCase() === "DRAKON10") {
      setDiscount(subtotal * 0.1);
    } else if (discountCode.toUpperCase() === "SAVE20") {
      setDiscount(subtotal * 0.2);
    } else {
      alert("Invalid discount code");
      setDiscount(0);
    }
  };

  const handlePayNow = () => {
    if (!agreedToTerms) {
      alert("Please agree to the Terms and Conditions");
      return;
    }

    // Validate form
    const requiredFields =
      shippingMethod === "delivery"
        ? [
            "fullName",
            "email",
            "phoneNumber",
            "country",
            "city",
            "state",
            "zipCode",
          ]
        : ["fullName", "email", "phoneNumber"];

    const emptyFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (emptyFields.length > 0) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically process the payment
    alert("Payment processing... (This is a demo)");
    // After successful payment, you might want to clear the cart and redirect
    // clearCart();
    // router.push("/order-confirmation");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Checkout Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-navy-blue mb-6">
                Checkout
              </h1>

              {/* Shipping Method */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-navy-blue mb-4">
                  Shipping Information
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={() => setShippingMethod("delivery")}
                    className="flex items-center justify-center gap-2 p-4 border-2 rounded-lg border-teal-blue bg-teal-blue/5"
                  >
                    <Truck className="w-5 h-5 text-teal-blue" />
                    <span className="font-medium">Delivery</span>
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <Label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <Label
                    htmlFor="phoneNumber"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone number <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex mt-1">
                    <div className="flex items-center gap-2 px-3 border border-r-0 rounded-l-md bg-gray-50">
                      <span className="text-xl">🇺🇸</span>
                      <span className="text-sm">▼</span>
                    </div>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                {shippingMethod === "delivery" && (
                  <>
                    {/* Country */}
                    <div>
                      <Label
                        htmlFor="country"
                        className="text-sm font-medium text-gray-700"
                      >
                        Country <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-blue"
                      >
                        <option value="">Choose country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                        <option value="CA">Canada</option>
                      </select>
                    </div>

                    {/* City, State, ZIP Code */}
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label
                          htmlFor="city"
                          className="text-sm font-medium text-gray-700"
                        >
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          type="text"
                          placeholder="Enter city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="state"
                          className="text-sm font-medium text-gray-700"
                        >
                          State
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          type="text"
                          placeholder="Enter state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="zipCode"
                          className="text-sm font-medium text-gray-700"
                        >
                          ZIP Code
                        </Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          type="text"
                          placeholder="Enter ZIP code"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Terms and Conditions */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-teal-blue border-gray-300 rounded focus:ring-teal-blue"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I have read and agree to the{" "}
                    <a
                      href="/privacy-policy"
                      className="text-teal-blue hover:underline"
                    >
                      Terms and Conditions
                    </a>
                    .
                  </Label>
                </div>
              </div>
            </div>

            {/* Right Column - Order Review */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 h-fit sticky top-24">
              <h2 className="text-xl font-semibold text-navy-blue mb-6">
                Review your cart
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => {
                  const itemPrice =
                    typeof item.price === "string"
                      ? parseFloat(item.price)
                      : item.price;
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-4 border-b border-gray-200"
                    >
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.quantity}x
                          </p>
                          <p className="font-semibold text-gray-900 mt-1">
                            ₹{itemPrice.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls - Horizontal */}
                        <div className="flex gap-2 items-center">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.id, item.quantity - 1);
                              } else {
                                if (confirm(`Remove ${item.name} from cart?`)) {
                                  removeFromCart(item.id);
                                }
                              }
                            }}
                            className="w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-md hover:bg-red-50 hover:border-red-400 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center border-2 border-teal-blue rounded-md hover:bg-teal-blue hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Discount Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      🎫
                    </span>
                    <Input
                      type="text"
                      placeholder="Discount code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button
                    onClick={applyDiscount}
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    Apply
                  </Button>
                </div>
              </div>

              {/* Price Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">₹{shipping.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Pay Now Button */}
              <Button
                onClick={handlePayNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
              >
                Pay Now
              </Button>

              {/* Security Badge */}
              <div className="mt-6 flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Lock className="w-5 h-5 text-teal-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">
                    Secure Checkout - SSL Encrypted
                  </h4>
                  <p className="text-xs text-gray-600">
                    Ensuring your financial and personal details are secure
                    during every transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
