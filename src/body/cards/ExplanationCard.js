import React from 'react'
import Styles from './ExplanationCard.module.css'

const ExplanationCard = (props) => {
    const color = {
        backgroundColor : props.background,
        height : '100%',
        borderRadius : '5px',
    }
    return (
        <>

                <div className={Styles.card}>
                    <div style={color}>
                        <div className={Styles.noMargin}>
                            <h3>
                                {props.headline}
                            </h3>
                            <p>
                                {props.description}
                            </p>
                        </div>


                    </div>

                </div>


        </>
    )
}
export default ExplanationCard
