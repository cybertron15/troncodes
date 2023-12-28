import { useState} from "react";

const Navbar: React.FC = () => {
	const navItems = ['home','skills','blog','projects','experience','contact']
	const [active, setactive] = useState('home')
	const changeActive = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>)=> {
		const target = event.currentTarget
		setactive(target.innerText)
	}
	return (
		<nav className="flex justify-between mx-5 mt-5">
			<div>
				<span className="font-pacifico text-3xl cursor-pointer">TronCodes</span>
			</div>
			<ul className="flex gap-10 text-xl font-roboto mt-auto">
				{navItems.map((item:string)=>{
					return <li key={item} onClick={changeActive} onKeyDown={(event)=>changeActive(event)} className={`hover:text-orange-500 hover:scale-110 cursor-pointer transition-transform duration-300 transform ${item===active && "text-orange-500"}`}>{item}</li>
				})}
			
			</ul>
		</nav>
	);
};

export default Navbar;
