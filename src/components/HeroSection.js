import {H1} from "./ui/H1";
import {H2} from "./ui/H2";
import {Paragraph} from "./ui/Paragraph";
import {PrimaryButton} from "./ui/PrimaryButton";

export const HeroSection = () => {
	return (
		<section
			className={"flex flex-col md:flex-row mx-auto bg-primary2 md:h-[80vh] px-8 md:px-12 lg:px-16 xl:px-32 py-5 justify-between items-center relative"}>
			<div className={"w-auto md:w-[40%] flex flex-col gap-6 my-[3rem]"}>
				<div>
					<H1>Little Lemon</H1>
					<H2>Chicago</H2>
				</div>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Paragraph>

				<PrimaryButton>
					Reserve a Table
				</PrimaryButton>

			</div>

			<div className={"z-40 overflow-visible "}>
				<img src="./images/hero-image.png"
				     alt="Hero section in which a chef in sprinkling peper."
				     className={"md:mt-52"}/>
			</div>
		</section>
	)
}
