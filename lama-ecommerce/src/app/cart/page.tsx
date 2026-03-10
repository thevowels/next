"use client";

import { title } from "process";
import { CartItemType, ProductType } from "../lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps: { id: number; title: string }[] = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

const cartItems: CartItemType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "purple",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 5,
    selectedSize: "s",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 3,
    selectedSize: "l",
    selectedColor: "black",
  },
];
export default function Cart() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentStep = parseInt(searchParams.get("step") || "1");
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              currentStep === step.id ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={` w-6 h-6 p-4 items-center text-white rounded-full flex justify-center ${
                currentStep === step.id ? "bg-gray-800" : "bg-slate-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                currentStep === step.id ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* STEPS & DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* Steps */}
        <div className="w-full lg:flex-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          asd
        </div>
        {/* Details */}
        <div className="w-full lg:flex-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h1>Card Details</h1>
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs">Subtotal</span>
              <span className="font-medium">$169.70</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs">Discount (10%)</span>
              <span className="font-medium text-red-700">$169.70</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs">Shipping Fee</span>
              <span className="font-medium">$10</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Total</span>
            <span className="font-medium">$10</span>
          </div>
          {currentStep === 1 && (
            <button
              className="flex w-full text-center
			 items-center justify-center gap-2
			  bg-slate-900 text-slate-200 py-2
			  rounded-md cursor-pointer"
              onClick={() => router.push("/cart?step=2", { scroll: false })}
            >
              Continue <ArrowRight />
            </button>
          )}
        </div>
      </div>
      <div>Products</div>
    </div>
  );
}
