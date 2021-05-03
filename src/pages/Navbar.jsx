import React from 'react'
import {useState} from 'react'

export default function Navbar() {

    const [ShowMenuStyle, setShowMenuStyle] = useState(false)
    /*
        | | | | | |
        | | | | | |
        V V V V V V

     if this is true : 
        the nav bar will slide right 
        and the menu bar btn will turn into X
     if this is false :
        it will slide left
    */

        
    const showMenuBar = (e)=>{
        e.preventDefault()
        setShowMenuStyle(!ShowMenuStyle)
    }

    const rotateFirstLine = {'transform':'translate(0px,-10px) rotate(40deg)'}
    const rotateLastLine = {'transform':'translate(0px,10px) rotate(-40deg)'}
    const hideMiddleLine ={'opacity' : '0'}
    
    return (
        <nav>
            <div className="leftNav">
                <div className="leftNavText">omar chatin</div>
            </div>

            <div className="rightNav" id={ShowMenuStyle ? 'showMenuList' : 'hideMenuList'}>
                <ul className='rightNavUl'>
                    <li><a>home</a></li>
                    <li><a>about</a></li>
                    <li><a>contacts</a></li>
                </ul>
            </div>

            <div className="menuBarBtn" onClick={showMenuBar}>
                <div className="line" style={ShowMenuStyle ? rotateLastLine : null}></div>
                <div className="line" style={ShowMenuStyle ? hideMiddleLine : null}></div>
                <div className="line" style={ShowMenuStyle ? rotateFirstLine : null}></div>
            </div>
        </nav>
    )
}
