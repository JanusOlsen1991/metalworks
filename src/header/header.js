import React from 'react'
import logo from './logo.svg'
import Styles from './header.module.css';

const HeaderElement = () => {
    return (
        <>
            <div>
                <div
                className={Styles.headerBackground}>
                    <a href="/">
                        <img
                            className={Styles.headerstyle}
                            src={logo} alt={logo}/>
                    </a>

                </div>



            </div>
        </>)
}
export default HeaderElement

