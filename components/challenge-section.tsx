"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChallengeSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 bg-[#F9F9F9] p-8 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-[#007749]">How It Works</h3>
              <p className="text-lg mb-4">
                Inspired by the iconic Guinness pour, participants attempt to split the G perfectly in this fun
                challenge that helps restore vital global health initiatives.
              </p>
            </div>

            {/* All steps shown at once with reduced spacing */}
            <div className="space-y-6 mb-6">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Head to Your Local Pub</h4>
                  <p className="text-zinc-700">
                    Watch the magic of a draught Guinness being poured and order your own pint.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Attempt to Split the G</h4>
                  <p className="text-zinc-700">
                    Take a sip and try to create the perfect split through the Guinness logo.
                  </p>
                </div>
              </div>

              {/* Step 3 - Options */}
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                  3
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-lg mb-2">Donate Based on Your Result</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Perfect Split Path */}
                    <div className="p-3 rounded-lg border-2 border-[#FFCE00]">
                      <div className="flex items-center mb-1">
                        <div className="mr-2 h-6 w-6 rounded-full bg-[#FFCE00] flex items-center justify-center text-[#007749] font-bold shadow-md text-xs">
                          ✓
                        </div>
                        <h4 className="font-bold">Perfect Split!</h4>
                      </div>
                      <p className="text-sm text-zinc-700">
                        Donate $5 for achieving the perfect pour.
                      </p>
                    </div>

                    {/* Imperfect Split Path */}
                    <div className="p-3 rounded-lg border-2 border-[#E94B3C]">
                      <div className="flex items-center mb-1">
                        <div className="mr-2 h-6 w-6 rounded-full bg-[#E94B3C] flex items-center justify-center text-white font-bold shadow-md text-xs">
                          ✓
                        </div>
                        <h4 className="font-bold">Imperfect Split</h4>
                      </div>
                      <p className="text-sm text-zinc-700">
                        Donate $10 and try again next time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Make a Difference</h4>
                  <p className="text-zinc-700">
                    Your donation helps restore vital global health initiatives that have been put on pause.
                  </p>
                  <Button
                    className="mt-2 bg-[#007749] text-white hover:bg-[#005C38]"
                    onClick={() =>
                      window.open("https://www.every.org/foreignaidbridgefund/f/split-the-g-for-global", "_blank")
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Donate Now
                  </Button>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 rounded-full bg-[#007749] flex items-center justify-center text-white font-bold shadow-md">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Challenge 3 Friends</h4>
                  <p className="text-zinc-700">
                    Just like the Ice Bucket Challenge, nominate friends to take part and spread the word.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Static image */}
          <div className="md:col-span-2 relative aspect-video bg-[#F5F5F5] rounded-lg overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-all">
            <img
              src="/split_g_motion.webp"
              alt="Challenge Demo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
