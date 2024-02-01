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
	const contentBlockPos = useRef<number>(0);

	// state to control the content scrolling
	const [allowContentScrollDown, setAllowContentScrollDown] = useState(false);

	// hero display limits. making them positive for convinience
	const heroDisplayLimit = 93;
	const hero2DisplayLimit = 210;
	const hero3DisplayLimit = 390;
	const maxTop = -1305;
	const maxBottom = 90;

	const [transition, setTransition] = useState(false);

	const navbarController = (navigateTo: string) => {
		const contentBlock = contentBlockRef.current;

		// updating transform of content Block to stimulate scrolling
		if (contentBlock) {
			setTransition(true);
			const blogHeight = blogsRef.current?.getBoundingClientRect().height;
			const projectHeight = projectsRef.current?.getBoundingClientRect().height;
			const experienceHeight = experienceRef.current?.getBoundingClientRect().height;
			const contactHeight = contactRef.current?.getBoundingClientRect().height;
			const contentHeight = contentRef.current?.scrollHeight

			switch (navigateTo) {
				case "skills":
					contentBlockPos.current = -(hero2DisplayLimit + 1);
					!renderHeros && setshowHeros(true);
					!allowContentBlockScrollUp && setAllowContentBlockScrollUp(true);
					setTimeout(() => {
						fo_hero2_fi_hero3();
					}, 200);
					break;

				case "home":
					contentBlockPos.current = 0;
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
					contentBlockPos.current = maxTop - 1;
					renderHeros && setshowHeros(false);
					contentRef.current?.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth", // or 'auto' for instant scrolling
					});
					setAllowContentScrollDown(true);
					break;

				case "projects": {
					contentBlockPos.current = maxTop - 1;
					renderHeros && setshowHeros(false);
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
					contentBlockPos.current = maxTop - 1;
					renderHeros && setshowHeros(false);
					const scroll = blogHeight + projectHeight;

					contentRef.current?.scrollTo({
						top: scroll,
						left: 0,
						behavior: "smooth", // or 'auto' for instant scrolling
					});
					setAllowContentScrollDown(true);
					break;
				}

				case "contact": {
					contentBlockPos.current = maxTop - 1;
					renderHeros && setshowHeros(false);
					const scroll = contentHeight;
					console.log(scroll);
					
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
			contentBlock.style.transform = `translateY(${contentBlockPos.current}px)`;
			setTimeout(() => {
				setTransition(false);
			}, 500);
		}
	};

	// handles the fade effects of heros

	// fade out hero 1 fade in hero 2
	const fo_hero1_fi_hero2 = () => {
		// console.log("fade out hero 1 fade in hero 2", renderHeros);
		// hide hero
		setHeroVisibility(false);
		// render hero 2 block
		setTimeout(() => {
			setRenderHero2(true);
		}, 500);
		// show hero 2
		setHero2Visibility(true);
	};

	// fade out hero 2 and fade in hero 3 or just fade in hero 3
	const fo_hero2_fi_hero3 = () => {
		// console.log("fade out hero 2 and fade in hero 3", showHeros);
		// hide hero 2 if it's visible
		if (Hero2Visibility) {
			setHero2Visibility(false);
		}
		// render hero 3 block
		// show hero 3
		setTimeout(() => {
			setHero3Visibility(true);
		}, 600);
		setTimeout(() => {
			setRenderHero3(true);
		}, 500);
	};

	// fade out hero 3 and don't render heros
	const fo_hero3_dont_render_heros = () => {
		// console.log("fade out hero 3 and don't render heros", showHeros);
		// hide hero 3
		setHero3Visibility(false);

		// don't render block containing all the heros
		setTimeout(() => {
			setshowHeros(false);
		}, 500);
	};

	// fade out hero 3 and fade in hero 2
	const fo_hero3_fi_hero2 = () => {
		// console.log("fade out hero 3 and fade in hero 1");
		// hide hero 3
		setHero3Visibility(false);
		// don't render hero 3 block
		setTimeout(() => {
			setRenderHero3(false);
		}, 500);

		// show hero 2
		setTimeout(() => {
			setHero2Visibility(true);
		}, 600);
	};

	// fade out hero 2 and fade in hero 1
	const fo_hero2_fi_hero1 = () => {
		// console.log("fade out hero 2 fade in hero 1");
		// hide hero 2
		setHero2Visibility(false);
		// show hero 1
		setHeroVisibility(true);
		// don't render hero 2
		setTimeout(() => {
			setRenderHero2(false);
		}, 500);
	};

	useEffect(() => {
		const scrollUpdater = () => {
			// Get the current position of content block
			const scrollPosition = contentBlockPos.current * -1;

			// fade out hero 1 fade in hero 2
			if (
				scrollPosition > heroDisplayLimit &&
				scrollPosition < hero2DisplayLimit &&
				renderHeros &&
				!Hero2Visibility
			) {
				fo_hero1_fi_hero2();
			}
			// fade out hero 2 and fade in hero 3 or just fade in hero 3
			else if (
				scrollPosition > hero2DisplayLimit &&
				scrollPosition < hero3DisplayLimit &&
				renderHeros &&
				!Hero3Visibility
			) {
				fo_hero2_fi_hero3();
			}

			// fade out hero 3 and don't render heros
			else if (scrollPosition > hero3DisplayLimit && Hero3Visibility) {
				fo_hero3_dont_render_heros();
			}

			// render heros
			else if (scrollPosition < hero3DisplayLimit && !renderHeros) {
				// render heros
				setshowHeros(true);
			}

			// fade out hero 3 and fade in hero 2
			else if (scrollPosition < hero2DisplayLimit && Hero3Visibility) {
				fo_hero3_fi_hero2();
			}
			// fade out hero 2 and fade in hero 1
			else if (scrollPosition < heroDisplayLimit && Hero2Visibility) {
				fo_hero2_fi_hero1();
			}
		};

		// attaching the event to wheel movement
		window.addEventListener("wheel", scrollUpdater);

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("wheel", scrollUpdater);
		};
	});

	// handles the movement speed, direction and restrictions of content block
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const contentBlock = contentBlockRef.current;

		const contentBlockMover = (event: WheelEvent) => {
			if (contentBlock) {
				// acceing the deltaY value. If its negative we are scrolling down and if its postive we are scrolling down
				const deltaY = event.deltaY;
				let scrollSpeed = 1;

				// increasing scrolling speed after we are done with fade effects
				if (contentBlockPos.current * -1 > hero3DisplayLimit) {
					scrollSpeed = 2;
				}

				// controlling the scroll directions on deltaY value and cotrolling scroll restictions
				if (deltaY > 0 && contentBlockPos.current > maxTop) {
					// not allowing content scroll down till the content block have been fully scrolled up
					allowContentScrollDown && setAllowContentScrollDown(false);
					contentBlockPos.current -= scrollSpeed;
					// console.log(contentBlockPos.current);
				}
				// scrolling up and restircting up movement after we reach the limits
				else if (
					deltaY < 0 &&
					contentBlockPos.current < maxBottom &&
					allowContentBlockScrollUp
				) {
					contentBlockPos.current += scrollSpeed;
				}

				if (deltaY > 0 && contentBlockPos.current <= maxTop) {
					// allowing content scroll down when we reach max top

					!allowContentScrollDown && setAllowContentScrollDown(true);
				}

				// updating transform of content Block to stimulate scrolling
				contentBlock.style.transform = `translateY(${contentBlockPos.current}px)`;
			}
		};

		// ataching the event
		window.addEventListener("wheel", contentBlockMover);

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("wheel", contentBlockMover);
		};
	}, [contentBlockRef, allowContentBlockScrollUp, allowContentScrollDown]);

	// handles the control states for scroll restrictions
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const content = contentRef.current;

		const scrollHandler = () => {
			if (content) {
				// if the scroller is at top
				if (content.scrollTop === 0) {
					!allowContentBlockScrollUp && setAllowContentBlockScrollUp(true);
				} else {
					allowContentBlockScrollUp && setAllowContentBlockScrollUp(false);
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
	}, [contentRef, allowContentBlockScrollUp]);

	return (
		<div className="h-svh overflow-hidden">
			<div className="fixed w-full top-0 z-10">
				<Navbar navbarController={navbarController} />
			</div>
			{renderHeros &&
				(renderHero3 ? (
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
				) : renderHero2 ? (
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
							<Hero navbarController={navbarController}/>
						</div>
					</div>
				))}

			<div
				className={`pt-40 ${
					transition ? "transition ease-in-out duration-500" : ""
				}`}
				ref={contentBlockRef}
			>
				<img src="images/main_bg.png" alt="" className="mt-48" />

				<div
					className={`${
						allowContentScrollDown ? "overflow-y-auto" : "overflow-hidden"
					} h-svh snap-y snap-proximity`}
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
			<Footer />
		</div>
	);
}

export default App;
