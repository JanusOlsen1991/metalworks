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
                {
                    (window.innerWidth >= 1000) ?
                        <Slider
                        slides ={images} autoPlay={5}
                        texts ={texts}></Slider>
                        :
                        null
                }

                <div className={Styles.container}>
                    <div className={Styles.innerContainer}>
                        {
                            (window.innerWidth >= 1000) ?
                                <h1>
                                    Smed til alle opgaver
                                </h1>
                                :
                                <h1 style={{textAlign: 'center'}}>
                                    Smed til alle opgaver
                                </h1>
                        }


                        <div className={Styles.ParentCardsArea}>


                            <div className={Styles.CardsArea}>
                                <ExplanationCard
                                    headline={'Entrepenørmaskiner'}
                                    description={'Vi reparerer alle former for entreprenør maskiner som fx gummiged, gravmaskiner, grusgrav materiel mm.'}
                                    redirectPath={'/entrepreneur-materiale'}
                                    background={'#c4c3bd'}></ExplanationCard>
                                <ExplanationCard
                                    headline={'Genindvinding'}
                                    description={'Vi reparerer, producere og opsætter alle former for , maskiner til genindvinding industrien, dette omfatter, Schredder, sorterings anlæg, Kabel granulerings anlæg og skrotsaks mm'}
                                    redirectPath={'/genindvinding'}
                                    background={'#e3e1d7'}
                                ></ExplanationCard>
                                <ExplanationCard
                                    headline={'Byggeri'}
                                    description={'Vi udfører alt smedearbejde inden for byggeri som fx trapper, rekværk, altaner, konstruktionsstål mm.'}
                                    redirectPath={'/byggeri'}
                                    background={'#878680'}></ExplanationCard>
                                <ExplanationCard
                                    headline={'Special Opgaver'}
                                    description={'Vi kan lave alt fra stort til småt, det er kundens fantasi der sætter grænserne. kontakt os hvis i har ønsker til veludført smedearbejde. '}
                                    redirectPath={'/special-opgaver'}
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
                                    Vi har specialiseret os inden for genvindings industrien og har en helt unik kendskab til det.
                                    Kun fantasien sætter grænser.


                                </p>
                                <h3>Få et uforpligtende tilbud</h3>
                                <p>Uanset hvilken smede- eller genvindingsopgave du ønsker løst, så vil vi gerne give dig et uforpligtende tilbud på opgaven.</p>
                                <p>Vil du gerne høre mere om hvad vi kan tilbyde eller vil du indhente et godt tilbud, så kan du kontakte os på telefon <a href={`tel:+4540114790`}>+45 40114790</a> eller på mail <a href={`mailto:AP@Metalworks.dk`}>AP@Metalworks.dk</a></p>

                            </div>
                            {
                                (window.innerWidth >= 1000) ?
                                    <div className={Styles.imageRight}>
                                        <img src="https://drive.google.com/uc?export=view&id=17r6d7FFRS8FsAjnqXi4DVfOSw4ITZ4hS" alt=''></img>
                                    </div>
                                    :
                                    null
                            }


                        </div>


                    </div>

                </div>

            </div>

        </>
    )
};
export default LandingPage;
