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

function App() {
	// states to handle Hero visibilities (opasity)
	const [HeroVisibility, setHeroVisibility] = useState(true);
	const [Hero2Visibility, setHero2Visibility] = useState(false);
	const [Hero3Visibility, setHero3Visibility] = useState(false);

	// state to handle the render of hero rendering block
	const [renderHeros, setshowHeros] = useState(true);

	// states to handle the rendering of heros
	const [renderHero1, setRenderHero1] = useState(true);
	const [renderHero2, setRenderHero2] = useState(false);
	const [renderHero3, setRenderHero3] = useState(false);

	// refs for content and content block to capture the wheel events
	const contentBlockRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const blogsRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	// state to control the content block scrolling
	const [allowContentBlockScrollUp, setAllowContentBlockScrollUp] =
		useState(true);

	// state to control the content scrolling
	const [allowContentScrollDown, setAllowContentScrollDown] = useState(false);

	// hero display limits. making them positive for convinience
	const heroDisplayLimit = 10;
	const hero2DisplayLimit = 20;
	const hero3DisplayLimit = 50;
	const windowHieght = window.innerHeight;

	const scrollHandler = (scrollPer: number | null = null) => {
		console.log(windowHieght);
		window?.scrollTo({
			top: (scrollPer !== null ? scrollPer * windowHieght : windowHieght),
			left: 0,
			behavior: "smooth", // You can also use 'auto' or 'instant'
		});
	};

	const navbarController = (navigateTo: string) => {
		// updating transform of content Block to stimulate scrolling
		// setTransition(true);
		const blogHeight = blogsRef.current?.getBoundingClientRect().height;
		const projectHeight = projectsRef.current?.getBoundingClientRect().height;
		// const experienceHeight = experienceRef.current?.getBoundingClientRect().height;
		// const contactHeight = contactRef.current?.getBoundingClientRect().height;
		const contentHeight = contentRef.current?.scrollHeight;
		switch (navigateTo) {
			case "skills":
				!renderHeros && setshowHeros(true);
				!allowContentBlockScrollUp && setAllowContentBlockScrollUp(true);
				scrollHandler(0.30);
				break;

			case "home":
				scrollHandler(0.0);
				!renderHeros && setshowHeros(true);
				!allowContentBlockScrollUp && setAllowContentBlockScrollUp(true);
				setHero3Visibility(false);
				setTimeout(() => {
					setRenderHero3(false);
				}, 500);
				setRenderHero2(false);
				setHeroVisibility(true);
				break;

			case "blog":
				// to avoid displaying hero 1 or hero 2 when we directly skip to blog and than go back to skills
				setHeroVisibility(false);
				setHero2Visibility(false);
				scrollHandler(null);
				// setshowHeros(false);
				contentRef.current?.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth", // or 'auto' for instant scrolling
				});
				setAllowContentScrollDown(true);
				break;

			case "projects": {
				setHeroVisibility(false);
				setHero2Visibility(false);
				scrollHandler();
				setshowHeros(false);
				const scroll = blogHeight;
				contentRef.current?.scrollTo({
					top: scroll,
					left: 0,
					behavior: "smooth", // or 'auto' for instant scrolling
				});
				setAllowContentScrollDown(true);
				break;
			}

			case "experience": {
				setHeroVisibility(false);
				setHero2Visibility(false);
				scrollHandler();
				setshowHeros(false);
				if (blogHeight && projectHeight) {
					const scroll = blogHeight + projectHeight;

					contentRef.current?.scrollTo({
						top: scroll,
						left: 0,
						behavior: "smooth", // or 'auto' for instant scrolling
					});
				}
				setAllowContentScrollDown(true);
				break;
			}

			case "contact": {
				setHeroVisibility(false);
				setHero2Visibility(false);
				scrollHandler();
				setshowHeros(false);
				const scroll = contentHeight;

				contentRef.current?.scrollTo({
					top: scroll,
					left: 0,
					behavior: "smooth", // or 'auto' for instant scrolling
				});
				setAllowContentScrollDown(true);
				break;
			}
			default:
				break;
		}
	};

	useEffect(() => {
		const scrollUpdater = () => {
			// Get the current position of content block
			const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPosition = Math.round(
				(window.scrollY / scrollableHeight) * 100,
			);

			// not allowing scroll in content area until we scroll all the way down
			if (window.scrollY >= scrollableHeight) {
				setAllowContentScrollDown(true);
			} else {
				setAllowContentScrollDown(false);
			}

			if (scrollPosition < heroDisplayLimit && scrollPosition > 0) {
				setshowHeros(true);
				setRenderHero1(true);
				setHero2Visibility(false);
				setHero3Visibility(false);

				setRenderHero2(false);
				setRenderHero3(false);

				setTimeout(() => {
					setHeroVisibility(true);
				}, 50);
			} else if (
				scrollPosition < hero2DisplayLimit &&
				scrollPosition > heroDisplayLimit
			) {
				setshowHeros(true);
				setRenderHero2(true);

				setHeroVisibility(false);
				setHero3Visibility(false);

				setRenderHero1(false);
				setRenderHero3(false);

				setTimeout(() => {
					setHero2Visibility(true);
				}, 20);
			} else if (
				scrollPosition < hero3DisplayLimit &&
				scrollPosition > hero2DisplayLimit
			) {
				
				setshowHeros(true);
				console.log(renderHeros);
				setRenderHero3(true);

				setHeroVisibility(false);
				setHero2Visibility(false);

				setRenderHero2(false);
				setRenderHero1(false);

				setTimeout(() => {
					setHero3Visibility(true);
				}, 20);
			} else if (scrollPosition > hero3DisplayLimit) {
				setHero3Visibility(false);
				setTimeout(() => {
					setshowHeros(false);
				}, 500);
			}
		};

		// attaching the event to scroll movement
		window.addEventListener("scroll", scrollUpdater);

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", scrollUpdater);
		};
	});

	return (
		<div className="h-svh" ref={contentBlockRef}>
			{/* Heros Section */}
			{renderHeros && (
				<div className="fixed top-0 pt-32 h-fit w-full">
					{renderHero3 && (
						<div>
							<div
								className={`transition-opacity duration-500 ease-in-out ${
									Hero3Visibility ? "opacity-100" : "opacity-0"
								}`}
							>
								<Hero3 />
							</div>
						</div>
					)}

					{renderHero2 && (
						<div
							className={`transition-opacity duration-500 ease-in-out ${
								Hero2Visibility ? "opacity-100" : "opacity-0"
							}`}
						>
							<Hero2 />
						</div>
					)}

					{renderHero1 && (
						<div
							className={`transition-opacity duration-500 ease-in-out ${
								HeroVisibility ? "opacity-100" : "opacity-0"
							}`}
						>
							<Hero navbarController={navbarController} />
						</div>
					)}
				</div>
			)}

			<div className="fixed w-full top-0 z-20">
				<Navbar navbarController={navbarController} />
			</div>

			<div className="pt-[80vh] h-[100vh]">
				<img src="images/main_bg.png" alt="" className="relative -z-20" />

				<div
					className={`${
						allowContentScrollDown ? "overflow-y-auto" : "overflow-hidden"
					} h-[90vh] snap-y snap-proximity`}
					ref={contentRef}
				>
					<div className="pb-5" ref={blogsRef}>
						<Blog />
					</div>
					<div className="pb-5" ref={projectsRef}>
						<Projects />
					</div>
					<div className="pb-10" ref={experienceRef}>
						<Exprience />
					</div>
					<div className="" ref={contactRef}>
						<Contact />
					</div>
				</div>
			</div>
			{/* Footer section */}
			<Footer />
		</div>
	);
}

export default App;
