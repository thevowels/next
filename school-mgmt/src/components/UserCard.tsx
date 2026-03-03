import { CgMore } from "react-icons/cg";

export default function UserCard({type}:{type: string}){
	return (
		<div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-32.5">
			<div className="flex w-full justify-between items-center">
				<span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-500">2026/27</span>
				<CgMore/>
			</div>
			<h1 className="text-2xl my-4 font-bold"> 1,234</h1>
			<h1 className="text-gray-500 capitalize text-sm font-medium">{type}</h1>
		</div>
	)
}