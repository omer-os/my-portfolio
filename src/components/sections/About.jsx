import { Button, Slide, Zoom } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

export const Body=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10vmin;
    padding: 20px 30px;
    margin-bottom: 40px;
`



export const AboutCard=styled.div`
    display: grid;
    width:440px;
    height: 210px;
    
    .cardImg{
        position: relative;
        height: 210px;
        filter: drop-shadow(-18px 18px #E2FFA5);
        background-size: cover;
        max-width: 190px;
    }
    .cardTitle{
        align-self: flex-end;
        font-size: clamp(1.4em, 5vmin, 5vmin);
        font-weight: 600;
    }
    .cardText{
        font-size: clamp(1.2em, 3.5vmin, 3.5vmin);
    }






    @media(min-width:550px){
        grid-template-columns: 220px 1fr;
        grid-template-rows: auto auto;
        .cardImg{grid-row: 1/3;}
        .cardTitle{padding-bottom: 20px;}
    }

    
    @media(max-width:550px){
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        height: fit-content;
        width: 250px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 20px #bdbdbd;
        background-color: white;
        .cardImg{
            background-color: red;
            max-width: 100%;
            filter: none;
        }
        .cardTitle{padding: 20px 0 10px 0;}
    }
`


export const ProjectsBtn=styled(Button)`
`


export default function About() {

    return (
        <Body>
            <Slide direction="up" in={true}>
                <AboutCard>
                    <div style={{backgroundImage:`url(${img3})`}} alt="" className="cardImg" />
                    <div className="cardTitle">study</div>
                    <div className="cardText">i’m studying dental products Industry in al kitab university in iraq/kirkuk .</div>
                </AboutCard>
            </Slide>

            
            <Slide direction="up" in={true}>
                <AboutCard>
                    <div style={{backgroundImage:`url(${img1})`}} alt="" className="cardImg" />
                    <div className="cardTitle">my Skills</div>
                    <div className="cardText">javascript
                        react.js
                        <br />jquery.js
                        <br />python and flask
                        <br />html and css
                        <br />git and github
                        <br />cmd/termminal
                    </div>
                </AboutCard>
            </Slide>

            
            <Slide direction="up" in={true}>
                <AboutCard>
                    <div style={{backgroundImage:`url(${img2})`}} alt="" className="cardImg" />
                    <div className="cardTitle">work expearince</div>
                    <div className="cardText">I do not have work experience , but I worked in many free lance projects before .</div>
                </AboutCard>
            </Slide>


            <ProjectsBtn variant="contained">see my projects</ProjectsBtn>
            
        </Body>
    )
}
