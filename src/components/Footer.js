import FooterSectionItem from "./parts/common/FooterSectionItem";

export const Footer = () => {
	return (
		<footer className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-12 lg:px-16 xl:px-32 py-16 w-full bg-primary2"}>
			<div className={"px-8 sm:px-0 pb-4 sm:pb-0"}>
				<img src="images/LittleLemon_footerLogo.png" width={"200px"}
				     alt="Littel lemon white logo - monochrome logo"/>
			</div>

			<FooterSectionItem itemTitle={"Quick Links"}>
				<ul>
					<li>About</li>
					<li>Menu</li>
					<li>Reservation</li>
					<li>Online Order</li>
					<li>Login</li>
				</ul>
			</FooterSectionItem>

			<FooterSectionItem itemTitle={"Contact Us"}>
				<div>
					<p>Moh. Jattuwakal, Gujrat, Pakistan</p>
					<p>+92 342 126277</p>
					<p>conact@littlelemon.com</p>
				</div>
			</FooterSectionItem>

			<FooterSectionItem itemTitle={"Social Links"}>
				<div>
					<p><span>FB</span> @littlelemonresturent</p>
					<p><span>IG</span> @littlelemonresturent</p>
					<p><span>Pin</span> @littlelemonresturent</p>
				</div>
			</FooterSectionItem>
		</footer>
	)
}
