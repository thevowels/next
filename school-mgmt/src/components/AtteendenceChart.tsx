'use client'
import { CgMore } from 'react-icons/cg';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present:70,
    absent: 30,
    amt: 2400,
  },
  {
    name: 'Tue',
    present:60,
    absent: 40,
    amt: 2210,
  },
  {
    name: 'Wed',
    present:45,
    absent: 55,
    amt: 2290,
  },
  {
    name: 'Thu',
    present:90,
    absent: 10,
    amt: 2000,
  },
  {
    name: 'Fri',
    present:65,
    absent: 35,
    amt: 2181,
  },
];
export default function AttendanceChart(){
	return (
	<div className='bg-white rounded-xl w-full h-full'>
		<div className='flex w-full justify-between p-3'>
			<h1 className='text-lg font-semibold'>Students</h1>
			<CgMore/>
		</div>
			<BarChart width={"100%"} height={"90%"}
			responsive
			data={data}
			barSize={20}
			>
			<CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
			<XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
			<YAxis width="auto" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
			<Tooltip contentStyle={{borderRadius:"10px", borderColor: "lightgray"}}/>
			<Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
			<Bar dataKey="present" fill="#fae27c" radius={[10, 10, 0, 0]} legendType='circle' />
			<Bar dataKey="absent" fill="#c3ebfa" radius={[10, 10, 0, 0]}  legendType='circle'/>
			</BarChart>
		</div>
	)
}