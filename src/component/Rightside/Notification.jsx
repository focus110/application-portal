import React from "react";
import { Link } from "react-router-dom";

const Notification = ({ data, index }) => {
	return (
		<div>
			{/* <Link to='' key={index} className='flex flex-row gap-4'>
            <div className='pt-1'>
                <data.icon className={data.style} />
            </div>
            <div className='gap-4'>
                <div classNgame='flex flex-row justify-between'>
                    <div className='not-italic font-bold text-rectem-25 h-6'>
                        <span>{data.sender}</span>
                    </div>
                    <div className='bg-rectem-pink bg-opacity-10 mix-blend-normal rounded-xl h-6 w-12 text-center'>
                        <span className='text-rectem-red font-normal text-xs'>{data.time}</span>
                    </div>
                </div>
                <div className='font-light not-italic text-xs'>{data.message}</div>
            </div>
        </Link> */}

			<Link to="" key={index} className="pt-4">
				<div className="p-1 flex flex-col">
					<div className="flex flex-row">
						<div className="p-1">
							<data.icon className={data.style} />
						</div>
						<div className="not-italic font-bold text-rectem-25 h-6">
							<span>{data.sender}</span>
						</div>
						<div className="bg-rectem-pink bg-opacity-10 mix-blend-normal rounded-xl h-6 w-12 text-center">
							<span className="text-rectem-red font-normal text-xs">
								{data.time}
							</span>
						</div>
					</div>
					<div className="font-light not-italic text-xs pl-5 pr-5 pt-0">
						<span>{data.message}</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Notification;
