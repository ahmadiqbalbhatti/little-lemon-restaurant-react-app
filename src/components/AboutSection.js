import {LittleAbout} from "./parts/common/LittleAbout";
import {PrimaryButton} from "./ui/PrimaryButton";

export const AboutSection = () => {
	return (
		<section
			className={"flex flex-col md:flex-row px-8 md:px-12 lg:px-16 xl:px-32 justify-between items-center pb-16"}>
			<LittleAbout>
				<PrimaryButton>
					Read More
				</PrimaryButton>
			</LittleAbout>
			<div className={"w-[100%] flex flex-col items-end"}>
				<img src="about-images.jpg"
				     alt="Mario and Adrian A. are cooking meal for thier customers."
				     className={"w-fit"}
				/>
			</div>

		</section>
	)
}
