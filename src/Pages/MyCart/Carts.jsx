import React, { useEffect, useState } from 'react';
import Cart from './Cart';


const Carts = () => {

    const [product , setProduct ] = useState([])
    
    useEffect(() =>{
        fetch(`https://techcommerce-server.vercel.app/Cart`)
        .then(res => res.json())
        .then(data => setProduct(data))

    },[])

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                product.map(item => <Cart item={item} key={item._id}></Cart>)
            }
        </div>
    );
};

export default Carts;