import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import { useEffect, useState } from "react";

function App() {
	const [HeroVisibility, setHeroVisibility] = useState(true);
	const [Hero2Visibility, setHero2Visibility] = useState(false);
	const [Hero3Visibility, setHero3Visibility] = useState(false);
	const [showHero2, setshowHero2] = useState(false);
	const [showHero3, setshowHero3] = useState(false);
	const [showHeros, setshowHeros] = useState(true);
	const heroLimit = 60;
	const hero2Limit = 150;
	const hero3Limit = 200;
	useEffect(() => {
		const scrollUpdater = () => {
			// Get the current scroll position
			const scrollPosition = window.scrollY;

			// show heros and fade in hero 2
			// fade out hero 1 fade in hero 2
			if (
				(scrollPosition > heroLimit) &&
				(scrollPosition < hero2Limit) &&
				(showHeros)
			) {
				console.log("fade out hero 1 fade in hero 2", HeroVisibility);
				setHeroVisibility(false)
				setTimeout(() => {
					setshowHero2(true);
				}, 500);
				setHero2Visibility(true);
				
			} 
			// fade out hero 2 and fade in hero 3
			else if (
				(scrollPosition > hero2Limit) &&
				(scrollPosition < hero3Limit) &&
				(showHeros)
			) {
				console.log("fade out hero 2 and fade in hero 3", showHeros);
				setHero2Visibility(false);
				setTimeout(async() => {
					setshowHero3(true);
				}, 500);
				setHero3Visibility(true)
			}
			// fade out hero 3 and don't render heros
			else if (
				(scrollPosition > hero3Limit) 
			) {
				console.log("fade out hero 3 and don't render heros", showHeros);
				setHero3Visibility(false);
				setTimeout(async() => {
					setshowHeros(false);
				}, 500);
			}
			// render heros and fade in hero 3
			else if (
				(scrollPosition > hero2Limit) &&
				(scrollPosition < hero3Limit) &&
				(!showHeros)
			) {
				console.log("render heros and fade in hero 3", showHeros);
				setshowHeros(true)
				setHero3Visibility(true)
			}

			// // fade out hero 2 and fade in hero 1
			// else if ((scrollPosition < heroLimit) && Hero2Visibility) {
			// 	console.log("fade out hero 2 fade in hero 1");
			// 	setHero2Visibility(false);
			// 	setHeroVisibility(true);
			// 	setTimeout(() => {
			// 		setshowHero2(false);
			// 	}, 500);
			// }
			
			// else if (scrollPosition < hero2Limit && showHeros===false) {
			// 	console.log("show heros and fade in hero 2", showHeros);
			// 	setTimeout(async() => {
			// 		setshowHeros(true);
			// 	}, 500);
			// 	setHero2Visibility(true);
			// 	// setHero2Visibility(true);
			// }

			// Log the scroll position to the console
			// console.log(`Scroll Position:${scrollPosition} pixels`);
		}
		window.addEventListener("scroll",scrollUpdater);

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("click", scrollUpdater);
		};
	});

	return (
		<>
			{/* <Sample/> */}
			<div className="fixed w-full top-0">
				<Navbar />
			</div>
			{showHeros && (
					showHero3?<div>
						<div className="z-20">
							<div
								className={`transition-opacity duration-500 ease-in-out ${
									Hero3Visibility ? "opacity-100" : "opacity-0"
								}`}
							>
								<Hero3 />
							</div>
						</div>
					</div>
					:
					showHero2 ? (
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
					)
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
