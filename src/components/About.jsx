import React from 'react'
import styled from 'styled-components'
import Banksy from '../imgs/Banksy.png'
import MeAbout from '../imgs/MeAbout.png'
import Code from '../imgs/Code.png'
import sss from '../imgs/sss.mp4'

export default function About() {
    return (
        <Body>
            <div className="AboutTitle">About Me</div>
            <div className="AboutCardGroup">
                    
                    <div className="Card">
                        <div className="InsideCardRight">
                            <img src={MeAbout} alt=""/>
                        </div>
                        <div className="InsideCardLeft">
                            <div className="title">study</div>
                            <div className='body'>i’m studying dental products  Industry in al kitab university in iraq/kirkuk .
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="InsideCardRight">
                            <img src={MeAbout} alt=""/>
                        </div>
                        <div className="InsideCardLeft">
                            <div className="title">study</div>
                            <div className='body'>i’m studying dental products  Industry in al kitab university in iraq/kirkuk .
                            </div>
                        </div>
                    </div>
            </div>





            {/* <audio controls>
                <source src={sss} type='video/mp4' />
                Your browser does not support the audio element.
            </audio> */}
        </Body>
    )
}


export const Body = styled.div`
    margin: 0 15px;
    margin-top: 100px;
    font-family: sans-serif;
    
    
    .AboutTitle{
        font-size: 1.8rem;
        margin-left: 23%;
        margin-bottom: 40px;
    }

    .Card{
        display: flex;
        padding: 15px;
        width: fit-content;
        margin: auto;
        margin-top: 100px;
        height: fit-content;
        border-radius: 10px;
        background-color: antiquewhite;

        flex-wrap: wrap;

        img{
            width: 70%;
        }

        .InsideCardRight{
            width: 200px;
            display: grid;
            place-items: center;
        }

        .InsideCardLeft{
            margin-left: 40px;
            .title{
                font-size: 2rem;
            }

            .body{
                font-size: 1.3rem;
                color: rgba(105, 105, 105, 1);
                margin: 18px 0 0 0;
                max-width: 400px;
                
            }
        }
    }
`
