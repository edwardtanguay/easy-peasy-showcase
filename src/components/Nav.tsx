import { useStoreState } from "../store/hooks"
import { NavLink } from "react-router-dom";

const menuItems = [
	{
		idCode: 'welcome',
		title: 'Welcome'
	},
	{
		idCode: 'settings',
		title: 'Settings'
	},
	{
		idCode: 'flashcards',
		title: 'Flashcards'
	},
	{
		idCode: 'mui',
		title: 'MUI'
	},
	{
		idCode: 'learniverse',
		title: 'Learniverse'
	},
	{
		idCode: 'info',
		title: 'Info'
	}
]

export const Nav = () => {
	const { showInfoPage } = useStoreState((state) => state.settingsModel);

	return <nav>
		<div className="md:hidden bg-slate-500 px-4 py-2 content">
			<p>SMARTPHONE VIEW</p>
		</div>
		<div className="hidden md:block bg-slate-500 px-4 py-2 content">
			<ul className="flex gap-4">
				{menuItems.map((menuItem, index) => {
					return (
						<>
							{((menuItem.idCode !== 'info' || (menuItem.idCode === 'info' && showInfoPage)) && (
								<li key={index}><NavLink to={menuItem.idCode}>{menuItem.title}</NavLink></li>
							))}
						</>
					)
				})}
			</ul>
		</div>
	</nav>;
};
