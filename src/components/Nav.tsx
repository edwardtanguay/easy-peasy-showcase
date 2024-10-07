import { useTypedStoreState } from "../store/hooks"
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import * as tools from '../tools';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

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
		idCode: 'responsive',
		title: 'Responsive'
	},
	{
		idCode: 'stateTest',
		title: 'State Test'
	},
	{
		idCode: 'prop-test',
		title: 'Prop Test'
	},
	{
		idCode: 'about',
		title: 'About'
	},
	{
		idCode: 'info',
		title: 'Info'
	}
]

export const Nav = () => {
	const { showInfoPage } = useTypedStoreState((state) => state.settingsModel);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const location = useLocation();
	const pageIdCode = tools.chopLeft(location.pathname, '/');
	const currentMenuItem = menuItems.find(m => m.idCode === pageIdCode);

	const handleMenuToggle = () => {
		setShowMobileMenu(!showMobileMenu)
	}

	return (
		<>
			{currentMenuItem && (
				<nav>
					<div className="md:hidden bg-slate-500 px-4 py-2 content">
						<div className="flex justify-between">
							<p><NavLink to={currentMenuItem.idCode}>{currentMenuItem.title}</NavLink></p>
							<p className="mt-1 cursor-pointer" onClick={handleMenuToggle}><GiHamburgerMenu /></p>
						</div>
						{showMobileMenu && (
							<div>
								{menuItems.map((menuItem, index) => {
									return (
										<div key={index}>
											{(((menuItem.idCode !== 'info' && menuItem.idCode !== currentMenuItem.idCode) || (menuItem.idCode === 'info' && showInfoPage)) && (
												<div key={index}><NavLink to={menuItem.idCode} onClick={() => setShowMobileMenu(false)}>{menuItem.title}</NavLink></div>
											))}
										</div>
									)
								})}
							</div>
						)}
					</div>
					<div className="hidden md:block bg-slate-500 px-4 py-2 content">
						<ul className="flex gap-4">
							{menuItems.map((menuItem, index) => {
								return (
									<div key={index}>
										{((menuItem.idCode !== 'info' || (menuItem.idCode === 'info' && showInfoPage)) && (
											<li key={index}><NavLink to={menuItem.idCode}>{menuItem.title}</NavLink></li>
										))}
									</div>
								)
							})}
						</ul>
					</div>
				</nav>
			)}
		</>
	);
};
