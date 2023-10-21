import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Rating from "react-rating";
import blankStar from "../../assets/Blank_star_(fixed_width).svg.png";
import fullStar from "../../assets/2184494.png";
import { Link } from "react-router-dom";
import Advertisement from "../../Component/Advertisement/Advertisement";
import Swal from "sweetalert2";

const ProductDetail = () => {
	const { id } = useParams();
	console.log(id);

	const [product, setProduct] = useState([]);
	const {
		ProductName,
		BrandName,
		ProductRating,
		Price,
		ShortDescription,
		Type,
		imageUrl,
		_id,
	} = product;

	useEffect(() => {
		fetch(`https://techcommerce-server.vercel.app/products/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	const handleClick = () => {
	

		fetch("https://techcommerce-server.vercel.app/Cart", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => {
                console.log(res);
                return res.json()
              
            })
			.then((data) => {
				// Process the data here
				if(data){
                    Swal.fire(
                        'Successfull',
                        'Product added to cart',
                        'success'
                      )
                }
			});
	};

	return (
		<div>
			<div className="flex flex-col md:flex-row text-center md:text-left">
				<div className="md:marker:w-1/2 px-20 py-10 ">
					<img
						src={imageUrl}
						className="w-full h-full"
						alt=""
					/>
				</div>
				<div className="md:w-1/2 flex items-center">
					<div className="space-y-3">
						<h1 className="text-3xl font-semibold ">
							{ProductName}
						</h1>
						<h1 className="text-2xl font-semibold ">$ {Price}</h1>
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

						<p>{ShortDescription}</p>
						<button
							onClick={handleClick}
							className="btn btn-primary"
						>
							{" "}
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
