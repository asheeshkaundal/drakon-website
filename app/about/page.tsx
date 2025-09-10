import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
        <div className="bg-white rounded-full shadow-xl border border-gray-100 px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <Heart className="h-6 w-6 text-primary-600" />
            <div className="ml-2 leading-tight">
              <span className="block text-xl font-bold text-gray-900">drakon</span>
              <span className="block text-sm font-medium text-gray-700 -mt-1">sports</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="text-sm rounded-full px-4 py-2 font-medium border-primary-200 text-primary-700 hover:bg-primary-50 bg-transparent"
              asChild
            >
              <Link href="/about">About Us</Link>
            </Button>
            <Button
              className="text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-full px-4 py-2 font-medium shadow-lg"
              asChild
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:max-w-xs">
              <nav className="mt-8 flex flex-col gap-4">
                <Link href="#about" className="text-base font-medium text-gray-900 hover:text-primary-600">
                  About Us
                </Link>
                <Link href="#contact" className="text-base font-medium text-gray-900 hover:text-primary-600">
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Add padding to main content to account for fixed header */}
      <main className="flex-1 pt-20">
        {/* About Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-primary-50/30">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                  How It Started
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-gray-900 font-serif text-balance leading-tight">
                  Our Dream is Elite Sports Excellence
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  drakon sports was founded by passionate athletes and visionary entrepreneurs. Their shared dream was
                  to create a private sanctuary of sporting excellence accessible to the elite. United by their belief
                  in the transformational power of precision athletics, they embarked on a journey to build 'drakon
                  sports.' With relentless dedication, they gathered a team of experts and launched this exclusive
                  platform, creating a global community of elite athletes, all connected by the desire to explore,
                  compete, and excel at the highest level.
                </p>
              </div>
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 overflow-hidden">
                  <Image
                    src="/professional-athletes-training-together-in-modern-.jpg"
                    alt="Elite athletes training together"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg relative z-10 w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-blue-300 rounded-full blur-sm"></div>
                    <div className="absolute bottom-8 right-8 w-20 h-20 bg-blue-400 rounded-full blur-md"></div>
                    <div className="absolute top-1/2 right-4 w-12 h-12 bg-blue-200 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">5+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">150+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Elite Programs</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">2500+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Success Stories</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">50K+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Elite Athletes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 font-serif mb-4">
                  Our Mission & Values
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We exist to elevate athletic performance through discretion, precision, and excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">D</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Discretion</h3>
                  <p className="text-gray-600">
                    Privacy and exclusivity are paramount. We provide a sanctuary where elite athletes can train and
                    compete away from public scrutiny.
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">P</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Precision</h3>
                  <p className="text-gray-600">
                    Every detail matters. From training methodologies to equipment selection, we ensure precision in
                    every aspect of athletic development.
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">E</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h3>
                  <p className="text-gray-600">
                    We settle for nothing less than excellence. Our commitment is to help athletes achieve their highest
                    potential and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prestigious Partnerships Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 font-serif mb-4">
                  Prestigious Partnerships
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Carefully curated partnerships with world's finest suppliers
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[80px] w-full">
                  <span className="text-lg font-semibold text-gray-700">MRF</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[80px] w-full">
                  <span className="text-lg font-semibold text-gray-700">SS</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[80px] w-full">
                  <span className="text-lg font-semibold text-gray-700">SG</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[80px] w-full">
                  <span className="text-lg font-semibold text-gray-700">Adidas</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[80px] w-full">
                  <span className="text-lg font-semibold text-gray-700">Kookaburra</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors min-h-[80px] w-full">
                  <span className="text-lg font-semibold text-gray-700">New Balance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Business Services Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 mb-4">
                  CRICKET EXCELLENCE
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 font-serif mb-4">
                  OUR BUSINESS SERVICES
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive Cricket Excellence Solutions - Every elite athlete deserves the finest. At drakon
                  sports, we deliver comprehensive service capabilities that transform cricket experiences. From
                  sourcing premium materials to delivering luxury solutions globally, we craft excellence that makes an
                  impact.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {/* Service 1 - Import */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary-600">1</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">IMPORT</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sourcing the world's finest cricket materials and equipment from premium global suppliers.
                    </p>
                  </div>
                </div>

                {/* Service 2 - Export */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary-600">2</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">EXPORT</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Delivering luxury cricket experiences globally to elite institutions and discerning clients.
                    </p>
                  </div>
                </div>

                {/* Service 3 - Wholesale */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary-600">3</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">WHOLESALE BUSINESS</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Premium bulk solutions for elite institutions seeking comprehensive cricket excellence.
                    </p>
                  </div>
                </div>

                {/* Service 4 - Retail */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary-600">4</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">RETAIL BUSINESS</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Exclusive direct-to-connoisseur sales for those who demand nothing but the finest.
                    </p>
                  </div>
                </div>

                {/* Service 5 - Manufacturer/Trader/Service Provider */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary-600">5</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">MANUFACTURER/TRADER/SERVICE PROVIDER</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      End-to-end luxury cricket solutions combining manufacturing excellence with premium service
                      delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-primary-300 rounded-full blur-lg"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-primary-200 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-400 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Ready to Join the Elite?</h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-100 mb-8">
              Experience what it means to train and compete at the highest level. Where the elite play their own game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 shadow-xl px-8 py-3">
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="footerGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footerGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} drakon sports. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
