'use client'
import { ArrowRight, ChevronDown, Play, Sparkle, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { codeExamples, floatingCards } from '../data/CodeExamples'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Hero () {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState('App.jsx')
  const currentFloatingCard = floatingCards[activeTab]
  useEffect(() => {
    function handleMouseMove (e) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  return (
    <section className='relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-1 lg:8 overflow-hidden'>
      <div
        className='absolute inset-0 opacity-30'
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`
        }}
      ></div>
      <div className='absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue500/10 rounded-full blur-3lx animate-pulse' />
      <div className='absolute bottom-20 right-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue500/10 rounded-full blur-3lx animate-pulse delay-1000' />
      <div className='max-w-7xl mx-auto text-center relative  w-full'>
        <div className='max-w-7xl mx-auto flex flex-col lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative'>
          <div>
            <div
              className={
                'inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'
              }
            >
              <Sparkles />
              <span className='text-xs sm:text-sm text-blue-300'>
                Introducing CodeFlow AI
              </span>
            </div>
            <h1 className='text-5xl sm:text-3xl md:tyext-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100'>
              <span className='bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2'>
                Code Faster
              </span>
              <span className='bg-linear-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2'>
                Build Better
              </span>
              <span className='bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2'>
                With CodeFlow AI
              </span>
            </h1>
            <p className='text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200'>
              Accelerate your development workflow with intelligent code
              completion, automated testing and smart debugging. Ship
              production-ready code 10x faster.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300'>
              <button
                className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2
			'
              >
                <span>Start Coding Free</span>
                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:transition-transform duration-300' />
              </button>
              <button
                className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm  border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2
			'
              >
                <div className='p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors'>
                  <Play className='w-4 h-4 sm:w-5 sm:h-5 fill-white' />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          <div className='flex-1 relative order-2 w-full'>
            <div className='relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:mx-4 sm:p-4 shadow-2xl border border-white/10'>
              <div className='bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:h-[450px] border-white/5'>
                {/* IDE HEADER */}
                <div className='flex items-center justify-between  px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10'>
                  <div className='flex space-x-2 items-center'>
                    <div className='flex space-x-1 sm:space-x-2 items-center'>
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-600'></div>
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-600'></div>
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600'></div>
                    </div>
                    <span className='text-xs sm:text-sm text-gray-300'>
                      CodeFlow AI
                    </span>
                  </div>
                  <ChevronDown className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400' />
                </div>
                <div className='p-3 sm:p-4 relative h-full'>
                  <div className='flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto'>
                    <buton
                      onClick={() => setActiveTab('App.jsx')}
                      className={`px-3 py-2 cursor-pointer backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border  text-gray-300 transition-all duration-200 ${
                        activeTab === 'App.jsx'
                          ? 'bg-blue-500/30  text-white border-blue-400/20'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      } `}
                    >
                      App.jsx
                    </buton>
                    <buton
                      onClick={() => setActiveTab('Hero.jsx')}
                      className={`px-3 py-2 cursor-pointer backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border  text-gray-300 transition-all duration-200 ${
                        activeTab === 'Hero.jsx'
                          ? 'bg-blue-500/30  text-white border-blue-400/20'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      } `}
                    >
                      Hero.jsx
                    </buton>
                    <buton
                      onClick={() => setActiveTab('Navbar.jsx')}
                      className={`px-3 py-2 cursor-pointer backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border text-gray-300 transition-all duration-200 ${
                        activeTab === 'Navbar.jsx'
                          ? 'bg-blue-500/30  text-white border-blue-400/20'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                      } `}
                    >
                      Navbar.jsx
                    </buton>
                  </div>
                  <div className='relative overflow-hidden flex-1'>
                    <SyntaxHighlighter
                      language='jsx'
                      style={nightOwl}
                      className={
                        'm-0 text-xs rounded-xl leading-5 h-full border'
                      }
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <div
                className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border-white/20  shadow-2xl`}
              >
                <div className='flex items-center space-x-2 mb-2'>
                  <div
                    className={`h-6 w-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
                  >
                    {currentFloatingCard.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentFloatingCard.textColor}`}
                  >
                    {currentFloatingCard.title}
                  </span>
                </div>
                <div
                  className={` text-sm text-left ${currentFloatingCard.contentColor}`}
                >
                  {currentFloatingCard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
