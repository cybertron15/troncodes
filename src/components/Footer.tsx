const Footer: React.FC = () => {
	return (
		<div className="flex justify-center fixed bottom-0 w-full">
			<div className="flex justify-center gap-12 bg-slate-400 bg-opacity-25 pt-4 pb-2 w-1/3 rounded-t-full">
				<a
					href="https://github.com/cybertron15"
					rel="noreferrer"
					target="_blank"
					className="hover:scale-110 hover:ring-2 ring-orange-500 rounded-md transition-transform duration-300 transform"
				>
					<img
						src="images/socialmedia/github.png"
						alt=""
						style={{ width: "40px", height: "40px" }}
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
						style={{ width: "40px", height: "40px" }}
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
						style={{ width: "40px", height: "40px" }}
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
						style={{ width: "40px", height: "40px" }}
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;
