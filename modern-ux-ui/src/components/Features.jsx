const features = [
  {
    title: 'AI Code Completion',
    description:
      'ntelligent code suggestions powered by CodeFlow AI. that learns from you.',
    image: 'code-completion',
    imagePositoin: 'left'
  },
  {
    title: 'AI Code Completion',
    description:
      'ntelligent code suggestions powered by CodeFlow AI. that learns from you.',
    image: 'code-completion',
    imagePositoin: 'right'
  },
  {
    title: 'AI Code Completion',
    description:
      'ntelligent code suggestions powered by CodeFlow AI. that learns from you.',
    image: 'code-completion',
    imagePositoin: 'left'
  }
]

export default function Features () {
  return (
    <section id='features' className='py-16 sm:py-20 sm:px-6 lg:px-8 relative'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
          <h1 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-linear-to-b from-white to-gray-300  bg-clip-text text-transparent'>
              Your Complete Development
            </span>
            <br />
            <span className='bg-linear-to-b from-blue-400 to-cyan-400  bg-clip-text text-transparent'>
              Workflow
            </span>
          </h1>
        </div>
        <div className='space-y-16 sm:space-y-20 lg:space-y-32'>
          {features.map((feature, key) => (
            <div key={key} className=''>
              <div>
                <div>
                  {/* IDE Interface */}
                  <div>
                    <div>
                      <div className='flex space-x-1 sm:space-x-2 items-center'>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-600'></div>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-600'></div>
                        <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600'></div>
                      </div>
					  <span className="text-gray-400  ml-2 sm:ml-4 text-xs sm:text-sm">{feature.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
