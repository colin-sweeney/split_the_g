"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "The Split The G Challenge is exactly what we need right now - a reminder that we're all part of a global community.",
      author: "Dr. Sarah Johnson",
      role: "Global Health Advocate",
    },
    {
      quote:
        "This initiative has helped us continue our vital work in communities that would otherwise be left without support.",
      author: "Michael Okonkwo",
      role: "Community Health Director",
    },
    {
      quote: "The partnership between Split The G and Guinness shows how brands can be a force for good in the world.",
      author: "Emma Rodriguez",
      role: "Social Impact Consultant",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-[#F5F5F5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform -rotate-3"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform rotate-3"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-[#007749] text-white font-bold px-4 py-1 rounded-full transform rotate-2 mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">What People Are Saying</h2>
          <div className="w-24 h-2 bg-[#FFCE00] rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white border-[#007749]/10 overflow-hidden shadow-xl transform transition-all duration-500 ${
                index === activeIndex
                  ? "scale-105 rotate-0 z-10 border-2 border-[#FFCE00]"
                  : index % 2 === 0
                    ? "rotate-2 scale-95"
                    : "-rotate-2 scale-95"
              }`}
            >
              <CardContent className="pt-6 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFCE00] rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="mb-4 text-[#FFCE00]">
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.43c-2.523 0-4.75 1.173-6.682 3.52C4.8 6.298 3.756 9.38 3.756 12.89c0 3.247.486 6.388 1.457 9.42 1.023 3.033 2.523 5.6 4.5 7.7 1.976 2.1 4.5 3.15 7.573 3.15 2.628 0 4.82-1.05 6.577-3.15 1.81-2.1 2.714-4.667 2.714-7.7 0-3.033-.904-5.6-2.714-7.7-1.757-2.1-3.948-3.15-6.577-3.15-.376 0-.904.105-1.585.315-.68.21-1.29.42-1.828.63-.539.21-.957.315-1.255.315-.904 0-1.358-.315-1.358-.945 0-.63.375-1.26 1.126-1.89.75-.63 1.7-1.155 2.847-1.575 1.2-.42 2.523-.63 3.97-.63 2.523 0 4.82.525 6.891 1.575 2.124 1.05 3.862 2.73 5.213 5.04 1.352 2.31 2.028 5.355 2.028 9.135 0 3.78-.675 6.825-2.028 9.135-1.351 2.31-3.089 3.99-5.213 5.04-2.071 1.05-4.368 1.575-6.891 1.575-4.446 0-8.146-1.05-11.093-3.15-2.948-2.1-5.16-4.9-6.636-8.4-1.477-3.5-2.215-7.35-2.215-11.55 0-4.2.792-7.7 2.376-10.5 1.585-2.8 3.715-4.9 6.39-6.3C8.146.745 10.947.165 13.89.165c1.351 0 2.553.088 3.604.265 1.05.21 1.91.42 2.58.63.67.21 1.155.42 1.457.63.3.21.45.42.45.63 0 .21-.15.42-.45.63-.3.21-.675.315-1.126.315-.15 0-.6-.105-1.352-.315-.752-.21-1.653-.42-2.705-.63-1.05-.21-2.175-.315-3.375-.315-1.2 0-2.325.105-3.375.315-1.05.21-1.951.42-2.704.63-.752.21-1.202.315-1.352.315-.451 0-.826-.105-1.126-.315-.3-.21-.45-.42-.45-.63 0-.21.15-.42.45-.63.301-.21.787-.42 1.457-.63.67-.21 1.53-.42 2.58-.63 1.051-.177 2.253-.265 3.604-.265z" />
                  </svg>
                </div>

                <p className="text-xl mb-8 italic text-[#007749] font-medium relative z-10">{testimonial.quote}</p>

                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#007749]/10 mr-4 flex items-center justify-center text-[#007749] font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>

                {index === activeIndex && (
                  <div className="absolute -bottom-3 -right-3 bg-[#E94B3C] text-white text-xs px-3 py-1 rounded-full transform rotate-12">
                    Featured
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-[#E94B3C] w-10" : "bg-[#007749]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

