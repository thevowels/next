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
	  <div className="h-screen flex flex-1">
		<div className="w-1/6 md:w-1/12 lg:w-1/6 p-4 bg-gray-100">
			<Link href={"/"} className="flex items-center justify-center gap-2 lg:justify-start">
				<Image src="vercel.svg" alt="logo" width={32} height={32}/>
				<span className="hidden lg:block font-bold ">Doodle</span>
			</Link>
			<Menu/>
		</div>
		<div className="w-5/6 flex flex-col md:w-11/12 lg:w-11/6 overflow-scroll bg-lamaSkyLight">
			<Navbar/>
			{children}
		</div>
	  </div>
	);
  }
  