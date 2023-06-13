import React from 'react';
import sleeping from '../../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping....</h2>
            <h1 className='text-primary text-center'>404</h1>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;