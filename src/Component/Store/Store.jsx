import React from 'react';
import image from '../../assets/h4-img-2.jpg'

const Store = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row my-10  md:my-20 '>
            <div className= 'w-full text-center md:text-left px-5 md:w-1/2 flex  justify-center items-center gap-5 bg-black text-white py-10'>
                <div className=' w-full md:w-3/4 space-y-5'>
                <h1 className='text-4xl'>This is Our Store! Together We Shine.</h1>
                <p className=''>Welcome to our store, where we believe in the power of unity. Together, we illuminate your shopping journey, making it a memorable experience filled with exceptional products and service</p>
                <div className='flex justify-center md:justify-start'>
                <button className='btn '>Shop Now</button>

                </div>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <img src={image} className='h-full object-cover' alt="" />
            </div>
        </div>
    );
};

export default Store;