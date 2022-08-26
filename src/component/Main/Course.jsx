import React from "react";
import { Link } from "react-router-dom";

const CourseReg = () => {
	return (
		<div className="p-8 md:p-10 font-medium font-display flex flex-col mt-12 lg:mt-2 bg-white">
			<span className="not-italic tracking-tighten text-2xl text-rectem-75 text-center md:text-left">
				Course Registration
			</span>
			<div className="justify-between items-center">
				<div className="bg-white md:w-3/4 lg:w-5/6 h-4/5 md:h-3/4 lg:h-4/5 mt-16 p-12 shadow-box flex flex-col justify-between">
					<div className="text-center mt-3">
						<span className="tracking-tighten not-italic font-body text-black font-bold text-2xl">
							Make Payment
						</span>
					</div>
					<div className="text-center">
						<span className="font-normal text-sm text-rectem-grey tracking-tighten not-italic">
							You need to make payment before you can start your course
							registration
						</span>
					</div>
					<Link
						to="/profile"
						className="text-center h-8 bg-rectem-50 rounded-3xl"
					>
						<span className="tracking-tighten not-italic font-bold text-xs font-body text-white">
							Make Payment
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CourseReg;
