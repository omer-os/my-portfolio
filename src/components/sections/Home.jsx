import { Button } from '@mui/material'
import styled from 'styled-components'
import me1 from '../imgs/me1.png'
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <Body>
            <div className="Home-Left">
                <div className="Home-Left-Top">
                    <h1>Omar Chatin</h1>
                    <h2>Front-wend web developer,
                        ui/ux desginer</h2>
                    <Link to="/about"><Button>Learn More</Button></Link>
                </div>
                <div className="Home-Left-Bottom">
                <div className="Home-Contacts">
                   <p>email</p>
                   <p>omerchetin19@gmail.com</p>
                </div><hr/>
                <div className="Home-Contacts">
                    <p>phone</p>
                    <p>7716945678</p>
                </div><hr/>
                <div className="Home-Contacts">
                    <p>location</p>
                    <p>iraq/kirkuk</p>
                </div>

                </div>
                <div className="homeLeftSquare">
                    <div className="square1"></div>
                </div>
            </div>
            <div className="Home-Right">
                <img src={me1} alt=""/>
            </div>
        </Body>
    )
}














export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    a{
        color: black;
    }


    .Home-Left{
        margin-left: 150px;
        width: 40%;
        font-family: sans-serif;

        .homeLeftSquare{
            /* background-color: black; */
            width: 400px;
            height: 200px;
            overflow: hidden;
            position: absolute;
            bottom: 0px;
            left: 0px;
            z-index: -1;


            .square1{
                background-color: #b1c990;
                position: relative;
                top: 120px;
                right: 130px;
            

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
                        top: 200px;
                        right: 200px;
                        box-shadow:
                            10px -10px 0 rgba(200, 219, 174, 0.68),
                            30px -30px 0 rgba(200, 219, 174, 0.55);
                    }

                }
            }
            @media (max-width:450px){
                width: fit-content;
                height: fit-content;
            }
        }

        .Home-Left-Top{
            h1{
                font-size: 2.5rem;
                transition: all .4s ease-in-out;
            }
            h2{
                font-size: 1.5rem;
                font-weight: 400;
                color: #878787;
                width: 290px;
                transition: all .4s ease-in-out;
            }
            button{
                background-color: #D54C4C;
                color: white;

                font-size: 2.5vmin;
                border: none;
                border-radius: 3px;

                padding: 7px 20px;
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
    @media (max-width:800px){
        margin-top: 100px;
        .Home-Left>.Home-Left-Top>h1{
            font-size: 1.8rem;
        }.Home-Left>.Home-Left-Top>h2{
            width: 230px;
            font-size: 1.2rem;
        }
        .Home-Left>.Home-Left-Top button{
            margin-top: 20px;
            font-size: 1em;
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