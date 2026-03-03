"use client"
import { CgBoy, CgMore } from 'react-icons/cg';
import { FaChildren } from 'react-icons/fa6';
import { MdBoy, MdMore } from 'react-icons/md';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
	{
		name: 'Total',
		count: 100,
		fill: "white"
	},
	{
		name: 'Girls',
		count: 45,
		fill: "#fae27c",
	},
	{
		name: 'Boys',
		count: 55,
		fill: '#c3ebfa',
	},
];

// #endregion
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {
  return (
	<div className='bg-white rounded-xl w-full h-full'>
		<div className='flex w-full justify-between p-3'>
			<h1 className='text-lg font-semibold'>Students</h1>
			<CgMore/>
		</div>
		<div className='w-full h-[70%] relative'>
				<RadialBarChart
					width={"100%"}
					height={"90%"}
					responsive
					innerRadius="20%"
					outerRadius={"100%"}
					barSize={64}
					data={data}
					>
					<RadialBar background dataKey="count" />
					{/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
					<Tooltip />
				</RadialBarChart>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<FaChildren className='w-18 h-18 text-lamaPurple'/>
			</div>	
		</div>
		<div className='flex justify-center gap-16'>
		<div className='flex flex-col gap-1'>
				<div className='w-5 h-5 bg-lamaSky rounded-full'/>
				<h1 className='font-bold'>1,234</h1>
				<h2 className='text-xs text-gray-500'>Boys (55%)</h2>
			</div>
			<div className='flex flex-col gap-1'>
				<div className='w-5 h-5 bg-lamaYellow rounded-full'/>
				<h1 className='font-bold'>1,000</h1>
				<h2 className='text-xs text-gray-500'>Girls (45%)</h2>
			</div>
		</div>

	</div>
  );
};

export default CountChart;