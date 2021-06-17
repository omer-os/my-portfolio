import React,{useState} from 'react'
import {Body, NavBar} from './styles/style.jsx'
import './App.css'
import moon from './imgs/moon.png'
function App() {
  const [Theme, setTheme] = useState(true)

  return (
    <Body Theme={Theme}>
      <NavBar Theme={Theme}>
        <div className="left-nav">
          <img src={moon} onClick={()=>setTheme(!Theme)} alt=""/>
        </div>
        <div className="right-nav">
          <li><a href="">home</a></li>
          <li><a href="">about</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">contactme</a></li>
        </div>
      </NavBar>
    </Body>
  )
}

export default App
