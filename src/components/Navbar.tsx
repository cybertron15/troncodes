import { Menu, X} from "lucide-react";
import React, { useState} from "react";


interface NavbarProps {
	navbarController: (navigateTo: string) => void;
  };

const Navbar:  React.FC<NavbarProps>  = ({ navbarController }) => {
	const navItems = ['home','skills','blog','projects','experience','contact']
	const [active, setactive] = useState('home')
	const [showNavbar, setshowNavbar] = useState(true)
	const changeActive = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>)=> {
		const target = event.currentTarget
		const section = target.innerText
		setactive(section);
		navbarController(section)
		
	}
	return (
		<nav className={`md:flex md:justify-between md:px-5 ${showNavbar && "bg-black"} pt-5` }>
			<div className={`flex w-full justify-between ${showNavbar && "bg-black"} px-5`}>
				{/* this component is placed outisde the parralax component of react-spring which i am using in app component
				the parrallax component has an image inside which i want to scroll up faster as I scroll but the problem was when the
				image reached the top of the page the below div with TronCodes was hiding behind the image and for some weird reason
				if I add transform class to it does not hide and works fine IDK how it works but its working */}
				<div className={"font-pacifico text-3xl cursor-pointer transform"}>TronCodes</div>
				<button className="md:hidden" type="button" onClick={()=>{
					setshowNavbar(!showNavbar)
					console.log(showNavbar);
					
				}}>
					{showNavbar? <X/>:
					<Menu />}
				</button>
			</div>
			{showNavbar && 
			<ul className="md:flex-row md:gap-10 md:bg-transparent md:pt-0 text-xl font-roboto mt-auto flex flex-col gap-8 min-h-fit bg-black pt-5 ps-6">
				{navItems.map((item:string)=>{
					return <li key={item} onClick={changeActive} onKeyDown={(event)=>changeActive(event)} className={`hover:text-orange-500 hover:md:scale-110 cursor-pointer transition-transform duration-300 transform ${item===active && "text-orange-500"}`}>{item}</li>
				})}
			
			</ul>
			}
		</nav>
	);
};

export default Navbar;
