import React, { useState } from 'react'
import styled from 'styled-components'
import homeme from '../imgs/homeme.png'

export default function HomePage() {

    return (
        <Body>
            <div className="Home-Left">
                <div className="Home-Left-Top">
                    <h1>Omar Chatin</h1>
                    <h2>Front-wend web developer,
                        ui/ux desginer</h2>
                    <button>Learn More</button>
                </div>


                <div className="Home-Left-Bottom">
                <div className="Home-Contacts">
                    <p>email</p>
                    <a href=""><p>omerchetin19@gmail.com</p></a>
                </div><hr/>
                <div className="Home-Contacts">
                    <p>phone</p>
                    <a href=""><p>7716945678</p></a>
                </div><hr/>
                <div className="Home-Contacts">
                    <p>location</p>
                    <a href=""><p>iraq/kirkuk</p></a>
                </div>
                </div>
            </div>
            <div className="Home-Right">
                <img src={homeme} alt=""/>
            </div>
        </Body>
    )
}

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: antiquewhite; */
    margin-top: 90px;

    a{
        color: black;
    }
    .Home-Left{
        margin-left: 150px;
        width: 40%;
        font-family: sans-serif;
        .Home-Left-Top{
            h1{
                font-size: 2rem;
            }
            h2{
                font-size: 1.4rem;
                font-weight: 400;
                color: #878787;

                width: 250px;
            }
            button{
                background-color: #D54C4C;
                color: white;

                font-size: 1.3rem;
                border: none;
                border-radius: 3px;

                padding: 7px;
                cursor: pointer;
                margin-top: 50px;
            }
        }
        .Home-Left-Bottom{
            display: flex;
            justify-content: space-between;

            position: absolute;
            bottom: 0;
            left: 150px;

            margin-bottom: 20px;

            hr{
                width: 3px;
                height: 50px;
                margin: 19px 30px 0 30px;
                border: none;
                background-color: #C4C4C4;
                border-radius: 2px;
            }

            p{
                text-align: center;
                line-height: 10px;
            }

            @media(max-width:580px){
                display: none;
            }
        }
    }
    .Home-Right{
        img{
            width: 300px;
            margin-right: 130px;

            box-shadow: 30px -30px #C8DBAE;
        }
    }

    @media (max-width:1040px){
        .Home-Right>img{
            width: 45vmin;
            margin-right: 100px;
        }
    }
    @media (max-width:760px){
        .Home-Left>.Home-Left-Top>h1{
            font-size: 1.8rem;
        }.Home-Left>.Home-Left-Top>h2{
            width: 230px;
            font-size: 1.2rem;
        }
        .Home-Left>.Home-Left-Top button{
            margin-top: 30px;
            font-size: 1rem;
        }
        .Home-Left{
            margin-left: 10vmin;
        }

        .Home-Right>img{
            width: 30vmin;
        }
        .Home-Left-Bottom{
            margin-left: -10vmin;
        }
        .Home-Left-Bottom div p{
            font-size: 2.5vmin;
        }
    }




    @media (max-width: 550px){
        .Home-Right>img{
            position: absolute;
            transform: translate(-50%,-40%);
            left: 50%;
            border-radius: 50%;
            box-shadow: none;
            width: 100px;
        }
        .Home-Left>.Home-Left-Top{
            position: absolute;
            transform: translate(-50%,40%);
            left: 50%;
            text-align: center;
        }
    }

`