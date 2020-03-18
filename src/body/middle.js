import React from 'react'
import Navigation from "../navigationbar/navigationbar";
import ExplanationCard from './cards/ExplanationCard'


const Middle = () => {
    return (
        <>
            <div>
                <Navigation></Navigation>
                <ExplanationCard
                    greeting={'hej'}></ExplanationCard>
                <ExplanationCard
                    greeting={'hej'}></ExplanationCard>
                <ExplanationCard
                    greeting={'hej'}></ExplanationCard>
            </div>
            <div >
                <ExplanationCard
                    greeting={'hej'}></ExplanationCard>
            </div>
            <div >
                <ExplanationCard
                    greeting={'janus'}></ExplanationCard>
            </div>
            <div >
                <ExplanationCard
                    greeting={'hej'}></ExplanationCard>
            </div>
        </>
    )
};
export default Middle;
