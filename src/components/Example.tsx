interface IProps {
	children: React.ReactNode;
}
export const Example = ({ children }: IProps) => {
	return (
		<fieldset>
			<legend>TEST</legend>
			{children}
		</fieldset>
	)
}