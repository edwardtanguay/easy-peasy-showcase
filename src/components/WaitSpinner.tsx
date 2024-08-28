import { ImSpinner9 } from "react-icons/im";

interface IProps {
	fontSize?: string;
	margin?: string;
	opacity?: string;
}

export const WaitSpinner = ({ fontSize = "4rem", margin = "1rem", opacity = "0.3" }: IProps) => {
	return <ImSpinner9 className="animate-spin" style={{ fontSize, margin, opacity }} />
}