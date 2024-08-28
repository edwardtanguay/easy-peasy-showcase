import { useStoreState, useStoreActions } from "../store/hooks"

export const PageGeneral = () => {

	const { isOnline } = useStoreState((state) => state.generalModel);
	const { toggleIsOnline } = useStoreActions((actions) => actions.generalModel);

	return (
		<>
			<div>Status: {isOnline ? "ONLINE" : "offline"}</div>
			<section className="mt-3">
				<button onClick={() => toggleIsOnline()}>toggle</button>
			</section>
		</>
	)
}