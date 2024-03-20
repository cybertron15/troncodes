interface FooterProps {
	showMsg: boolean[];
}

const Footer: React.FC<FooterProps> = ({ showMsg }) => {
	return (
		<div className="flex flex-col items-center fixed bottom-0 w-full z-20">
			{showMsg[0] && showMsg[1] && (
				<div className={"flex animate-fadein relative left-20 md:left-64 lg:left-72"}>
					<img
						src="images/arrow.png"
						alt="arrow"
						className="w-20 h-12 mt-auto"
					/>
					<div className="relative text-lg lg:text-3xl font-caveat -rotate-12 bottom-10">
						<p>You can also contact me</p>
						<p>through my socials </p>
					</div>
				</div>
			)}
			<div className="flex justify-center md:gap-12 gap-8 bg-slate-400 bg-opacity-25 pt-4 pb-2 w-3/4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 rounded-t-full">
				<a
					href="https://github.com/cybertron15"
					rel="noreferrer"
					target="_blank"
					className="hover:scale-110 hover:ring-2 ring-orange-500 rounded-md transition-transform duration-300 transform"
				>
					<img
						src="images/socialmedia/github.png"
						alt=""
						// style={{ width: "40px", height: "40px" }}
						className="w-8 h-8 md:w-10 md:h-10"
					/>
				</a>
				<a
					href="https://www.instagram.com/cybertron_15/"
					rel="noreferrer"
					target="_blank"
					className="hover:scale-110 hover:ring-2 ring-orange-500 rounded-lg transition-transform duration-300 transform"
				>
					<img
						src="images/socialmedia/instagram.png"
						alt=""
						// style={{ width: "40px", height: "40px" }}
						className="w-8 h-8 md:w-10 md:h-10"
					/>
				</a>
				<a
					href="https://twitter.com/DhavlePalash"
					rel="noreferrer"
					target="_blank"
					className="hover:scale-110 hover:ring-2 ring-orange-500 rounded-md transition-transform duration-300 transform"
				>
					<img
						src="images/socialmedia/twitter.png"
						alt=""
						// style={{ width: "40px", height: "40px" }}
						className="w-8 h-8 md:w-10 md:h-10"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/palash-dhavle-734aa31a0/"
					rel="noreferrer"
					target="_blank"
					className="hover:scale-110 hover:ring-2 ring-orange-500 rounded-md transition-transform duration-300 transform"
				>
					<img
						src="images/socialmedia/linkedin.png"
						alt=""
						// style={{ width: "40px", height: "40px" }}
						className="w-8 h-8 md:w-10 md:h-10"
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;
