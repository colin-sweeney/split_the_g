"use client"

import { useState } from "react"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ChallengeDemo() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video bg-[#F5F5F5] rounded-lg overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-all">
      <img
        src="/placeholder.svg?height=400&width=600&text=Guinness+Pour+Challenge"
        alt="Challenge Demo"
        className="w-full h-full object-cover"
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <Button
            onClick={() => setPlaying(true)}
            size="lg"
            className="rounded-full h-20 w-20 bg-[#E94B3C] text-white hover:bg-[#C7392D] shadow-lg transform hover:scale-110 transition-transform"
          >
            <Play className="h-8 w-8" />
            <span className="sr-only">Play video</span>
          </Button>
        </div>
      )}
      <div className="absolute top-4 right-4 bg-[#FFCE00] text-[#007749] font-bold px-3 py-1 rounded-full transform rotate-12 shadow-md">
        Watch Now!
      </div>
    </div>
  )
}

