'use client'

import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { CategoryType } from "../lib/types";

const categories = [
    {
        name: "All",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "all",
    },
    {
        name: "T-shirts",
        icon: <Shirt className="w-4 h-4" />,
        slug: "t-shirts",
    },
    {
        name: "Shoes",
        icon: <Footprints className="w-4 h-4" />,
        slug: "shoes",
    },
    {
        name: "Accessories",
        icon: <Glasses className="w-4 h-4" />,
        slug: "accessories",
    },
    {
        name: "Bags",
        icon: <Briefcase className="w-4 h-4" />,
        slug: "bags",
    },
    {
        name: "Dresses",
        icon: <Venus className="w-4 h-4" />,
        slug: "dresses",
    },
    {
        name: "Jackets",
        icon: <Shirt className="w-4 h-4" />,
        slug: "jackets",
    },
    {
        name: "Gloves",
        icon: <Hand className="w-4 h-4" />,
        slug: "gloves",
    },
];

export default function Categories() {
    const searchParms = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    const selectedCategory = searchParms.get("category") || "all";

    const handleChange = (category: CategoryType) => {
        const parmas = new URLSearchParams(searchParms);
        parmas.set("category", category.slug || "all");
        router.push(`${pathName}?${parmas.toString()}`,{scroll: false});
    }
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
            {categories.map((category) => (
                <div key={category.name}
                    className={`flex items-center gap-1 px-2 py-1 rounded cursor-pointer ${selectedCategory === category.slug ? "bg-white" : "text-gray-500"}`}
                    onClick={() => handleChange(category)}
                >
                    {category.icon}
                    {category.name}
                </div>
            ))}
        </div>
    )
}