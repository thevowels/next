import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <div className=" mt-16 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col gap-4  items-center md:items-start">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="logo" 
                        width={36} 
                        height={36}
                        className="w-6 h-6 md:w-9 md:h-9"
                        />
                        <p className=" text-white hidden md:block text-md font-medium tracking-wider">ECOMMERCE</p>
                </Link>
                <p className="text-sm text-gray-400"> (c) 2025 Ecommerce</p>
                <p className="text-sm text-gray-400">All rights reserved</p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-md text-amber-50">Links</p>
                <Link href="/">Homepage</Link>
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link> 
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-md text-amber-50">Links</p>
                <Link href="/">All Products</Link>
                <Link href="/products">New Arrivals</Link>
                <Link href="/contact">Best Sellers</Link> 
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-md text-amber-50">Links</p>
                <Link href="/">Homepage</Link>
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link> 
            </div>
        </div>
    )
}