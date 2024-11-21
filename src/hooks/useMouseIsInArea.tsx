import { useEffect, useState } from "react";

type UseMouseInArea = [number, number, boolean];

export const useMouseIsInArea = (ref: React.RefObject<HTMLDivElement>): UseMouseInArea => {
	const [mouseIsInArea, setMouseIsInArea] = useState(false);
	const [mouseY, setMouseY] = useState(0);
	const [mouseX, setMouseX] = useState(0);

	const updateMouseInfo = (e: MouseEvent) => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			const isInArea =
				e.clientX >= rect.left &&
				e.clientX <= rect.right &&
				e.clientY >= rect.top &&
				e.clientY <= rect.bottom;

			setMouseX(e.clientX - rect.left);
			setMouseY(e.clientY - rect.top);
			setMouseIsInArea(isInArea);
		}
	};

	useEffect(() => {
		document.addEventListener("mousemove", updateMouseInfo);

		return () => {
			document.removeEventListener("mousemove", updateMouseInfo); // Cleanup listener
		};
	}, [ref]);

	return [mouseY, mouseX, mouseIsInArea];
};
