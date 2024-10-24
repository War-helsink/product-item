export interface ProductType {
	id: number;
	name: string;
	amount: number;
	currencyCode: string;
	description: string;

	characteristics: CharacteristicType[];
	reviews: ReviewType[];

	images: ImageType[];
}

export interface CharacteristicType {
	label: string;
	value: string;
}
export interface ReviewType {
	name: string;
	description: string;
	date: string;
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
