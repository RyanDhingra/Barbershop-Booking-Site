import React, { useState } from 'react';
import './calendar.css'
import LeftArrow from '../../assets/arrow_left.png'
import RightArrow from '../../assets/arrow_right.png'

function Calendar({ clicked, setDate }) {
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    const date = new Date();
    const startMonth = date.getMonth()
    const startYear = date.getFullYear()
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dayCount = getDays(new Date().getFullYear(), month + 1);
    const days = []

    const handleSelectedDate = (date) => {
        setDate({date: date, month: months[month], year: year})
    }

    const generateDays = (count) => {
        for (let i = 1; i <= count; i++) {
            days.push(<div data-aos='fade' data-aos-duration='1500'><div className='day' onClick={() => handleSelectedDate(i)} key={i}>{i}</div></div>);
        }

        for (let i = 1; i <= (36 - count); i++) {
            days.push(<div className='day-placeholder' key={"Placeholder " + i}></div>);
        }

        return days
    }

    const nextMonth = () => {
        const newMonth = month + 1

        if (newMonth % 12 === 0) {
            setYear(year + 1)
        }

        setMonth(newMonth % 12)
    }

    const prevMonth = () => {
        if (month > startMonth && year === startYear) {
            setMonth(month - 1)
        } else if (month === 0 && year > startYear) {
            setYear(year - 1)
            setMonth(11)
        } else if (month !== 0 && year > startYear) {
            setMonth(month - 1)
        }
    }

    return (
        <div className={clicked ? 'calendar hidden':'calendar'} style={{position: 'absolute'}}>
            <div className='month-select' data-aos='fade' data-aos-duration='1500'>
                <img className='arrow' onClick={prevMonth} src={LeftArrow} alt='Previous Month'/>
                <h1 className='month'>{months[month] + " " + year}</h1>
                <img className='arrow' onClick={nextMonth} src={RightArrow} alt='Next Month'/>
            </div>
            <div className='days'>
                {generateDays(dayCount)}
            </div>
        </div>
    );
}

export default Calendar;