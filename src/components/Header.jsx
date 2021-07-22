import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import HomePage from './HomePage';
import Contacts from './Contacts';
import  MyProjects from './MyProjects'

export default function Header() {
    const [ShowMenu, setShowMenu] = useState(false)

    return (
        <Router>
            <Nav>
                <Header__right>
                    <Link to='/'><a href="#" className='name__logo'>Omar Chatin</a></Link>
                </Header__right>

                <Header__left Show={ShowMenu} className='header__left'>
                    <Link to='/'><li><a href="">home</a></li></Link>
                    <Link to='/About'><li><a href="">about me</a></li></Link>
                    <Link to='/MyProjects'><li><a href="">my projects</a></li></Link>
                    <Link to='/Contacts'><li><a href="">contacts</a></li></Link>
                </Header__left>
                <div className="burgerMenu" onClick={()=>{setShowMenu(!ShowMenu)}}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                </div>
            </Nav>


            <Switch>
                <Route path='/Contacts'>
                      <Contacts /> 
                </Route>                
                <Route path='/MyProjects'>
                      <MyProjects />
                </Route>                
                <Route path='/About'>
                    <About />
                </Route>
                <Route path='/'>
                    <HomePage/>
                </Route>

            </Switch>
        </Router>
    )
}


// styles /////////////////////////////////////////////////////
export const Nav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background-color: white;
    padding-bottom: 5px;

    .name__logo{
        background-color: #C8DBAE;
        padding: 10px;
        border-radius: 0 10px 0 10px;
    }
    a{
        color: black;
        text-decoration: none;
        font-size: 1.3rem;
        font-family: sans-serif;
        text-transform: capitalize;
        transition: all .4s ease-in-out;
    }

    .burgerMenu{
        display: none;
        z-index: 999;
        cursor: pointer;
        .line{
            width: 45px;
            height: 8px;
            background-color: #C8DBAE;
            margin: 5px;
            border-radius: 5px;
        }
    }

    @media (max-width : 1000px){
        padding: 15px;
        .burgerMenu{
            display: block;
        }
        .name__logo{
            font-size: 1rem;
            background-color: white;
        }
    }
`
export const Header__right = styled.div`
`
export const Header__left = styled.div`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 50%;

    @media (max-width: 1000px){
        flex-direction: column;
        position: absolute;
        transform: translate(-50%,-50%);
        transition: all .4s ease-in-out;
        top:  ${(props)=>props.Show ? '50%' : '-100%'};
        left: ${(props)=>props.Show ? '50%' : '50%'};
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 99;

        justify-content: space-evenly;
    }
`