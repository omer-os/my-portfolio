import React, {useState} from 'react'
import NavBar from './main/NavBar'

export default function Layouts({children}) {
  const [Theme, setTheme] = useState("dark")
  
  
  const style={
    backgroundColor: Theme === "dark" ? "#1a1a1a" : "#fff",
    color: Theme === "dark" ? "#fff" : "#1a1a1a",
    transition: "all 0.5s ease",
    height:"100vh",
    overFlowY:"scroll"
  }
  

  return (
    <div className={`${Theme}`} style={style}>
      <NavBar setTheme={setTheme} Theme={Theme} />
        {children}
    </div>
  )
}


