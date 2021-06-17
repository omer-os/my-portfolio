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
    padding: 10px;
`
