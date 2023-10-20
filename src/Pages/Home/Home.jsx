import React from "react";
import BrandCategory from "../../Component/BrandCategory/BrandCategory";
import Banner from "../../Component/Header/Banner";
import Fetured from "../../Component/Featued Product/Fetured";
import Store from "../../Component/Store/Store";

const Home = () => {
	return (
		<div>
            <Banner></Banner>
			<BrandCategory></BrandCategory>
			<Store></Store>
			<Fetured></Fetured>
			
		</div>
	);
};

export default Home;
