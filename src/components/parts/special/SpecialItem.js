import {GiDutchBike} from "react-icons/gi";
import {Paragraph} from "../../ui/Paragraph";

export const SpecialItem = () => {
	return (
		<article className={"bg-highLight1 rounded-2xl"}>
			<div>
				<img src="./images/greek-salad.jpg"
				     alt="showing Greek Salad" className={"rounded-2xl"}/>
			</div>
			<div className={"py-8 px-6 flex flex-col gap-6"}>
				<div className={"flex flex-row justify-between"}>
					<h3 className={"text-lg font-bold"}>Greek Salad</h3>
					<Paragraph className={"text-highLight2 font-medium"}>$6.5</Paragraph>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<p role={"button"} className={"mt-8 flex flex-row gap-3 justify-start items-center font-sans font-bold text-highLight2"}>
					Order a Delivery
					<span className={"text-2xl"}><GiDutchBike/></span>
				</p>
			</div>
		</article>
	)
}
