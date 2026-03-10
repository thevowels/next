"use client";

import Link from "next/link";
import { ProductType } from "../lib/types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }: { product: ProductType }) {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  return (
    <div className="shadow-lg  rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3 hover:scale-105 duration-300">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      {/* Product Details */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* Product Types */}
        <div className="flex items-center gap-4 text-xs">
          {/* Size */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
            >
              {product.sizes.map((size) => (
                <option
                  value={size}
                  key={size}
                  onChange={(e) =>
                    handleProductType({ type: "size", value: e.target.value })
                  }
                >
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* Colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
				  className={`cursor-pointer border-2 rounded-full p-[1.2px] ${productTypes.color === color ? "border-gray-500": "border-gray-300"}`}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button className="ring-1 ring-gray-200 hover:text-white hover:bg-slate-900 px-2 py-1 rounded-md shadow-lg text-sm cursor-pointer transition-all duration-100 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
