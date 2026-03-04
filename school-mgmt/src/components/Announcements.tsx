const events = [
	{
		id: 1,
		title: 'Lorem ipsum dolar',
		time: '2026-01-02',
		description: "Lorem ipsum dolar sit amet ipsum gytro altro bloder",
	},
	{
		id: 2,
		title: 'Lorem ipsum dolar',
		time: '2026-01-02',
		description: "Lorem ipsum dolar asdio jiker inproble sit amet ipsum gytro altro bloder",
	},
	{
		id: 3,
		title: 'Lorem ipsum dolar',
		time: '2026-01-02',
		description: "Lorem ipsum dolar sit amet ipsum gytro altro bloder",
	},
];



export default function Announcements(){
	return (
		<div className="bg-white p-4 rounded-md">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">Announcements</h1>
				<span className="text-xs text-gray-400">View All</span>
			</div>
			<div className="flex flex-col gap-4 mt-4">
					{events.map(event => (
						<div key={event.id} className="bg-lamaPurpleLight even:bg-lamaYellowLight rounded-md p-4">
							<div className="flex items-center justify-between">
								<h1 className="font-medium ">{event.title}</h1>
								<span className="text-xs text-gray-400 bg-white  rounded-md p-1">{event.time}</span>
							</div>
							<p className="text-sm text-gray-400 mt-1">{event.description}</p>
						</div>
					))}
			</div>
		</div>
	)
}