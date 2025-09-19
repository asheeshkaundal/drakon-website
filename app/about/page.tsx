"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("cricket-solutions");
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;

        // Calculate scroll progress (0 to 1) - Natural progression
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        let progress = 0;

        // Start progress when section enters viewport
        if (sectionTop < windowHeight && sectionBottom > 0) {
          // Calculate based on section visibility in viewport
          const visibleHeight =
            Math.min(windowHeight, sectionBottom) - Math.max(0, sectionTop);
          const sectionInViewport = visibleHeight / windowHeight;

          // Natural progression based on scroll through section
          if (sectionTop <= 0) {
            // Section top has passed viewport top
            progress = Math.min(1, (windowHeight - sectionTop) / rect.height);
          } else {
            // Section is entering from bottom
            progress = sectionInViewport * 0.3; // Start slowly
          }
        }

        // Ensure progress reaches 1 when section is mostly scrolled past
        if (sectionBottom < windowHeight * 0.3) {
          progress = 1;
        }

        progress = Math.max(0, Math.min(1, progress));

        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current color based on scroll progress
  const getCurrentColor = () => {
    if (scrollProgress < 0.2) return "bg-teal-blue";
    if (scrollProgress < 0.4) return "bg-silver-gray";
    if (scrollProgress < 0.6) return "bg-cricket-red";
    if (scrollProgress < 0.8) return "bg-wicket-green";
    return "bg-navy-blue";
  };
  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <div className="flex flex-col min-h-[100dvh] bg-gray-50 text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* About Hero Section */}
          {/* About Hero Section */}
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-primary-50/30 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-24 h-24 bg-navy-blue rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute bottom-20 right-20 w-32 h-32 bg-teal-blue rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/3 right-1/4 w-16 h-16 bg-silver-gray rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-block rounded-full bg-gradient-to-r from-teal-blue/20 to-navy-blue/30 px-6 py-3 text-sm font-semibold text-navy-blue border border-teal-blue/30 hover:scale-105 transition-transform duration-300">
                    How It Started
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-gray-900 font-serif text-balance leading-tight animate-fade-in">
                    Our Dream is{" "}
                    <span className="bg-gradient-to-r from-teal-blue to-navy-blue bg-clip-text text-transparent">
                      Elite Sports Excellence
                    </span>
                  </h1>
                  <p
                    className="text-lg text-gray-600 leading-relaxed max-w-lg animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    drakon sports was founded by passionate athletes and
                    visionary entrepreneurs. Their shared dream was to create a
                    private sanctuary of sporting excellence accessible to the
                    elite. United by their belief in the transformational power
                    of precision athletics, they embarked on a journey to build
                    'drakon sports.' With relentless dedication, they gathered a
                    team of experts and launched this exclusive platform,
                    creating a global community of elite athletes, all connected
                    by the desire to explore, compete, and excel at the highest
                    level.
                  </p>
                </div>
                <div
                  className="relative animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="relative bg-gradient-to-br from-teal-blue/10 to-navy-blue/20 rounded-2xl p-8 overflow-hidden group hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/about1.png"
                      alt="Elite athletes training together"
                      width={600}
                      height={400}
                      className="rounded-xl shadow-lg relative z-10 w-full h-auto group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-0 left-0 w-full h-full opacity-20">
                      <div className="absolute top-4 left-4 w-16 h-16 bg-teal-blue rounded-full blur-sm animate-float"></div>
                      <div
                        className="absolute bottom-8 right-8 w-20 h-20 bg-navy-blue rounded-full blur-md animate-float"
                        style={{ animationDelay: "2s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 right-4 w-12 h-12 bg-silver-gray rounded-full blur-sm animate-float"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Values Section */}
          <section className="w-full py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left side - Image */}
                  <div className="relative">
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 overflow-hidden group">
                      <Image
                        src="/professional-athletes.jpg"
                        alt="Professional athletes representing our values"
                        width={600}
                        height={500}
                        className="rounded-2xl shadow-2xl w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>

                  {/* Right side - Values */}
                  <div className="space-y-8">
                    <div>
                      <div className="inline-block rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 mb-6 border border-gray-200">
                        Our values.
                      </div>
                      <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                        Our values.
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {/* Create community */}
                      <div className="flex items-start space-x-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center group-hover:border-teal-blue transition-colors duration-300">
                            <svg
                              className="w-8 h-8 text-gray-700 group-hover:text-teal-blue transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-blue transition-colors duration-300">
                            Create community
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            We care deeply about improving cricket excellence in
                            communities across the globe, fostering connections
                            that transcend boundaries.
                          </p>
                        </div>
                      </div>

                      {/* Embrace Diversity */}
                      <div className="flex items-start space-x-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center group-hover:border-navy-blue transition-colors duration-300">
                            <svg
                              className="w-8 h-8 text-gray-700 group-hover:text-navy-blue transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-navy-blue transition-colors duration-300">
                            Embrace Diversity
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            We seek the missing perspective and leverage our
                            diverse backgrounds to create inclusive cricket
                            experiences for all.
                          </p>
                        </div>
                      </div>

                      {/* Drive impact */}
                      <div className="flex items-start space-x-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center group-hover:border-cricket-red transition-colors duration-300">
                            <svg
                              className="w-8 h-8 text-gray-700 group-hover:text-cricket-red transition-colors duration-300"
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
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cricket-red transition-colors duration-300">
                            Drive impact
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            We focus on results that bring our mission within
                            reach, for everyone seeking cricket excellence and
                            sporting achievement.
                          </p>
                        </div>
                      </div>

                      {/* Bring others along */}
                      <div className="flex items-start space-x-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center group-hover:border-wicket-green transition-colors duration-300">
                            <svg
                              className="w-8 h-8 text-gray-700 group-hover:text-wicket-green transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-wicket-green transition-colors duration-300">
                            Bring others along
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            We welcome all ideas, and aren't afraid to learn
                            from a misstep. Together, we elevate the standards
                            of cricket excellence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Business Services Section */}
          <section
            id="cricket-solutions"
            className="w-full py-12 md:py-16 bg-gray-50 relative overflow-hidden"
          >
            <div className="container px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block rounded-full bg-gradient-to-r from-primary-100 to-primary-200 px-6 py-3 text-sm font-semibold text-primary-700 mb-4 border border-primary-200/50">
                    CRICKET EXCELLENCE
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 font-serif mb-4">
                    COMPREHENSIVE CRICKET SOLUTIONS
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Every elite athlete deserves the finest. At drakon sports,
                    we deliver comprehensive service capabilities that transform
                    cricket experiences globally.
                  </p>
                </div>

                {/* Timeline with alternating cards */}
                <div className="relative">
                  {/* Central vertical line with gradient sections */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

                  {/* Animated progress line that changes color on scroll */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal-blue via-navy-blue to-cricket-red transition-all duration-300 ease-out"
                    style={{
                      height: `${scrollProgress * 100}%`,
                      top: "0%",
                    }}
                  ></div>

                  {/* Progress indicator that moves on scroll */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full shadow-lg border-2 border-white transition-all duration-300 ease-out ${getCurrentColor()}`}
                    style={{
                      top: `${scrollProgress * 90 + 5}%`,
                    }}
                  ></div>

                  <div className="space-y-4 relative">
                    {/* Service 1 - Import (Left) */}
                    <div className="flex items-center relative z-10">
                      <div className="w-5/12 pr-4">
                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:z-20">
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            {/* Image placeholder */}
                            <div className="w-full h-24 bg-gradient-to-r from-gray-100 to-gray-200 mb-3 flex items-center justify-center border border-gray-200 relative overflow-hidden">
                              {/* Sharp edge accent */}
                              <div className="absolute left-0 top-0 w-1 h-full bg-teal-blue"></div>
                              <span className="text-gray-500 text-sm font-medium">
                                Import Image
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 font-serif text-teal-blue">
                              IMPORT
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Sourcing the world's finest cricket materials and
                              equipment from premium global suppliers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-3 h-3 bg-teal-blue rounded-full border-2 border-white shadow-md relative z-20"></div>
                      </div>
                      <div className="w-5/12 pl-4"></div>
                    </div>

                    {/* Service 2 - Export (Right) */}
                    <div className="flex items-center relative z-10 -mt-6">
                      <div className="w-5/12 pr-4"></div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-3 h-3 bg-silver-gray rounded-full border-2 border-white shadow-md relative z-20"></div>
                      </div>
                      <div className="w-5/12 pl-4">
                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:z-20">
                          <div className="absolute inset-0 bg-gradient-to-br from-silver-gray/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            {/* Image placeholder */}
                            <div className="w-full h-24 bg-gradient-to-r from-gray-100 to-gray-200 mb-3 flex items-center justify-center border border-gray-200 relative overflow-hidden">
                              {/* Sharp edge accent */}
                              <div className="absolute left-0 top-0 w-1 h-full bg-silver-gray"></div>
                              <span className="text-gray-500 text-sm font-medium">
                                Export Image
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 font-serif text-silver-gray">
                              EXPORT
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Delivering luxury cricket experiences globally to
                              elite institutions and discerning clients.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service 3 - Wholesale (Left) */}
                    <div className="flex items-center relative z-10 -mt-6">
                      <div className="w-5/12 pr-4">
                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:z-20">
                          <div className="absolute inset-0 bg-gradient-to-br from-cricket-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            {/* Image placeholder */}
                            <div className="w-full h-24 bg-gradient-to-r from-gray-100 to-gray-200 mb-3 flex items-center justify-center border border-gray-200 relative overflow-hidden">
                              {/* Sharp edge accent */}
                              <div className="absolute left-0 top-0 w-1 h-full bg-cricket-red"></div>
                              <span className="text-gray-500 text-sm font-medium">
                                Wholesale Image
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 font-serif text-cricket-red">
                              WHOLESALE BUSINESS
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Premium bulk solutions for elite institutions
                              seeking comprehensive cricket excellence.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-3 h-3 bg-cricket-red rounded-full border-2 border-white shadow-md relative z-20"></div>
                      </div>
                      <div className="w-5/12 pl-4"></div>
                    </div>

                    {/* Service 4 - Retail (Right) */}
                    <div className="flex items-center relative z-10 -mt-6">
                      <div className="w-5/12 pr-4"></div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-3 h-3 bg-wicket-green rounded-full border-2 border-white shadow-md relative z-20"></div>
                      </div>
                      <div className="w-5/12 pl-4">
                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:z-20">
                          <div className="absolute inset-0 bg-gradient-to-br from-wicket-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            {/* Image placeholder */}
                            <div className="w-full h-24 bg-gradient-to-r from-gray-100 to-gray-200 mb-3 flex items-center justify-center border border-gray-200 relative overflow-hidden">
                              {/* Sharp edge accent */}
                              <div className="absolute left-0 top-0 w-1 h-full bg-wicket-green"></div>
                              <span className="text-gray-500 text-sm font-medium">
                                Retail Image
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 font-serif text-wicket-green">
                              RETAIL BUSINESS
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Exclusive direct-to-connoisseur sales for those
                              who demand nothing but the finest.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service 5 - Service Provider (Left) */}
                    <div className="flex items-center relative z-10 -mt-6">
                      <div className="w-5/12 pr-4">
                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:z-20">
                          <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            {/* Image placeholder */}
                            <div className="w-full h-24 bg-gradient-to-r from-gray-100 to-gray-200 mb-3 flex items-center justify-center border border-gray-200 relative overflow-hidden">
                              {/* Sharp edge accent */}
                              <div className="absolute left-0 top-0 w-1 h-full bg-navy-blue"></div>
                              <span className="text-gray-500 text-sm font-medium">
                                Service Image
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 font-serif text-navy-blue">
                              SERVICE PROVIDER
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              End-to-end luxury cricket solutions with premium
                              service delivery and comprehensive support.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className="w-3 h-3 bg-navy-blue rounded-full border-2 border-white shadow-md relative z-20"></div>
                      </div>
                      <div className="w-5/12 pl-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
