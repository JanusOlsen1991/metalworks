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
              <div id="fb-root"></div>
              <script async defer crossOrigin="anonymous"
                      src="https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v8.0&appId=3091219417662655&autoLogAppEvents=1"
                      nonce="ohq8kdsi"></script>
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
