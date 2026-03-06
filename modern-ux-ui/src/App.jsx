import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
		<div>
			<Navbar/>
			<Hero className="bg-blue-300" />
			<Features />
			<Pricing />
			<Testimonials />
			<Footer />
		</div>
    </div>
  )
}

export default App
