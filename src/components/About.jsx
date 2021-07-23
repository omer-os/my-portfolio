import React from 'react'
import styled from 'styled-components'
import Banksy from '../imgs/Banksy.png'
import MeAbout from '../imgs/MeAbout.png'
import Code from '../imgs/Code.png'
import sss from '../imgs/sss.mp4'

export default function About() {
    return (
        <Body>

            <div className="AboutCardGroup">
                    
                    <div className="AboutTitle">About Me</div>

                    <div className="Card" style={{marginTop:'20px'}}>
                        <div className="InsideCardLeft">
                            <div className="title">study</div>
                            <div className='body'>i’m studying dental products  Industry in al kitab university in iraq/kirkuk .
                            </div>
                        </div>
                        <div className="InsideCardRight">
                            <img src={MeAbout} alt=""/>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="InsideCardLeft">
                            <div className="title">work expearince</div>
                            <div className='body'>I do not have work experience , but I worked in many free lance projects before .
                            </div>
                        </div>
                        <div className="InsideCardRight">
                            <img src={Code} alt=""/>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="InsideCardLeft">
                            <div className="title">Skills</div>
                            <div className='body'>
                                <ol>
                                    <li>javascript</li>
                                    <li>react js</li>
                                    <li>jquery js</li>
                                    <li>python and flask</li>
                                    <li>html and css</li>
                                    <li>git and github</li>
                                    <li>cmd/termminal</li>
                                </ol>
                            </div>
                        </div>
                        <div className="InsideCardRight">
                            <img src={Banksy} alt=""/>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="InsideCardLeft">
                            <div className="title">my passionates</div>
                            <div className='body'>im very curious about machine learning and Artificial intelligence
                                                I enjoy playing on saz (its traditional music instrument here).
                                                I love space industry and everything about spacecrafts " fan of spacex -Elon Musk.
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/>
            </div>





            {/* <audio controls>
                <source src={sss} type='video/mp4' />
                Your browser does not support the audio element.
            </audio> */}
        </Body>
    )
}


export const Body = styled.div`
    margin: 0 2vmin;
    margin-top: 6vmin;
    font-family: sans-serif;
    padding: 0 10px;


    div, li, img{
        transition: all .3s ease-in-out;
    }
    
    .AboutTitle{
        font-size: 5vmin;
        margin-left: 18%;
        margin-bottom: 10px;
    }

    .Card{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        width: 60%;
        margin: auto;
        margin-top: 50px;
        height: fit-content;
        border-radius: 10px;
        background-color: #efffda;


        .InsideCardLeft{
            
            .title{
                font-size: 6vmin;
                margin-bottom: 10px;
            }

            .body{
                font-size: 4vmin;
                color: rgba(105, 105, 105, 1);
            }
        }

        .InsideCardRight{
            width: 200px;
            display: grid;
            place-items: center;
        }
        img{
            width: 100%;
        }


        @media (max-width: 880px){
            width: 90%;

            .InsideCardLeft>.body{
                font-size: 4vmin;
            }

            .InsideCardLeft>.title{
                font-size: 6vmin;
            }
        }
    }
`
