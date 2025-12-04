"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, ThumbsUp, Beer, Star } from "lucide-react"

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

  // FAQ data with more playful and updated content
  const faqItems = [
    {
      question: "What on earth is the Split The G Challenge?",
      answer: "It's a fun, slightly messy (in a good way!) fundraising challenge inspired by the iconic Guinness pour. You attempt to perfectly split the G in the Guinness logo when taking a sip, donate based on your success, and challenge friends to join the fun. Think of it as the Ice Bucket Challenge, but warmer, tastier, and with a mission to restore vital global health funding!"
    },
    {
      question: "How does this quirky donation structure work?",
      answer: "It's simple! Perfect split = $5 donation. Imperfect split = $10 donation. But don't worry if your splits are consistently imperfect – practice makes perfect, and every donation makes a difference! The real goal is to have fun while supporting an important cause. Plus, you get to enjoy a Guinness, so everyone wins!"
    },
    {
      question: "Where exactly do my donations go?",
      answer: "All donations support GiveWell's All Grants Fund, which searches for the charities and programs that save or improve lives the most per dollar. The fund makes grants on a rolling basis to support high-impact global health initiatives, including incubating newer programs, providing organizational support, promoting policy change, and funding relevant research. GiveWell conducts extensive research to identify the most cost-effective opportunities, with a particular focus on regions like Sub-Saharan Africa that have been impacted by funding cuts. After transaction fees, 100% of donations go directly to recipient organizations—GiveWell doesn't use any of these funds for its own operations."
    },
    {
      question: "Do I have to drink Guinness to participate?",
      answer: "Nope! While the challenge was inspired by the iconic Guinness pour, participation is flexible. Non-beer drinkers can use Guinness 0 (their non-alcoholic option), another beverage of choice, or simply donate directly. The spirit of the challenge is what matters – supporting vital global health initiatives while having a bit of fun!"
    },
    {
      question: "What does Guinness have to do with Africa?",
      answer: "Great question! Africa is actually the world's largest market for Guinness beer, with Nigeria being the second-largest market for the brand outside of the UK. Guinness has been brewed in Africa since 1962 and has become deeply integrated into the culture in many African countries. In Nigeria alone, there are currently three Guinness breweries! This connection makes the challenge especially meaningful, as we're using a product that's popular in many of the same regions affected by global health funding cuts."
    },
    {
      question: "How can I spread the word about this genius challenge?",
      answer: "Just like the Ice Bucket Challenge, nominate three friends after your attempt, share your Split The G moment on social media with the hashtag #SplitTheG, and share a link to this site (SplitTheG.org). Tell people why this cause matters! You can also share the fact that every donation, no matter how small, makes a real difference to organizations providing essential services to vulnerable communities around the world."
    },
    {
      question: "Is Split The G officially affiliated with Guinness?",
      answer: "Split The G is an independent initiative inspired by the iconic Guinness pour and the beer's cultural significance in regions affected by health funding cuts. While we appreciate Guinness and its role in many communities worldwide, we are not officially affiliated with or endorsed by Guinness. We're just fans with a creative idea for making a difference!"
    }
  ]

  // Verified fun facts about Guinness to display under expanded answers
  const funFacts = [
    "The perfect Guinness pour takes 119.5 seconds according to the company!",
    "Guinness bubbles actually sink rather than rise due to their unique nitrogen/carbon dioxide mix!",
    "The original Guinness brewery at St. James's Gate in Dublin has a 9,000-year lease signed in 1759!",
    "Guinness contains fewer calories than orange juice or skim milk!",
    "The distinctive Guinness harp logo is based on the Brian Boru harp, which is now preserved in Trinity College Dublin!",
    "Guinness is brewed in over 50 countries and sold in over 120 countries worldwide!",
    "Guinness Foreign Extra Stout makes up 45% of Guinness's global sales, largely due to its popularity in Africa and Southeast Asia!"
  ]

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/images/pattern.jpg')] bg-repeat-x opacity-10 transform -rotate-3"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/images/pattern.jpg')] bg-repeat-x opacity-10 transform rotate-3"></div>
      <div className="absolute top-40 left-10 w-20 h-20 bg-[#FFCE00] rounded-full opacity-20 transform -rotate-12 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-16 h-16 bg-[#E94B3C] rounded-full opacity-20 transform rotate-12 animate-pulse"></div>
      
      {/* Floating bubbles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-[#007749] opacity-10"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-80px`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 15}s`
            }}
          ></div>
        ))}
      </div>

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
              className={`mb-6 border-2 rounded-lg overflow-hidden transition-all transform ${
                expandedItems.includes(index) 
                  ? "border-[#007749] shadow-lg scale-100" 
                  : "border-gray-200 hover:border-[#007749]/50 hover:scale-[1.01]"
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center">
                  <div className={`mr-3 h-8 w-8 flex-shrink-0 rounded-full 
                    ${expandedItems.includes(index) ? "bg-[#007749]" : "bg-gray-100"} 
                    flex items-center justify-center transition-all duration-300 shadow-md transform 
                    ${expandedItems.includes(index) ? "rotate-0" : "-rotate-6"}`}
                  >
                    <HelpCircle className={`h-5 w-5 ${
                      expandedItems.includes(index) ? "text-white" : "text-gray-400"
                    }`} />
                  </div>
                  <span className={`font-bold text-lg ${
                    expandedItems.includes(index) ? "text-[#007749]" : "text-gray-800"
                  }`}>
                    {item.question}
                  </span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                  expandedItems.includes(index) ? "transform rotate-180 text-[#007749]" : "text-gray-400"
                }`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedItems.includes(index) 
                    ? "max-h-[600px] opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                {/* Removed the border-t that was causing the divider line */}
                <div className="px-5 pb-5">
                  <p className="text-gray-600 mb-4">{item.answer}</p>
                  
                  {/* Fun fact that appears when expanded */}
                  <div className="mt-4 bg-[#FFCE00]/10 p-3 rounded-lg border border-[#FFCE00]/30 flex items-start">
                    {index % 2 === 0 ? (
                      <Beer className="h-5 w-5 mr-2 text-[#007749] flex-shrink-0 mt-0.5" />
                    ) : (
                      <Star className="h-5 w-5 mr-2 text-[#007749] flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm italic text-[#007749]/80">
                      <span className="font-bold">Fun fact:</span> {funFacts[index % funFacts.length]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Still have questions? We'd love to hear from you!</p>
            <a 
              href="colin@splittheg.org" 
              className="inline-flex items-center px-4 py-2 bg-[#007749] text-white rounded-md hover:bg-[#006040] transition-colors"
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
