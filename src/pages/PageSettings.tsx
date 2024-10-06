import { useTypedStoreState, useTypedStoreActions } from "../store/hooks"

export const PageSettings = () => {

	const { showInfoPage } = useTypedStoreState((state) => state.settingsModel);
	const { toggleIsOnline } = useTypedStoreActions((actions) => actions.settingsModel);

	return (
		<section className="border w-[20rem] border-slate-500 rounded p-3">
			<div className="flex justify-between">
				<div>Show info page: <span className="font-semibold">{showInfoPage ? "YES" : "no"}</span></div>
				<button onClick={() => toggleIsOnline()}>toggle</button>
			</div>
		</section>
	)
}