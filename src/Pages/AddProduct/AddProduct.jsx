import React from "react";

const AddProduct = () => {
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

		fetch("http://localhost:5144/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	return (
		<div className="w-1/2 mx-auto">
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
					/>

					<span>Image url</span>
					<input
						type="text"
						name="ImageUrl"
						placeholder="Photo url"
						className="input input-bordered "
					/>

					<span>Select Brand</span>
					<select
						name="Brand"
						className="select select-ghost w-full input-bordered"
						id=""
					>
						<option value="Apple">Apple</option>
						<option value="Samsung">Samsung</option>
						<option value="Sony">Sony</option>
						<option value="Google">Google</option>
						<option value="Intel">Intel</option>
						<option value="LG">LG</option>
					</select>

					<span>Product Type</span>
					<select
						name="Type"
						className="select select-ghost w-full input-bordered"
						id=""
					>
						<option value="Phone">Phone</option>
						<option value="Laptop">Laptop</option>
						<option value="Television">Television</option>
						<option value="HeadPhone">HeadPhone</option>
						<option value="fridge">fridge</option>
					</select>

					<span>Price</span>
					<input
						type="Number"
						name="Price"
						placeholder="Product Price"
						className="input input-bordered w-full"
					/>
				</div>

				<div>
					<span>Product Raing</span>
					<select
						name="Rating"
						className="select select-ghost w-full input-bordered"
						id=""
					>
						<option value="1">1 star</option>
						<option value="2">2 star</option>
						<option value="3">3 star</option>
						<option value="4">4 star</option>
						<option value="5">5 star</option>
					</select>
					{/* <h1>product Rating:</h1> */}
					
				</div>
				<span>Short Decription</span>
				<textarea
					name="Description"
					id=""
					className="input-bordered input h-20"
					placeholder="write about the product detail"
				></textarea>

				<button
					className="btn"
					type="submit"
				>
					Add Product
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
