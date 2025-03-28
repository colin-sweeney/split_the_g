"use client"

import { useState } from "react"
import { ArrowDown, ArrowRight, CheckCircle2, Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ChallengeSection() {
  const [activePath, setActivePath] = useState<"perfect" | "imperfect" | null>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const handlePathSelect = (path: "perfect" | "imperfect") => {
    setActivePath(path)
    setCurrentStep(3) // Move to step 3 after selection
  }

  const resetFlow = () => {
    setActivePath(null)
    setCurrentStep(0)
  }

  return (
    <section id="challenge" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/images/pattern.jpg')] bg-repeat-x opacity-10 transform -rotate-3"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/images/pattern.jpg')] bg-repeat-x opacity-10 transform rotate-3"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-[#FFCE00] text-[#007749] font-bold px-4 py-1 rounded-full transform -rotate-2 mb-4">
            Join the Fun!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 relative">
            The Split The G Challenge
            <span className="absolute -top-6 -right-6 text-6xl text-[#E94B3C] opacity-20 transform rotate-12">!</span>
          </h2>
          <div className="w-24 h-2 bg-[#007749] rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#007749]">How It Works</h3>
              <p className="text-lg mb-6">
                Inspired by the iconic Guinness pour, participants attempt to split the G perfectly in this fun
                challenge that helps restore vital global health initiatives.
              </p>
            </div>

            {/* Step-by-step flow */}
            <div className="space-y-8 mb-8">
              {/* Step 1 */}
              <div className={cn("transition-all duration-500", currentStep > 0 ? "opacity-50" : "opacity-100")}>
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Head to Your Local Pub</h4>
                    <p className="text-zinc-700">
                      Watch the magic of a draught Guinness being poured and order your own pint.
                    </p>

                    {currentStep === 0 && (
                      <Button
                        onClick={() => setCurrentStep(1)}
                        className="mt-3 bg-[#007749] text-white hover:bg-[#005C38]"
                        size="sm"
                      >
                        Next <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className={cn(
                  "transition-all duration-500",
                  currentStep < 1 ? "opacity-30" : currentStep > 1 ? "opacity-50" : "opacity-100",
                )}
              >
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Attempt to Split the G</h4>
                    <p className="text-zinc-700">
                      Take a sip and try to create the perfect split through the Guinness logo.
                    </p>

                    {currentStep === 1 && (
                      <Button
                        onClick={() => setCurrentStep(2)}
                        className="mt-3 bg-[#007749] text-white hover:bg-[#005C38]"
                        size="sm"
                      >
                        Next <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 3 - Decision */}
              <div
                className={cn(
                  "transition-all duration-500",
                  currentStep < 2 ? "opacity-30" : currentStep > 2 ? "opacity-50" : "opacity-100",
                )}
              >
                {currentStep === 2 && (
                  <div className="flex justify-center mb-4">
                    <ArrowDown className="h-8 w-8 text-[#007749] animate-bounce" />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Perfect Split Path */}
                  <div
                    className={cn(
                      "p-4 rounded-lg border-2 cursor-pointer transition-all",
                      activePath === "perfect"
                        ? "border-[#FFCE00] bg-[#FFCE00]/10"
                        : "border-gray-200 hover:border-[#FFCE00] hover:bg-[#FFCE00]/5",
                    )}
                    onClick={() => currentStep === 2 && handlePathSelect("perfect")}
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-2 h-8 w-8 rounded-full bg-[#FFCE00] flex items-center justify-center text-[#007749] font-bold shadow-md">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold">Perfect Split!</h4>
                    </div>
                    <p className="text-sm text-zinc-700">
                      Kudos to you! Donate $5 in your elation for achieving the perfect pour.
                    </p>

                    {currentStep === 2 && (
                      <Button
                        onClick={() => handlePathSelect("perfect")}
                        className="mt-3 bg-[#FFCE00] text-[#007749] hover:bg-[#FFCE00]/80 w-full"
                        size="sm"
                      >
                        I got a perfect split!
                      </Button>
                    )}
                  </div>

                  {/* Imperfect Split Path */}
                  <div
                    className={cn(
                      "p-4 rounded-lg border-2 cursor-pointer transition-all",
                      activePath === "imperfect"
                        ? "border-[#E94B3C] bg-[#E94B3C]/10"
                        : "border-gray-200 hover:border-[#E94B3C] hover:bg-[#E94B3C]/5",
                    )}
                    onClick={() => currentStep === 2 && handlePathSelect("imperfect")}
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-2 h-8 w-8 rounded-full bg-[#E94B3C] flex items-center justify-center text-white font-bold shadow-md">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold">Imperfect Split</h4>
                    </div>
                    <p className="text-sm text-zinc-700">Practice makes perfect! Donate $10 and try again next time.</p>

                    {currentStep === 2 && (
                      <Button
                        onClick={() => handlePathSelect("imperfect")}
                        className="mt-3 bg-[#E94B3C] text-white hover:bg-[#E94B3C]/80 w-full"
                        size="sm"
                      >
                        Still practicing!
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 4 - Converge */}
              <div
                className={cn(
                  "transition-all duration-500",
                  currentStep < 3 ? "opacity-30" : currentStep > 3 ? "opacity-50" : "opacity-100",
                )}
              >
                {currentStep === 3 && (
                  <div className="flex justify-center mb-4">
                    <ArrowDown className="h-8 w-8 text-[#007749] animate-bounce" />
                  </div>
                )}

                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Make a Difference</h4>
                    <p className="text-zinc-700">
                      Your donation helps restore vital global health initiatives that have been put on pause.
                    </p>

                    {currentStep === 3 && (
                      <Button
                        onClick={() => setCurrentStep(4)}
                        className="mt-3 bg-[#007749] text-white hover:bg-[#005C38]"
                        size="sm"
                      >
                        Next <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 5 - Final */}
              <div className={cn("transition-all duration-500", currentStep < 4 ? "opacity-30" : "opacity-100")}>
                {currentStep === 4 && (
                  <div className="flex justify-center mb-4">
                    <ArrowDown className="h-8 w-8 text-[#007749] animate-bounce" />
                  </div>
                )}

                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Challenge 3 Friends</h4>
                    <p className="text-zinc-700">
                      Just like the Ice Bucket Challenge (can you believe that was more than 10 years ago!), nominate
                      friends to take part.
                    </p>

                    {currentStep === 4 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Button
                          className="bg-[#007749] text-white hover:bg-[#005C38]"
                          onClick={() =>
                            window.open("https://www.every.org/foreignaidbridgefund/f/split-the-g-for-global", "_blank")
                          }
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Donate Now
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#007749] text-[#007749] hover:bg-[#007749]/10"
                          onClick={resetFlow}
                        >
                          Start Over
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Challenge Demo/Visual */}
            <div className="relative aspect-video bg-[#F5F5F5] rounded-lg overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-all">
              <img
                src="/images/guinness-pour-challenge.jpg"
                alt="Challenge Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button
                  size="lg"
                  className="rounded-full h-20 w-20 bg-[#E94B3C] text-white hover:bg-[#C7392D] shadow-lg transform hover:scale-110 transition-transform"
                >
                  <Play className="h-8 w-8" />
                  <span className="sr-only">Watch demo</span>
                </Button>
              </div>
              <div className="absolute top-4 right-4 bg-[#FFCE00] text-[#007749] font-bold px-3 py-1 rounded-full transform rotate-12 shadow-md">
                Watch Now!
              </div>
            </div>

            {/* Social sharing options */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow-lg transform rotate-1">
              <h4 className="font-bold mb-2">Share on Social Media</h4>
              <p className="text-sm text-zinc-600 mb-3">
                Use hashtag <span className="font-bold">#SplitTheG</span> when you post your challenge on social media!
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

