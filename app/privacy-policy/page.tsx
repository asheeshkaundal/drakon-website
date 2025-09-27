"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // Controls whether TOC should be sticky or just static
  const [tocSticky, setTocSticky] = useState(true);

  const sections = [
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use-information", title: "How We Use Your Information" },
    {
      id: "disclosure-of-information",
      title: "Disclosure of Your Information",
    },
    { id: "tracking-technologies", title: "Tracking Technologies" },
    { id: "security-of-information", title: "Security of Your Information" },
    { id: "policy-for-children", title: "Policy for Children" },
    { id: "do-not-track", title: "Controls for Do-Not-Track Features" },
    { id: "privacy-rights", title: "Your Privacy Rights" },
    { id: "updates-to-policy", title: "Updates to this Privacy Policy" },
    { id: "contact-us", title: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 400);

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }

      // Stop TOC from being sticky after section 9 to avoid positioning issues
      const sectionNine = document.getElementById("updates-to-policy");

      if (sectionNine) {
        const s9Rect = sectionNine.getBoundingClientRect();
        // Make TOC static when section 9 comes into view
        if (s9Rect.top <= window.innerHeight * 0.5) {
          setTocSticky(false);
        } else {
          setTocSticky(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content with Top Padding for Fixed Header */}
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Desktop Sidebar */}
            <div className="hidden lg:block lg:w-80 flex-shrink-0">
              <div
                data-toc="true"
                className={`${
                  tocSticky ? "sticky top-32" : ""
                } bg-white border border-gray-200 rounded-lg shadow-sm p-6 transition-all duration-500 ease-in-out`}
              >
                <h2 className="text-lg font-bold text-navy-blue mb-4 font-serif">
                  Table of contents
                </h2>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 hover:bg-teal-blue/10 ${
                        activeSection === section.id
                          ? "bg-teal-blue/10 text-teal-blue font-medium"
                          : "text-gray-600 hover:text-teal-blue"
                      }`}
                    >
                      {index + 1}. {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0 privacy-main-content">
              {/* Header Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4 font-serif">
                  Privacy Policy
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Last Updated: 26-09-2025
                </p>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    At DRAKON SPORTS, we are committed to protecting your
                    privacy and ensuring a safe online experience. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard
                    your information when you visit our website
                    www.drakonsports.com, make a purchase, or interact with us.
                    Please read this Privacy Policy carefully. If you do not
                    agree with the terms of this Privacy Policy, please do not
                    access the site.
                  </p>
                </div>
              </div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                <h2 className="text-lg font-bold text-navy-blue mb-4 font-serif">
                  Table of contents
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="text-left px-3 py-2 text-sm text-gray-600 hover:text-teal-blue hover:bg-teal-blue/10 rounded-md transition-colors duration-200"
                    >
                      {index + 1}. {section.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Privacy Policy Sections */}
              <div className="space-y-8 mb-16">
                {/* Section 1: Information We Collect */}
                <section
                  id="information-we-collect"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    1. Information We Collect
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      We may collect personal information about you in a variety
                      of ways. The information we may collect on the Site
                      includes:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Personal Data:
                        </h3>
                        <p>
                          Personally identifiable information, such as your
                          name, shipping address, email address, telephone
                          number, and demographic information (like age, gender,
                          hometown, and interests), that you voluntarily give to
                          us when you register with the Site, place an order, or
                          choose to participate in various activities related to
                          the Site (such as online chat, contact forms, and
                          surveys).
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Derivative Data:
                        </h3>
                        <p>
                          Information our servers automatically collect when you
                          access the Site, such as your IP address, your browser
                          type, your operating system, your access times, and
                          the pages you have viewed directly before and after
                          accessing the Site.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Financial Data:
                        </h3>
                        <p>
                          Financial information, such as data related to your
                          payment method (e.g., valid credit card number, card
                          brand, expiration date) that we may collect when you
                          purchase, order, return, exchange, or request
                          information about our services from the Site. We use a
                          secure payment processor (e.g., Stripe, PayPal) for
                          all transactions; we do not store sensitive financial
                          data on our servers.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Data From Social Networks:
                        </h3>
                        <p>
                          User information from social networking sites, such as
                          Facebook, Instagram, Twitter, including your name,
                          your social network username, location, gender, birth
                          date, email address, profile picture, and public data
                          for contacts, if you connect your account to such
                          social networks.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Mobile Device Data:
                        </h3>
                        <p>
                          Device information, such as your mobile device ID,
                          model, and manufacturer, and information about the
                          location of your device, if you access the Site from a
                          mobile device.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Other Data:
                        </h3>
                        <p>
                          Occasionally, we may collect other data from you when
                          you respond to surveys or promotions.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: How We Use Your Information */}
                <section
                  id="how-we-use-information"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    2. How We Use Your Information
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Having accurate information about you permits us to
                      provide you with a smooth, efficient, and customized
                      experience. Specifically, we may use information collected
                      about you via the Site to:
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Create and manage your account.</li>
                      <li>
                        Process your transactions and send related information,
                        including purchase confirmations and invoices.
                      </li>
                      <li>Deliver products and services you purchase.</li>
                      <li>Email you regarding your account or order.</li>
                      <li>Enable user-to-user communications.</li>
                      <li>
                        Generate a personal profile about you to make your visit
                        to the Site more personalized.
                      </li>
                      <li>
                        Increase the efficiency and operation of the Site.
                      </li>
                      <li>
                        Monitor and analyze usage and trends to improve your
                        experience with the Site.
                      </li>
                      <li>Notify you of updates to the Site or services.</li>
                      <li>
                        Offer new products, services, and/or recommendations to
                        you.
                      </li>
                      <li>Perform other business activities as needed.</li>
                      <li>
                        Prevent fraudulent transactions, monitor against theft,
                        and protect against criminal activity.
                      </li>
                      <li>
                        Request feedback and contact you about your use of the
                        Site.
                      </li>
                      <li>Resolve disputes and troubleshoot problems.</li>
                      <li>Respond to product and customer service requests.</li>
                      <li>
                        Send you a newsletter or other marketing communications.
                      </li>
                      <li>Administer contests, promotions, and surveys.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 3: Disclosure of Your Information */}
                <section
                  id="disclosure-of-information"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    3. Disclosure of Your Information
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      We may share information we have collected about you in
                      certain situations. Your information may be disclosed as
                      follows:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          By Law or to Protect Rights:
                        </h3>
                        <p>
                          If we believe the release of information about you is
                          necessary to respond to legal process, to investigate
                          or remedy potential violations of our policies, or to
                          protect the rights, property, and safety of others, we
                          may share your information as permitted or required by
                          any applicable law, rule, or regulation.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Third-Party Service Providers:
                        </h3>
                        <p>
                          We may share your information with third parties that
                          perform services for us or on our behalf, including
                          payment processing, data analysis, email delivery,
                          hosting services, customer service, and marketing
                          assistance.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Marketing Communications:
                        </h3>
                        <p>
                          With your consent, or with an opportunity for you to
                          withdraw consent, we may share your information with
                          third parties for marketing purposes, as permitted by
                          law.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Affiliates:
                        </h3>
                        <p>
                          We may share your information with our affiliates, in
                          which case we will require those affiliates to honor
                          this Privacy Policy. Affiliates include our parent
                          company and any subsidiaries, joint venture partners,
                          or other companies that we control or that are under
                          common control with us.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Business Partners:
                        </h3>
                        <p>
                          We may share your information with our business
                          partners to offer you certain products, services, or
                          promotions.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Other Third Parties:
                        </h3>
                        <p>
                          We may share your information with advertisers and
                          investors for the purpose of conducting general
                          business analysis. We may also share your information
                          with such third parties for marketing purposes, as
                          permitted by law.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          Sale or Bankruptcy:
                        </h3>
                        <p>
                          If we reorganize or sell all or a portion of our
                          assets, undergo a merger, or are acquired by another
                          entity, we may transfer your information to the
                          successor entity. If we go out of business or enter
                          bankruptcy, your information would be an asset
                          transferred or acquired by a third party. You
                          acknowledge that such transfers may occur and that the
                          transferee may decline to honor the commitments we
                          made in this Privacy Policy.
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      We are not responsible for the actions of third parties
                      with whom you share personal or sensitive data, and we
                      have no authority to manage or control third-party
                      solicitations. If you no longer wish to receive
                      correspondence, emails or other communications from third
                      parties, you are responsible for contacting the third
                      party directly.
                    </p>
                  </div>
                </section>

                {/* Section 4: Tracking Technologies */}
                <section
                  id="tracking-technologies"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    4. Tracking Technologies
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <div>
                      <h3 className="font-semibold text-navy-blue mb-2">
                        Cookies:
                      </h3>
                      <p>
                        We may use cookies, web beacons, tracking pixels, and
                        other tracking technologies on the Site to help
                        customize the Site and improve your experience. When you
                        access the Site, your personal information is not
                        collected through the use of tracking technology. Most
                        browsers are set to accept cookies by default. You can
                        remove or reject cookies, but be aware that such action
                        could affect the availability and functionality of the
                        Site.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-blue mb-2">
                        Website Analytics:
                      </h3>
                      <p>
                        We may also partner with selected third-party vendors,
                        such as Google Analytics, to allow tracking technologies
                        and remarketing services on the Site through the use of
                        first party cookies and third-party cookies, to, among
                        other things, analyze and track users' use of the Site,
                        determine the popularity of certain content and better
                        understand online activity. By accessing the Site, you
                        consent to the collection and use of your information by
                        these third-party vendors. You are encouraged to review
                        their privacy policy and contact them directly for
                        responses to your questions. We do not transfer personal
                        information to these third-party vendors.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Security of Your Information */}
                <section
                  id="security-of-information"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    5. Security of Your Information
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                      We use administrative, technical, and physical security
                      measures to help protect your personal information. While
                      we have taken reasonable steps to secure the personal
                      information you provide to us, please be aware that
                      despite our efforts, no security measures are perfect or
                      impenetrable, and no method of data transmission can be
                      guaranteed against any interception or other type of
                      misuse. Any information disclosed online is vulnerable to
                      interception and misuse by unauthorized parties.
                      Therefore, we cannot guarantee complete security if you
                      provide personal information.
                    </p>
                  </div>
                </section>

                {/* Section 6: Policy for Children */}
                <section
                  id="policy-for-children"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    6. Policy for Children
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                      We do not knowingly solicit information from or market to
                      children under the age of 13. If you become aware of any
                      data we have collected from children under age 13, please
                      contact us using the contact information provided below.
                    </p>
                  </div>
                </section>

                {/* Section 7: Controls for Do-Not-Track Features */}
                <section
                  id="do-not-track"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    7. Controls for Do-Not-Track Features
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                      Most web browsers and some mobile operating systems
                      include a Do-Not-Track ("DNT") feature or setting you can
                      activate to signal your privacy preference not to have
                      data about your online browsing activities monitored and
                      collected. No uniform technology standard for recognizing
                      and implementing DNT signals has been finalized. As such,
                      we do not currently respond to DNT browser signals or any
                      other mechanism that automatically communicates your
                      choice not to be tracked online. If a standard for online
                      tracking is adopted that we must follow in the future, we
                      will inform you about that practice in a revised version
                      of this Privacy Policy.
                    </p>
                  </div>
                </section>

                {/* Section 8: Your Privacy Rights */}
                <section
                  id="privacy-rights"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    8. Your Privacy Rights
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Depending on your location, you may have specific rights
                      regarding your personal data:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          European Union (GDPR):
                        </h3>
                        <p>
                          If you are a resident of the European Union, you have
                          rights such as the right to access, rectify, erase,
                          restrict processing, data portability, and to object
                          to processing of your personal data.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-blue mb-2">
                          California (CCPA):
                        </h3>
                        <p>
                          If you are a California resident, you have rights such
                          as the right to know what personal information is
                          collected, the right to request deletion of personal
                          information, and the right to opt-out of the sale of
                          personal information.
                        </p>
                      </div>
                    </div>
                    <p>
                      To exercise any of these rights, please contact us at
                      asheesh.kaundal@drakonsports.com.
                    </p>
                  </div>
                </section>

                {/* Section 9: Updates to this Privacy Policy */}
                <section
                  id="updates-to-policy"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    9. Updates to this Privacy Policy
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                      We reserve the right to make changes to this Privacy
                      Policy at any time and for any reason. We will alert you
                      about any changes by updating the "Last Updated" date of
                      this Privacy Policy. You are encouraged to periodically
                      review this Privacy Policy to stay informed of updates.
                      You will be deemed to have been made aware of, will be
                      subject to, and will be deemed to have accepted the
                      changes in any revised Privacy Policy by your continued
                      use of the Site after the date such revised Privacy Policy
                      is posted.
                    </p>
                  </div>
                </section>

                {/* Section 10: Contact Us */}
                <section
                  id="contact-us"
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
                  <h2 className="text-2xl font-bold text-navy-blue mb-6 font-serif">
                    10. Contact Us
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      If you have questions or comments about this Privacy
                      Policy, please contact us at:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-teal-blue">
                      <p className="font-semibold text-navy-blue mb-2">
                        DRAKON SPORTS
                      </p>
                      <p>Email: asheesh.kaundal@drakonsports.com</p>
                      <p>Phone: +91-8888813841</p>
                      <p className="mt-2">
                        Head Office:
                        <br />
                        DRAKON SPORTS, 619
                        <br />
                        Jawalamukhi, Kangra
                        <br />
                        Himachal Pradesh - 176031
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

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
