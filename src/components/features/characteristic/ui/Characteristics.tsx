import { cn } from "@/core/lib/utils";

import type { CharacteristicType } from "@/core/types";

export interface CharacteristicsProps {
	id: number;
	name: string;
	characteristics: CharacteristicType[];
	className?: string;
}

export const Characteristics: React.FC<CharacteristicsProps> = ({
	id,
	name,
	characteristics,
	className,
}) => {
	return (
		<div
			className={cn(
				"h-full w-full",
				className,
			)}
		>
			<h1 className="text-xl font-medium mb-4">{`${name} (${id})`}</h1>
			<div className="flex flex-col gap-4">
				{characteristics.map((characteristic) => (
					<div
						key={characteristic.label}
						className="w-full grid grid-cols-2 gap-4 text-sm sm:text-base"
					>
						<div className="relative before:content-none sm:before:content-[''] before:absolute before:w-full before:left-0 before:bottom-[6px] before:border-b before:border-dotted">
							<span className="relative pr-4 bg-white dark:bg-black">
								{characteristic.label}
							</span>
						</div>
						<div>{characteristic.value}</div>
					</div>
				))}
			</div>
		</div>
	);
};
