import React from 'react'
import Styles from './ExplanationCard.module.css';

const ProfileCard = props => {

    return (
        <>
                <div className={Styles.profilecard}>

                    <div className={Styles.text}>

                        <div className={Styles.image}>
                            <img src={props.image} alt={"profile"} aria-label={"profile image"} className={Styles.profileImage}>

                            </img>
                        </div>
                        <h3>
                            {props.name}
                        </h3>

                        <span>
                            MOBIL <a href={`tel:${props.phone}`}></a> {props.phone}
                        </span>
                        <br/>
                        <span>
                            EMAIL <a href={`mailto:${props.email}`} aria-label={`email of ${props.name}`}>{props.email}</a>
                        </span>
                    </div>
                </div>
        </>
    )
}
export default ProfileCard
