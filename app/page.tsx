import Link from "next/link"
import { Globe, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import ChallengeDemo from "@/components/challenge-demo" // Remove or comment this import
import ChallengeSection from "@/components/challenge-section" // Add this import
// import DonationCounter from "@/components/donation-counter"
// import PartnershipSection from "@/components/partnership-section"
// import TestimonialSection from "@/components/testimonial-section"
import AboutSection from "@/components/about-section"
//* I've turned off the "Communities we support section import ImageGallery from "@/components/image-gallery"
import HeroSection from "@/components/hero-section"
import FloatingShapes from "@/components/floating-shapes"
import DonateButton from "@/components/donate-button"
import ShareButton from "@/components/share-button"

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
          </nav>
          <DonateButton />
        </div>
      </header>

      <main className="flex-1 relative">
        <HeroSection />
        <AboutSection />

        {/* Replace the entire challenge section with the new component */}
        <ChallengeSection />

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
                      <path d="M12 6.253v13h-1.25v-13H12zm1.25 13v-13H14v13h-.75z"/>
                      <path d="M3.5 8.254v3.25H7v-3.25H3.5zm0 4.5v3.25H7v-3.25H3.5zm8.25 0v3.25h3.5v-3.25h-3.5zm8.25 0v3.25h3.5v-3.25H20zm-16.5 0H2v7h1.5v-7zm16.5 0v7h1.5v-7H20z"/>
                      <path d="M18.5 8.254v3.25H22v-3.25h-3.5zm-8.25 0v3.25h3.5v-3.25h-3.5zm-8.25 0H1v7h1.5v-7zm8.25-4.5v3.25h3.5v-3.25h-3.5zm8.25 0v3.25H22v-3.25h-3.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Education & Awareness</h3>
                  <p className="text-zinc-600">
                    Raising public consciousness about global health funding gaps and fostering understanding of international interdependence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#007749] text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-[#FFCE00]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E94B3C] rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFCE00] rounded-full opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <Link 
                    href="https://www.every.org/foreignaidbridgefund/f/split-the-g-for-global" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-[#FFCE00] hover:pl-2 transition-all"
                  >
                    Donate
                  </Link>
                </li>
              </ul>
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
