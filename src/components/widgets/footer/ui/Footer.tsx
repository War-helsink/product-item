import { Container } from "@/components/shared/ui";

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const copyrightName = "STORE";

	return (
		<footer className="text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 py-6 dark:border-neutral-700">
			<Container>
				<div className="mx-auto flex flex-col items-center gap-1 justify-center w-full max-w-7xl px-4 md:flex-row md:gap-0 md:px-4">
					<p>
						&copy; {currentYear} {copyrightName}
						{copyrightName.length && !copyrightName.endsWith(".") ? "." : ""}{" "}
						All rights reserved.
					</p>
					<hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
					<p>View the source</p>
				</div>
			</Container>
		</footer>
	);
};
