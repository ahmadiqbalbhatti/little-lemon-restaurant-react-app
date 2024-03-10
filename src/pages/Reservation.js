import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";
import Copywrite from "../components/parts/common/Copywrite";
import ReservationForm from "../components/ui/ReservationForm";
import {H2} from "../components/ui/H2";
import {H1} from "../components/ui/H1";

const Reservation = () => {
	return (
		<>
			<NavBar/>

			<main
				className={"container mx-auto px-8 md:px-12 lg:px-16 xl:px-32 py-24 "}>

				<div className={"pb-16"}>
					<H1 className={"text-center"}>
						Reservation
					</H1>
					<H2 className={"text-center text-highLight2"}>
						Confirm your Table
					</H2>
				</div>

				<div className={"w-full md:w-[50%] mx-auto"}>
					<ReservationForm/>
				</div>

			</main>

			<Footer/>
			<Copywrite/>
		</>
	)
}

export default Reservation;
