import React from 'react'
import {Projects, Proj} from '../styles/style.jsx'
// all the projects data comes from App.jsx and stores in {ProjectList} state. 


function MyProjects({ProjectList,Theme}) {
    return (
        <>
            <Projects name="Projects" Theme={Theme}>
                <h1 style={{'textAlign': 'center','width':'100%','fontSize':'6vmin'}}>My Projects</h1>

                    {ProjectList.map(i=>{
                    if (i.name.length >= 20){
                        i.name = i.name.slice(0,18) + ' ...'
                    }
                    return (
                        <Proj key={i.id}>
                        <div className="projTitle">{i.name}</div>
                        <div className="projBody">Created at {i.created_at.slice(0,10)}</div>
                        <a href={i.html_url} className="githubLink" >github Link</a>
                        </Proj>
                    )})}
            </Projects>
        </>
    )
}

export default MyProjects;