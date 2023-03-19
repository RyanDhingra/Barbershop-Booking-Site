import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className='footer-panel'>
            <div>
                <h1 className='footer-text'>Firstname Lastname</h1>
                <h1 className='footer-text'>Other Information</h1>
                <h1 className='footer-text'>Other Information</h1>
            </div>
            <div>
                <h1 className='footer-text'>Phone Number: 647-123-4567</h1>
                <h1 className='footer-text'>Other Information</h1>
                <h1 className='footer-text'>Other Information</h1>
            </div>
            <div>
                <h1 className='footer-text'>E-mail: businessemail@address.com</h1>
                <h1 className='footer-text'>Other Information</h1>
                <h1 className='footer-text'>Other Information</h1>
            </div>
        </div>
    );
}

export default Footer;