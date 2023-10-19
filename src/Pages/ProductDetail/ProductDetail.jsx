import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {id} = useParams()
    console.log(id);

    const [product , setProduct] = useState([])
    const {ProductName ,BrandName , ProductRating ,Price, ShortDescription , Type ,imageUrl ,_id } = product;
    
    useEffect(() => {
        fetch(`http://localhost:5144/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    
    return (
        <div>
            <img src={imageUrl} alt="" />
            <p>{ShortDescription}</p>
            <button className='btn '> Add to cart</button>
        </div>
    );
};

export default ProductDetail;