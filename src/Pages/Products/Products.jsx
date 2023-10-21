import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Product from "../Product/Product";
import Advertisement from "../../Component/Advertisement/Advertisement";

const Products = () => {
	const { Name } = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch(`https://techcommerce-server.vercel.app/products`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);
	const filteredProducted = product.filter((item) => item.BrandName == Name);

	return (
		<div>

            <Advertisement></Advertisement>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
				{filteredProducted.map((item) => (
					<Product
						item={item}
						key={item._id}
					></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
