import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import { useEffect, useState } from "react";

function App() {
	const [HeroVisibility, setHeroVisibility] = useState(true);
	const [Hero2Visibility, setHero2Visibility] = useState(false);
	const [showHero2, setshowHero2] = useState(false);
	const [showHeros, setshowHeros] = useState(true);
	const heroLimit = 60;
	const hero2Limit = 170;
	useEffect(() => {
		window.addEventListener("scroll", () => {
			// Get the current scroll position
			const scrollPosition = window.scrollY;
			// console.log(showHeros);
			// show heros and fade in hero 2
			// fade out hero 1 fade in hero 2
			if (
				scrollPosition > heroLimit &&
				scrollPosition < hero2Limit &&
				showHeros === true
			) {
				console.log("fade out hero 1 fade in hero 2", showHeros);
				handleFadeOut(true);
				setHero2Visibility(true);
				// fade out hero 2 and fade in hero 1
			} else if (scrollPosition < heroLimit && Hero2Visibility) {
				console.log("fade out hero 2 fade in hero 1");
				setHero2Visibility(false);
				handleFadeOut(false);
			}
			// fade out hero 2 and don't render heros
			else if (scrollPosition > hero2Limit) {
				console.log("fade out hero 2 and dont render heros");
				setHero2Visibility(false);
				setTimeout(() => {
					setshowHeros(false);
				}, 500);
			}
			else if (scrollPosition < hero2Limit && showHeros===false) {
				console.log("show heros and fade in hero 2", showHeros);
				setshowHeros(true);
				setHero2Visibility(true);
				// setHero2Visibility(true);
			}

			// Log the scroll position to the console
			// console.log(`Scroll Position:${scrollPosition} pixels`);
		});
	});

	const handleFadeOut = (val: boolean) => {
		setHeroVisibility(!val);

		setTimeout(() => {
			setshowHero2(val);
		}, 500);
		// Set visibility to false to trigger the fade-out effect
		// Change the timeout value according to your transition duration
	};
	return (
		<>
			{/* <Sample/> */}
			<div className="fixed w-full top-0">
				<Navbar />
			</div>
			{showHeros && (
				<>
					{showHero2 ? (
						<div className="z-20">
							<div
								className={`transition-opacity duration-500 ease-in-out ${
									Hero2Visibility ? "opacity-100" : "opacity-0"
								}`}
							>
								<Hero2 />
							</div>
						</div>
					) : (
						<div className="z-20">
							<div
								className={`transition-opacity duration-500 ease-in-out ${
									HeroVisibility ? "opacity-100" : "opacity-0"
								}`}
							>
								<Hero />
							</div>
						</div>
					)}
				</>
			)}

			<div className="pt-20 -z-20">
				<img src="images/main_bg.jpg" alt="" className="mt-48" />
			</div>
			<Blog />
			<Projects />
			<Exprience />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
