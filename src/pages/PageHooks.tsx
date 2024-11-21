import { useToggle } from "../hooks/useToggle";

export const PageHooks = () => {
	const [isOnline, toggleIsOnline] = useToggle();

	return (
		<>
			<div className="flex gap-2">
				<button onClick={toggleIsOnline}>Online</button>
				<span>{isOnline ? "yes" : "no"}</span>
			</div>
		</>
	);
};
