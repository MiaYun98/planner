import { React, useState } from 'react'
import "./style.css"

export default function Home() {

    return (
        <div className='home'>
            <div className='week'>
                <h1>Study Planner</h1>
                <h2>Weekly</h2>
            </div>
            <div className='container text-center'>
                <div className='weekday row'> 
                {/* weekdays form it should be aline in a line */}
                    <div className='card col'>
                        <h2>Monday</h2>
                    </div>
                    <div className='card col'>
                        <h2>Tuesday</h2>
                    </div>
                    <div className='card col'>
                        <h2>Wednesday</h2>
                    </div>
                    <div className='card col'>
                        <h2>Thursday</h2>
                    </div>
                    <div className='card col'>
                        <h2>Friday</h2>
                    </div>
                    <div className='card col'>
                        <h2>Saturday</h2>
                    </div>
                    <div className='card col'>
                        <h2>Sunday</h2>
                </div>
            </div>
            </div>
        </div>
    )
}