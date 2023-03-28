import { React, useState } from 'react'
import "./style.css"

export default function Home() {

    return (
        <div className='home'>
            <div className='week'>
                <h1>Study Planner</h1>
                <h2>Weekly</h2>
            </div>
            <div className='weekday'> 
                <ul className='weekday'>
                    <li>
                        <div className='card'>
                            <h2>Monday</h2>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <h2>Tuesday</h2>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <h2>Wedsday</h2>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <h2>Thursday</h2>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <h2>Friday</h2>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <h2>Saturday</h2>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <h2>Sunday</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}