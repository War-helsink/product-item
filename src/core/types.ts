export interface ProductType {
	title: string;
	amount: number;
	currencyCode: string;
	description: string;
	
	images: ImageType[];
}

export interface ImageType {
	src: string;
	alt: string;
}

export type VariantType = {
	label: string;
	value: string;
	disabled?: boolean;
};
