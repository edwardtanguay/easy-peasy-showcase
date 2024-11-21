import { Example } from "../components/Example";
import { useMouseIsInArea } from "../hooks/useMouseIsInArea";
import { useToggle } from "../hooks/useToggle";

export const PageHooks = () => {
	const [isOnline, toggleIsOnline] = useToggle(true);
	const [receiveNewsletter, toggleNewsletter] = useToggle();
	const [isLocked, toggleLocked] = useToggle();
	const mouseIsInArea = useMouseIsInArea();

	return (
		<>
			<Example title="useToggle">
				<div className="flex gap-6">
					<div className="flex gap-2 w-[6rem]">
						<button onClick={toggleIsOnline}>Online</button>
						<span>{isOnline ? "yes" : "no"}</span>
					</div>
					<div className="flex gap-2 w-[8rem]">
						<button onClick={toggleNewsletter}>Newsletter</button>
						<span>{receiveNewsletter ? "send" : "no"}</span>
					</div>
					<div className="flex gap-2 w-[7rem]">
						<label className="flex gap-2 cursor-pointer">
							<input type="checkbox" checked={isLocked} onChange={toggleLocked} />
							<span style={{ color: isLocked ? 'darkgreen' : 'darkred' }}>{isLocked ? "locked" : "not locked"}</span>
						</label>
					</div>
				</div>
			</Example>
			<Example title="useMouseInArea">
				<p>Is in area: {mouseIsInArea ? 'yes' : 'no'}</p>
			</Example>
		</>
	);
};
