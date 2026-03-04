import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { BiPlus, BiSortDown, BiSortUp } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { LiaSortDownSolid } from "react-icons/lia";

export default function Page()
{
	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			<div className="flex flex-col md:flex-row justify-between">
				<h1 className="text-lg font-semibold hidden md:block">All Teachers</h1>
				<div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto justify-between">
					 <TableSearch/>
					 <div className="flex items-center gap-4 self-end">
					 <button className="flex items-center text-center justify-center rounded-full h-8 w-8 bg-amber-300">
							<FiFilter/>
						</button>
						<button className="flex items-center text-center justify-center rounded-full h-8 w-8 bg-amber-300">
							<BiSortDown/>
						</button>
						<button className="flex items-center text-center justify-center rounded-full h-8 w-8 bg-amber-300">
							<BiPlus/>
						</button>
					 </div>
				</div>
			</div>
			<div className="">
				{/* Rows */}
			</div>
			<Pagination/>
		</div>
	)
}