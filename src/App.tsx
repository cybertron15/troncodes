import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";

function App() {
	return (
			<div>
				<Navbar />
				<Hero/>
				<Blog/>
				<Projects/>
				<Exprience/>
				<Contact/>
				<Footer/>

			</div>
	);
}
export default App;
