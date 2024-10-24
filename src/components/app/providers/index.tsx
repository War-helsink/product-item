import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./theme-provider";

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
