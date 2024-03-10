import {SpecialItem} from "./parts/special/SpecialItem";
import {PrimaryButton} from "./ui/PrimaryButton";
import {H2} from "./ui/H2";

export const SpecialSection = () => {
	return (
		<section className={"flex flex-col px-8  md:px-12 lg:px-16 xl:px-32 py-5"}>
			<div className={"flex flex-row justify-between items-center md:mt-48 mb-16"}>
				<H2 className={"text-highLight2"}>This weeks specials!</H2>
				<PrimaryButton>Online Order</PrimaryButton>
			</div>

			<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"}>
				<SpecialItem/>
				<SpecialItem/>
				<SpecialItem/>
			</div>
		</section>
	)
}
