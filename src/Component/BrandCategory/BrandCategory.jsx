import React, { useEffect, useState } from "react";
import BrandName from "./BrandName";

const BrandCategory = () => {
	const [brand, setBrand] = useState([]);
	useEffect(() => {
		fetch("brand.json")
			.then((res) => res.json())
			.then((data) =>setBrand(data));
	}, []);
	return (
		<div>
			<h1 className="text-5xl my-10 text-center">Select Brand </h1>
			<div className="grid grid-cols-3 gap-5">
                {
                    brand.map(item => <BrandName item={item} key={item.id}></BrandName>)
                }
            </div>
		</div>
	);
};

export default BrandCategory;
