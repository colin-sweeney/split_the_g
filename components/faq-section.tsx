"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function FAQSection() {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  // Toggle FAQ item expansion
  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    )
  }

  // FAQ data
  const faqItems = [
    {
      question: "What is the Split The G Challenge?",
      answer: "The Split The G Challenge is a fundraising initiative inspired by the iconic Guinness pour. Participants attempt to perfectly split the G in the Guinness logo when taking a sip, donate based on their success, and challenge friends to participate. It's designed to raise awareness and funds for global health initiatives impacted by funding cuts."
    },
    {
      question: "How does the donation structure work?",
      answer: "If you achieve a perfect split through the G in your Guinness, you donate $5. If your split is imperfect, you donate $10. It's all in good fun, and either way, you're contributing to vital global health initiatives."
    },
    {
      question: "Where do the donations go?",
      answer: "All donations support organizations working on critical health programs in Sub-Saharan Africa and other regions that have been impacted by recent funding cuts. These programs provide essential healthcare services to vulnerable communities."
    },
    {
      question: "Do I have to drink Guinness to participate?",
      answer: "While the challenge was inspired by the iconic Guinness pour, participation is flexible. You're welcome to participate with any beverage or simply donate directly to support the cause if you prefer not to consume alcohol."
    },
    {
      question: "How can I spread the word about Split The G?",
      answer: "Just like the Ice Bucket Challenge, the best way to spread the word is to nominate friends after your attempt, share your Split The G moment on social media with the hashtag #SplitTheG, and encourage others to learn about the cause."
    },
    {
      question: "Is Split The G affiliated with Guinness?",
      answer: "Split The G is an independent initiative that draws inspiration from the iconic Guinness pour. While we appreciate the cultural significance of Guinness in many regions affected by health funding cuts, we are not officially affiliated with or endorsed by Guinness."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/images/pattern.jpg')] bg-repeat-x opacity-10 transform -rotate-3"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/images/pattern.jpg')] bg-repeat-x opacity-10 transform rotate-3"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-[#007749] text-white font-bold px-4 py-1 rounded-full transform -rotate-2 mb-4">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 relative">
            Frequently Asked Questions
            <span className="absolute -top-6 -right-6 text-6xl text-[#007749] opacity-20 transform rotate-12">
              ?
            </span>
          </h2>
          <div className="w-24 h-2 bg-[#FFCE00] rounded-full mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`mb-4 border-2 rounded-lg overflow-hidden transition-all ${
                expandedItems.includes(index) 
                  ? "border-[#007749] shadow-lg" 
                  : "border-gray-200 hover:border-[#007749]/50"
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center">
                  <HelpCircle className={`mr-3 h-5 w-5 ${
                    expandedItems.includes(index) ? "text-[#007749]" : "text-gray-400"
                  }`} />
                  <span className={`font-bold text-lg ${
                    expandedItems.includes(index) ? "text-[#007749]" : "text-gray-800"
                  }`}>
                    {item.question}
                  </span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${
                  expandedItems.includes(index) ? "transform rotate-180 text-[#007749]" : "text-gray-400"
                }`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedItems.includes(index) 
                    ? "max-h-96 opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 border-t border-gray-200">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
