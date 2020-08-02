import React from 'react';
import HeaderElement from "./header/header";
import Body from "./body/body";
import Styles from "./App.module.css"
import Footer from "./bottom/Footer";
import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigationbar/navigationbar'

function App() {
  return (
      <>
          <div className={Styles['App-remove-white-spaces']}>
              <HeaderElement/>
              <Navigation></Navigation>
              <BrowserRouter>
                  <Body/>
              </BrowserRouter>
              <Footer></Footer>
          </div>

      </>

  );
}

export default App;
