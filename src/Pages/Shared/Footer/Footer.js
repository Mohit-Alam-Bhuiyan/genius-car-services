import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>©{currentYear} Mohit Alam Bhuiyan. All rights reserved.</small></p>
        </footer>
    );
};

export default Footer;


