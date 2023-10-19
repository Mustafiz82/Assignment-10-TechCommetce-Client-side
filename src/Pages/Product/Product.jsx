import React from "react";

import Rating from "react-rating";
import blankStar from "../../assets/Blank_star_(fixed_width).svg.png";
import fullStar from "../../assets/2184494.png";
import { Link } from "react-router-dom";

const Product = ({ item }) => {

    const {ProductName ,BrandName , ProductRating ,Price, ShortDescription , Type ,imageUrl ,_id } = item;
	return (
		<div>
			<div className="card  bg-base-100 shadow-xl">
				<figure>
					<img
						src={imageUrl}
						alt="Shoes"
                        className="w-40 h-40 object-cover"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{ProductName}
					</h2>
                    <div className="card-actions justify-left">
						<div className="badge badge-outline">{BrandName}</div>
						<div className="badge badge-outline">{Type}</div>
					</div>
					<div>
                    <Rating
                    onHover={() => console.log(this)}
					emptySymbol={
						<img
							src={blankStar}
							className="icon h-10 w-10"
						/>
					}
					fullSymbol={
						<img
							src={fullStar}
							className="icon h-10 w-10"
						/>
					}
                    name="Rating"
                    initialRating={ProductRating}
                    readonly
				/>
                <p>price : ${Price}</p>
                    </div>
                    <div className="flex gap-5">
                        <Link to={`${_id}`}><button className="btn flex-1 btn-primary"> Details</button></Link>
                        <Link to={`update/${_id}`}><button className="btn flex-1 btn-primary"> Update</button></Link>
                    </div>
					
				</div>
			</div>
		</div>
	);
};

export default Product;
