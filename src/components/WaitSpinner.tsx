import { ImSpinner9 } from "react-icons/im";

interface IProps {
	fontSize?: string;
	margin?: string;
}

export const WaitSpinner = ({ fontSize = "4rem", margin = "1rem" }: IProps) => {
	return <ImSpinner9 className="animate-spin opacity-30" style={{ fontSize: fontSize, margin: margin }} />
}