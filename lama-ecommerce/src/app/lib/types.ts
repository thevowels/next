import { z} from "zod";


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

export const ShippingFormSchema = z.object({
	name: z
	.string()
	.min(1, {message: "Name is required"}),
	email:z
	.email({message: "Add a valid Email."}),
	phone: z.string()
	.min(7, {message: "Add a valid phone number"})
	.max(10, {message: "Phone number must be between 7 and 10 digits"})
	.regex(/^\d+$/, "phone number can contain only numbers."),
	address: z.string()
	.min(3)
	.max(4),
	city: z.string()
	.min(3, "Citiy is required."),
})

export type ShippingFormInputs = z.infer<typeof ShippingFormSchema>;