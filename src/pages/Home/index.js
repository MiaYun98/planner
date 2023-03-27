import { React, useState } from 'react'
import "./style.css"

export default function Home() {

    return (
        <div className='home'>
            <div className='week'>
                <h1>Study Planner</h1>
                <h2>Weekly</h2>
            </div>
            <div className='week'> 
                <h2>Monday</h2>
                <h2>Tuesday</h2>
                <h2>Wendsday</h2>
                <h2>Thursday</h2>
                <h2>Friday</h2>
                <h2>Saturday</h2>
                <h2>Sunday</h2>
            </div>
        </div>
    )
}