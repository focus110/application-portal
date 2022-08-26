import React from "react";
import { FormHeader } from "../data/Data";
//  h-72 border-l-2 border-rectem-blue

const Profile = () => {
	return (
		<div className="p-10 font-medium flex flex-col mt-8 lg:mt-2 bg-white">
			<span className="not-italic tracking-tighten text-2xl font-display text-rectem-75 text-center md:text-left">
				Profile
			</span>
			<div className="not-italic tracking-tighten font-body py-8 text-2xl font-bold">
				<span>Student Registration</span>
				<div className="mt-8 flex flex-col">
					{FormHeader.map((form, index) => {
						return (
							<div key={index} className="flex flex-row gap-7">
								<div className="flex flex-col items-center">
									<form.check
										className={
											"w-6 text-rectem-50 -m-1 p-0 rounded-full shadow-lg"
										}
									/>
									<div
										className={
											form.header === "Payment"
												? ""
												: "border-l-2 border-rectem-50 h-11 "
										}
									></div>
								</div>
								<div className="flex flex-row gap-4">
									<div className="text-rectem-50 text-sm font-medium">
										<span>{form.header}</span>
									</div>
									<div className="text-rectem-red text-xs font-medium">
										<button>
											<span>Edit</span>
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Profile;
