import React from "react";
import bannerImage from "../../assets/iphone-x-pictures-45223.png";

const Banner = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="flex justify-around items-center   flex-col md:flex-row-reverse">
				<div className="">
					<img
						src={bannerImage}
						className="h-[400px] "
					/>
				</div>
				<div className="w-full mt-5 md:w-1/2">
					<h1 className="text-3xl md:text-5xl text-center md:text-left  font-bold">
						Discover the Future of Tech
					</h1>
					<p className="py-6 text-justify md:text-left">
						Immerse Yourself in a World of Innovation and
						Possibility. Explore Our Range of the Latest Mobile
						Phones, Cutting-Edge Laptops, Stunning Smart TVs, and
						Ingenious Gadgets. We're Your Gateway to Tomorrow's
						Technology.{" "}
					</p>

					<div className="flex justify-center md:justify-start">
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
