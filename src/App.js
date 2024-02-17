import {Helmet} from 'react-helmet';

import {NavBar} from "./components/NavBar";
import {HeroSection} from "./components/HeroSection";
import {SpecialSection} from "./components/SpecialSection";
import {TestimonialSection} from "./components/TestimonialSection";
import {AboutSection} from "./components/AboutSection";
import {Footer} from "./components/Footer";

function App() {
	return (
		<>
			<Helmet>
				<title>Little Lemon Restaurant - Known for Uniqueness</title>
				<meta property="og:title" content="Little Lemon - Restaurant"/>
				<meta property="og:description"
				      content="Little lemon restaurant is known for unique taste and tailord serving as per demand."/>
				<meta property="og:image" content="logo.png"/>
				<meta property="og:url" content="http://localhost:3000"/>
			</Helmet>
			<NavBar/>
			<HeroSection/>
			<SpecialSection/>
			<TestimonialSection/>
			<AboutSection/>
			<Footer/>
		</>
	);
}

export default App;
