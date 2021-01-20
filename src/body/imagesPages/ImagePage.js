import React, {useState} from 'react'
import Styles from './ImagePage.module.css'

const ImagePage = (props) => {
    //const [images, setImages] = useState(props.images);
 return <>
 <div className={Styles.imagesWrapper}>
     {props.images.map( img =>  <div className={Styles.imagePage} style={{maxWidth:"48%"}}>
         <img src={img} style={{maxWidth: "100%", }}></img>
     </div>
     )}
 </div>
 </>
}

export default ImagePage
