'use client'

import { Button, ButtonProps } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { FC } from "react"

interface ShareButtonProps extends Omit<ButtonProps, 'onClick'> {
  title?: string
  text?: string
  url?: string
}

const ShareButton: FC<ShareButtonProps> = ({ 
  title = 'Split The G Challenge',
  text = 'Join me in the Split The G Challenge to support global health initiatives!',
  url,
  className = "bg-[#007749] text-white hover:bg-[#005C38] font-bold shadow-lg transform hover:scale-105 transition-transform",
  children = (
    <>
      <Share2 className="mr-2 h-4 w-4" /> Share Your Challenge
    </>
  ),
  ...props
}) => {
  const handleShare = () => {
    const shareUrl = url || window.location.href
    
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: shareUrl,
      }).catch(error => console.error('Error sharing:', error))
    } else {
      // Fallback for browsers that don't support navigator.share
      // You could implement a custom share dialog here, or use a library
      alert('Share this link with your friends: ' + shareUrl)
      
      // Optional: copy to clipboard
      navigator.clipboard?.writeText(shareUrl)
        .then(() => console.log('URL copied to clipboard'))
        .catch(error => console.error('Could not copy URL:', error))
    }
  }

  return (
    <Button 
      className={className}
      onClick={handleShare}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ShareButton
