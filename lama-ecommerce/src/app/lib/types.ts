
export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: {
        [color: string]: string; // color name as key and image URL as value
    };
}

export type CategoryType = {
    name: string;
    slug: string;
    icon: React.ReactNode;
}

export type CartItemType = ProductType & {
	quantity: number,
	selectedSize: string,
	selectedColor: string,
}