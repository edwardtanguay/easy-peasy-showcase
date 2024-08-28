import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-4 bg-slate-500 px-4 py-2 content">
			<li><NavLink to="/general">General</NavLink></li>
			<li><NavLink to="/flashcards">Flashcards</NavLink></li>
			<li><NavLink to="/learniverse">Learniverse</NavLink></li>
		</ul>
	</nav>;
};
