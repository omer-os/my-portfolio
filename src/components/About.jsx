import React from 'react'
import {AboutMe} from '../styles/style.jsx'

function About({Theme}) {
    return (
        <>
            <AboutMe name="About" Theme={Theme}>
                <h1 style={{'textAlign': 'center'}}>About Me</h1>
                
                <br/><br/>
                
                <div className="aboutMeTop aboutMeDiv">
                    I’m studying dental Industry in al kitab university in iraq/kirkuk .
                </div>
                
                <div className="aboutMeBottom aboutMeDiv">
                    I love building websites and share my knowledge with everyone ! 
                </div>
            </AboutMe>
        </>
    )
}


export default About;