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
    position: absolute;
    top: 10px;
    right: 15px;
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