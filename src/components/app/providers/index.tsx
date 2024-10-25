import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/shared/ui";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
			<Toaster />
		</ThemeProvider>
	);
};
