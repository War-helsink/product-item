import Link from "next/link";
import { ThemeToggle } from "@/components/features/theme";
import { CartButton } from "@/components/features/cart";
import { Container, Button, LogoSquare } from "@/components/shared/ui";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Header: React.FC = () => {
	return (
		<header className="border-b border-solid bg-white dark:bg-black">
			<Container className="flex items-center justify-between py-1">
				<Link
					href="/"
					prefetch={true}
					className="mr-2 flex items-center"
				>
					<LogoSquare />
					<div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
						STORE
					</div>
				</Link>

				<div className="flex items-center gap-3">
					<Link
						href="https://github.com/War-helsink/product-item"
						target="_blank"
					>
						<Button variant="outline" size="icon">
							<GitHubLogoIcon />
						</Button>
					</Link>

					<ThemeToggle />

					<CartButton />
				</div>
			</Container>
		</header>
	);
};
