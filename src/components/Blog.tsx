import React from "react";
import BlogItem from "./BlogItem";
import stringShortner from "../utils/stringShortner";
import blogs from "../data/blogs";
import { ArrowUpRight } from "lucide-react";
const Blog: React.FC = () => {
	return (
		<div className="px-5">
			<div className="flex justify-between mt-10">
				<div className="font-roboto text-5xl">I write sometimes...</div>
				<a
					href="https://blog.troncodes.com/"
					target="_blank"
					rel="noreferrer"
					className="mt-auto "
				>
					<div className="flex gap-1 underline">
						<span className="text-lg">Visit Blog</span>{" "}
						<span className="mt-auto">
							<ArrowUpRight />
						</span>
					</div>
				</a>
			</div>
			<div className="grid grid-cols-3 gap-x-10 gap-y-5 pt-8 pb-20">
				{blogs.map((blog) => {
					return (
						<BlogItem
							image={blog.img}
							title={stringShortner(blog.title, 38)}
							desc={stringShortner(blog.desc, 135)}
							link={blog.link}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Blog;
