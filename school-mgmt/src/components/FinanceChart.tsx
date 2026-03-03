"use client"
import { CgMore } from "react-icons/cg";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
	{		
		name: 'Jan',
		income: 4000,
		expense: 2400,
	},
	{
		name: 'Feb',
		income: 3000,
		expense: 1398,
	},
	{
		name: 'Mar',
		income: 2000,
		expense: 9800,
	},
	{
		name: 'Apr',
		income: 2780,
		expense: 3908,
	},
	{
		name: 'May',
		income: 1890,
		expense: 4800,
	},
	{
		name: 'Jun',
		income: 2390,
		expense: 3800,
	},
	{
		name: 'Jul',
		income: 3490,
		expense: 4300,
	},
	{		
		name: 'Aug',
		income: 3800,
		expense: 3400,
	},
	{
		name: 'Sep',
		income: 7200,
		expense: 3800,
	},
	{
		name: 'Oct',
		income: 3000,
		expense: 1398,
	},
	{
		name: 'Nov',
		income: 2780,
		expense: 3908,
	},

];

export default function FinanceChart(){
	return (
	<div className='bg-white rounded-xl w-full h-full p-4'>
		<div className='flex w-full justify-between'>
			<h1 className='text-lg font-semibold'>Finance</h1>
			<CgMore/>
		</div>
		<div className="flex justify-center">
		<LineChart
			style={{ width: '100%', height: '90%', maxHeight: '430px'}}
			responsive
			data={data}
			margin={{
				top: 5,
				right: 0,
				left: 0,
				bottom: 5,
			}}
			>
			<CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
			<XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
			<YAxis width="auto"  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
			<Tooltip />
			<Legend align="center" verticalAlign="top" wrapperStyle={{padding:"10px", paddingBottom:"10px"}}/>
			<Line type="monotone" dataKey="income" stroke="#c3ebfa" strokeWidth={5}/>
			<Line type="monotone" dataKey="expense" stroke="#cfceef" strokeWidth={5} />
		</LineChart>
		</div>
	</div>
	)
}