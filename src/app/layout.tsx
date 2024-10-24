import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/app/providers";
import { Header } from "@/components/widgets/header";
import { Footer } from "@/components/widgets/footer";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Product Item",
	description: "Product Item",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-black dark:bg-neutral-900 dark:text-white`}
			>
				<Providers>
					<div className="flex flex-col w-dvw h-dvh">
						<Header />
						<main>{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
