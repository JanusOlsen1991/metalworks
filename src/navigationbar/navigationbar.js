import React from 'react'
import Styles from './navigationbar.module.css'


const Navigation = (props) => {
    return (
        <>
            <div className={Styles.sticky}>
                <header className={Styles.background}>
                 <nav>
                     <ul>
                         <li>

                             <a className={Styles.background} href={"/om-os"}>
                                 Om os
                             </a>
                         </li>
                         <li>
                             <a className={Styles.background} href={"/kontakt"}>
                                 Kontakt
                             </a>
                         </li>
                         <li>
                             <a className={Styles.background} href={"/tidligere-jobs"}>
                                 Tidligere opgaver
                             </a>
                         </li>
                     </ul>
                 </nav>
                </header>

            </div>
        </>
    )
}
export default Navigation;
