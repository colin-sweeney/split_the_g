"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to open GiveWell donation page
  const openGiveWell = () => {
    window.open('https://secure.givewell.org/', '_blank')
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007749] to-[#005C38] opacity-90"></div>
        <img
          src="/DRC_clinic.jpg?height=1000&width=2000&text=Vibrant+African+Background"
          alt="Vibrant African Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFCE00] rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-[#E94B3C] rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 bg-[#007749] rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-40 w-20 h-20 bg-[#FFCE00] rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container relative z-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${scrolled ? "opacity-70 translate-x-[-10%]" : "opacity-100"}`}>
            <div className="inline-block bg-[#E94B3C] text-white font-bold px-4 py-1 rounded-full transform -rotate-2 mb-6">
              Redefining Greatness
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              True <span className="text-[#FFCE00] italic">Greatness</span> Means Being:
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#FFCE00] flex items-center justify-center text-[#007749] font-bold text-xl shadow-lg mr-4 transform -rotate-3">
                  G
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white">Generous</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#007749] font-bold text-xl shadow-lg mr-4 transform rotate-3">
                  G
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white">Gracious</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#E94B3C] flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4 transform -rotate-3">
                  G
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white">Global</span>
              </div>
            </div>
            <div>
              <Button
                size="lg"
                className="bg-[#E94B3C] text-white hover:bg-[#C7392D] font-bold transform hover:scale-105 transition-transform shadow-lg px-8 py-6 text-lg"
                onClick={openGiveWell}
              >
                Donate Now <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${scrolled ? "opacity-70 translate-x-[10%]" : "opacity-100"}`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#FFCE00] rounded-full opacity-20 animate-pulse"></div>
              <img
                src="/g_split.jpg"
                alt="Split The G Challenge"
                className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white shadow-2xl transform rotate-3"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E94B3C] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform rotate-12">
                Join Us!
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#007749] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform -rotate-6">
                <img
                  src="/placeholder.svg?height=100&width=100&text=Guinness+Logo"
                  alt="Guinness Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-20">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
