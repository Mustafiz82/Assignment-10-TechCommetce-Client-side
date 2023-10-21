import React from "react";
import image1 from "../../assets/h6-slide-1-img-1.png";
import image2 from "../../assets/h4-slide-3-img-1.jpg";
import image3 from "../../assets/h6-slide-2-img-1.png";

const Advertisement = () => {
	return (
		<div>
			<div className="carousel w-full pt-10">
				<div
					id="slide1"
					className="carousel-item relative w-full "
				>
					<div className="flex flex-col md:flex-row ">
						<div className="md:w-1/2 flex justify-center items-center gap-5  ">
							<div className="md:w-3/4 text-center md:text-left space-y-5">
								<h1 className="text-4xl md:text-5xl font-light">
									HeadPhones{" "}
									<span className="font-bold text-blue-300">
										30%
									</span>{" "}
									off
								</h1>
								<p>
									Big Savings Await: Shop Now and Get 30% Off
									on Your Favorite Products
								</p>
								<button className="btn btn-primary text-black bg-blue-300 ">
									Shop Now
								</button>
							</div>
						</div>
						<div className="md:w-1/2">
							<img
								src={image3}
								alt=""
							/>
						</div>
					</div>{" "}
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide4"
							className="btn btn-circle"
						>
							❮
						</a>
						<a
							href="#slide2"
							className="btn btn-circle"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide2"
					className="carousel-item relative w-full"
				>
					<div className="flex flex-col gap-5 text-center ">
						<div className=" flex justify-center items-center gap-5  ">
							<div className="ml-5 space-y-5">
								<h1 className="text-5xl font-light">
									ipad Mini{" "}
									<span className="font-bold text-blue-300">
										30%
									</span>{" "}
									off
								</h1>
								<p>
									Big Savings Await: Shop Now and Get 30% Off
									on Your Favorite Products
								</p>
								<div className="flex justify-center">
									<button className="btn  btn-primary text-black bg-blue-300 ">
										Shop Now
									</button>
								</div>
							</div>
						</div>
						<div className="">
							<img
								src={image2}
                                className="h-[500px] md:h-auto mr-10 md:mr-0 object-cover"
								alt=""
							/>
						</div>
					</div>{" "}
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide1"
							className="btn btn-circle"
						>
							❮
						</a>
						<a
							href="#slide3"
							className="btn btn-circle"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide3"
					className="carousel-item relative w-full"
				>
					<div className="flex gap-20 md:gap-0 text-center md:text-left flex-col md:flex-row  ">
						<div className="w-full md:w-1/2 flex justify-center items-center gap-5  ">
							<div className="w-3/4 space-y-5">
								<h1 className="text-5xl font-light">
									HeadPhones{" "}
									<span className="font-bold text-blue-300">
										30%
									</span>{" "}
									off
								</h1>
								<p>
									Big Savings Await: Shop Now and Get 30% Off
									on Your Favorite Products
								</p>
								<button className="btn btn-primary text-black bg-blue-300 ">
									Shop Now
								</button>
							</div>
						</div>
						<div className="w-full md:w-1/2 md:h-screen flex items-center">
							<img
								src={image1}
								alt=""
								className=""
							/>
						</div>
					</div>{" "}
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide2"
							className="btn btn-circle"
						>
							❮
						</a>
						<a
							href="#slide1"
							className="btn btn-circle"
						>
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advertisement;
