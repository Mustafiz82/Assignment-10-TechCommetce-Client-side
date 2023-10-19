import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
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

	console.log(Rating);

	useEffect(() => {
		fetch(`http://localhost:5144/products/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.Name.value;
		const Brand = form.Brand.value;
		const Type = form.Type.value;
		const ImageUrl = form.ImageUrl.value;
		const Price = form.Price.value;
		const Description = form.Description.value;
		const Rating = form.Rating.value;

		const formData = {
			Rating,
			Type,
			name,
			Brand,
			ImageUrl,
			Price,
			Description,
		};
		console.log(formData);

		fetch(`http://localhost:5144/products/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	// document.getElementById("BrandSelect").value = BrandName
	// document.getElementById("RatingSelect").value =Rating
	// console.log(BrandSelect);
	return (
		<div>
			<h1>Update Product</h1>

			<form
				onSubmit={handleSubmit}
				className="form-control "
			>
				<div className="grid">
					<span>Name</span>
					<input
						type="text"
						name="Name"
						placeholder="Product Name"
						className="input input-bordered w-full"
						defaultValue={ProductName}
					/>

					<span>Image url</span>
					<input
						type="text"
						name="ImageUrl"
						placeholder="Photo url"
						className="input input-bordered "
						defaultValue={imageUrl}
					/>

					<span>Select Brand</span>
					<select
						name="Brand"
						className="select select-ghost w-full input-bordered"
						id="BrandSelect"
					>
						<option
							selected={BrandName == "Apple" ? "selected" : false}
							value="Apple"
						>
							Apple
						</option>
						<option
							selected={
								BrandName == "Samsung" ? "selected" : false
							}
							value="Samsung"
						>
							Samsung
						</option>
						<option
							selected={BrandName == "Sony" ? "selected" : false}
							value="Sony"
						>
							Sony
						</option>
						<option
							selected={
								BrandName == "Google" ? "selected" : false
							}
							value="Google"
						>
							Google
						</option>
						<option
							selected={BrandName == "Intel" ? "selected" : false}
							value="Intel"
						>
							Intel
						</option>
						<option
							selected={BrandName == "LG" ? "selected" : false}
							value="LG"
						>
							LG
						</option>
					</select>

					<span>Product Type</span>

					<input
						type="Text"
						name="Type"
						placeholder="Product Type"
						className="input input-bordered w-full"
						defaultValue={Type}
					/>

					<span>Price</span>
					<input
						type="Number"
						name="Price"
						placeholder="Product Price"
						defaultValue={Price}
						className="input input-bordered w-full"
					/>
				</div>

				<div>
					<span>Product Raing</span>
					<select
						name="Rating"
						className="select select-ghost w-full input-bordered"
						id="RatingSelect"
					>
						<option
							selected={ProductRating == 1 ? "selected" : false}
							value="1"
						>
							1 star
						</option>
						<option
							selected={ProductRating == 2 ? "selected" : false}
							value="2"
						>
							2 star
						</option>
						<option
							selected={ProductRating == 3 ? "selected" : false}
							value="3"
						>
							3 star
						</option>
						<option
							selected={ProductRating == 4 ? "selected" : false}
							value="4"
						>
							4 star
						</option>
						<option
							selected={ProductRating == 5 ? "selected" : false}
							value="5"
						>
							5 star
						</option>
					</select>
					{/* <h1>product Rating:</h1> */}
				</div>
				<span>Short Decription</span>
				<textarea
					name="Description"
					id=""
					className="input-bordered input h-20"
					placeholder="write about the product detail"
					defaultValue={ShortDescription}
				></textarea>

				<button
					className="btn"
					type="submit"
				>
					Update Product
				</button>
			</form>
		</div>
	);
};

export default UpdateProduct;
