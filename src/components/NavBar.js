import {useState} from "react";
import {NavItem} from "./parts/NavBar/NavItem";
import ResponsiveNav from "./parts/common/ResponsiveNav";
import {Link} from "react-router-dom";

export const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<header className={"px-8 md:px-12 lg:px-16 xl:px-32 py-5 mx-auto relative z-10"}>
			<div className={"flex flex-row justify-between items-center"}>
				<Link to={"/"}>
					<img src="./logo.png" alt="Logo"/>
				</Link>

				<nav className="bg-gray-800 p-4 font-medium text-lg">
					<div className="container mx-auto flex justify-between items-center">
						<ul
							className={`hidden lg:flex space-x-4`}>
							<NavItem label={"Home"} link={"/"}/>
							<NavItem label={"About"} link={"#"}/>
							<NavItem label={"Menu"} link={"#"}/>
							<NavItem label={"Reservation"} link={"reservation"}/>
							<NavItem label={"Online Order"} link={"#"}/>
							<NavItem label={"Login"} link={"#"}/>
						</ul>
						<div className="lg:hidden">
							{/* Mobile menu toggle button */}
							<button onClick={toggleMenu}
							        className="text-white focus:outline-none">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
								     fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round"
									      strokeWidth="2"
									      d="M4 6h16M4 12h16M4 18h16"/>
								</svg>
							</button>
						</div>
					</div>
				</nav>
			</div>

			<ResponsiveNav isMenuOpen={isMenuOpen}/>
		</header>)
}
