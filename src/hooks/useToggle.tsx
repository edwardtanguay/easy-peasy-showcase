import { useState } from "react"

type UseToggle = [boolean, () => void];

export const useToggle = (): UseToggle => {
	const [isTrue, setIsTrue] = useState(false);

	const toggle = () => {
		setIsTrue(!isTrue);
	}

	return [isTrue, toggle]
}