import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";
import Copywrite from "../components/parts/common/Copywrite";
import {H1} from "../components/ui/H1";
import {HiCheckCircle} from "react-icons/hi";
import {H2} from "../components/ui/H2";
import {Link} from "react-router-dom";

const Confirm = () => {

	return (
		<>
			<NavBar/>

			<main
				className={"container mx-auto px-8 md:px-12 lg:px-16 xl:px-32 py-24  text-center"}>

				<div
					className={"w-full md:w-[50%] h-fit mx-auto flex flex-col justify-center items-center gap-6"}>
					<H1>Reservation Confirmed</H1>
					<HiCheckCircle
						className={"text-[16rem] bg-primary1 rounded-full text-primary2"}/>

					<H2 className={"text-primary2"}>Please wait while cooking...</H2>

					<Link

						className={"border-2 border-primary1 bg-primary1 hover:bg-highLight1 py-3 px-8 rounded-2xl transition-colors duration-300 w-full text-center"}
						to={"/"}>Back Home
					</Link>

				</div>

			</main>

			<Footer/>
			<Copywrite/>
		</>
	)
}

export default Confirm;
