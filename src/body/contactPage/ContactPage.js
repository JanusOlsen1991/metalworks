import React from 'react'
import ProfileCard from "../cards/ProfileCard";
import Styles from "./ContactPage.module.css"

const ContactPage = (props) =>{

    return (
        <>

            <div className={Styles.center}>
                <div className={Styles.contacttext}>
                    <h1>Kontakt</h1>
                    <p>Vi er altid til at komme i kontakt med. Så ved akut situationer, om det så er dag, nat eller weekend er der altid en telefon åben.
                    </p>
                </div>

                <div style={{width: '100%', justifyContent: 'center', display:'flex'}}>
                    <div className={Styles.cards}>
                        <ProfileCard name='ANDREAS PETERSEN'
                                     image='https://drive.google.com/uc?export=view&id=19qvZqb3cjzEPSIucLWYTd-YD8Je0uTTW'
                                     phone='+45 40114790'
                                     email='AP@METALWORKS.DK'
                        />
                        <ProfileCard name='NIKOLAJ ØRSTED NIELSEN'
                                     image='https://drive.google.com/uc?export=view&id=1Hftn4ApwXCiuMtCMrg2Q18Y3KXmOGUMZ'
                                     phone='+45 40124781'
                                     email='NN@METALWORKS.DK'
                        />
                        <ProfileCard name='CHRISTIAN PETERSEN'
                                     image='https://drive.google.com/uc?export=view&id=1yVoCixgwlRqE60jDtYEllzkHIcBLBZ8H'
                                     phone='+45 40125240'
                                     email='CP@METALWORKS.DK'
                        />
                    </div>
                </div>


            </div>
            <div className={Styles.space}>
                <div className={Styles.center}>
                    <h2>Find os</h2>
                    <a href="https://www.google.com/maps/place/Cargovej+7,+4840+N%C3%B8rre+Alslev/@55.8391017,9.9339725,7z/data=!4m5!3m4!1s0x47ad3348287469ab:0xe731686a9e7bfd8d!8m2!3d54.8995307!4d11.8950322">

                        <img src="https://drive.google.com/uc?export=view&id=17GzobYDZI2Kr0YuAz-xwbC9Bm9tFAQtk" alt='' />
                    </a>
                </div>
            </div>

        </>
    )
}
export default ContactPage
