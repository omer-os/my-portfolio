import React from 'react'
import {homepagesvg} from '../Images/homepagesvg.svg'


export function Home() {
  return (
    <div className='flex h-[60vh] justify-center items-center'>
        <div className="flex gap-[3em]">

            <div className="left">
                <div className="text-4xl font-bold">
                Front End Web Developer
                </div>
                <div className="text-lg">
                I strive for two things in design: simplicity and clarity. Great design is born of those two things
                </div>
            </div>

            <div className="right"></div>

        </div>
    </div>
  )
}
