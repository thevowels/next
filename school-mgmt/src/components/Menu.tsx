import Link from "next/link"
import { BiBook, BiChalkboard, BiHome, BiLogOut } from "react-icons/bi"
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
				href: "/",
				visible: ["admin", "teacher", "student", "parent"]
			},
			{
				label: "Teachers",
				icon: GiTeacher,
				href: "/list/teachers"
			},
			{
				label: "Students",
				icon: PiStudent,
				href: "/list/students",
			},
			{
				label: "Parent",
				icon: RiParentLine,
				href: "/list/parents",
				visible: ["admin", "teacher"]

			},
			{
				label: "Subjects",
				icon: BiBook,
				href: "/list/subjects",
				visible: ["admin"]
			},
			{
				label: "Classess",
				icon: BiChalkboard,
				href: "/list/classes",
				visible: ["admin", "teacher"]
			},
			{
				label: "Lessons",
				icon: FaStickyNote,
				href: "/list/lessons",
				visible: ["admin", "teacher"]
			},
			{
				label: "Exams",
				icon: PiExam,
				href: "/list/exams",
				visible: ["admin", "teacher", "student", "parent"]
			}
		]
	},
	{
		title: "Other",
		items: [
			{
				label: "Profile",
				icon: RiProfileLine,
				href: "/profile",
				visible: ["admin", "teacher", "student", "parent"]
			},
			{
				label: "setting",
				icon: CiSettings,
				href: "/settings",
				visible: ["admin", "teacher", "student", "parent"]
			},
			{
				label: "Logout",
				icon: BiLogOut,
				href: "/logout",
				visible: ["admin", "teacher", "student", "parent"]
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
							<Link href={obj.href} key={obj.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md hover:bg-lamaSkyLight">
								<obj.icon className="w-5 h-5"/>
								<span className=" hidden lg:block">{obj.label}</span>
							</Link>
					))}
				</div>
			))}
		</div>
	)
}