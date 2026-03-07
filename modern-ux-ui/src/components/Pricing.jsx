const plans = [
	{
		name: "Starter",
		price: "29.99",
		description: "Perfect for individuals and small teams",
		features:[
			"Up to 5 team members",
			"10 GB Storage",
			"Basic Analytics",
			"Standard Support",
			"Basic Code Completion",
			"5 Projects",
			"Community Templates",
		],
		mostPopular: false,
	},
	{
		name: "Professional",
		price: "79.99",
		description: "Ideal for growing teams and advanced developers",
		features:[
			"Up to 25 team members",
			"100 GB Storage",
			"Advanced Analytics",
			"Priority Support",
			"AI-Powered Code Completion",
			"Unlimited Projects",
			"Premium Templates Library",
		],
		mostPopular: true,
	},
	{
		name: "Enterprise",
		price: "199.99",
		description: "For large organizations with advanced needs",
		features:[
			"Unlimited team members",
			"1 TB Storage",
			"Enterprise Analytics",
			"24/7 Dedicated Support",
			"Custom AI Model Training",
			"White-label Solution",
			"Advanced Security & SSO",
		],
		mostPopular: false,
	}
]

export default function Pricing() {
	return (
		<section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						<span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
							Simple, Transparent Pricing
						</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Choose the perfect plan for your development needs. All plans include our core AI-powered features.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<div 
							key={plan.name}
							className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
								plan.mostPopular 
									? 'bg-gradient-to-b from-blue-500/20 to-blue-600/10 border-blue-400/30 shadow-2xl' 
									: 'bg-white/5 border-white/10 hover:bg-white/10'
							}`}
						>
							{plan.mostPopular && (
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
										Most Popular
									</span>
								</div>
							)}

							<div className="text-center mb-8">
								<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
								<p className="text-gray-400 mb-6">{plan.description}</p>
								<div className="mb-6">
									<span className="text-5xl font-bold text-white">${plan.price}</span>
									<span className="text-gray-400">/month</span>
								</div>
							</div>

							<ul className="space-y-4 mb-8">
								{plan.features.map((feature, featureIndex) => (
									<li key={featureIndex} className="flex items-center space-x-3">
										<svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
										<span className="text-gray-300">{feature}</span>
									</li>
								))}
							</ul>

							<button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
								plan.mostPopular
									? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105'
									: 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
							}`}>
								Get Started
							</button>
						</div>
					))}
				</div>

				<div className="text-center mt-16">
					<p className="text-gray-400 mb-6">
						All plans include a 14-day free trial. No credit card required.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
						<span className="flex items-center gap-2">
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
							</svg>
							Enterprise-grade security
						</span>
						<span className="flex items-center gap-2">
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
							</svg>
							24/7 Support available
						</span>
						<span className="flex items-center gap-2">
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							99.9% Uptime SLA
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}