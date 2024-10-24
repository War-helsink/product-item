"use client";

import { Suspense } from "react";
import { ProductDescription, Gallery } from "@/components/features/product";
import { Container } from "@/components/shared/ui";

import { PRODUCT, COLORS, SIZES } from "@/core/config/product";

export const ProductForm: React.FC = () => {
	return (
		<Container className="my-4">
			<div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
				<div className="h-full w-full basis-full lg:basis-4/6">
					<Suspense
						fallback={
							<div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
						}
					>
						<Gallery images={PRODUCT.images} />
					</Suspense>
				</div>

				<div className="basis-full lg:basis-2/6">
					<Suspense fallback={null}>
						<ProductDescription product={PRODUCT} colors={COLORS} sizes={SIZES} />
					</Suspense>
				</div>
			</div>
		</Container>
	);
};
