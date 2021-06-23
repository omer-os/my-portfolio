import React,{useState} from 'react'
import {Body,ShowMenuBar , Rightnav, NavBar, Firstsection, Hr} from './styles/style.jsx'

import './App.css'
import moon from './imgs/moon.png'
import sun from './imgs/sun.png'
import me1 from './imgs/me1.png'

function App() {
  const [Theme, setTheme] = useState(true)
  const [ShowNav, setShowNav] = useState(false)

  return (
    <Body Theme={Theme}>
      <NavBar className='NavBar' Theme={Theme}>
        <div className="left-nav">
          <img className={Theme ? 'change-theme' : ''} src={moon} onClick={()=>setTheme(!Theme)} alt=""/>
          <img className={!Theme ? 'change-theme' : ''} src={sun} onClick={()=>setTheme(!Theme)} alt=""/>
        </div>
        <Rightnav ShowNav={ShowNav} className="right-nav">
          <li><a href="">home</a></li>
          <li><a href="">about</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">contact me</a></li>
        </Rightnav>
      </NavBar>

      <Firstsection Theme={Theme} className="first-section">
        <img src={me1} className='me1' alt=""/>
        <div className="p1">👋 hi there , i’m omar chatin</div>
        <div className="p2">i’m ux/ui desginer and front end web developer</div>
        <Hr Theme={Theme}></Hr>
      </Firstsection>

      <ShowMenuBar onClick={()=>{setShowNav(!ShowNav)}}>
        <div className="line1"></div>
        <div className="line2"></div>
      </ShowMenuBar>
    </Body>
  )
}

export default App;