import { React, useState } from 'react'
import "./style.css"

export default function Home() {

    return (
        <div className='home'>
            <div className='week'>
                <h1>Study Planner</h1>
                <h2>Weekly</h2>
            </div>
            <div className='text-center'>
                <div className='weekday'> 
                {/* weekdays form it should be aline in a line */}
                {/* weekdays from is done they are collepsing in row */}
                {/* should work on adding elements to the each todo list */}
                {/* calling API at the front page */}
                    <div className='card'>
                        <h2>Monday</h2>
                        <textarea>
                            
                        </textarea>
                    </div>
                    <div className='card'>
                        <h2>Tuesday</h2>
                        <textarea>
                            
                        </textarea>
                    </div>
                    <div className='card'>
                        <h2>Wednesday</h2>
                        <textarea>

                        </textarea>
                    </div>
                    <div className='card'>
                        <h2>Thursday</h2>
                        <textarea>
                            
                        </textarea>
                    </div>
                    <div className='card'>
                        <h2>Friday</h2>
                        <textarea>
                            
                        </textarea>
                    </div>
                    <div className='card'>
                        <h2>Saturday</h2>
                        <textarea>
                            
                        </textarea>
                    </div>
                    <div className='card'>
                        <h2>Sunday</h2>
                        <textarea>
                            
                        </textarea>
                </div>
            </div>
            </div>
        </div>
    )
}