import React, { useState} from "react";
interface NavbarProps {
	navbarController: (navigateTo: string) => void;
  };

const Navbar:  React.FC<NavbarProps>  = ({ navbarController }) => {
	const navItems = ['home','skills','blog','projects','experience','contact']
	const [active, setactive] = useState('home')
	const changeActive = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>)=> {
		const target = event.currentTarget
		const section = target.innerText
		setactive(section);
		navbarController(section)
		
	}
	return (
		<nav className="flex justify-between mx-5 pt-5">
			<div>
				{/* this component is placed outisde the parralax component of react-spring which i am using in app component
				the parrallax component has an image inside which i want to scroll up faster as I scroll but the problem was when the
				image reached the top of the page the below div with TronCodes was hiding behind the image and for some weird reason
				if I add transform class to it does not hide and works fine IDK how it works but its working */}
				<div className="font-pacifico text-3xl cursor-pointer transform">TronCodes</div>
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
