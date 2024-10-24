import clsx from "clsx";
import Image from "next/image";

export interface GridImageProps extends React.ComponentProps<typeof Image> {
	src: string;
	alt: string;
	active?: boolean;
}

export const GridImage: React.FC<GridImageProps> = ({
	src,
	alt,
	active,
	...props
}) => {
	return (
		<div
			className={clsx(
				"flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 hover:dark:border-blue-600 dark:bg-black",
				{
					"border-2 border-blue-600": active,
					"border-neutral-200 dark:border-neutral-800": !active,
				},
			)}
		>
			<Image
				className={clsx("relative h-full w-full object-contain")}
				src={src}
				alt={alt}
				{...props}
			/>
		</div>
	);
};
