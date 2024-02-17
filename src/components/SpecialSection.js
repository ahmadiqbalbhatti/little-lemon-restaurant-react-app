import {SpecialItem} from "./parts/special/SpecialItem";

export const SpecialSection = () => {
	return (
		<section>
			<div>
				<h2>This weeks specials!</h2>
				<button>Online Order</button>
			</div>

			<div>
				<SpecialItem/>
				<SpecialItem/>
				<SpecialItem/>
			</div>
		</section>
	)
}
