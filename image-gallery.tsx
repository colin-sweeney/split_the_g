"use client"

import { useEffect, useState } from "react"

export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 8)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-[#F5F5F5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform rotate-3"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform -rotate-3"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-[#FFCE00] text-[#007749] font-bold px-4 py-1 rounded-full transform rotate-2 mb-4">
            Vibrant Communities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">Communities We Support</h2>
          <div className="w-24 h-2 bg-[#007749] rounded-full mb-6"></div>
        </div>

        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          Our work spans across Sub-Saharan Africa, supporting communities affected by funding cuts while celebrating
          the rich culture and resilience of the people.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="grid gap-6">
            <div
              className={`overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 ${activeIndex === 0 ? "scale-105 rotate-2 z-10" : "rotate-0 scale-100"}`}
            >
              <img
                src="/placeholder.svg?height=400&width=300&text=African+Healthcare"
                alt="Healthcare workers in Africa"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold">Healthcare Workers</p>
              </div>
            </div>
            <div
              className={`overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 ${activeIndex === 1 ? "scale-105 -rotate-2 z-10" : "rotate-0 scale-100"}`}
            >
              <img
                src="/placeholder.svg?height=300&width=300&text=Guinness+Brewery"
                alt="Guinness brewery in Africa"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold">Guinness Brewery</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div
              className={`overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 ${activeIndex === 2 ? "scale-105 -rotate-2 z-10" : "rotate-0 scale-100"}`}
            >
              <img
                src="/placeholder.svg?height=300&width=300&text=Community+Project"
                alt="Community development project"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold">Community Projects</p>
              </div>
            </div>
            <div
              className={`overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 ${activeIndex === 3 ? "scale-105 rotate-2 z-10" : "rotate-0 scale-100"}`}
            >
              <img
                src="/placeholder.svg?height=400&width=300&text=Perfect+Pour"
                alt="Perfect Guinness pour"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold">The Perfect Pour</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div
              className={`overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 ${activeIndex === 4 ? "scale-105 rotate-2 z-10" : "rotate-0 scale-100"}`}
            >
              <img
                src="/placeholder.svg?height=400&width=300&text=African+Children"
                alt="Children in Africa"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold">Children's Programs</p>
              </div>
            </div>
            <div
              className={`overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 ${activeIndex === 5 ? "scale-105 -rotate-2 z-10" : "rotate-0 scale-100"}`}
            >
              <img
                src="/placeholder.svg?height=300&width=300&text=Split+G+Challenge"
                alt="Split The G Challenge participant"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold">Challenge Participants</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div
              className={`overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 ${activeIndex === 6 ? "scale-105 -rotate-2 z-10" : "rotate-0 scale-100"}`}
            >
              <img
                src="/placeholder.svg?height=300&width=300&text=Guinness+Bar"
                alt="Guinness bar in Africa"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold">Local Guinness Bars</p>
              </div>
            </div>
            <div
              className={`overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 ${activeIndex === 7 ? "scale-105 rotate-2 z-10" : "rotate-0 scale-100"}`}
            >
              <img
                src="/placeholder.svg?height=400&width=300&text=African+Market"
                alt="African marketplace"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold">Vibrant Markets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

