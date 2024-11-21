interface IProps {
	children: React.ReactNode;
}
export const Example = ({ children }: IProps) => {
	return (
		<fieldset className="border border-slate-500 px-4 pt-2 pb-3 w-fit rounded">
			<legend className=" text-xs opacity-60">TEST</legend>
			{children}
		</fieldset>
	)
}