import {Link} from "react-router-dom";

export const NavItem = ({link, label}) => {
	return (<Link to={link} className={"py-2 px-4"}>
		<li
			className={"hover:text-primary1 text-highLight1 lg:text-primary2 transition-colors duration-300"}>
			{label}
		</li>
	</Link>)
}
