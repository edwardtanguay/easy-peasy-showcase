import { useStoreState } from "../store/hooks"
import { NavLink } from "react-router-dom";

export const PageInfo = () => {
	const { showInfoPage } = useStoreState((state) => state.settingsModel);

	return (
		<>
			{showInfoPage ? (
				<p>This is the info page, only visible if setting is true.</p>
			) : (
				<p>Sorry, this page is currently not visible, go back to <NavLink to="/settings" className="underline">settings page</NavLink>.</p>
			)}
		</>
	)
}
