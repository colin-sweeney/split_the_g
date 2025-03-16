export default function PartnershipSection() {
  return (
    <section id="partners" className="py-20 bg-[#007749] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform rotate-3"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform -rotate-3"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-[#FFCE00] text-[#007749] font-bold px-4 py-1 rounded-full transform -rotate-2 mb-4">
            Join Forces
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-white">Partnership Opportunity</h2>
          <div className="w-24 h-2 bg-[#E94B3C] rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-8 font-medium text-white/90">
              The "Split The G" initiative presents a natural partnership opportunity with Guinness, creating a win-win
              scenario:
            </p>
            <ul className="space-y-8 mb-8">
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <div className="mr-6 h-14 w-14 rounded-full bg-[#FFCE00] flex items-center justify-center text-[#007749] font-bold text-xl shadow-lg transform -rotate-6">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-[#FFCE00]">Viral Challenge</h3>
                  <p className="text-white/80 text-lg">
                    Leverage the popularity of the Guinness pour to create shareable content that generates organic
                    reach.
                  </p>
                </div>
              </li>
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <div className="mr-6 h-14 w-14 rounded-full bg-[#E94B3C] flex items-center justify-center text-white font-bold text-xl shadow-lg transform rotate-6">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-[#E94B3C]">Community Support</h3>
                  <p className="text-white/80 text-lg">
                    Benefit communities where Guinness has deep roots while highlighting the brand's global citizenship.
                  </p>
                </div>
              </li>
              <li className="flex items-start transform hover:translate-x-2 transition-transform">
                <div className="mr-6 h-14 w-14 rounded-full bg-white flex items-center justify-center text-[#007749] font-bold text-xl shadow-lg transform -rotate-6">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-white">Brand Alignment</h3>
                  <p className="text-white/80 text-lg">
                    Associate with positive values of generosity and global community, enhancing brand perception.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-[#005C38] p-8 rounded-lg shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#FFCE00] rounded-full flex items-center justify-center text-[#007749] font-bold shadow-lg transform rotate-12">
                Join Us!
              </div>

              <h3 className="text-2xl font-bold mb-8 text-center text-[#FFCE00]">Our Partners</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg flex items-center justify-center h-32 transform hover:scale-105 transition-transform shadow-lg">
                  <img
                    src="/placeholder.svg?height=80&width=160&text=Partner+Logo"
                    alt="Partner Logo"
                    className="max-h-full"
                  />
                </div>
                <div className="bg-white/10 p-6 rounded-lg flex items-center justify-center h-32 transform hover:scale-105 transition-transform shadow-lg">
                  <img
                    src="/placeholder.svg?height=80&width=160&text=Partner+Logo"
                    alt="Partner Logo"
                    className="max-h-full"
                  />
                </div>
                <div className="bg-white/10 p-6 rounded-lg flex items-center justify-center h-32 transform hover:scale-105 transition-transform shadow-lg">
                  <img
                    src="/placeholder.svg?height=80&width=160&text=Partner+Logo"
                    alt="Partner Logo"
                    className="max-h-full"
                  />
                </div>
                <div className="bg-white/10 p-6 rounded-lg flex items-center justify-center h-32 border-4 border-dashed border-white/30 text-center transform hover:scale-105 transition-transform shadow-lg">
                  <div>
                    <p className="text-white font-bold">Your Logo Here</p>
                    <p className="text-xs text-white/60">Become a Partner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform">
              <img
                src="/placeholder.svg?height=400&width=600&text=Guinness+in+Africa"
                alt="Guinness in Africa"
                className="w-full h-48 object-cover"
              />
              <div className="absolute -bottom-3 -right-3 bg-[#E94B3C] text-white text-xs px-3 py-1 rounded-full transform rotate-12">
                Deep roots in Africa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

