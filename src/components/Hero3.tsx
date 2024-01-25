const Hero3: React.FC = ({controller,c,c2}) => {
	return (
		<div className="text-center fixed z-20 w-full mt-24 h-96">
			<div className="font-roboto text-5xl">
				along with debts I have these skills
			</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="border border-red-400 h-32 w-32 mt-64"
				style={{ transform: `translateY('100px')`,background:"white" }}
				onClick={() => {
					console.log('clicked');
					controller(!c)
					console.log(c,c2);
				}
				}
			>

			</div>
		</div>
	);
};

export default Hero3;
