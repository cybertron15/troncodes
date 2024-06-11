type Blog<T> = {
	title: T;
	desc: T;
	img: T;
	link: T;
};

const blogs: Blog<string>[] = [
	{
		title:"TypeScript Unlocked: Introduction",
		desc: "In this section we will see what is TypeScript, why do we use it and bit of it's history. Don't worry I won't bore you much I'm just covering this so you get the context why was TypeScript introduced in the first place.",
		img: "images/blogs/typescript.png",
		link: "https://blog.troncodes.com/typescript-unlocked-introduction",
	},
	{
		title: "TypeScript Unlocked: Types",
		desc: "To understand Types we can take example of real world Caste System. In Caste system people are divided into different groups based on the work they do and they are treated differently based on their castes. ",
		img: "images/blogs/typescript.png",
		link: "https://blog.troncodes.com/typescript-unlocked-types",
	},
	{
		title:"TypeScript Unlocked: Functions",
		desc: "Looking at the above image you can see how we do type checking when we write a function. If you don’t specify any type for the function parameter or function return type it will default to type of any which is not recommended when using type script.",
		img: "images/blogs/typescript.png",
		link: "https://blog.troncodes.com/typescript-unlocked-functions",
	},
	{
		title: "TypeScript Unlocked: Type Aliases",
		desc: "Type Aliases allows us to define the structure or shape of the object with the help of type keyword. Lets understand this with an example.",
		img: "images/blogs/typescript.png",
		link: "https://blog.troncodes.com/type-aliases",
	},
	{
		title: "TypeScript Unlocked: Readonly, Optional and Type Mixing",
		desc: "Readonly feature enables us to make properties of the an object readonly. This means we cannot change the value once it has been set, it can only be read.",
		img: "images/blogs/typescript.png",
		link: "https://blog.troncodes.com/typescript-unlocked-readonly-optional-and-type-mixing",
	},
	{
		title: "TypeScript Unlocked: Union",
		desc: "Union enables us to assign two types to a single variable. Sometimes there might arise a situation where we might not know what kind of data will be encountering. In this kind of situation union comes in very handy. ",
		img: "images/blogs/typescript.png",
		link: "https://blog.troncodes.com/typescript-unlocked-union",
	},
	{
		title: "TypeScript Unlocked: Tuple",
		desc: "Tuple is TypeScript Specific thing and we don’t have tuples in JavaScript. Tuples allow us to enforce order of types in an array.",
		img: "images/blogs/typescript.png",
		link: "https://blog.troncodes.com/typescript-unlocked-tuple",
	},
	{
		title: "TypeScript Unlocked: Interfaces",
		desc: "Interfaces works similar to type keyword which we have discussed earlier in the series. Interface allows us to define the structure of the object just like type but there are few differences.",
		img: "images/blogs/typescript.png",
		link: "https://blog.troncodes.com/typescript-unlocked-interfaces",
	},
	{
		title: "JSX exposed! What is JSX and how it works",
		desc: "JSX stands for JavaScript syntax extension. It is a JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template",
		img: "images/blogs/jsx.jpg",
		link: "https://blog.troncodes.com/jsx-exposed-what-is-jsx-and-how-it-works",
	},
	{
		title:
			"GitHub Pages for React: Vite Deployment and Custom Domain Configuration",
		desc: "There are two simple ways to deploy your react apps on GitHub Pages. The simple way is to use gh-pages package which does most of the work for you it handles all the configs and other details",
		img: "images/blogs/gh-pages.png",
		link: "https://blog.troncodes.com/github-pages-for-react-vite-deployment-and-custom-domain-configuration",
	},
	{
		title: "Cool looking counter in plain HTML,CSS and JS",
		desc: "We need a counter for a lot of stuff when building web apps whether be it displaying the number of users who visited our site, live views or any other stats.",
		img: "images/blogs/odometer.png",
		link: "https://blog.troncodes.com/cool-looking-counter-in-plain-htmlcss-and-js",
	},
	{
		title: "Setup and understand Apollo server in 10 mins",
		desc: "Apollo Server is a community-driven, open-source GraphQL server that simplifies the process of building and serving GraphQL APIs in JavaScript environments. ",
		img: "images/blogs/apollo.png",
		link: "https://blog.troncodes.com/setup-and-understand-apollo-server-in-10-mins",
	},  

];

export default blogs;
