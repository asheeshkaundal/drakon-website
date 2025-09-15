"use client";

import { Map, Pin, Phone, Mail } from "lucide-react";
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
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content with Top Padding for Fixed Header */}
      <div className="pt-20">
        {/* Get In Touch Section */}
        <section className="relative container mx-auto px-6 py-16 overflow-hidden">
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

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-serif animate-fade-in-up opacity-0 animation-delay-500 drop-shadow-xl leading-tight mb-4"
                  style={{ color: "#722F37" }}
                >
                  Get In Touch
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up opacity-0 animation-delay-700 max-w-2xl">
                  Introducing Drakon, the design system tailored for
                  entrepreneurs who crave taking it easy. Say goodbye to lengthy
                  design processes and hello to efficiency.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6 animate-fade-in-up opacity-0 animation-delay-900">
                {/* Address Card */}
                <Card
                  className="p-6 border-l-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 backdrop-blur-sm"
                  style={{ borderLeftColor: "#CD853F" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#CD853F20" }}
                    >
                      <Pin
                        className="h-6 w-6 transition-all duration-300"
                        style={{ color: "#CD853F" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Our Address
                      </h3>
                      <p className="text-gray-600">
                        AMB 619, AMB PATHIAR
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
                  className="p-6 border-l-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 backdrop-blur-sm"
                  style={{ borderLeftColor: "#C0C0C0" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#C0C0C020" }}
                    >
                      <Phone
                        className="h-6 w-6 transition-all duration-300"
                        style={{ color: "#C0C0C0" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Our Contact Info
                      </h3>
                      <p className="text-gray-600">
                        +91 456 789
                        <br />
                        info@drakonsports.com
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13735.61715077478!2d76.32626685!3d31.89860645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b155555555555%3A0x1234567890abcdef!2sJawalamukhi%2C%20Himachal%20Pradesh%20176031!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
                  <h4 className="font-bold mb-2" style={{ color: "#722F37" }}>
                    Our Locations:
                  </h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>
                      <strong>Headquarter:</strong>
                      <br />
                      AMB 619, AMB PATHIAR
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
            src="/premium-cricket-equipment.jpg"
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
                style={{ color: "#722F37" }}
              >
                Request a Demo
              </h2>
              <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up opacity-0 animation-delay-500">
                Are you interested in partnering with us? Then what do you want
                to get in touch.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm animate-fade-in-up opacity-0 animation-delay-700">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-gray-700 font-medium"
                  >
                    Full Name*
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your name.."
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
                    style={{ "--tw-ring-color": "#CD853F" } as any}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="jobPosition"
                    className="text-gray-700 font-medium"
                  >
                    Job Position*
                  </Label>
                  <Input
                    id="jobPosition"
                    placeholder="Enter your job position.."
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
                    style={{ "--tw-ring-color": "#CD853F" } as any}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email.."
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
                    style={{ "--tw-ring-color": "#CD853F" } as any}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number*
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number.."
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
                    style={{ "--tw-ring-color": "#CD853F" } as any}
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
                    placeholder="How can we help you?"
                    rows={5}
                    className="border-gray-300 focus:ring-2 focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-[1.01]"
                    style={{ "--tw-ring-color": "#CD853F" } as any}
                  />
                </div>
                <div className="md:col-span-2 flex justify-start">
                  <Button
                    type="submit"
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl border-2 border-transparent hover:border-white/20 hover:shadow-xl animate-fade-in-up opacity-0 animation-delay-900"
                    style={{ backgroundColor: "#722F37" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#8B0000";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#722F37";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Request a Demo →
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
