import React from 'react'
const PreviousJobsPage = (props) =>{
    return (
        <>
            <div style={{marginLeft: '20px'}}>
                <p>Hvis du er interesseret i at læse mere om hvad vi foretager os, så kig gerne over på vores Facebook-side, ved at klikke på linket herunder.</p>

                <div className="fb-page" data-href="https://www.facebook.com/MetalworksDenmark" data-tabs="timeline"
                     data-width="500" data-height="500" data-small-header="false" data-adapt-container-width="true"
                     data-hide-cover="false" data-show-facepile="true">

                    <blockquote cite="https://www.facebook.com/MetalworksDenmark" className="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/MetalworksDenmark">Metalworks ApS</a></blockquote>
                </div>
            </div>

        </>
    )
}
export default PreviousJobsPage
