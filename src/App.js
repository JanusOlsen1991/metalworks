import React from 'react';
import HeaderElement from "./header/header";
import Middle from "./body/middle";
import Styles from "./App.module.css"

function App() {
  return (
      <>
          <div className={Styles['App-remove-white-spaces']}>
              <HeaderElement/>
              <Middle/>
          </div>

      </>

  );
}

export default App;
