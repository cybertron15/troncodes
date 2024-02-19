import React from "react";
import BlogItem from "./BlogItem";
import stringShortner from "../utils/stringShortner";
import blogs from "../data/blogs";
import { ArrowUpRight } from "lucide-react";
const Blog: React.FC = () => {
	return (
		<div className="px-5">
			<div className="md:flex md:justify-between lg:mt-10 md:mt-8 mt-5">
				<div className="font-roboto md:text-3xl lg:text-5xl sm:text-5xl text-4xl">I write sometimes...</div>
				<a
					href="https://blog.troncodes.com/"
					target="_blank"
					rel="noreferrer"
					className="mt-auto "
				>
					<div className="flex gap-1">
						<span className="md:text-xl sm:text-lg text-xm underline sm:mt-3 md:mt-0 mt-1">Visit Blog</span>{" "}
						<span className="mt-auto">
							<ArrowUpRight />
						</span>
					</div>
				</a>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4 md:space-y-0 pt-8 pb-20 w-full">
				{blogs.map((blog) => {
					return (
						<div className="">
							<BlogItem
							key={blog.title}
							image={blog.img}
							// title={stringShortner(blog.title, 38)}
							title={blog.title}
							// desc={stringShortner(blog.desc, 135)}
							desc={blog.desc}
							link={blog.link}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Blog;
