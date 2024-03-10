import {H1} from "../../ui/H1";
import {H2} from "../../ui/H2";
import {Paragraph} from "../../ui/Paragraph";

export const LittleAbout = ({children}) => {
	return (
		<div className={"flex flex-col gap-6 w-[70%]"}>
			<div>
				<H1 className={"text-highLight2"}>Little Lemon</H1>
				<H2 className={"text-highLight2 font-light"}>Chicago</H2>
			</div>
			<Paragraph className={"text-highLight2"}>Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua.</Paragraph>
			<Paragraph className={"text-highLight2"}>Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua.</Paragraph>
			{children}

		</div>
	)
}
