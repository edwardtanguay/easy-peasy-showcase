import { useRef } from "react";
import { Example } from "../components/Example";
import { useMouseIsInArea } from "../hooks/useMouseIsInArea";
import { useToggle } from "../hooks/useToggle";

export const PageHooks = () => {
	const [isOnline, toggleIsOnline] = useToggle(true);
	const [receiveNewsletter, toggleNewsletter] = useToggle();
	const [isLocked, toggleLocked] = useToggle();
	const divRef = useRef<HTMLDivElement>(null);
	const [y, x, isInArea] = useMouseIsInArea(divRef);
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
				<div>
					<div
						ref={divRef}
						style={{
							width: "300px",
							height: "200px",
							backgroundColor: isInArea ? "lightgreen" : "lightcoral",
							position: "relative",
						}}
					>
						<p>Mouse Position: X: {x.toFixed(0)}, Y: {y.toFixed(0)}</p>
						<p>Mouse is {isInArea ? "inside" : "outside"} the area.</p>
					</div>
				</div>
			</Example>
		</>
	);
};
