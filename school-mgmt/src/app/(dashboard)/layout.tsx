import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) {
	return (
	  <div className="h-screen flex ">
		<div className="w-1/6 md:w-1/12 lg:w-1/6 p-4 bg-gray-100">
			<Link href={"/"} className="flex items-center justify-center gap-2 lg:justify-start">
				<Image src="vercel.svg" alt="logo" width={32} height={32}/>
				<span className="hidden lg:block text-sm">school mgmt</span>
			</Link>
			<Menu/>
		</div>
		<div className="w-5/6 md:w-11/12 lg:w-11/6 p-4 overflow-scroll">
			<Navbar/>
			{children}
		</div>
	  </div>
	);
  }
  