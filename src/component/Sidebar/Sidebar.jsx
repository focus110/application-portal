import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../img/logo.png";
import { SidebarData } from "../data/Data";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";

const Sidebar = (props) => {
	const [active, setActive] = useState(props.index);
	const [expanded, setexpanded] = useState(false);

	return (
		<>
			<div
				className="flex fixed md:hidden h-14 w-14 top-6 z-10 bg-white p-2.5 rounded-xl"
				style={expanded ? { left: "15rem" } : { left: "3%" }}
				onClick={() => setexpanded(!expanded)}
			>
				<MenuIcon className="h-10 w-10 text-black" />
			</div>

			<div
				className={
					expanded
						? "flex md:flex flex-col md:p-8 md:border-r-2 md:border-rectem-cornwhite md:border-solid md:sticky md:top-0 fixed z-9 h-full bg-white p-4"
						: "hidden md:flex flex-col md:p-8 md:border-r-2 md:border-rectem-cornwhite md:border-solid md:sticky md:top-0 fixed z-9 h-full bg-white p-4"
				}
			>
				{/* logo */}
				<div className="w-40 h-9 items-center justify-center flex mt-6">
					<img src={Logo} alt="School logo and name" />
				</div>

				{/* menu */}
				<div className="mt-8 md:mt-12 flex-col gap-4 flex">
					{SidebarData.map((menu, index) => {
						return (
							<Link
								key={index}
								to={`/${menu.link}`}
								className={
									active === index
										? "flex items-center gap-6 h-16 rounded-lg cursor-pointer p-6 bg-rectem-50 text-white"
										: "flex items-center gap-6 h-16 rounded-lg cursor-pointer p-6 bg-white text-rectem-50"
								}
								onClick={() => {
									setActive(index);
									setexpanded(!expanded);
								}}
							>
								<menu.icon
									className={
										active === index
											? "h-7 w-7 text-white"
											: "h-7 w-7 text-rectem-50"
									}
								/>
								<span className="font-normal block">{menu.heading}</span>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Sidebar;
