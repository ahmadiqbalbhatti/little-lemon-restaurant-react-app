import {NavBar} from "../components/NavBar";
import {HeroSection} from "../components/HeroSection";
import {SpecialSection} from "../components/SpecialSection";
import {TestimonialSection} from "../components/TestimonialSection";
import {AboutSection} from "../components/AboutSection";
import {Footer} from "../components/Footer";
import Copywrite from "../components/parts/common/Copywrite";

const Index = () => {
	return (
		<>
			<NavBar/>
			<main className={"mx-auto"}>
				<HeroSection/>
				<SpecialSection/>
				<TestimonialSection/>
				<AboutSection/>
			</main>
			<Footer/>
			<Copywrite/>
		</>
	)
}

export default Index;
