import { useToggle } from "../hooks/useToggle";

export const PageHooks = () => {
	const [isOnline, toggleIsOnline] = useToggle();

	return (
		<>
			<div className="flex gap-3">
				<button onClick={toggleIsOnline}>Toggle Online</button>
				<span>{isOnline ? "yes" : "no"}</span>
			</div>
		</>
	);
};
