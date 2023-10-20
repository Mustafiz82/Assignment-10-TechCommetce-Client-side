import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const {Name} = useParams()
    const [product , setProduct ] = useState([])
    
    useEffect(() =>{
        fetch(`https://techcommerce-server-e7p8chb3l-mustafiz82.vercel.app/products`)
        .then(res => res.json())
        .then(data => setProduct(data))

    },[])
    const filteredProducted = product.filter(item => item.BrandName == Name) 

    // const {Name} = useParams()
    // console.log(Name);
    // console.log(filteredProducted);
    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                filteredProducted.map( item => <Product item={item} key={item._id}></Product>)
            }
        </div>
    );
};

export default Products;