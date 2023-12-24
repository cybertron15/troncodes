type Blog<T> = {
	title: T;
	desc: T;
	img: T;
	link: T;
};

const blogs: Blog<string>[] = [
	{
		title: "JSX exposed! What is JSX and how it works",
		desc: "JSX stands for JavaScript syntax extension. It is a JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template",
		img: "images/jsx.jpg",
		link: "https://blog.troncodes.com/jsx-exposed-what-is-jsx-and-how-it-works",
	},
	{
		title:
			"GitHub Pages for React: Vite Deployment and Custom Domain Configuration",
		desc: "There are two simple ways to deploy your react apps on GitHub Pages. The simple way is to use gh-pages package which does most of the work for you it handles all the configs and other details",
		img: "images/gh-pages2.png",
		link: "https://blog.troncodes.com/github-pages-for-react-vite-deployment-and-custom-domain-configuration",
	},
	{
		title: "Cool looking counter in plain HTML,CSS and JS",
		desc: "We need a counter for a lot of stuff when building web apps whether be it displaying the number of users who visited our site, live views or any other stats.",
		img: "images/odometer.png",
		link: "https://blog.troncodes.com/cool-looking-counter-in-plain-htmlcss-and-js",
	},
];

export default blogs;
