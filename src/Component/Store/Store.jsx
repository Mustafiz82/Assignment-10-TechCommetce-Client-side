import React from 'react';
import image from '../../assets/h4-img-2.jpg'

const Store = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className= 'w-1/2 bg-black text-white'>

            </div>
            <div className='w-1/2'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Store;