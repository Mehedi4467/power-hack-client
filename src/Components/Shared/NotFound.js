import React from 'react';
import notFound from '../../Images/OtherImage/notFound.PNG';
const NotFound = () => {
    return (
        <div className=''>
            <img className='w-full max-h-[600px]' src={notFound} alt="Page Not Found" />
        </div>
    );
};

export default NotFound;