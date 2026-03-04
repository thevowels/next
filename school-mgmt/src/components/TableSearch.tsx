import { BiSearch } from "react-icons/bi";

export default function TableSearch()
{
	return (
		<div>
			<div className="flex items-center gap-2 text-xs rounded full ring-[1.5px] ring-gray-300 px-2">
				<BiSearch className="w-4 h-4"/>
				<input type="text" placeholder="Search..." className="w-50 p-2 bg-transparent outline-none " />
			</div>
		</div>
	)
}