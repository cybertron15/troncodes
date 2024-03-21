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
	const [cmFlag1, setcmFlag1] = useState(false);
	const [cmFlag2, setcmFlag2] = useState(false);

	// refs for content and content block to capture the wheel events
	const contentBlockRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const blogsRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	// state to control the content scrolling
	const [allowContentScrollDown, setAllowContentScrollDown] = useState(false);

	// hero display limits. making them positive for convinience
	const heroDisplayLimit = 10;
	const hero2DisplayLimit = 25;
	const hero3DisplayLimit = 40;
	// const windowHieght = window.innerHeight;
	let fullScroll: number;
	let contentfullScroll: number;

	useEffect(() => {
		// windowHieght = contentBlockRef.current?.scrollHeight;
		fullScroll = document.body.scrollHeight - document.body.clientHeight;
	});

	const scrollHandler = (scrollPer: number | null = null) => {
		if (fullScroll) {
			// console.log(scrollHeight * scrollPer, scrollHeight);
			// console.log(document.body.scrollHeight , document.body.clientHeight,document.body.scrollHeight - document.body.clientHeight);
			window?.scrollTo({
				top: scrollPer !== null ? scrollPer * fullScroll : fullScroll,
				left: 0,
				behavior: "smooth", // You can also use 'auto' or 'instant'
			});
		}
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
				scrollHandler(0.2);
				break;

			case "home":
				scrollHandler(0);
				break;

			case "blog":
				scrollHandler();
				contentRef.current?.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth", // or 'auto' for instant scrolling
				});
				setAllowContentScrollDown(true);
				break;

			case "projects": {
				scrollHandler();
				const scroll = blogHeight;
				contentRef.current?.scrollTo({
					top: scroll,
					left: 0,
					behavior: "smooth", // or 'auto' for instant scrolling
				});
				break;
			}

			case "experience": {
				scrollHandler();
				if (blogHeight && projectHeight) {
					const scroll = blogHeight + projectHeight;

					contentRef.current?.scrollTo({
						top: scroll,
						left: 0,
						behavior: "smooth", // or 'auto' for instant scrolling
					});
				}
				break;
			}

			case "contact": {
				scrollHandler();
				const scroll = contentHeight;
				contentRef.current?.scrollTo({
					top: scroll,
					left: 0,
					behavior: "smooth", // or 'auto' for instant scrolling
				});
				break;
			}
			default:
				break;
		}
	};

	useEffect(() => {
		const scrollUpdater = () => {
			// Get the current position of content block

			const scrollPosition = Math.round((window.scrollY / fullScroll) * 100);
			// console.log(scrollPosition);

			// not allowing scroll in content area until we scroll all the way down
			// - 5 is just for adjustment
			if (window.scrollY >= fullScroll - 5) {
				setAllowContentScrollDown(true);
			} else {
				setAllowContentScrollDown(false);
			}

			// show hero 1
			if (scrollPosition < heroDisplayLimit && scrollPosition > 0) {
				setshowHeros(true);
				setRenderHero1(true);
				setHero2Visibility(false);
				setHero3Visibility(false);

				setRenderHero2(false);
				setRenderHero3(false);

				setTimeout(() => {
					setHeroVisibility(true);
				}, 100);

				setTimeout(() => {
					setshowHeros(true);
				}, 500);
			}
			// show hero 2
			if (
				scrollPosition < hero2DisplayLimit &&
				scrollPosition >= heroDisplayLimit
			) {
				setshowHeros(true);
				setRenderHero2(true);

				setHeroVisibility(false);
				setHero3Visibility(false);

				setRenderHero1(false);
				setRenderHero3(false);

				setTimeout(() => {
					setHero2Visibility(true);
				}, 100);

				setTimeout(() => {
					setshowHeros(true);
				}, 500);
			}
			// show hero 3
			if (
				scrollPosition < hero3DisplayLimit &&
				scrollPosition >= hero2DisplayLimit
			) {
				setshowHeros(true);
				setRenderHero3(true);

				setHeroVisibility(false);
				setHero2Visibility(false);

				setRenderHero2(false);
				setRenderHero1(false);

				setTimeout(() => {
					setHero3Visibility(true);
				}, 100);

				setTimeout(() => {
					setshowHeros(true);
				}, 500);
			}

			// don't show heros
			if (scrollPosition > hero3DisplayLimit && renderHeros) {
				setHero3Visibility(false);
				setTimeout(() => {
					setshowHeros(false);
				}, 500);
			}

			if (scrollPosition >= 100) {
				setcmFlag1(true);
			} else {
				setcmFlag1(false);
			}
		};

		const content = contentRef.current;

		const contentScrollUpdater = () => {
			if (content) {
				contentfullScroll = content.scrollHeight - content.clientHeight;
				const scrollPosition = Math.round((content.scrollTop / contentfullScroll) * 100);

				if (scrollPosition >= 100) {
					setcmFlag2(true);
				} else {
					setcmFlag2(false);
				}
			}
		};

		
		content?.addEventListener("scroll", contentScrollUpdater);
		// attaching the event to scroll movement
		window.addEventListener("scroll", scrollUpdater);
		
		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", scrollUpdater);
			content?.removeEventListener("scroll", contentScrollUpdater);
		};
	});

	return (
		<div className="" ref={contentBlockRef}>
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
				<img src="images/main_bg.webp" alt="" className="relative -z-20" />

				<div
					className={`${
						allowContentScrollDown ? "overflow-y-auto" : "overflow-hidden"
					} h-[90vh]`}
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
			<Footer showMsg={[cmFlag1,cmFlag2]} />
		</div>
	);
}

export default App;
