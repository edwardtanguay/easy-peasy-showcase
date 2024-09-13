import { useStoreState } from "../store/hooks"
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import * as tools from '../tools';

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

	const location = useLocation();
	const pageIdCode = tools.chopLeft(location.pathname, '/');
	const menuItem = menuItems.find(m => m.idCode === pageIdCode);

	return (
		<>
			{menuItem && (
				<nav>
					<div className="md:hidden bg-slate-500 px-4 py-2 content">
						<div className="flex justify-between">
											<p><NavLink to={menuItem.idCode}>{menuItem.title}</NavLink></p>
							<p>[=]</p>
						</div>
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
				</nav>
			)}
		</>
	);
};
