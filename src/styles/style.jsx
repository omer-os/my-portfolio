import styled from 'styled-components'


export const Body = styled.div`
background-color: ${(props)=>props.Theme ? 'black' : 'white'};
width: 100%;
height: 100vh;
`

export const NavBar = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    background-color: ${(props)=> props.Theme ? 'black' : '#1A2F40'};
    display: flex;
    justify-content: space-between;
    width: calc(100%-5px);
    padding: 10px 10px 20px 10px;
    height: 20px;
    z-index: 99;
`

export const Firstsection = styled.div`
color: ${(props)=>props.Theme ? 'white' : 'black'};
`

export const Hr = styled.div`
width: 60%;
height: 5px;
background-color: ${(props)=>props.Theme ? '#9D9D9D' : 'red'};
margin: auto;
border-radius: 10px;
margin-top: 65px;
margin-bottom: 65px;
`

export const ShowMenuBar = styled.div`
    position: fixed;
    top: 10px;
    right: 15px;
    z-index: 200;
    width: fit-content;
    display: none;
    flex-direction: column;
    cursor: pointer;

    @media (max-width: 550px){
        display: flex;
    }
`
export const Rightnav = styled.div`
    @media (max-width: 550px){
            top: ${props=>props.ShowNav ? '50px' : '-200px'};
           background-color: #000000bc;
            padding-bottom: 15px;
    }

`


export const AboutMe = styled.div`
    margin: auto;
    h1{
        font-size: 6vmin;
    }
    .aboutMeDiv{
        width: 20%;
        padding: 2.5%;
        border: 1px solid gray;
        margin: 0 20%;
        border-radius: 8px;
        font-size: 3.6vmin;
    }

    .aboutMeBottom{
        position: relative;
        right: calc(-140px - 20%);
    }

    @media (max-width: 800px){
        .aboutMeDiv{
            width: 60%;
            margin: auto;
        }.aboutMeBottom{
            float: none;
            margin-top: 30px;
            right: 0px;
        }
    }
`

export const Projects = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    margin: 10px 20%;
    justify-content: center;
    @media (max-width: 350px){
        margin: 10px 0;
    }
`
export const Proj = styled.div`
    width: 250px;
    height: fit-content;
    text-align: center;
    border: 2px solid white;
    border-radius: 10px;
    padding: 5% 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;
    .projTitle{
        font-size: 4.3vmin;
        margin:10px 0;
    }
    .projBody{
        width: 90%;
        color: #858585;
        margin:10px 0;
        font-size: 2.5vmin;
    }
    .githubLink{
        color: blue;
        margin:10px 0;
        font-size: 2.5vmin;
    }
    @media (max-width: 350px){
        .projTitle,.projBody,.githubLink{
            font-size: 5vmin;
        }
    }
`

export const ContactWithMe = styled.div`
    width: 70%;
    margin: auto;
    .contact1-2{
        display: flex;
        justify-content: space-between;
    }

    .contact1-2-1item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-transform: capitalize;
    }.contact1-2-1item img{
        width: 60%;
        margin-top: 10px;
    }
`