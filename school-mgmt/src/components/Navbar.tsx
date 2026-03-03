import { BiMessage, BiSearch, BiUser } from "react-icons/bi";
import { CiBullhorn } from "react-icons/ci";
import { MdAnnouncement } from "react-icons/md";

export default function Navbar(){
	return (
		<div className="flex items-center justify-between p-4">
			{/* Search Bar */}
			<div className="hidden md:flex items-center gap-2 text-xs rounded full ring-[1.5px] ring-gray-300 px-2">
				<BiSearch className="w-4 h-4"/>
				<input type="text" placeholder="Search..." className="w-50 p-2 bg-transparent outline-none " />
			</div>
			<div className="flex items-center gap-6 justify-end w-full ">
				<div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
					<BiMessage/>
				</div>
				<div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
					<CiBullhorn/>
					<div className="absolute bg-purple-700 rounded-full -top-3 -right-3 w-5 h-5 text-white flex items-center justify-center">
						1
					</div>
				</div>
				<div className="flex flex-col">
					<span className="text-xs leading-3 font-medium">John Doe</span>
					<span className="text-[10px] text-gray-500 text-right">Admin</span>
				</div>
				<div className="rounded-full bg-blue-800">
				<BiUser className="w-9 h-9 text-white"/>
				</div>
			</div>
		</div>
	)
}