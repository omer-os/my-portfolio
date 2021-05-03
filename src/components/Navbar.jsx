import React from 'react'
import {useState} from 'react'
export default function Navbar() {

    const [ShowMenuStyle, setShowMenuStyle] = useState(false)
    const showMenuBar = (e)=>{
        e.preventDefault()
        setShowMenuStyle(!ShowMenuStyle)
    }


    return (
        <nav>
            <div className="leftNav">
                <div className="leftNavText">omar chatin</div>
            </div>
            <div className="rightNav" id={ShowMenuStyle ? 'showMenuList' : 'hideMenuList'}>
                <ul className='rightNavUl'>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contacts</a></li>
                </ul>
            </div>
            <div className="menuBarBtn" onClick={showMenuBar}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}
