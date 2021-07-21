import React from 'react'
import styled from 'styled-components'
import Banksy from '../imgs/Banksy.png'
import MeAbout from '../imgs/MeAbout.png'
import Code from '../imgs/Code.png'

export default function About() {
    return (
        <Body>
            <div className="AboutTitle">About Me</div>

            <div className="AboutCardGroup">
                <div className="Card">
                    <div className="InsideCardLeft">
                        <img src={Banksy} alt=""/>
                    </div>
                        <div className="InsideCardRight">
                            <div className="text"></div>
                        </div>
                </div>
                <div className="Card">
                    <div className="InsideCardLeft">
                        <img src={MeAbout} alt=""/>
                    </div>
                        <div className="InsideCardRight">
                            <div className="text"></div>
                        </div>
                </div>
                <div className="Card">
                    <div className="InsideCardLeft">
                        <img src={Code} alt=""/>
                    </div>
                        <div className="InsideCardRight">
                            <div className="text"></div>
                        </div>
                </div>
                <div className="Card">
                    <div className="InsideCardLeft">
                        <img src="" alt=""/>
                    </div>
                        <div className="InsideCardRight">
                            <div className="text"></div>
                        </div>
                </div>
            </div>
        </Body>
    )
}


export const Body = styled.div`
    margin-top: 100px;
`
