import React from 'react';
import NotFoundPic from '../../images/others/error-page-not-found.jpg'

const NotFound = () => {
    return (
        <div className='h-100'>
           <img className='img-fluid' src={NotFoundPic} alt="" />
        </div>
    );
};

export default NotFound;