import { ShoppingCart } from "lucide-react";

import { cn } from "@/core/lib/utils";
import Image from "next/image";
import {
	Title,
	Button,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	buttonVariants,
} from "@/components/shared/ui";
import { ArrowLeft } from "lucide-react";

export const CartButton: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon">
					<ShoppingCart />
				</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col justify-between pb-0 px-0">
				<SheetHeader className="px-6">
					<SheetTitle>My Cart</SheetTitle>

					<SheetDescription>
						Shopping cart, add, change or remove a product.
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col flex-grow justify-center overflow-hidden">
					<div className="flex flex-col items-center justify-center w-72 mx-auto">
						<Image
							src="/assets/images/empty-box.png"
							alt="Empty cart"
							width={120}
							height={120}
						/>
						<Title
							size="sm"
							text="Cart is empty"
							className="text-center font-bold my-2"
						/>
						<p className="text-center mb-5">
							Add at least one pizza to place an order
						</p>

						<SheetClose
							className={cn(buttonVariants({ size: "lg" }), "w-56 h-12")}
						>
							<ArrowLeft className="text-base w-5 mr-2" />
							Go back
						</SheetClose>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};
