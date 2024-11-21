import { Example } from "../components/Example";
import { useToggle } from "../hooks/useToggle";

export const PageHooks = () => {
	const [isOnline, toggleIsOnline] = useToggle(true);
	const [receiveNewsletter, toggleNewsletter] = useToggle();

	return (
		<>
			<Example title="useToggle">
				<div className="flex gap-6">
					<div className="flex gap-2">
						<button onClick={toggleIsOnline}>Online</button>
						<span>{isOnline ? "yes" : "no"}</span>
					</div>
					<div className="flex gap-2">
						<button onClick={toggleNewsletter}>Newsletter</button>
						<span>{receiveNewsletter ? "send" : "do not send"}</span>
					</div>
				</div>
			</Example>
		</>
	);
};
