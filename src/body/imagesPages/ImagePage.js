import React from 'react'
import Styles from './ImagePage.module.css'

const ImagePage = (props) => {
 const width = window.innerWidth;
 return <>
 <div className={Styles.imagesWrapper}>
     {props.images.map( img =>
             <div className={Styles.imagePage}>
         <img src={img} style={{maxWidth: "95%", }}></img>
     </div>
     )}
 </div>
 </>
}

export default ImagePage
