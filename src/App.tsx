import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import { useEffect, useRef, useState } from "react";
import { Pointer } from "lucide-react";

function App() {
	const [HeroVisibility, setHeroVisibility] = useState(true);
	const [Hero2Visibility, setHero2Visibility] = useState(false);
	const [Hero3Visibility, setHero3Visibility] = useState(false);
	const [showHero2, setshowHero2] = useState(false);
	const [showHero3, setshowHero3] = useState(false);
	const [showHeros, setshowHeros] = useState(true);
	const contentref = useRef<HTMLDivElement>(null);
	const contentPos = useRef<number>(0);
	const heroLimit = -93 * -1;
	const hero2Limit = -210 * -1;
	const hero3Limit = -317 * -1;
	console.log(heroLimit,hero2Limit,hero3Limit);
	
	useEffect(() => {
		const scrollUpdater = () => {
			// Get the current scroll position
			const scrollPosition = contentPos.current * -1;
			console.log(scrollPosition);
			
			// show heros and fade in hero 2
			// fade out hero 1 fade in hero 2
			if (
				scrollPosition > heroLimit &&
				scrollPosition < hero2Limit &&
				showHeros &&
				!Hero2Visibility
			) {
				console.log("fade out hero 1 fade in hero 2", showHeros);
				setHeroVisibility(false);
				setTimeout(() => {
					setshowHero2(true);
				}, 500);
				setHero2Visibility(true);
			}
			// fade out hero 2 and fade in hero 3 or just fade in hero 3
			else if (
				scrollPosition > hero2Limit &&
				scrollPosition < hero3Limit &&
				showHeros &&
				!Hero3Visibility
			) {
				// console.log("fade out hero 2 and fade in hero 3", showHeros);
				if (Hero2Visibility) {
					setHero2Visibility(false);
				}
				setTimeout(() => {
					setshowHero3(true);
				}, 500);
				setHero3Visibility(true);
			}
			// fade out hero 3 and don't render heros
			else if (scrollPosition > hero3Limit && Hero3Visibility) {
				// console.log("fade out hero 3 and don't render heros", showHeros);
				setHero3Visibility(false);
				setTimeout(() => {
					setshowHeros(false);
				}, 500);
			}
			// render heros
			else if (scrollPosition < hero3Limit && !showHeros) {
				setshowHeros(true);
			}
			// fade out hero 3 and fade in hero 1
			else if (scrollPosition < hero2Limit && Hero3Visibility) {
				// console.log("fade out hero 3 and fade in hero 1");
				setHero3Visibility(false);
				setHero2Visibility(true);
				setTimeout(() => {
					setshowHero3(false);
				}, 500);
			}
			// fade out hero 2 and fade in hero 1
			else if (scrollPosition < heroLimit && Hero2Visibility) {
				// console.log("fade out hero 2 fade in hero 1");
				setHero2Visibility(false);
				setHeroVisibility(true);
				setTimeout(() => {
					setshowHero2(false);
				}, 500);
			}
		};

		window.addEventListener("wheel", scrollUpdater);

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("wheel", scrollUpdater);
		};
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const content = contentref.current;
		const mover = (event: WheelEvent) => {
			if (content) {
				const deltaY = event.deltaY;

				// sets the direction of scrolling
				if (deltaY > 0 && contentPos.current > -1305) {
					contentPos.current -= 1;
				} else if (deltaY < 0 && contentPos.current < 90) {
					contentPos.current += 1;
				}
				content.style.transform = `translateY(${contentPos.current}px)`;

				// console.log(content.style.transform);
			}
		};
		window.addEventListener("wheel", mover);

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("wheel", mover);
		};
	}, [contentref]);

	return (
		<div className="overflow-hidden h-svh">
			<div className="fixed w-full top-0">
				<Navbar />
			</div>
			{/* {showHeros &&
				(showHero3 ? (
					<div>
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
				) : showHero2 ? (
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
				))} */}

			<div className="pt-40 -z-20 relative" ref={contentref}>
				<img src="images/main_bg.jpg" alt="" className="mt-48" />

				<div className="overflow-y-auto border">
					<Blog />
					<Projects />
					<Exprience />
					<Contact />
					<Footer />
				</div>
				
			</div>
		</div>
	);
}

export default App;
