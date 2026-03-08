'use client'

import { ProductType } from "../lib/types"

export default function ProductCard({product}: {product: ProductType}) {
    return (
        <div>
            {product.name}
        </div>
    )
}