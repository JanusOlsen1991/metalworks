import React from 'react'
import ProfileCard from "../cards/ProfileCard";
import Styles from "./ContactPage.module.css"

const ContactPage = (props) =>{

    return (
        <>

            <div className={Styles.center}>
                <div className={Styles.contacttext}>
                    <h1>Kontakt</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className={Styles.cards}>
                    <ProfileCard name='ANDREAS PETERSEN'
                                 image='https://drive.google.com/uc?export=view&id=19qvZqb3cjzEPSIucLWYTd-YD8Je0uTTW'
                                 phone='+45 40114790'
                                 email='AP@METALWORKS.DK'
                    />
                    <ProfileCard name='NIKOLAJ ØRSTED NIELSEN'
                                 image='https://drive.google.com/uc?export=view&id=1Hftn4ApwXCiuMtCMrg2Q18Y3KXmOGUMZ
'
                                 phone='+45 40124781'
                                 email='NN@METALWORKS.DK'
                    />
                    <ProfileCard name='CHRISTIAN PETERSEN'
                                 image='https://drive.google.com/uc?export=view&id=1yVoCixgwlRqE60jDtYEllzkHIcBLBZ8H
'
                                 phone='+45 40125240'
                                 email='CP@METALWORKS.DK'
                    />
                </div>

            </div>
            <div className={Styles.space}>
                <div className={Styles.center}>
                    <h2>Find os</h2>
                    <a href="https://www.google.dk/maps/place/Industriparken+1,+4800+Nyk%C3%B8bing+Falster/@55.2305936,11.302878,7z/data=!4m5!3m4!1s0x47ad30ea8aaf3963:0x9c24eafe64dbbf1!8m2!3d54.76109!4d11.835715">


                        <img src="https://drive.google.com/uc?export=view&id=1an5pkfFF1Z5z2ty1VHXronsVtyJ7Flk3" alt='' />
                    </a>
                </div>
            </div>

        </>
    )
}
export default ContactPage
