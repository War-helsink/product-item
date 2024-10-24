"use client";

import { cn } from "@/core/lib/utils";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/shared/ui";
import { GridImage } from "./GridImage";
import type { ImageType } from "@/core/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { useState, useEffect } from "react";

export const Gallery: React.FC<{
	images: ImageType[];
}> = ({ images }) => {
	const [api, setApi] = useState<CarouselApi>();
	const [imageIndex, setImageIndex] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setImageIndex(api.selectedScrollSnap());

		api.on("select", () => {
			setImageIndex(api.selectedScrollSnap());
		});
	}, [api]);

	const buttonClassName =
		"h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";

	return (
		<>
			<Carousel
				setApi={setApi}
				className="relative w-full h-full max-h-[550px] aspect-square"
			>
				<CarouselContent className="h-full w-full">
					{images.length > 1 &&
						images.map((image) => {
							return (
								<CarouselItem key={image.src} className="relative">
									<Image
										className="h-full w-full object-contain"
										fill
										priority
										sizes="(min-width: 1024px) 66vw, 100vw"
										alt={image.alt}
										src={image.src}
									/>
								</CarouselItem>
							);
						})}
				</CarouselContent>
				<div className="absolute bottom-[15%] flex w-full justify-center">
					<div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
						<button
							type="button"
							disabled={0 >= imageIndex}
							onClick={() => {
								api?.scrollPrev();
							}}
							aria-label="Previous product image"
							className={cn(buttonClassName, {
								"pointer-events-none": 0 >= imageIndex,
							})}
						>
							<ArrowLeftIcon className="h-5" />
						</button>
						<div className="mx-1 h-6 w-px bg-neutral-500" />
						<button
							type="button"
							disabled={images.length - 1 === imageIndex}
							onClick={() => {
								api?.scrollNext();
							}}
							aria-label="Next product image"
							className={cn(buttonClassName, {
								"pointer-events-none": images.length - 1 === imageIndex,
							})}
						>
							<ArrowRightIcon className="h-5" />
						</button>
					</div>
				</div>
			</Carousel>

			{images.length > 1 && (
				<ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
					{images.map((image, index) => {
						const isActive = index === imageIndex;

						return (
							<li key={image.src} className="h-20 w-20">
								<button
									type="button"
									className="h-full w-full"
									onClick={() => {
										api?.scrollTo(index);
										setImageIndex(index);
									}}
								>
									<GridImage
										alt={image.alt}
										src={image.src}
										width={80}
										height={80}
										active={isActive}
									/>
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};
