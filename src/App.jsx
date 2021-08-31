import React,{useEffect, useState} from 'react'
import {Body,ShowMenuBar , Rightnav, NavBar, Hr} from './styles/style.jsx'
import './App.css'
import moon from './imgs/moon.png'
import sun from './imgs/sun.png'
import {Link} from 'react-scroll'
import FirstSection from './components/FirstSection.jsx'
import About from './components/About.jsx'
import MyProjects from './components/MyProjects.jsx'
import ContactWithme from './components/ContactWithme.jsx'




function App() {
  const [Theme, setTheme] = useState(true)
  const [ShowNav, setShowNav] = useState(false)
  const [ProjectList, setProjectList] = useState([])  

  // fetching my projects from github api
  useEffect(()=>{
    fetch('https://api.github.com/users/omer-os/repos').then(res=>res.json()).then((data)=>{
      setProjectList(data)
    })
  },[])



  return (
    <Body Theme={Theme}>

      {/* Navigation bar starts here */}
      <NavBar className='NavBar' Theme={Theme}>
        {/* left nav */}
        <div className="left-nav">
          <img className={Theme ? 'change-theme' : ''} src={moon} onClick={()=>setTheme(!Theme)} alt=""/>
          <img className={!Theme ? 'change-theme' : ''} src={sun} onClick={()=>setTheme(!Theme)} alt=""/>
        </div>
        {/* right nav */}
        <Rightnav ShowNav={ShowNav} className="right-nav">
          <li><Link smooth={true} to="Home">home</Link></li>
          <li><Link smooth={true} to="About">about</Link></li>
          <li><Link smooth={true} to="Projects">projects</Link></li>
          <li><Link smooth={true} to="Contacts">contact with me</Link></li>
        </Rightnav>
        {/* show nav bar button in small devices */}
        <ShowMenuBar ShowNav={ShowNav} onClick={()=>{setShowNav(!ShowNav)}}>
          <div className="line1"></div>
          <div className="line2"></div>
        </ShowMenuBar>
      </NavBar>



      {/* First section starts here */}
      <FirstSection Theme={Theme}/>
      <Hr Theme={Theme} />
      
      

      {/* About section starts here */}
      <About Theme={Theme}/>
      <Hr Theme={Theme} />



      {/* Projects section starts here */}
      <MyProjects ProjectList={ProjectList} Theme={Theme}/>
      <Hr Theme={Theme} />



      {/* Contact section starts here */}
      <ContactWithme Theme={Theme}/>


    </Body>
)}

export default App;