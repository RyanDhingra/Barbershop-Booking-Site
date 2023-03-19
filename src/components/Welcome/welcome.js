import React, { useState } from 'react';
import "./welcome.css";
import { useEffect } from 'react';
import icon1 from "../../assets/optionIcon1.png"
import icon2 from "../../assets/optionIcon2.png"
import icon3 from "../../assets/optionIcon3.png"

function Welcome(props) {

    const [currApts, setCurrApts] = useState({});

    /*useEffect(() => {
        const requestOptions = {
            method: 'GET',
            mode: 'no-cors',
            headers: { 
                'Content-Type': 'application/json'
            },
        };
        fetch('http://127.0.0.1:5000/customer', requestOptions).then(() => console.log('Success'))
    }, []);*/

    const apts = [
        {
            name: 'Haircut + Beard',
            date: 'Jan 15, 2023',
            time: '1PM to 2PM',
            status: 'Previous'
        },
        {
            name: 'Haircut',
            date: 'Feb 25, 2023',
            time: '4PM to 5PM',
            status: 'Previous'
        },
        {
            name: 'Haircut + Beard',
            date: 'Mar 15, 2023',
            time: '1PM to 2PM',
            status: 'Upcoming'
        }
    ]

    return (
        <div className='welcome-page'>
            <img className='bg-img' src='https://cdn.discordapp.com/attachments/1008571126177345636/1073486466270904421/Etrigan_modern_day_empty_barbershop_with_multiple_seats_mirrors_ce4a7a9c-a2bb-4016-8ff3-917c6d59d605.png' alt='Barbershop'/>
            <div style={{display: 'flex', width: '100%', height: '80vh', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0}}>
                <div className='p1-ls' style={{width: '100%', height: '100%'}}>
                    <h1 className='logo'>FXDED</h1>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <button>
                                <h1 className='login'>Sign In</h1>
                            </button>
                            <div style={{margin: '0 5% 0 5%'}}></div>
                            <button>
                                <h1 className='login'>Register</h1>  
                            </button>
                    </div>
                </div>
                <div className='p2-rs' style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='apt-cont'>
                        <div className='apt-top'>
                            <h1 className='apt-title'>My Appoinments</h1>
                        </div>
                        <div className='apt-info'>
                            <div className='status-info'>
                                {apts.map((apt) => (
                                    <h1 className='details'>{apt.status}: {apt.name}</h1>
                                ))}
                            </div>
                            <div className='date-info'>
                                {apts.map((apt) => (
                                    <h1 className='details'>{apt.date}</h1>
                                ))} 
                            </div>
                            <div className='time-info'>
                                {apts.map((apt) => (
                                    <h1 className='details'>{apt.time}</h1>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-panel'>
                <div className='card-cont'>
                    <div className='card'>
                        <a className='card-link' href='#gallery' >
                            <h1 style={{marginTop: '0'}}>Gallery</h1>
                            <img className='option-icon' src={icon1} alt='Gallery'/>
                        </a>
                    </div>
                    <div className='card'>
                        <a className='card-link' href='#bookings' >
                            <h1 style={{marginTop: '0'}}>Book Now</h1>
                            <img className='option-icon' src={icon2} alt='Book Now'/>
                        </a>
                    </div>
                    <div className='card'>
                        <a className='card-link' href='#contact' >
                            <h1 style={{marginTop: '0'}}>Contact</h1>
                            <img className='option-icon' src={icon3} alt='Contact'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

/*{apts.map((apt) =>( 
                                <div className='apt'>
                                    <p className='details'>{apt.status}:</p>
                                    <p className='details'>{apt.name}</p>
                                    <p className='details'>{apt.date}</p>
                                    <p className='details'>{apt.time}</p>
                                </div>
                            ))}*/