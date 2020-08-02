import React from 'react'
import ProfileCard from "../cards/ProfileCard";

const ContactPage = (props) =>{

    return (
        <>

            <div>

                <ProfileCard name='ANDREAS PETERSEN'
                             phone='+45 40114790'
                             email='AP@METALWORKS.DK'
                />
                <ProfileCard name='NIKOLAJ ØRSTED NIELSEN'
                             phone='+45 40124781'
                             email='NN@METALWORKS.DK'
                />
                <ProfileCard name='CHRISTIAN PETERSEN'
                             phone='+45 40125240'
                             email='CP@METALWORKS.DK'
                />

            </div>
            <div>
                <a href="https://www.google.dk/maps/place/Industriparken+1,+4800+Nyk%C3%B8bing+Falster/@55.2305936,11.302878,7z/data=!4m5!3m4!1s0x47ad30ea8aaf3963:0x9c24eafe64dbbf1!8m2!3d54.76109!4d11.835715">


                    <img src="https://drive.google.com/uc?export=view&id=1an5pkfFF1Z5z2ty1VHXronsVtyJ7Flk3"/>
                </a>
            </div>
        </>
    )
}
export default ContactPage
