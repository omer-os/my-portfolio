import React,{useState} from 'react'
import {Body, ContactWithMe, Proj, Projects, AboutMe,ShowMenuBar , Rightnav, NavBar, Firstsection, Hr} from './styles/style.jsx'

import './App.css'
import moon from './imgs/moon.png'
import sun from './imgs/sun.png'
import me1 from './imgs/me1.png'
import component6 from './imgs/component6.png'
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

      <AboutMe>
        <h1 style={{'textAlign': 'center'}}>About Me</h1>
        <br/><br/>
        <div className="aboutMeTop aboutMeDiv">
          I’m studying dental Industry in al kitab university in iraq/kirkuk .
        </div>
        <div className="aboutMeBottom aboutMeDiv">
          I love building websites and share my knowledge with everyone ! 
        </div>
      </AboutMe>
      <Hr Theme={Theme}></Hr>
      <Projects>
        <h1 style={{'textAlign': 'center','width':'100%','font-size':'6vmin'}}>My Projects</h1>

        <Proj>
          <div className="projTitle">Note Keeper App</div>
          <div className="projBody">Created using reactjs and styled components</div>
          <div className="githubLink">github Link</div>
        </Proj>
        <Proj>
          <div className="projTitle">Note Keeper App</div>
          <div className="projBody">Created using reactjs and styled components</div>
          <div className="githubLink">github Link</div>
        </Proj>
        <Proj>
          <div className="projTitle">Note Keeper App</div>
          <div className="projBody">Created using reactjs and styled components</div>
          <div className="githubLink">github Link</div>
        </Proj>
        <Proj>
          <div className="projTitle">Note Keeper App</div>
          <div className="projBody">Created using reactjs and styled components</div>
          <div className="githubLink">github Link</div>
        </Proj>
      </Projects>

      <Hr Theme={Theme}></Hr>
      <ContactWithMe>
        <h1 style={{'textAlign': 'center','width':'100%','font-size':'6vmin'}}>Contacts</h1>

        <div className="contact1">
          <h1 style={{'textAlign': 'center','width':'100%','font-size':'3.5vmin', 'margin':'40px 0','color':'gray'}} className="contact1-1">
            Follow Me On
          </h1>
          <div className="contact1-2">
            <div className="contact1-2-1item">
              <div className="ContactItemTop">stackoverflow</div>
              <div className="ContactItemBottom"><img src={component6} alt=""/></div>
            </div>
            <div className="contact1-2-1item">
              <div className="ContactItemTop">telegram</div>
              <div className="ContactItemBottom"><img src={component6} alt=""/></div>
            </div>
            <div className="contact1-2-1item">
              <div className="ContactItemTop">instagram</div>
              <div className="ContactItemBottom"><img src={component6} alt=""/></div>
            </div>
            <div className="contact1-2-1item">
              <div className="ContactItemTop">github</div>
              <div className="ContactItemBottom"><img src={component6} alt=""/></div>
            </div>
          </div>
        </div>
      </ContactWithMe>
    </Body>
  )
}

export default App;