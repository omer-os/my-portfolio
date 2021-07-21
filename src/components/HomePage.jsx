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

            <div className="square1">
                
            </div>
        </Body>
    )
}

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
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
                transition: all .4s ease-in-out;
            }
            h2{
                font-size: 1.4rem;
                font-weight: 400;
                color: #878787;
                width: 250px;
                transition: all .4s ease-in-out;
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

                transition: all .4s ease-in-out;
            }
        }
        .Home-Left-Bottom{
            display: flex;
            justify-content: space-between;

            position: absolute;
            bottom: 0;
            left: 150px;

            margin-bottom: 20px;
            transition: all .4s ease;


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
                transition: all .4s ease-in-out;
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
            transition: width .4s ease;

            animation: imganimate 2s ease-in-out;
            @keyframes imganimate{
                from{
                    box-shadow: 0 0 0 white;
                }
            }
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

    .square1{
        background-color: #b1c990;
        position: absolute;
        bottom: -120px;
        left: -120px;

        z-index: -1;

        width: 320px;
        height: 200px;

        box-shadow:
         20px -20px 0 rgba(200, 219, 174, 0.68),
         40px -40px 0px rgba(200, 219, 174, 0.55);

        animation: animatesq1 2s ease-in-out;
        transition: all .4s ease;
        @media (max-width:765px){
            width: 255px;
            height: 155px;
        }
        @keyframes animatesq1{
            from{
                bottom: -250px;
                left: -250px;
                box-shadow:
                    10px -10px 0 rgba(200, 219, 174, 0.68),
                    30px -30px 0 rgba(200, 219, 174, 0.55);
            }

        }
    }

`