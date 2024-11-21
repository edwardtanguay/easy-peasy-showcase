import { useState } from "react"

export const useToggle = () => {
	const [isTrue, setIsTrue] = useState(true);

	const toggle = () => {
		setIsTrue(!isTrue);
	}

	return [isTrue, toggle]
}