export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform -rotate-3"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/placeholder.svg?height=100&width=2000&text=Pattern')] bg-repeat-x opacity-10 transform rotate-3"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-[#007749] text-white font-bold px-4 py-1 rounded-full transform rotate-2 mb-4">
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">The Birth of Split The G</h2>
          <div className="w-24 h-2 bg-[#E94B3C] rounded-full mb-6"></div>
        </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-[#007749] mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-[#007749] text-white flex items-center justify-center mr-3 text-sm">
                1
              </span>
              The Rise of Nationalism
            </h3>
            <p className="mb-6 bg-[#F5F5F5] p-6 rounded-lg shadow-inner transform -rotate-1">
              Globally, we're witnessing countries embrace increasingly nationalistic agendas like "Make America Great
              Again" that prioritize narrow national interests while forgetting we're part of a global community. This
              shift toward isolationism threatens decades of progress in international cooperation and humanitarian
              efforts.
            </p>

            <h3 className="text-2xl font-bold text-[#E94B3C] mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-[#E94B3C] text-white flex items-center justify-center mr-3 text-sm">
                2
              </span>
              The Human Cost of Funding Cuts
            </h3>
            <p className="mb-6 bg-[#F5F5F5] p-6 rounded-lg shadow-inner transform rotate-1">
              The recent USAID funding cuts exemplify this dangerous shift, severely impacting global health
              initiatives, especially in Sub-Saharan Africa. These cuts don't just represent policy changes—they
              threaten vulnerable populations and years of progress in fighting disease, reducing poverty, and building
              sustainable communities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="rounded-lg overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                <img
                  src="/african_woman.jpg?height=400&width=600&text=Guinness+Pour"
                  alt="Perfect Guinness pour"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute -bottom-3 -right-3 bg-[#FFCE00] text-[#007749] text-xs px-3 py-1 rounded-full transform rotate-12">
                  The perfect pour
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                <img
                  src="/DRC_landscape.jpg"
                  alt="Split The G Challenge"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute -bottom-3 -right-3 bg-[#007749] text-white text-xs px-3 py-1 rounded-full transform -rotate-12">
                  The challenge
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#007749] mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-[#FFCE00] text-[#007749] flex items-center justify-center mr-3 text-sm">
                3
              </span>
              Birth of "Split The G"
            </h3>
            <p className="mb-6 bg-[#F5F5F5] p-6 rounded-lg shadow-inner transform -rotate-1">
              This situation inspired our "Split The G" concept—a nonprofit highlighting that true greatness must
              include being Generous, Gracious, and a Global force for good. We believe these other "G" qualities are
              essential components of genuine greatness, and that no nation can truly be great without embracing them.
            </p>

            <p className="mb-6 bg-[#F5F5F5] p-6 rounded-lg shadow-inner transform rotate-1">
              Through the viral "Split The G" Challenge, we aim to raise awareness and funds for communities affected by
              these funding cuts, while reminding everyone that we're all part of one global community. By partnering
              with brands like Guinness that have deep roots in affected regions, we can create meaningful impact while
              generating the awareness needed to drive systemic change.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#E94B3C] text-white font-bold transform rotate-2 shadow-lg">
              <span className="mr-2 text-xl">●</span> Lives are being lost due to funding cuts. Together, we can make a
              difference.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

