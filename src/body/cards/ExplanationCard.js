import React from 'react'
import Styles from './ExplanationCard.module.css'

const ExplanationCard = (props) => {

    return (
        <>
                <div className={Styles.card}>
                    <p>
                        {props.greeting}
                    </p>
                    <p>
                        ok
                    </p>
                </div>
        </>
    )
}
export default ExplanationCard
