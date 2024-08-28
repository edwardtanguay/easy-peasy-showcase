import { useStoreState, useStoreActions } from "../store/hooks"

export const PageSettings = () => {

	const { isOnline } = useStoreState((state) => state.generalModel);
	const { toggleIsOnline } = useStoreActions((actions) => actions.generalModel);

	return (
		<section className="border w-[20rem] border-slate-500 rounded p-3">
			<div className="flex justify-between">
				<div>Status: {isOnline ? "ONLINE" : "offline"}</div>
				<button onClick={() => toggleIsOnline()}>toggle</button>
			</div>
		</section>
	)
}