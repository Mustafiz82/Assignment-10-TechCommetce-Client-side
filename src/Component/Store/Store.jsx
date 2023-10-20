import React from 'react';
import image from '../../assets/h4-img-2.jpg'

const Store = () => {
    return (
        <div className='flex flex-col md:flex-row my-20'>
            <div className= 'w-1/2 flex justify-center items-center gap-5 bg-black text-white '>
                <div className='w-3/4 space-y-5'>
                <h1 className='text-4xl'>This is Our Store! Together We Shine.</h1>
                <p>Welcome to our store, where we believe in the power of unity. Together, we illuminate your shopping journey, making it a memorable experience filled with exceptional products and service</p>
            <button className='btn '>Shop Now</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Store;