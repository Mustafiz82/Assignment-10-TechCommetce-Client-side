import React from 'react';
import image1 from "../../assets/h1-product-1.jpg"
import image2 from "../../assets/h1-product-4-150x150.jpg"
import image3 from "../../assets/h1-product-9.jpg"
import image4 from "../../assets/h1-slide-2-img-1.png"
import image5 from "../../assets/virtual-product-1-150x150.jpg"
import image6 from "../../assets/h2-product-8-150x150.jpg"
import Rating from 'react-rating';



const Fetured = () => {
    return (
        <div>
            <div>
			<div className="card  bg-base-100 shadow-xl">
				<figure>
					<img
						src={image1}
						alt="Shoes"
                        className="w-40 h-40 object-cover"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
                    Apple MacBook Pro
					</h2>
                    <div className="card-actions justify-left">
						<div className="badge badge-outline">Apple</div>
						<div className="badge badge-outline">Laptop</div>
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
                    initialRating="5"
                    readonly
				/>
                <p>price : $999</p>
                    </div>
                    
					
				</div>
			</div>
		</div>
        </div>
    );
};

export default Fetured;