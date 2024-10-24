import { LogoIcon } from "./logo-icon";

export const LogoSquare: React.FC = () => {
	return (
		<div className="h-[35px] w-[35px] rounded-xl flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
			<LogoIcon className="h-[16px] w-[16px]" />
		</div>
	);
};
