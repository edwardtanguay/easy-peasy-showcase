import { useState } from "react"

type UseToggle = [boolean, () => void];

export const useToggle = (defaultIsTrue: boolean = false): UseToggle => {
	const [isTrue, setIsTrue] = useState(defaultIsTrue);

	const toggle = () => {
		setIsTrue(!isTrue);
	}

	return [isTrue, toggle]
}