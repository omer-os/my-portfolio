import React from 'react'
import {ContactWithMe} from '../styles/style.jsx'
import telegramImg from '../imgs/telegramImg.png'
import instaImg from '../imgs/instaImg.png'
import githubImg from '../imgs/githubImg.png'
import facebook from '../imgs/facebook.png'

function ContactWithme({Theme}) {
    
    return (
        <>
            <ContactWithMe name="Contacts" Theme={Theme}>
            <h1 style={{'textAlign': 'center','width':'100%','fontSize':'6vmin'}}>Contact With Me</h1>

            <div className="contact1">
            <h1 style={{'textAlign': 'center','width':'100%','fontSize':'3.5vmin', 'margin':'12vmin 0','color':'gray'}} className="contact1-1">
                Follow Me On
            </h1>
            <div className="contact1-2">
                <a href='https://www.facebook.com/omer.chetin.5' className="contact1-2-1item">
                    <div className="ContactItemTop">facebook</div>
                    <div className="ContactItemBottom"><img src={facebook} alt=""/></div>
                </a>

                <a href='https://t.me/@me_tf' className="contact1-2-1item">
                    <div className="ContactItemTop">telegram</div>
                    <div className="ContactItemBottom"><img src={telegramImg} alt=""/></div>
                </a>

                <a href='https://www.instagram.com/omar.chatin/' className="contact1-2-1item">
                    <div className="ContactItemTop">instagram</div>
                    <div className="ContactItemBottom"><img src={instaImg} alt=""/></div>
                </a>
                
                <a href='https://github.com/omer-os' className="contact1-2-1item">
                    <div className="ContactItemTop">github</div>
                    <div className="ContactItemBottom"><img src={githubImg} alt=""/></div>
                </a>
            </div>
            </div>
        </ContactWithMe> 
        </>
    )
}

export default ContactWithme;