import Link from "next/link"
import { BiChalkboard, BiHome, BiLogOut } from "react-icons/bi"
import { CiSettings } from "react-icons/ci"
import { FaStickyNote } from "react-icons/fa"
import { GiTeacher } from "react-icons/gi"
import { PiExam, PiStudent } from "react-icons/pi"
import { RiParentLine, RiProfileLine } from "react-icons/ri"

const menuItems = [
	{
		title: "MENU",
		items:[
			{
				label: "Home",
				icon: BiHome,
				href: "/"
			},
			{
				label: "Teachers",
				icon: GiTeacher,
				href: "/teachers"
			},
			{
				label: "Students",
				icon: PiStudent,
				href: "/students"
			},
			{
				label: "Parent",
				icon: RiParentLine,
				href: "/parents",
			},
			{
				label: "Classess",
				icon: BiChalkboard,
				href: "/classes"
			},
			{
				label: "Lessons",
				icon: FaStickyNote,
				href: "/lessons",
			},
			{
				label: "Exams",
				icon: PiExam,
				href: "/exams"
			}
		]
	},
	{
		title: "Other",
		items: [
			{
				label: "Profile",
				icon: RiProfileLine,
				href: "/profile"
			},
			{
				label: "setting",
				icon: CiSettings,
				href: "/settings"
			},
			{
				label: "Logout",
				icon: BiLogOut,
				href: "/logout"
			}
		]
	}
]
 
export default function Menu(){
	return (
		<div>
			{menuItems.map(item => (
				<div className="flex flex-col gap-2" key={item.title}>
					<span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
					{item.items.map(obj => (
							<Link href={obj.href} key={obj.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500">
								<obj.icon className="w-5 h-5"/>
								<span className=" hidden lg:block">{obj.label}</span>
							</Link>
					))}
				</div>
			))}
		</div>
	)
}