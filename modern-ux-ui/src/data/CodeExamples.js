export const codeExamples = {
	"App.jsx": ` App.jsx
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
	`,
	"Hero.jsx": ` Hero.jsx
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
	
	export default App`
	,
	"Navbar.jsx": `import { useState } from 'react'
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
	
	export default App`
};

export const floatingCards = {
	"App.jsx": {
		bgColor: "bg-blue-500/20",
		iconColor: "text-blue-400",
		textColor: "text-blue-200",
		contentColor: "text-blue-300",
		icon: "AI",
		title: "Smart Completion",
		content: "AI-Powered code completion in real time"
	},
	"Hero.jsx": {
		bgColor: "bg-purple-500/20",
		iconColor: "text-purple-400",
		textColor: "text-purple-200",
		contentColor: "text-purple-300",
		icon: "AM",
		title: "Auto Animation",
		content: "AI-Powered code completion in real time"
	},
	"Navbar.jsx": {
		bgColor: "bg-purple-500/20",
		iconColor: "text-purple-400",
		textColor: "text-purple-200",
		contentColor: "text-purple-300",
		icon: "AI",
		title: "Smart Completion",
		content: "AI-Powered code completion in real time"
	},
	
}