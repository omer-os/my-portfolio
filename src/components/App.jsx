import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import HomePage from './HomePage'

export const Body = styled.div`
    
`

export default function APP() {
    return (
        <Body>
            {/* 
                Header > 
                    Header-Left > lix1 
                    Header-Right > lix4
            */}

            <Header />

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
             <HomePage />




        </Body>
    )
}
