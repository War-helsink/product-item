"use client";

import { cn } from "@/core/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/core/hooks/use-toast";
import { z } from "zod";

import type { ReviewType } from "@/core/types";
import {
	Input,
	Button,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/shared/ui";

export interface ReviewsProps {
	className?: string;
	reviews: ReviewType[];
}

const ReviewSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	description: z.string().min(2, {
		message: "Description must be at least 2 characters.",
	}),
});

export const Reviews: React.FC<ReviewsProps> = ({ reviews, className }) => {
	const form = useForm<z.infer<typeof ReviewSchema>>({
		resolver: zodResolver(ReviewSchema),
		defaultValues: {
			name: "",
			description: "",
		},
	});

	function onSubmit() {
		toast({
			title: "Feedback successfully left.",
		});
	}

	return (
		<div className={cn("h-full w-full", className)}>
			<h1 className="text-xl font-medium mb-4">Reviews</h1>
			<div className="w-full flex flex-col gap-4 mb-8">
				{reviews.map((review) => {
					return (
						<div
							key={review.name}
							className="w-full p-4 rounded-lg border border-neutral-200 dark:border-neutral-800"
						>
							<div className="w-full flex">
								<span className="font-bold">{review.name}</span>
								<span className="ml-auto text-xs leading-tight opacity-60">
									{review.date}
								</span>
							</div>
							<span className="ml-auto text-xs leading-tight opacity-60">
								Description
							</span>
							<p className="text-sm">{review.description}</p>
						</div>
					);
				})}
			</div>

			<h1 className="text-xl font-medium mb-4">Leave a comment</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="name" {...field} />
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input placeholder="Description" {...field} />
								</FormControl>
								<FormDescription>This is your review.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
};
