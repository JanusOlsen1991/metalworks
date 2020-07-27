import React from 'react'
import ExplanationCard from '.././cards/ExplanationCard'
import Slider from ".././slider/Slider";
import texts from '.././SliderTexts'
import images from '.././images'
import Styles from '.././body.module.css'


const LandingPage = () => {

    return (
        <>
            <div>
                <Slider
                    slides ={images} autoPlay={5}
                    texts ={texts}></Slider>
                <div className={Styles.container}>
                    <div className={Styles.innerContainer}>
                        <h1>
                            Smed til alle opgaver
                        </h1>

                        <div className={Styles.ParentCardsArea}>


                            <div className={Styles.CardsArea}>
                                <ExplanationCard
                                    headline={'Entrepenørmaskiner'}
                                    description={'Vi reparerer mange entrepenørmaskiner, herunder '}
                                    background={'#c4c3bd'}></ExplanationCard>
                                <ExplanationCard
                                    headline={'Genvinding'}
                                    background={'#e3e1d7'}
                                ></ExplanationCard>
                                <ExplanationCard
                                    headline={'Byggeri'}
                                    background={'#878680'}></ExplanationCard>
                                <ExplanationCard
                                    headline={'awesome'}
                                    background={'#545453'}
                                ></ExplanationCard>
                            </div>
                        </div>
                        <div className={Styles.textBlock}>
                            <div className={Styles.textBlockLeft}>
                                <p>
                                    Vi er din foretrukne smed når det kommer til alle former smedearbejde og genindvindingsanlæg i Danmark, Tyskland, Sverige og Norge.
                                </p>
                                <p>Vi sætter en ære i at kunne løfte alle typer smedearbejde og strækker os gerne det længere for at opfylde vores kunders behov.</p>

                                <h3>Vores arbejdsopgaver</h3>
                                <p>Vi har mange års erfaring som smed og varetager opgaver for private husstande, offentlige institutioner og erhverv.
                                </p>
                                <p>
                                    Vi fremstiller stort som småt og er specialister i at fremstille jern-konstruktioner, altaner, værn samt opsvejsning af entrepenørmateriel.
                                </p>
                                <p>
                                    Genvinding: NOGET OM GENVINDING

                                </p>
                                <h3>Få et uforpligtende tilbud</h3>
                                <p>Uanset hvilken smede- eller genvindingsopgave du ønsker løst, så vil vi gerne give dig et uforpligtende tilbud på opgaven.</p>
                                <p>Vil du gerne høre mere om hvad vi kan tilbyde eller vil du indhente et godt tilbud, så kan du kontakte os på telefon <a href={`tel:+4540124781`}>+45 40124781</a> eller på mail <a href={`mailto:NN@Metalworks.dk`}>NN@Metalworks.dk</a></p>

                            </div>
                            <div className={Styles.imageRight}>
                                <img src="https://drive.google.com/uc?export=view&id=17r6d7FFRS8FsAjnqXi4DVfOSw4ITZ4hS"></img>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
};
export default LandingPage;
