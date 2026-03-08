import { Search } from "lucide-react";

export default function SearchBar(){

    return (
        <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md">
            <Search className="w-5 h-5 text-gray-500"/>
            <input type="text" placeholder="Search..." className="outline-none text-sm"/>
        </div>
    )
}