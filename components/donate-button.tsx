'use client'

import { Button, ButtonProps } from "@/components/ui/button"
import { FC } from "react"

interface DonateButtonProps extends Omit<ButtonProps, 'onClick'> {
  donationUrl?: string
}

const DonateButton: FC<DonateButtonProps> = ({ 
  donationUrl = 'https://www.every.org/foreignaidbridgefund/f/split-the-g-for-global',
  className = "bg-[#E94B3C] text-white hover:bg-[#C7392D] font-bold transform hover:scale-105 transition-transform shadow-lg",
  children = "Donate Now",
  ...props
}) => {
  const handleClick = () => {
    window.open(donationUrl, '_blank')
  }

  return (
    <Button 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  )
}

export default DonateButton
