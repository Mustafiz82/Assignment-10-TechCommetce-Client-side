import React, { useEffect, useState } from 'react';
import Cart from './Cart';


const Carts = () => {

    const [product , setProduct ] = useState([])
    
    useEffect(() =>{
        fetch(`https://techcommerce-server-e7p8chb3l-mustafiz82.vercel.app/Cart`)
        .then(res => res.json())
        .then(data => setProduct(data))

    },[])

    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                product.map(item => <Cart item={item} key={item._id}></Cart>)
            }
        </div>
    );
};

export default Carts;