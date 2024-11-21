import { useState } from "react"

export const useMouseInArea = () => {
	const [mouseInArea] = useState(false);

	return mouseInArea;
}