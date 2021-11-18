import React, { useState } from 'react'
import { Box } from '@mui/system';
import styled from 'styled-components'
import Cards from '../projects/Cards';
import p1 from '../projects/imgs/p1.png'
import p2 from '../projects/imgs/p2.png'
import p3 from '../projects/imgs/p3.png'
import p4 from '../projects/imgs/p4.png'
import p5 from '../projects/imgs/p5.png'
import p6 from '../projects/imgs/p6.png'
import Button from '@mui/material/Button'


export const Body=styled.div`
    display: grid;
    padding: 40px;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    transition: all .4s ease-in-out;
    
    @media(min-width:900px){
        grid-template-columns: auto auto auto;
        grid-auto-rows: auto;
        gap: 50px;
    }

    @media(max-width:550px){
        grid-template-columns: auto ;
        grid-auto-rows: auto;
        gap: 30px;
            &>*{
                margin: auto;
            }
    }

    `
export default function Projects() {

  return (
      <Body>


        <Cards
            img={p1}
            title="Treesa"
            content="Create a legacy for a loved one by planting trees to restore forests.limate change. Your tribute will safeguard biodiversity and fight c. Effective Conservation. Restore Earth's Balance."
        />
        <Cards
            img={p2}
            title="Counter"
            content="run you business with a clear picture of your finances. with counter, you get accurate data delivered monthly. our expert team is assisted by powerful software"
        />
        <Cards
            img={p3}
            title="WebBros"
            content="WebBros is a platform offering web design and mobiles applications services."
        />
        <Cards
            img={p4}
            title="Plaza"
            content="platform for web design and mobiles applications services."
        />
        <Cards
            img={p5}
            title="Portfolio website"
            content="portfolio freelance project created in 2018/2/12."
        />
        <Cards
            img={p6}
            title="JayPage"
            content="Platform providing beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos."
        />


        


      </Body>
  );
}
