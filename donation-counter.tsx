"use client"

import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function DonationCounter({ className }: { className?: string }) {
  const [count, setCount] = useState(0)
  const target = 100000
  const percentage = Math.min((count / target) * 100, 100)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 78500) {
          return prev + 1000
        }
        return prev
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        "bg-white p-8 rounded-lg shadow-xl border-4 border-[#007749]/10 transform rotate-1 hover:rotate-0 transition-transform",
        className,
      )}
    >
      <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#FFCE00] rounded-full flex items-center justify-center text-[#007749] font-bold shadow-lg transform rotate-12">
        WOW!
      </div>

      <h3 className="text-3xl font-bold mb-4 text-center">Donations Raised</h3>
      <div className="text-5xl font-bold text-center mb-6 text-[#007749] relative">
        ${count.toLocaleString()}
        <span className="absolute -top-2 -right-2 text-xs bg-[#E94B3C] text-white px-2 py-0.5 rounded-full animate-pulse">
          Growing!
        </span>
      </div>

      <div className="h-6 bg-[#F5F5F5] rounded-full overflow-hidden mb-2 shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-[#FFCE00] to-[#E94B3C] transition-all duration-1000 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=10&width=200&text=Pattern')] bg-repeat opacity-20"></div>
        </div>
      </div>

      <div className="flex justify-between text-sm text-zinc-500 mb-6">
        <span>$0</span>
        <span>Goal: ${target.toLocaleString()}</span>
      </div>

      <div className="text-center">
        <Button className="bg-[#E94B3C] text-white hover:bg-[#C7392D] font-bold shadow-lg transform hover:scale-105 transition-transform px-8 py-6 text-lg rounded-xl">
          Make a Donation
        </Button>
      </div>
    </div>
  )
}

