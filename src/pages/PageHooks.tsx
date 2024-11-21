import { useToggle } from "../hooks/useToggle";

export const PageHooks = () => {
	const [isOnline, toggleIsOnline] = useToggle(); // Tuple: [state, toggle function]

	return (
		<>
			<div>
				<button onClick={toggleIsOnline}>Toggle Online</button>
				<span>{isOnline ? "yes" : "no"}</span>
			</div>
		</>
	);
};
