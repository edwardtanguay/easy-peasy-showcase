import { useStoreState } from "../store/hooks"
import { NavLink } from "react-router-dom";

export const Nav = () => {
	const { showInfoPage } = useStoreState((state) => state.settingsModel);

	return <nav>
		<div className="md:hidden">
			<p>SMARTPHONE VIEW</p>
		</div>
		<div className="hidden md:block">
			<ul className="flex gap-4 bg-slate-500 px-4 py-2 content">
				<li><NavLink to="/welcome">Welcome</NavLink></li>
				<li><NavLink to="/settings">Settings</NavLink></li>
				<li><NavLink to="/flashcards">Flashcards</NavLink></li>
				<li><NavLink to="/mui">MUI</NavLink></li>
				<li><NavLink to="/learniverse">Learniverse</NavLink></li>
				{showInfoPage && (
					<li><NavLink to="/info">Info</NavLink></li>
				)}
			</ul>
		</div>
	</nav>;
};
