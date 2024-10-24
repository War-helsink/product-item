import type { ProductType, VariantType } from "../types";

export const PRODUCT: ProductType = {
	id: 8718824824079,
	name: "T-shirt with print",
	amount: 20,
	currencyCode: "USD",
	description: "60% combed ringspun cotton/40% polyester jersey tee.",

	reviews: [
		{
			name: "Hil Elena",
			description: "As always, the quality is top notch.",
			date: "31 March 2024",
		},
		{
			name: "Peter Sav",
			description: "Light, roomy, great T-shirts.",
			date: "01 February 2024",
		},
		{
			name: "Svetlana Datsyuk",
			description: "Super bright and garni T-shirts. I recommend it.",
			date: "31 January 2023",
		},
	],

	characteristics: [
		{ label: "Print", value: "Inscription" },
		{
			label: "Material",
			value: "Cotton Elastane",
		},
		{
			label: "Neckline",
			value: "Round neckline",
		},
		{
			label: "Origin country",
			value: "США",
		},
		{
			label: "Compound",
			value: "40% cotton, 60% elastane",
		},
		{
			label: "Features of the cut",
			value: "Free",
		},
		{
			label: "Country of registration",
			value: "США",
		},
	],

	images: [
		{
			src: "/assets/product/black.avif",
			alt: "Black",
		},
		{
			src: "/assets/product/blue.avif",
			alt: "Blue",
		},
		{
			src: "/assets/product/white.avif",
			alt: "White",
		},
	],
};

export const COLORS: VariantType[] = [
	{
		label: "Black",
		value: "black",
	},
	{
		label: "White",
		value: "white",
	},
	{
		label: "Blue",
		value: "blue",
		disabled: true,
	},
];

export const SIZES: VariantType[] = [
	{
		label: "XS",
		value: "xs",
	},
	{
		label: "S",
		value: "s",
	},
	{
		label: "M",
		value: "m",
		disabled: true,
	},
	{
		label: "L",
		value: "l",
		disabled: true,
	},
	{
		label: "XL",
		value: "xl",
	},
	{
		label: "XXL",
		value: "xxl",
	},
	{
		label: "XXXL",
		value: "xxxl",
	},
];
