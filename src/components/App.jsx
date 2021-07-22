import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import HomePage from './HomePage'

export const Body = styled.div`
`

export default function APP() {
    return (
        <Body>
            <Header />
            {/* 
                Header > 
                    Header-Left > lix1 
                    Header-Right > lix4
            */}

            {/* 
                Home-Page > 
                    
                    Home-Left > 
                        Home-Left-Top > 
                            h1 , h2 , button
                        Home-Left-Bottom > 
                            Home-Contacts*3>p*2
                    
                    Home-Right > 
                        my-home-img
                        home-img-background
                    
             */}

             {/*
             About me >
                AboutTitle > About Me
                AboutCardGroup > 
                    .Card*4 > 
                        InsideCardLeft > img
                        InsideCardRight > text
             */}
        </Body>
    )
}
