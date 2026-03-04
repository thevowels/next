'use client'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CgMore } from 'react-icons/cg';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
	{
		id: 1,
		title: 'Lorem ipsum dolar',
		time: '10:00 AM - 12:00 PM',
		description: "Lorem ipsum dolar sit amet ipsum gytro altro bloder",
	},
	{
		id: 2,
		title: 'Lorem ipsum dolar',
		time: '10:00 AM - 12:00 PM',
		description: "Lorem ipsum dolar sit amet ipsum gytro altro bloder",
	},
	{
		id: 3,
		title: 'Lorem ipsum dolar',
		time: '10:00 AM - 12:00 PM',
		description: "Lorem ipsum dolar sit amet ipsum gytro altro bloder",
	},
];

export default function EventCalendar()
{
	
	const [value, onChange] = useState<Value>(new Date());
	return (
		<div className='bg-white p-4 rounded-md justify-center items-center'>
			<Calendar onChange={onChange} value={value}/>
			<div className='flex items-center justify-between'>
				<h1 className='text-lg font-semibold my-4'>Events</h1>
				<CgMore/>
			</div>
			<div className='flex flex-col gap-4'>
				{events.map(event => (
					<div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
						<div className='flex items-center justify-between'>
							<h1 className='font-semibold text-gray-600'>{event.title}</h1>
							<span className='text-gray-300 text-xs'>{event.time}</span>
						</div>
						<p className='mt-2  text-gray-400 text-sm'>{event.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}