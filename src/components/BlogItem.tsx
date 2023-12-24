interface BlogItemProps {
	title: string;
	desc: string;
	image: string;
	link:string;
	// Add more props if needed and define their types
}

const BlogItem: React.FC<BlogItemProps> = (props) => {
	return (
		<div className="col-span-1 h-64 transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:ring-2 ring-orange-500">
			<a href={props.link} target="_blank" rel="noreferrer">
				<div
					className="bg-cover bg-center h-full flex flex-col justify-between"
					style={{
						backgroundImage: `url('${props.image}')`,
					}}
				>
					<div>
						{/* this div is used so i can push the other div at the bottom using flex */}
					</div>
					<div className="px-2 bg-gradient-to-t from-black to-transparent opacity-100">
						<div className="font-roboto text-2xl">{props.title}</div>
						<div className="font-roboto text-sm">{props.desc}</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default BlogItem;
