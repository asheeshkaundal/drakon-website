"use client";

import { useState } from "react";
import Link from "next/link";
import { LogIn, Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<
    "sms" | "whatsapp" | "email"
  >("sms");

  const handleSendOTP = () => {
    console.log("Sending OTP via", selectedMethod, "to", phoneNumber);
    // Add your OTP sending logic here
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
    // Add your Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
    // Add your Facebook login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-silver via-light-gray to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-light-silver">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center shadow-lg">
            <LogIn className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-navy-blue mb-2">
          Please enter your phone number to continue
        </h1>

        {/* Phone Number Input */}
        <div className="flex gap-2">
          <div className="w-20">
            <Input
              type="text"
              value="+91"
              disabled
              className="text-center font-medium bg-light-gray border-light-silver text-navy-blue"
            />
          </div>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-1 text-navy-blue placeholder:text-silver-gray border-light-silver focus:border-teal-blue focus:ring-teal-blue"
          />
        </div>

        {/* Send OTP Button */}
        <Button
          onClick={handleSendOTP}
          className="w-full bg-navy-blue hover:bg-teal-blue text-white font-semibold py-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Send OTP
        </Button>

        {/* Contact Method Selection */}
        <div className="flex justify-center gap-6 py-4">
          <button
            onClick={() => setSelectedMethod("sms")}
            className={`flex flex-col items-center gap-2 transition-all ${
              selectedMethod === "sms"
                ? "text-navy-blue"
                : "text-silver-gray hover:text-navy-blue"
            }`}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                selectedMethod === "sms"
                  ? "bg-navy-blue text-white shadow-lg"
                  : "bg-white border-2 border-light-silver"
              }`}
            >
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium">SMS</span>
          </button>

          <button
            onClick={() => setSelectedMethod("whatsapp")}
            className={`flex flex-col items-center gap-2 transition-all ${
              selectedMethod === "whatsapp"
                ? "text-navy-blue"
                : "text-silver-gray hover:text-navy-blue"
            }`}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                selectedMethod === "whatsapp"
                  ? "bg-navy-blue text-white shadow-lg"
                  : "bg-white border-2 border-light-silver"
              }`}
            >
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium">WhatsApp</span>
          </button>

          <button
            onClick={() => setSelectedMethod("email")}
            className={`flex flex-col items-center gap-2 transition-all ${
              selectedMethod === "email"
                ? "text-navy-blue"
                : "text-silver-gray hover:text-navy-blue"
            }`}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                selectedMethod === "email"
                  ? "bg-navy-blue text-white shadow-lg"
                  : "bg-white border-2 border-light-silver"
              }`}
            >
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium">Email</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-light-silver"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-silver-gray">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full py-6 border-2 border-light-silver hover:border-teal-blue hover:bg-light-gray text-navy-blue font-semibold rounded-lg flex items-center justify-center gap-3 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Login with Google
          </Button>

          <Button
            onClick={handleFacebookLogin}
            variant="outline"
            className="w-full py-6 border-2 border-light-silver hover:border-teal-blue hover:bg-light-gray text-navy-blue font-semibold rounded-lg flex items-center justify-center gap-3 transition-all"
          >
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Login with Facebook
          </Button>
        </div>

        {/* Terms & Privacy */}
        <p className="text-xs text-center text-silver-gray mt-6">
          By continuing, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="text-teal-blue hover:text-navy-blue hover:underline transition-colors"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="text-teal-blue hover:text-navy-blue hover:underline transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
