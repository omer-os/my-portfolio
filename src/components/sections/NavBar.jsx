import React, { useEffect, useState } from 'react'
import styled  from 'styled-components'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { Link } from 'react-router-dom';


export const Body=styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 70px;
    position: sticky;
    top: 0px;
    transition: all .4s ease;
    z-index: 1000;


    @media (max-width:770px){
        padding: 10px 20px;
    }

    
    left: 0;
    background-color: white;
    color: black;



    .navLeft{
        font-size: 1.5em;
        z-index: 1000;
    }

    .navRight{
        display: flex;
        align-items: center;
        list-style: none;
        font-size: 1.3em;
        gap: 50px;
        z-index:999;

        a{
            cursor: pointer;
            transition: all .4s ease;
            :hover{
                color: red;
            }
        }

        @media (max-width:770px){
            position: fixed;
            flex-direction: column;
            background-color: white;
            transition: all .4s ease-in-out;
            left: ${props=>(
                props.ShowMenu ? "0" : "-100%")};
            width: 100%;
            height: 100%;
            top: 0;
            justify-content: center;
        }
    }






    .menuBtn{
        @media (min-width:770px){
            display:none;
        }
    }
`



export default function NavBar() {    
    const [ShowMenu, setShowMenu] = useState(false)

    return (
        <Body ShowMenu={ShowMenu}>
            <div className="navLeft">
                Omar chatin
            </div>

            <div className="navRight">
                <Link onClick={()=>setShowMenu(!ShowMenu)} to="/">Home</Link>
                <Link onClick={()=>setShowMenu(!ShowMenu)} to="/about">About</Link>
                <Link onClick={()=>setShowMenu(!ShowMenu)} to="/projects">Projects</Link>
                <Link onClick={()=>setShowMenu(!ShowMenu)} to="/contact">Contact</Link>
            </div>


            <div className="menuBtn">

                {ShowMenu ?
                            <IconButton edge="end" color="inherit" sx={{zIndex:1000}} size="large" onClick={()=>setShowMenu(!ShowMenu)}>
                                <ClearRoundedIcon fontSize="large" />
                            </IconButton> :
                            
                            <IconButton edge="end" color="inherit" sx={{zIndex:1000}} size="large" onClick={()=>setShowMenu(!ShowMenu)}>
                                <MenuRoundedIcon fontSize="large"/>
                            </IconButton>}
            </div>
        </Body>
    )
}
