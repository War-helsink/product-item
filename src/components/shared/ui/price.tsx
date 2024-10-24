import clsx from "clsx";

export const Price: React.FC<
	{
		amount: string;
		className?: string;
		currencyCode: string;
		currencyCodeClassName?: string;
	} & React.ComponentProps<"p">
> = ({ amount, className, currencyCode = "USD", currencyCodeClassName }) => (
	<p suppressHydrationWarning={true} className={className}>
		{`${new Intl.NumberFormat(undefined, {
			style: "currency",
			currency: currencyCode,
			currencyDisplay: "narrowSymbol",
		}).format(Number.parseFloat(amount))}`}
		<span
			className={clsx("ml-1 inline", currencyCodeClassName)}
		>{`${currencyCode}`}</span>
	</p>
);
