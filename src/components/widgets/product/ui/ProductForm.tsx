import { Suspense } from "react";
import { ProductDescription, Gallery } from "@/components/features/product";
import { Characteristics } from "@/components/features/characteristic";
import { Reviews } from "@/components/features/review";
import {
	Container,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/shared/ui";

import { PRODUCT, COLORS, SIZES } from "@/core/config/product";

export const ProductForm: React.FC = () => {
	return (
		<Container className="my-4">
			<Breadcrumb className="mb-4">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink>Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink>T-shirts</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>T-shirt with print</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<Tabs defaultValue="about" className="w-full">
				<TabsList className="grid grid-cols-3 sm:w-[610px]">
					<TabsTrigger value="about">Product overview</TabsTrigger>
					<TabsTrigger value="characteristics">Characteristics</TabsTrigger>
					<TabsTrigger value="reviews">Reviews</TabsTrigger>
				</TabsList>
				<TabsContent value="about">
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
								<ProductDescription
									product={PRODUCT}
									colors={COLORS}
									sizes={SIZES}
								/>
							</Suspense>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="characteristics">
					<div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
						<div className="h-full w-full basis-full lg:basis-4/6 mb-12 lg:mb-0">
							<h1 className="text-xl font-medium mb-4">{`${PRODUCT.name} (${PRODUCT.id})`}</h1>
							<Characteristics characteristics={PRODUCT.characteristics} />
						</div>
						<div className="basis-full lg:basis-2/6">
							<Suspense fallback={null}>
								<ProductDescription
									product={PRODUCT}
									colors={COLORS}
									sizes={SIZES}
								/>
							</Suspense>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="reviews">
					<div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
						<div className="h-full w-full basis-full lg:basis-4/6 mb-12 lg:mb-0">
							<h1 className="text-xl font-medium mb-4">Reviews</h1>
							<Reviews reviews={PRODUCT.reviews} />
						</div>
						<div className="hidden basis-2/6 lg:block">
							<Suspense fallback={null}>
								<ProductDescription
									product={PRODUCT}
									colors={COLORS}
									sizes={SIZES}
								/>
							</Suspense>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</Container>
	);
};
