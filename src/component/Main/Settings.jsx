import React from "react";
import image from "../../img/frame1.png";

const Settings = () => {
	return (
		<div className="p-10 font-medium flex flex-col gap-8 mt-8 lg:mt-2 bg-white">
			<span className="not-italic tracking-tighten text-2xl font-display text-rectem-75 text-center md:text-left">
				Settings
			</span>

			{/* Body */}
			<div className="flex flex-col md:flex-row gap-10 md:gap-16 md:justify-evenly">
				{/* Profile Picture Part */}
				<div className="flex flex-col w-1/4 text-center items-center gap-3">
					<span className="not-italic font-bold tracking-tighten text-rectem-black text-2xl">
						Account
					</span>
					<img
						src={image}
						alt="Profile Pic"
						className="rounded-full h-20 md:h-28 lg:h-24 xl:h-40 w-20 md:w-28 lg:w-24 xl:w-40"
					/>
					<button>
						<span className="font-display tracking-tighten not-italic font-medium text-lg">
							Edit
						</span>
					</button>
				</div>

				{/* Account Settings Part */}
				<div className="flex flex-col text-left gap-8 lg:gap-12">
					{/* Personal Details */}
					<div className="flex flex-row gap-20 ">
						<div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-between w-full gap-8">
							{/* Username */}
							<div className="flex flex-col justify-evenly gap-2">
								<span className="text-rectem-black font-medium not-italic text-base">
									Username
								</span>
								<span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
									Username
								</span>
								<button className="text-left">
									<span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
										Change Username
									</span>
								</button>
							</div>

							{/* First Name */}
							<div className="flex flex-col justify-evenly gap-2">
								<span className="text-rectem-black font-medium not-italic text-base">
									First name
								</span>
								<span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
									First name
								</span>
								<button className="text-left">
									<span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
										Change First name
									</span>
								</button>
							</div>

							{/* Last Name */}
							<div className="flex flex-col justify-evenly gap-2">
								<span className="text-rectem-black font-medium not-italic text-base">
									Last name
								</span>
								<span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
									Last name
								</span>
								<button className="text-left">
									<span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
										Change Last name
									</span>
								</button>
							</div>
						</div>
					</div>

					{/* Account Details */}
					<div className="flex flex-row gap-20">
						<div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-between w-full gap-8">
							{/* Phone */}
							<div className="flex flex-col justify-evenly gap-2">
								<span className="text-rectem-black font-medium not-italic text-base">
									Phone
								</span>
								<span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
									Phone
								</span>
								<button className="text-left">
									<span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
										Change Phone
									</span>
								</button>
							</div>

							{/* Email */}
							<div className="flex flex-col justify-evenly gap-2">
								<span className="text-rectem-black font-medium not-italic text-base">
									Email
								</span>
								<span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
									Email
								</span>
								<button className="text-left">
									<span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
										Change Email
									</span>
								</button>
							</div>

							{/* Password */}
							<div className="flex flex-col justify-evenly gap-2">
								<span className="text-rectem-black font-medium not-italic text-base">
									Password
								</span>
								<span className="text-rectem-grey font-display font-normal not-italic text-base md:text-sm">
									Password
								</span>
								<button className="text-left">
									<span className="text-rectem-50 font-medium not-italic text-sm md:text-base">
										Change Password
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
