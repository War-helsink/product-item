import type { ProductType, VariantType } from "../types";

export const PRODUCT: ProductType = {
	title: "T-shirt with print",
	amount: 20,
	currencyCode: "USD",
	description: "60% combed ringspun cotton/40% polyester jersey tee.",

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
