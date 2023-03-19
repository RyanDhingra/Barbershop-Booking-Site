import React, { useEffect, useState } from 'react';
import Calendar from './calendar';
import ViewDate from './viewDate';
import './booking.css'

function Bookings() {
    const [date, setDate] = useState(null);

    useEffect(() => {
        console.log(date)
    }, [date])

    return (
        <div className='bookings-page' id='bookings'>
            <Calendar clicked={date} setDate={setDate}/>
            <ViewDate date={date} reset={setDate}/>
        </div>
    );
}

export default Bookings;