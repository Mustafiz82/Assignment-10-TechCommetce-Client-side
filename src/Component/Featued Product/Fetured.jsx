import React from "react";
import image1 from "../../assets/h1-product-1.jpg";
import image2 from "../../assets/h1-product-4-150x150.jpg";
import image3 from "../../assets/h1-product-9.jpg";
import image4 from "../../assets/h1-slide-2-img-1.png";
import image5 from "../../assets/virtual-product-1-150x150.jpg";
import image6 from "../../assets/h2-product-8-150x150.jpg";
import Rating from "react-rating";

const Fetured = () => {
	return (
		<div>
			<h1 className="text-5xl font-bold my-10 text-center">Featured Product</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				<div className="card  bg-base-100 shadow-xl">
					<figure>
						<img
							src={image1}
							alt="Shoes"
							className="w-40 h-40 object-cover"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Apple MacBook Pro</h2>
						<div className="card-actions justify-left">
							<div className="badge badge-outline">Apple</div>
							<div className="badge badge-outline">Laptop</div>
						</div>
						<div>
							<p>price : $999</p>
						</div>
					</div>
				</div>
				<div className="card  bg-base-100 shadow-xl">
					<figure>
						<img
							src={image2}
							alt="Shoes"
							className="w-40 h-40 object-cover"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Ultra Wireless S50 Headphones with Bluetooth</h2>
						<div className="card-actions justify-left">
							<div className="badge badge-outline">Sony</div>
							<div className="badge badge-outline">HeadPhone</div>
						</div>
						<div>
							<p>price : $259</p>
						</div>
					</div>
				</div>
				<div className="card  bg-base-100 shadow-xl">
					<figure>
						<img
							src={image3}
							alt="Shoes"
							className="w-40 h-40 object-cover"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Apple iPad 9.7 128GB WiFi</h2>
						<div className="card-actions justify-left">
							<div className="badge badge-outline">Apple</div>
							<div className="badge badge-outline">Tab</div>
						</div>
						<div>
							<p>price : $999</p>
						</div>
					</div>
				</div>
				<div className="card  bg-base-100 shadow-xl">
					<figure>
						<img
							src={image4}
							alt="Shoes"
							className="w-40 h-40 object-cover"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Symsung galaxi s21 with smart watch</h2>
						<div className="card-actions justify-left">
							<div className="badge badge-outline">Symsung</div>
							<div className="badge badge-outline">Phone</div>
						</div>
						<div>
							<p>price : $799</p>
						</div>
					</div>
				</div>
				<div className="card  bg-base-100 shadow-xl">
					<figure>
						<img
							src={image5}
							alt="Shoes"
							className="w-40 h-40 object-cover"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Sony Alpha 5</h2>
						<div className="card-actions justify-left">
							<div className="badge badge-outline">sony</div>
							<div className="badge badge-outline">Camera</div>
						</div>
						<div>
							<p>price : $359</p>
						</div>
					</div>
				</div>
				<div className="card  bg-base-100 shadow-xl">
					<figure>
						<img
							src={image6}
							alt="Shoes"
							className="w-40 h-40 object-cover"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">	
ES62-T Steam Iron with Nonstick Soleplate</h2>
						<div className="card-actions justify-left">
							<div className="badge badge-outline">Lg</div>
Iron						</div>
						<div>
							<p>price : $59</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fetured;
