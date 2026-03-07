const testimonials = [
  {
    name: 'Sarah Chen',
    job: 'Senior Developer',
    text: 'This AI powered platform has helped me alot',
    image:
	'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
},
  {
    name: 'Michael Rodriguez',
    job: 'Tech Lead',
    text: 'Game-changing AI tools for modern development',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Emily Johnson',
    job: 'Frontend Developer',
    text: 'Incredible productivity boost with intelligent code suggestions',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
]
export default function Testimonials () {
  return (
    <section
      id='testimonials'
      className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'
    >
      <div className='max-w-7xl mx-auto '>
        <div className='flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16'>
          {/* left side header */}
          <div className='lg:w-1/2 w-full text-center lg:text-left'>
            <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              What developers are saying about us
            </h2>
            <p className='text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto '>
              Everything you need to build, test and deploy applications with
              AI-powered development tools.
            </p>
          </div>
          {/* Right side */}
          <div className='lg:w-1/2 w-full'>
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className='bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl'
                >
                  <div className='flex items-start space-x-3 sm:space-x-4'>
                    <div className='shrink-0'>
                      <div className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                        "
                      </div>
					</div>
                      <div className='grow'>
                        <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.text}</p>
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover'
                          />
						  <div>
							<h4 className="font-semibold text-white text-sm sm:text-base ">{testimonial.name}</h4>
							<p className="text-xs sm:text-sm text-gray-400">{testimonial.job}</p>
							</div>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
