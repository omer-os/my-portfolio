import React from 'react'
import {Firstsection, Hr} from '../styles/style.jsx'
import me1 from '../imgs/me1.png'

function FirstSection({Theme}) {
    return (
        <>
            <Firstsection Theme={Theme} name="Home" className="first-section">
                <img src={me1} className='me1' alt=""/>
                <div className="p1">👋 hi there , i’m omar chatin</div>
                <div className="p2">i’m ux/ui desginer and front end web developer</div>
                <Hr Theme={Theme}></Hr>
            </Firstsection>
        </>
    )
}

export default FirstSection;