import React from 'react';
import {NavItem} from "../NavBar/NavItem";

const ResponsiveNav = ({isMenuOpen}) => {

	return (
		<>
			{isMenuOpen && (
				<nav className="lg:hidden bg-primary2 w-[80%] sm:w-auto sm:right-[8vw] rounded-2xl px-16 py-8 absolute mt-4">
					<ul className="flex flex-col space-y-2">
						<NavItem label={"Home"} link={"#"}/>
						<NavItem label={"About"} link={"#"}/>
						<NavItem label={"Menu"} link={"#"}/>
						<NavItem label={"Reservation"} link={"#"}/>
						<NavItem label={"Online Order"} link={"#"}/>
						<NavItem label={"Login"} link={"#"}/>
					</ul>
				</nav>
			)}
		</>
	);
};

export default ResponsiveNav;
