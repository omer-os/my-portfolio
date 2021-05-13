import {useState} from 'react'
function Nav() {
    const [ShowNav, setShowNav] = useState(false)

    const showNavFun = (e)=>{
        e.preventDefault()
        setShowNav(!ShowNav)
    }

    return (
        <nav>
            <ul className='navBarUl' id={ShowNav ? 'showNavBar' : 'hideNavBar'}>
                <li><a href="">Home page</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
            <div className="showNavBtn" onClick={showNavFun}>
                <div className="line" style={ShowNav ? {'transform':'translateY(160%) rotate(45deg)'} : {}}></div>
                <div className="line" style={ShowNav ? {'opacity' : '0'} : {}}></div>
                <div className="line" style={ShowNav ? {'transform':'translateY(-150%) rotate(-50deg)'} : {}}></div>
            </div>
        </nav>
    )
}
// 'transform' : 'rotate(45deg)','transformOrigin':'center'

export default Nav;