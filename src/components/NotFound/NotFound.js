import React from 'react';
import NotFoundPic from '../../images/others/error-page-not-found.jpg'

const NotFound = () => {
    return (
        <div className='vh-100'>
           <img src={NotFoundPic} alt="" />
        </div>
    );
};

export default NotFound;