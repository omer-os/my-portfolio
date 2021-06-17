import styled from 'styled-components'

export const Body = styled.div`
background-color: ${(props)=>props.Theme ? 'black' : 'white'};
width: 100%;
height: 100vh;
`

export const NavBar = styled.div`
    background-color: ${(props)=> props.Theme ? 'black' : '#1A2F40'};
    display: flex;
    justify-content: space-between;
    width: calc(100%-5px);
    padding: 10px 10px 20px 10px;
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