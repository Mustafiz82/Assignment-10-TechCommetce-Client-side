import React from "react";
import { Link } from "react-router-dom";

const BrandName = ({ item }) => {
	return (
		<>
			<Link to={`/${item.brandName}`}>
            <div className="card   bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img
						src={item.image}
						alt="Shoes"
						className="rounded-xl h-24 "
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{item.brandName}</h2>
					
				</div>
			</div></Link>
		</>
	);
};

export default BrandName;
