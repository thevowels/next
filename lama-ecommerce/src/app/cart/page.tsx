"use client";

import {  ShippingFormInputs } from "../lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Trash2 } from "lucide-react";
import ShippingForm from "../components/ShippingForm";
import { useState } from "react";
import PaymentForm from "../components/PaymentForm";
import Image from "next/image";
import useCartStore from "../stores/cartStore";

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

export default function Cart() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState< ShippingFormInputs | null>(null);
  const {cart, removeFromCart} = useCartStore();

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
          {currentStep === 1 ? (
            cart.map((item) => (
              <div key={item.id+item.selectedColor+item.selectedSize} className="flex items-center justify-between">
                <div className="flex gap-8">
                  <div className="relative h-32 w-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between text-sm">
                    <div>
                      <h1 className="font-medium">{item.name}</h1>
                      <div className="text-xs">
                        <div className="text-slate-500">
                          Quantity:{" "}
                          <span className="text-slate-700">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="text-slate-500">
                          Size:{" "}
                          <span className="text-slate-700">
                            {item.selectedSize}
                          </span>
                        </div>
                        <div className="text-slate-500">
                          Color:{" "}
                          <span className="text-slate-700">
                            {item.selectedColor}
                          </span>
                        </div>
                      </div>
                    </div>
					<div className="text-base font-medium">
						$29.9
					</div>
                  </div>
                </div>
                <button onClick={()=>removeFromCart(item)} className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center cursor-pointer hover:bg-red-200 transition-all duration-300 ">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))
          ) : currentStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : currentStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm  text-gray-500">
              Please fill in the shipping form.
            </p>
          )}
        </div>
        {/* Details */}
        <div className="w-full lg:flex-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
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
