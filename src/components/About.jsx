import React from 'react'
import styled from 'styled-components'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

export const Body=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
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
        min-height: 330px;
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


export default function About() {
    return (
        <Body>
            <AboutCard>
                <div style={{backgroundImage:`url(${img1})`}} alt="" className="cardImg" />
                <div className="cardTitle">study</div>
                <div className="cardText">i’m studying dental products Industry in al kitab university in iraq/kirkuk .</div>
            </AboutCard>
        </Body>
    )
}
