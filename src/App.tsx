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
	const content2ref = useRef<HTMLDivElement>(null);
	const [scrollUp, setscrollUp] = useState(true);
	const [allowContentScrollDown, setallowContentScrollDown] = useState(false);
	const contentPos = useRef<number>(0);
	const heroLimit = -93 * -1;
	const hero2Limit = -210 * -1;
	const hero3Limit = -317 * -1;

	// effects and function to handle the fade effects
	useEffect(() => {
		const scrollUpdater = () => {
			// Get the current scroll position
			const scrollPosition = contentPos.current * -1;

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

	// effects the movement of the planet
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const content = contentref.current;
		const mover = (event: WheelEvent) => {
			if (content) {
				const deltaY = event.deltaY;
				let scrollSpeed = 1;
				if (contentPos.current * -1 > hero3Limit) {
					scrollSpeed = 2;
				}

				// sets the direction of scrolling
				if (deltaY > 0 && contentPos.current > -1305) {
					allowContentScrollDown && setallowContentScrollDown(false)
					contentPos.current -= scrollSpeed;
				} else if (deltaY < 0 && contentPos.current < 90 && scrollUp) {
					contentPos.current += scrollSpeed;
				}
				else if(deltaY > 0 && contentPos.current < -1305){
					!allowContentScrollDown && setallowContentScrollDown(true)
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
	}, [contentref, scrollUp,allowContentScrollDown]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const content = content2ref.current;

		const scrollHandler = () => {
			if (content) {
				// if the scroller is at top
				if (content.scrollTop === 0) {
					// logic to reduce redundant state update
					setscrollUp(true);
				} else {
					// logic to reduce redundant state update
					setscrollUp(false);
				}
			}
		};

		if (content) {
			content.addEventListener("scroll", scrollHandler);
		}
		return () => {
			if (content) {
				content.removeEventListener("scroll", scrollHandler);
			}
		};
	}, [content2ref]);

	return (
		<div className="h-svh overflow-hidden">
			<div className="fixed w-full top-0 z-10">
				<Navbar />
			</div>
			{showHeros &&
				(showHero3 ? (
					<div>
						<div className="z-20 relative">
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
					<div className="z-20 relative">
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
				))}

			<div className="pt-40" ref={contentref}>
				<img src="images/main_bg.png" alt="" className="mt-48" />

				<div
					className={`${
						allowContentScrollDown ? "overflow-y-auto" : "overflow-hidden"
					} h-svh`}
					ref={content2ref}
				>
					<Blog />
					<Projects />
					<Exprience />
					<Contact />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
