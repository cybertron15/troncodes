const Navbar: React.FC = () => {
	const navItems = ['home','skills','blog','projects','exprience','contact']
	return (
		<nav className="flex justify-between mx-5 mt-5">
			<div>
				<span className="font-pacifico text-3xl cursor-pointer">TronCodes</span>
			</div>
			<ul className="flex gap-10 text-xl font-roboto mt-auto">
				{navItems.map((item:string)=>{
					return <li className="hover:text-orange-500 cursor-pointer">{item}</li>
				})}
			
			</ul>
		</nav>
	);
};

export default Navbar;
