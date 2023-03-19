import React, { useState } from 'react';
import "./viewDate.css"

function ViewDate({ date, reset }) {
    const [timeslot, setTimeslot] = useState(false);
    const timeslots = [
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(1)} className={timeslot === 1 ? 'timeslot selected':'timeslot'}>10am - 11am</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(2)} className={timeslot === 2 ? 'timeslot selected':'timeslot'}>11am - 12pm</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(3)} className={timeslot === 3 ? 'timeslot selected':'timeslot'}>12pm - 1pm</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(4)} className={timeslot === 4 ? 'timeslot selected':'timeslot'}>1pm - 2pm</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(5)} className={timeslot === 5 ? 'timeslot selected':'timeslot'}>2pm - 3pm</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(6)} className={timeslot === 6 ? 'timeslot selected':'timeslot'}>3pm - 4pm</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(7)} className={timeslot === 7 ? 'timeslot selected':'timeslot'}>4pm - 5pm</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(8)} className={timeslot === 8 ? 'timeslot selected':'timeslot'}>5pm - 6pm</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(9)} className={timeslot === 9 ? 'timeslot selected':'timeslot'}>6pm - 7pm</div></div>,
        <div data-aos='fade' data-aos-duration='1500'><div onClick={() => handleTime(10)} className={timeslot === 10 ? 'timeslot selected':'timeslot'}>7pm - 8pm</div></div>
    ]
    const [checked, setChecked] = useState(false);

    const handleCheck = (num) => {
        console.log("CHECK:" + num)
        if (!checked) {
            setChecked(num);
        } else {
            if (checked === num) {
                setChecked(false);
            } else {
                setChecked(num)
            }
        }
    }

    const handleTime = (num) => {
        console.log("TIME:" + num)
        if (!timeslot) {
            setTimeslot(num);
        } else {
            if (timeslot === num) {
                setTimeslot(false);
            } else {
                setTimeslot(num)
            }
        }
    }

    return (
        <div className={date ? 'date-viewer': 'date-viewer hidden'}>
            <div className='view-date' data-aos='fade' data-aos-duration='1500'>
                <h1 className='current-date'>Available Appointments: {date?.month} {date?.date}, {date?.year}</h1>
            </div>
            <div style={{width: '100%', height: '70vh', display: 'flex'}}>
                <div className='times'>
                    {timeslots}
                </div>
                <div className='book'>
                    <div className='types'>
                        <div className='type-cont' data-aos='fade' data-aos-duration='1500'>
                            <div>
                                <h1 className='type'>
                                    Haircut + Beard
                                </h1>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5%'}}>
                                <h1 className='type'>
                                    $45.00
                                </h1>
                                <div className="checkbox-wrapper-31">
                                    <input onClick={() => handleCheck(1)} checked={(checked === 1) ? "true":null} type="checkbox" />
                                        <svg viewBox="0 0 35.6 35.6">
                                        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                        <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='type-cont' data-aos='fade' data-aos-duration='1500'>
                            <h1 className='type'>
                                Haircut + Beard
                            </h1>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5%'}}>
                                <h1 className='type'>
                                    $40.00
                                </h1>
                                <div className="checkbox-wrapper-31">
                                    <input onClick={() => handleCheck(2)} checked={checked === 2 ? "true": null} type="checkbox" />
                                        <svg viewBox="0 0 35.6 35.6">
                                        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                        <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='type-cont' data-aos='fade' data-aos-duration='1500'>
                            <h1 className='type'>
                                Lineup
                            </h1>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5%'}}>
                                <h1 className='type'>
                                    $20.00
                                </h1>
                                <div className="checkbox-wrapper-31">
                                    <input onClick={() => handleCheck(3)} checked={checked === 3 ? "true": null} type="checkbox" />
                                        <svg viewBox="0 0 35.6 35.6">
                                        <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                        <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                        <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='confirm' data-aos='fade' data-aos-duration='1500'>
                        <button className='confirm-btn'>Confirm Booking</button>
                        <button onClick={() => reset(null)} className='cancel-btn'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewDate;