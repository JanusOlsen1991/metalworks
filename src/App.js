import React from 'react';
import HeaderElement from "./header/header";
import Body from "./body/body";
import Styles from "./App.module.css"
import "./App.module.css"
import Footer from "./bottom/Footer";
import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigationbar/navigationbar'

function App() {

  return (
      <>
          <div className={Styles['App-remove-white-spaces']}>                    
                      <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column', justifyContent:'space-between'}}>
                          <div>
              <HeaderElement/>
              <Navigation></Navigation>
              <BrowserRouter>
                  <Body/>
              </BrowserRouter>
                          </div>
        

              <Footer></Footer>
                                    </div>


          </div>

      </>

  );
}

export default App;
