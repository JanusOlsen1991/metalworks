import React from 'react'
import ProfileCard from "../cards/ProfileCard";
const AboutPage = (props) =>{
    return (
        <>

            <div>

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

        </>
    )
}
export default AboutPage
