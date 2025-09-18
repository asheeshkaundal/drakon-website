"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
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
                      src="/professional-athletes-training-together-in-modern-.jpg"
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
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-10 w-32 h-32 bg-teal-blue rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-navy-blue rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-silver-gray rounded-full blur-2xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <div className="inline-block rounded-full bg-gradient-to-r from-teal-blue/20 to-navy-blue/20 px-6 py-3 text-sm font-semibold text-navy-blue mb-6 border border-teal-blue/30">
                    OUR FOUNDATION
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-gray-900 font-serif mb-6 leading-tight">
                    Mission & Core Values
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We exist to elevate athletic performance through discretion,
                    precision, and excellence. Our commitment drives every
                    interaction and defines our legacy.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Discretion */}
                  <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-blue to-navy-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-3xl font-bold text-white tracking-wider">
                          D
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 font-serif group-hover:text-navy-blue transition-colors duration-300">
                        Discretion
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Privacy and exclusivity are paramount. We provide a
                        sanctuary where elite athletes can train and compete
                        away from public scrutiny, ensuring complete
                        confidentiality.
                      </p>
                    </div>
                  </div>

                  {/* Precision */}
                  <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-silver-gray/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-silver-gray to-silver-gray/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-3xl font-bold text-white tracking-wider">
                          P
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 font-serif group-hover:text-navy-blue transition-colors duration-300">
                        Precision
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Every detail matters in the pursuit of excellence. From
                        training methodologies to equipment selection, we ensure
                        precision in every aspect of athletic development.
                      </p>
                    </div>
                  </div>

                  {/* Excellence */}
                  <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cricket-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-cricket-red to-cricket-red/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-3xl font-bold text-white tracking-wider">
                          E
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 font-serif group-hover:text-navy-blue transition-colors duration-300">
                        Excellence
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        We settle for nothing less than excellence. Our
                        unwavering commitment is to help athletes achieve their
                        highest potential and transcend their limitations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional mission statement */}
                <div className="mt-16 text-center">
                  <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-navy-blue/5 to-teal-blue/5 rounded-2xl border border-teal-blue/20">
                    <p className="text-lg text-gray-700 leading-relaxed italic font-medium">
                      "At drakon sports, we believe that true champions are
                      forged not just through talent, but through an unwavering
                      commitment to excellence, supported by an environment that
                      respects their privacy and honors their dedication."
                    </p>
                    <div className="mt-4 w-16 h-1 bg-gradient-to-r from-teal-blue to-navy-blue mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Business Services Section */}
          <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234a9b9b' fill-opacity='0.3'%3E%3Cpath d='M20 20c0 11 9 20 20 20v-20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <div className="inline-block rounded-full bg-gradient-to-r from-primary-100 to-primary-200 px-6 py-3 text-sm font-semibold text-primary-700 mb-6 border border-primary-200/50">
                    CRICKET EXCELLENCE
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900 font-serif mb-6">
                    COMPREHENSIVE CRICKET SOLUTIONS
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive Cricket Excellence Solutions - Every elite
                    athlete deserves the finest. At drakon sports, we deliver
                    comprehensive service capabilities that transform cricket
                    experiences. From sourcing premium materials to delivering
                    luxury solutions globally, we craft excellence that makes an
                    impact.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {/* Service 1 - Import */}
                  <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-blue to-navy-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-2xl font-bold text-white">1</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 font-serif">
                        IMPORT
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Sourcing the world's finest cricket materials and
                        equipment from premium global suppliers.
                      </p>
                    </div>
                  </div>

                  {/* Service 2 - Export */}
                  <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-silver-gray/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-silver-gray to-silver-gray/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-2xl font-bold text-white">2</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 font-serif">
                        EXPORT
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Delivering luxury cricket experiences globally to elite
                        institutions and discerning clients.
                      </p>
                    </div>
                  </div>

                  {/* Service 3 - Wholesale */}
                  <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cricket-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-cricket-red to-cricket-red/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 font-serif">
                        WHOLESALE BUSINESS
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Premium bulk solutions for elite institutions seeking
                        comprehensive cricket excellence.
                      </p>
                    </div>
                  </div>

                  {/* Service 4 - Retail */}
                  <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-wicket-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-wicket-green to-wicket-green/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-2xl font-bold text-white">4</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 font-serif">
                        RETAIL BUSINESS
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Exclusive direct-to-connoisseur sales for those who
                        demand nothing but the finest.
                      </p>
                    </div>
                  </div>

                  {/* Service 5 - Manufacturer/Trader/Service Provider */}
                  <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 md:col-span-2 lg:col-span-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-navy-blue to-navy-blue/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <span className="text-2xl font-bold text-white">5</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 font-serif">
                        MANUFACTURER/TRADER/SERVICE PROVIDER
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        End-to-end luxury cricket solutions combining
                        manufacturing excellence with premium service delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Elite Services Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4 font-serif">
                  EXCLUSIVE CRICKET EXPERIENCES
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Comprehensive cricket solutions tailored for champions and
                  enthusiasts alike
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Bespoke Bat Creation */}
                <div className="group bg-white border-2 border-gray-200 p-8 hover:border-teal-blue transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 flex items-center justify-center bg-teal-blue">
                      <span className="text-white font-bold text-lg">🏏</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Bespoke Bat Creation
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Handcrafted cricket bats tailored to your exact
                    specifications, playing style, and preferences by master
                    craftsmen.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-teal-blue hover:text-white border-teal-blue text-teal-blue transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact-us">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>

                {/* Stadium Bookings */}
                <div className="group bg-white border-2 border-gray-200 p-8 hover:border-silver-gray transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 flex items-center justify-center bg-silver-gray">
                      <span className="text-white font-bold text-lg">🏟️</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Stadium Bookings
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Exclusive access to premium cricket facilities and stadiums
                    for training, matches, and special events worldwide.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-silver-gray hover:text-white border-silver-gray text-navy-blue transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact-us">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>

                {/* Exclusive Experiences */}
                <div className="group bg-white border-2 border-gray-200 p-8 hover:border-cricket-red transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 flex items-center justify-center bg-cricket-red">
                      <span className="text-white font-bold text-lg">⭐</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Exclusive Experiences
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    VIP cricket experiences including private coaching with
                    legends, exclusive tournaments, and behind-the-scenes
                    access.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-cricket-red hover:text-white border-cricket-red text-cricket-red transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact-us">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>

                {/* Global Partnerships */}
                <div className="group bg-white border-2 border-gray-200 p-8 hover:border-wicket-green transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 flex items-center justify-center bg-wicket-green">
                      <span className="text-white font-bold text-lg">🌍</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Global Partnerships
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Strategic partnerships with international cricket brands,
                    academies, and professional teams for unmatched
                    opportunities.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-wicket-green hover:text-white border-wicket-green text-wicket-green transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact-us">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
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
