import {HiStar} from "react-icons/hi2";
import {Paragraph} from "../../ui/Paragraph";

export const TestimonialItem = () => {
	return (
		<article className={"flex flex-col md:flex-row gap-6 md:w-[80%] justify-center items-center bg-highLight1 py-4 px-8 rounded-2xl"}>
			<img src="./images/profile.png" alt="A women profile" className={'w-[30%] rounded-full border-8 border-primary1'}/>
			<div className={"flex flex-col justify-center items-center md:justify-start md:items-start"}>
				<div className={"text-primary1 text-2xl flex flex-row mb-2"}>
					<HiStar/>
					<HiStar/>
					<HiStar/>
					<HiStar/>
					<HiStar/>
				</div>
				<h4 className={"font-serif font-bold text-xl sm:text-2xl md:text-3xl"}>Jones Maxi</h4>
				<Paragraph className={"text-highLight2 text-center md:text-left"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
			</div>
		</article>
	)
}
