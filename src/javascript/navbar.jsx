import {useState} from 'react'
function Nav() {
    const [ShowNav, setShowNav] = useState(false)

    const showNavFun = (e)=>{
        e.preventDefault()
        setShowNav(!ShowNav)
    }

    return (
        <nav>
            <ul className='navBarUl' style={ShowNav ? {
                'display':'flex'
            }: {'':''}}>
                <li><a href="">Home page</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
            <div className="showNavBtn" onClick={showNavFun}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}

export default Nav;