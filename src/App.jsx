import React,{useState} from 'react'
import {Body, NavBar, Firstsection, Hr} from './styles/style.jsx'
import './App.css'
import moon from './imgs/moon.png'
import sun from './imgs/sun.png'
import me1 from './imgs/me1.png'

function App() {
  const [Theme, setTheme] = useState(true)

  return (
    <Body Theme={Theme}>
      <NavBar className='NavBar' Theme={Theme}>
        <div className="left-nav">
          <img className={Theme ? 'change-theme' : ''} src={moon} onClick={()=>setTheme(!Theme)} alt=""/>
          <img className={!Theme ? 'change-theme' : ''} src={sun} onClick={()=>setTheme(!Theme)} alt=""/>
        </div>
        <div className="right-nav">
          <li><a href="">home</a></li>
          <li><a href="">about</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">contactme</a></li>
        </div>
      </NavBar>


      <Firstsection Theme={Theme} className="first-section">
        <img src={me1} className='me1' alt=""/>
        <div className="p1">👋 hi there , i’m omar chatin</div>
        <div className="p2">i’m ux/ui desginer and front end web developer</div>
        <Hr Theme={Theme}></Hr>
      </Firstsection>

      <div className="showMenuBar">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>

    </Body>
  )
}

export default App
