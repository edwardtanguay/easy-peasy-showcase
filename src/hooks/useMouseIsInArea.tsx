import { useEffect, useState } from "react"

type UseMouseInArea = boolean;

export const useMouseIsInArea = (): UseMouseInArea => {
	const [mouseIsInArea, setMouseIsInArea] = useState(false);

	useEffect(() => {
		const rand = Math.floor(Math.random() * 2 + 1);
		setMouseIsInArea(rand === 1)
	}, []);

	return mouseIsInArea;
}