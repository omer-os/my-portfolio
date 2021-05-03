import React from 'react'
import me from '../imgs/me.jpg'


export default function Home() {
    return (
        <div className='home'>
            <div className="homeLeft">
                <div className="homeLeftTitle">omar chatin</div>
                <div className="homeLeftBody">profitional <br/> ux/ui desginer /test</div>
                <button className="learnMoreBtn">learn More</button>
            </div>
            <div className="homeRight">
                <img className='imgOfMe' src={me} alt=""/>
            </div>
        </div>
    )
}
