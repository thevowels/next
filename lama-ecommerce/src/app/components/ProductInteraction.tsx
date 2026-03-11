"use client";

import { useState } from "react";
import { ProductInteractionProps } from "../lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import useCartStore from "../stores/cartStore";
import { toast } from "react-toastify";

export default function ProductInteraction({
  product,
  selectedSize,
  selectedColor,
}: ProductInteractionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { addToCart } = useCartStore();

  const handleAddtoCart = () => {
    addToCart({
      ...product,
      selectedColor,
	  selectedSize,
	  quantity
    });
	toast.success("Product added to cart!");
  };
  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size:</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              key={size}
              className={`cursor-pointer border p-[2px] ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              onClick={() => handleProductType({ type: "size", value: size })}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Color */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color:</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              key={color}
              className={`cursor-pointer border p-[2px] ${
                selectedColor === color ? "border-gray-600" : "border-gray-300"
              }`}
              onClick={() => handleProductType({ type: "color", value: color })}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center}`}
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* Quantity */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Qty:</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity((x) => (x > 1 ? x - 1 : 1))}
            className="cursor-pointer border border-gray-300 p-1"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity((x) => x + 1)}
            className="cursor-pointer border border-gray-300 p-1"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={handleAddtoCart}
          className="flex w-full cursor-pointer shadow-lg bg-gray-800 text-white text-sm font-medium rounded-md p-1 items-center justify-center gap-2"
        >
          <Plus />
          Add to Cart
        </button>
        <button className="flex w-full cursor-pointer ring-1 ring-gray-400 text-sm font-medium rounded-md p-1 items-center justify-center gap-2">
          <ShoppingCart /> Buy Now
        </button>
      </div>
    </div>
  );
}
