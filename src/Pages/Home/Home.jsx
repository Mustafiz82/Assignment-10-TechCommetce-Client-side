import React from "react";
import BrandCategory from "../../Component/BrandCategory/BrandCategory";
import Banner from "../../Component/Header/Banner";
import Fetured from "../../Component/Featued Product/Fetured";

const Home = () => {
	return (
		<div>
            <Banner></Banner>
			<BrandCategory></BrandCategory>
			<Fetured></Fetured>
		</div>
	);
};

export default Home;
