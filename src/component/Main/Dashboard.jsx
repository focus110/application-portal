import React from "react";
import "./Main.css";

const Dashboard = () => {
	return (
		<div className="p-8 md:p-10 font-medium flex flex-col w-full font-display mt-8 lg:mt-2 bg-white">
			<span className="not-italic tracking-tighten text-2xl text-rectem-75 text-center mb-6 md:text-left">
				Dashboard
			</span>
			<div className="flex flex-col md:flex-row justify-evenly mb-6 gap-4 md:gap-8">
				<div className="bg-rectem-blue w-full md:w-1/2 md:h-32 text-white p-5">
					DEPARTMENT
					<br />
					COMPUTER SCIENCE
				</div>
				<div className="bg-rectem-blue w-full md:w-1/2 md:h-32 text-white p-5">
					ADMISSION STATUS
					<br />
					ADMITTED
				</div>
			</div>

			<span className="not-italic tracking-tighten text-2xl text-rectem-75 text-center mb-6 md:text-left">
				Application Guide
			</span>
			<div className="flex flex-col md:flex-row justify-evenly mb-6 gap-4 md:gap-8">
				<div className="bg-rectem-blue w-full md:w-1/3 md:h-40 text-white p-5">
					Fill your application to apply
				</div>
				<div className="bg-rectem-blue w-full md:w-1/3 md:h-40 text-white p-5">
					Payment due amount
					<br />
					Not paid
				</div>
				<div className="bg-rectem-blue w-full md:w-1/3 md:h-40 text-white p-5">
					Fill your course form
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
