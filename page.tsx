import Link from "next/link"
import { Globe, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ChallengeDemo from "@/components/challenge-demo"
import DonationCounter from "@/components/donation-counter"
import PartnershipSection from "@/components/partnership-section"
import TestimonialSection from "@/components/testimonial-section"
import AboutSection from "@/components/about-section"
import ImageGallery from "@/components/image-gallery"
import HeroSection from "@/components/hero-section"
import FloatingShapes from "@/components/floating-shapes"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <FloatingShapes />

      <header className="sticky top-0 z-50 bg-[#007749] text-white border-b-4 border-[#FFCE00]">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="text-2xl font-bold italic transform -rotate-2 inline-block">
                Split<span className="text-[#FFCE00]">The</span>G
              </span>
              <span className="absolute -top-2 -right-4 bg-[#E94B3C] text-white text-xs px-2 py-0.5 rounded-full transform rotate-12">
                !
              </span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[#FFCE00] transition-colors transform hover:-rotate-2 hover:scale-110"
            >
              About Us
            </Link>
            <Link
              href="#challenge"
              className="text-sm font-medium hover:text-[#FFCE00] transition-colors transform hover:rotate-2 hover:scale-110"
            >
              The Challenge
            </Link>
            <Link
              href="#impact"
              className="text-sm font-medium hover:text-[#FFCE00] transition-colors transform hover:-rotate-2 hover:scale-110"
            >
              Our Impact
            </Link>
            <Link
              href="#partners"
              className="text-sm font-medium hover:text-[#FFCE00] transition-colors transform hover:rotate-2 hover:scale-110"
            >
              Partners
            </Link>
            <Link
              href="#merchandise"
              className="text-sm font-medium hover:text-[#FFCE00] transition-colors transform hover:-rotate-2 hover:scale-110"
            >
              Merchandise
            </Link>
          </nav>
          <Button className="bg-[#E94B3C] text-white hover:bg-[#C7392D] font-bold transform hover:scale-105 transition-transform shadow-lg">
            Donate Now
          </Button>
        </div>
      </header>

      <main className="flex-1 relative">
        <HeroSection />
        <AboutSection />

        <section id="challenge" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform -rotate-3"></div>
          <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform rotate-3"></div>

          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-[#FFCE00] text-[#007749] font-bold px-4 py-1 rounded-full transform -rotate-2 mb-4">
                Join the Fun!
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 relative">
                The Split The G Challenge
                <span className="absolute -top-6 -right-6 text-6xl text-[#E94B3C] opacity-20 transform rotate-12">
                  !
                </span>
              </h2>
              <div className="w-24 h-2 bg-[#007749] rounded-full mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                <p className="text-lg mb-8 font-medium">
                  Inspired by the iconic Guinness pour, participants attempt to split the G perfectly. For each attempt:
                </p>
                <ul className="space-y-6 mb-8">
                  <li className="flex items-start transform hover:-rotate-1 transition-transform">
                    <div className="mr-4 h-10 w-10 rounded-full bg-[#FFCE00] flex items-center justify-center text-[#007749] font-bold shadow-md">
                      ✓
                    </div>
                    <div>
                      <span className="font-bold text-lg">Perfect Split:</span>
                      <p className="text-zinc-700">$5 donation to global health initiatives</p>
                    </div>
                  </li>
                  <li className="flex items-start transform hover:rotate-1 transition-transform">
                    <div className="mr-4 h-10 w-10 rounded-full bg-[#E94B3C] flex items-center justify-center text-white font-bold shadow-md">
                      ✓
                    </div>
                    <div>
                      <span className="font-bold text-lg">Imperfect Split:</span>
                      <p className="text-zinc-700">$10 donation</p>
                    </div>
                  </li>
                  <li className="flex items-start transform hover:-rotate-1 transition-transform">
                    <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                      ✓
                    </div>
                    <div>
                      <span className="font-bold text-lg">Nominate 3 Friends:</span>
                      <p className="text-zinc-700">Spread the challenge like the Ice Bucket Challenge</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-[#007749] text-white hover:bg-[#005C38] font-bold shadow-lg transform hover:scale-105 transition-transform">
                  <Share2 className="mr-2 h-4 w-4" /> Share Your Challenge
                </Button>
              </div>
              <ChallengeDemo />
            </div>
          </div>
        </section>

        <ImageGallery />

        <section id="impact" className="py-20 bg-[#F5F5F5] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCE00] rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E94B3C] rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-[#E94B3C] text-white font-bold px-4 py-1 rounded-full transform rotate-2 mb-4">
                Making a Difference
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">Our Global Impact</h2>
              <div className="w-24 h-2 bg-[#FFCE00] rounded-full mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-[#007749]/20 overflow-hidden transform hover:rotate-1 hover:scale-105 transition-all shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#E94B3C] rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                <CardContent className="pt-6 relative z-10">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E94B3C] shadow-lg transform -rotate-3">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Health Initiatives</h3>
                  <p className="text-zinc-600">
                    Supporting critical health programs in Sub-Saharan Africa that have been impacted by funding cuts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#007749]/20 overflow-hidden transform hover:-rotate-1 hover:scale-105 transition-all shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#007749] rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                <CardContent className="pt-6 relative z-10">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#007749] shadow-lg transform rotate-3">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Global Community</h3>
                  <p className="text-zinc-600">
                    Fostering connections between nations and reminding us that we're part of a worldwide community.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#007749]/20 overflow-hidden transform hover:rotate-1 hover:scale-105 transition-all shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFCE00] rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                <CardContent className="pt-6 relative z-10">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFCE00] shadow-lg transform -rotate-3">
                    <svg className="h-8 w-8 text-[#007749]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Economic Opportunities</h3>
                  <p className="text-zinc-600">
                    Creating jobs through African-made merchandise and supporting local economies.
                  </p>
                </CardContent>
              </Card>
            </div>
            <DonationCounter className="mt-16" />
          </div>
        </section>

        <PartnershipSection />

        <section id="merchandise" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform rotate-3"></div>
          <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform -rotate-3"></div>

          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-[#007749] text-white font-bold px-4 py-1 rounded-full transform -rotate-2 mb-4">
                Shop & Support
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">African-Made Merchandise</h2>
              <div className="w-24 h-2 bg-[#E94B3C] rounded-full mb-6"></div>
            </div>

            <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
              Every purchase supports economic opportunities in the communities where Guinness has deep roots.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={item}
                  className={`group cursor-pointer transform ${index % 2 === 0 ? "rotate-2" : "-rotate-2"} hover:rotate-0 transition-all`}
                >
                  <div className="aspect-square bg-[#F5F5F5] rounded-lg mb-4 overflow-hidden shadow-lg">
                    <img
                      src={`/placeholder.svg?height=300&width=300&text=African-Made+Product+${item}`}
                      alt={`Product ${item}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="pl-2">
                    <h3 className="font-bold text-lg">
                      Split The G {item === 1 ? "T-Shirt" : item === 2 ? "Cap" : item === 3 ? "Tote Bag" : "Hoodie"}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[#E94B3C] font-bold">$29.99</span>
                      <span className="ml-2 bg-[#FFCE00] text-[#007749] text-xs px-2 py-0.5 rounded-full">
                        Supports Africa
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-[#007749] text-white hover:bg-[#005C38] font-bold shadow-lg transform hover:scale-105 transition-transform"
              >
                View All Products
              </Button>
            </div>
          </div>
        </section>

        <TestimonialSection />
      </main>

      <footer className="bg-[#007749] text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-[#FFCE00]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E94B3C] rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFCE00] rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 italic transform -rotate-2 inline-block">
                Split<span className="text-[#FFCE00]">The</span>G
              </h3>
              <p className="text-white/80">
                A nonprofit highlighting that true greatness must include being Generous, Gracious, and a Global force
                for good.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#FFCE00]">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#challenge" className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all">
                    The Challenge
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link href="#partners" className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#FFCE00]">Get Involved</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all">
                    Take The Challenge
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all">
                    Become a Partner
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all">
                    Shop Merchandise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#FFCE00]">Connect With Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-white/80 hover:text-[#FFCE00] transform hover:scale-125 transition-transform"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-white/80 hover:text-[#FFCE00] transform hover:scale-125 transition-transform"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-white/80 hover:text-[#FFCE00] transform hover:scale-125 transition-transform"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80">
            <p>© {new Date().getFullYear()} Split The G. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

