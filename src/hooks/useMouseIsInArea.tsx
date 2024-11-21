import { useEffect, useState } from "react"

type UseMouseInArea = [number, number, boolean];

export const useMouseIsInArea = (): UseMouseInArea => {
	const [mouseIsInArea, setMouseIsInArea] = useState(false);
	const [mouseY, setMouseY] = useState(0);
	const [mouseX, setMouseX] = useState(0);

	const updateMouseInfo = (e: MouseEvent) => {
		setMouseY(e.pageY);
		setMouseX(e.pageX);
		setMouseIsInArea(e.pageY < 200);
	}

	useEffect(() => {
		document.addEventListener('mousemove', updateMouseInfo)
	}, []);

	return [mouseY, mouseX, mouseIsInArea];
}