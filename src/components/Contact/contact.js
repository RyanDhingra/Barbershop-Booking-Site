import React from 'react';
import "./contact.css"

function Contact() {
    return (
        <div className='contact-page' id='contact'>
            <div className='contact-ls' data-aos='fade' data-aos-duration='1500'>
                <h1 className='contact-title'>Contact:</h1>
                <input className='email' placeholder='youremail@address.com'/>
                <textarea className='msg' placeholder='Your Message'/>
                <button className='send'>Send</button>
            </div>
            <div className='contact-rs'  data-aos='fade' data-aos-duration='1500'>
                <img className='map' src='https://www.google.com/maps/d/thumbnail?mid=1bF682wNKzuV0SszyD9rYE8D02e0&hl=en' alt='Map'/>
                <div className='location'>
                    <h3 className='location-info'>1 Park Lane, Toronto, Ontario, M2M 1M1</h3>   
                </div>
            </div>
        </div>
    );
}

export default Contact;