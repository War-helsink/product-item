import type { ReviewType } from "@/core/types";

export interface ReviewsProps {
	reviews: ReviewType[];
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
	return (
		<div className="w-full flex flex-col gap-4">
			{reviews.map((review) => {
				return (
					<div
						key={review.name}
						className="w-full p-4 rounded-lg border border-neutral-200 dark:border-neutral-800"
					>
						<div className="w-full flex">
							<span className="font-bold">{review.name}</span>
							<span className="ml-auto text-xs leading-tight dark:text-white/[60%]">
								{review.date}
							</span>
						</div>
						<span className="ml-auto text-xs leading-tight dark:text-white/[60%]">
							Description
						</span>
						<p className="text-sm">{review.description}</p>
					</div>
				);
			})}
		</div>
	);
};
