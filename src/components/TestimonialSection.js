import {TestimonialItem} from "./parts/testimonial/TestimonialItem";
import {H2} from "./ui/H2";

export const TestimonialSection = () => {
	return (
		<section className={"flex flex-col my-16 px-8  md:px-12 lg:px-16 xl:px-32 py-24 justify-center items-center bg-primary2"}>
			<H2 className={"mb-8 text-primary1"}>Testimonial</H2>
			<div className={"flex flex-col md:flex-row gap-6"}>
				<TestimonialItem/>
				<TestimonialItem/>
			</div>
		</section>
	)
}
