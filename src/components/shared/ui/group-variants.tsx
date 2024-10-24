"use client";

import { cn } from "@/core/lib/utils";

export type Variant = {
	label: string;
	value: string;
	disabled?: boolean;
};

export interface GroupVariantsProps {
	title: string;
	items: readonly Variant[];
	onClick?: (value: Variant["value"]) => void;
	value?: Variant["value"];
	className?: string;
}

export const GroupVariants: React.FC<GroupVariantsProps> = ({
	title,
	items,
	onClick,
	className,
	value,
}) => {
	return (
		<div className={cn(className, "mb-8")}>
			<div className="mb-4 text-sm uppercase tracking-wide">{title}</div>
			<div className="flex flex-wrap gap-3">
				{items.map((item) => (
					<button
						key={item.value}
						type="button"
						aria-disabled={item.disabled}
						disabled={item.disabled}
						title={item.label}
						onClick={() => onClick?.(item.value)}
						className={cn(
							"flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900",
							{
								"cursor-default ring-2 ring-blue-600": value === item.value,
								"ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600 hover:dark:ring-blue-600": !(value === item.value) && !item.disabled,
								"relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700":
									item.disabled,
							},
						)}
					>
						{item.label}
					</button>
				))}
			</div>
		</div>
	);
};
