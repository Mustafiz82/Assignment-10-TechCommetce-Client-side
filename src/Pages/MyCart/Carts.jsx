import React, { useEffect, useState } from 'react';
import Cart from './Cart';


const Carts = () => {

    const [product , setProduct ] = useState([])
    
    useEffect(() =>{
        fetch(`http://localhost:5144/Cart`)
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