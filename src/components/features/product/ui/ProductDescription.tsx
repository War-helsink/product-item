import { GroupVariants, Price, Prose, Button } from "@/components/shared/ui";
import type { ProductType, VariantType } from "@/core/types";
import { PlusIcon } from "@radix-ui/react-icons";

import { useState } from "react";

export interface ProductDescriptionProps {
	product: ProductType;
	colors: VariantType[];
	sizes: VariantType[];
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
	product,
	colors,
	sizes,
}) => {
	const [color, setColor] = useState("black");
	const [size, setSize] = useState("xs");

	return (
		<>
			<div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
				<h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
				<div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
					<Price
						amount={product.amount.toString()}
						currencyCode={product.currencyCode}
					/>
				</div>
			</div>
			<GroupVariants
				title="Color"
				items={colors}
				value={color}
				onClick={(size) => setColor(size)}
			/>
			<GroupVariants
				title="Size"
				items={sizes}
				value={size}
				onClick={(size) => setSize(size)}
			/>

			<Prose
				className="mb-6 text-sm leading-tight dark:text-white/[60%]"
				html={product.description}
			/>

			<Button variant="outline" className="w-full relative flex items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:bg-blue-600 hover:opacity-90">
				<div className="absolute left-0 ml-4">
					<PlusIcon className="h-5" />
				</div>
				Add To Cart
			</Button>
		</>
	);
};
