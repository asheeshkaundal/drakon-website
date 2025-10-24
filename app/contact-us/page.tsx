"use client";

import { useState, useEffect } from "react";
import { Map, Pin, Phone, Mail, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors: string[] = [];

    if (!formData.fullName.trim()) {
      errors.push("Full Name is required");
    }

    if (!formData.email.trim()) {
      errors.push("Email Address is required");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.push("Please enter a valid email address");
      }
    }

    if (!formData.phone.trim()) {
      errors.push("Phone Number is required");
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setSubmitStatus({
        type: "error",
        message: errors.join(", "),
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Your message has been sent successfully!",
        });

        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content with Top Padding for Fixed Header */}
      <div className="pt-20">
        {/* Get In Touch Section */}
        <section className="relative container mx-auto px-4 sm:px-6 py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/cricket-stadium-booking-facilities.jpg"
              alt="Cricket Stadium Background"
              fill
              className="object-cover object-center opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/90"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-serif animate-fade-in-up opacity-0 animation-delay-500 drop-shadow-xl leading-tight mb-4"
                  style={{ color: "#1a2332" }}
                >
                  Get In Touch
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up opacity-0 animation-delay-700 max-w-2xl mx-auto lg:mx-0">
                  Introducing Drakon, the design system tailored for
                  entrepreneurs who crave taking it easy. Say goodbye to lengthy
                  design processes and hello to efficiency.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 sm:space-y-6 animate-fade-in-up opacity-0 animation-delay-900 max-w-2xl mx-auto lg:mx-0">
                {/* Sales & Communication Office Card */}
                <Card
                  className="p-4 sm:p-6 border-l-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 backdrop-blur-sm"
                  style={{ borderLeftColor: "#4a9b9b" }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 text-center sm:text-left">
                    <div
                      className="p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0"
                      style={{ backgroundColor: "#4a9b9b20" }}
                    >
                      <Pin
                        className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300"
                        style={{ color: "#4a9b9b" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                        Sales & Communication Office
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        FF-69, First Floor, SS Omnia
                        <br />
                        Sector-86, Gurugram
                        <br />
                        Haryana - 122004
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Head Office Card */}
                <Card
                  className="p-4 sm:p-6 border-l-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 backdrop-blur-sm"
                  style={{ borderLeftColor: "#c41e3a" }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 text-center sm:text-left">
                    <div
                      className="p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0"
                      style={{ backgroundColor: "#c41e3a20" }}
                    >
                      <Pin
                        className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300"
                        style={{ color: "#c41e3a" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                        Head Office
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        DRAKON SPORTS, 619
                        <br />
                        Jawalamukhi, Kangra
                        <br />
                        Himachal Pradesh, 176031
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Contact Info Card */}
                <Card
                  className="p-4 sm:p-6 border-l-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 backdrop-blur-sm"
                  style={{ borderLeftColor: "#8a9ba8" }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 text-center sm:text-left">
                    <div
                      className="p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0"
                      style={{ backgroundColor: "#8a9ba820" }}
                    >
                      <Phone
                        className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300"
                        style={{ color: "#8a9ba8" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                        Contact Information
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        +91-8888813841
                        <br />
                        asheesh.kaundal@drakonsports.com
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up opacity-0 animation-delay-700 hover:shadow-xl transition-all duration-300">
              <div className="h-full min-h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1573752425447!2d77.0878179!3d28.409688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229c3e5f6b3d%3A0x5e6c8e4c5e7c8e4c!2sSS%20Omnia%2C%20Sector%2086%2C%20Gurugram%2C%20Haryana%20122004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Drakon Sports Location"
                  className="absolute inset-0"
                ></iframe>

                {/* Location Overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                  <h4 className="font-bold mb-2" style={{ color: "#1a2332" }}>
                    Our Locations:
                  </h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>
                      <strong>Sales & Communication:</strong>
                      <br />
                      FF-69, First Floor, SS Omnia
                      <br />
                      Sector-86, Gurugram
                      <br />
                      Haryana - 122004
                    </div>
                    <div className="mt-3">
                      <strong>Head Office:</strong>
                      <br />
                      DRAKON SPORTS, 619
                      <br />
                      Jawalamukhi, Kangra
                      <br />
                      Himachal Pradesh, 176031
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Request a Demo Section */}
      <section className="relative bg-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cricket bat home page.jpg"
            alt="Premium Cricket Equipment Background"
            fill
            className="object-cover object-center opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl font-serif animate-fade-in-up opacity-0 animation-delay-300 mb-4"
                style={{ color: "#1a2332" }}
              >
                Request a Demo
              </h2>
              <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up opacity-0 animation-delay-500">
                Are you interested in partnering with us? Then what do you want
                to get in touch.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm animate-fade-in-up opacity-0 animation-delay-700">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-gray-700 font-medium"
                  >
                    Full Name*
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your name.."
                    required
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
                    style={{ "--tw-ring-color": "#4a9b9b" } as any}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="companyName"
                    className="text-gray-700 font-medium"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name.."
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
                    style={{ "--tw-ring-color": "#4a9b9b" } as any}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email.."
                    required
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
                    style={{ "--tw-ring-color": "#4a9b9b" } as any}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number*
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number.."
                    required
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
                    style={{ "--tw-ring-color": "#4a9b9b" } as any}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label
                    htmlFor="message"
                    className="text-gray-700 font-medium"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    rows={5}
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.01]"
                    style={{ "--tw-ring-color": "#4a9b9b" } as any}
                  />
                </div>
                <div className="md:col-span-2 flex justify-start">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-transparent hover:border-white/20 hover:shadow-xl animate-fade-in-up opacity-0 animation-delay-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      backgroundColor: isSubmitting ? "#6b7280" : "#c41e3a",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "#1a2332";
                        e.currentTarget.style.transform = "scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "#c41e3a";
                        e.currentTarget.style.transform = "scale(1)";
                      }
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Request a Demo →"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-teal-blue text-white p-4 rounded-full shadow-lg hover:bg-teal-blue/80 hover:scale-110 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-teal-blue/50 hover:opacity-90"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
