import React from 'react';
import logo from './Derrit.png';
import './scss/App.scss';
import Main from './features/Main';



function App() {
  return (
    <div className="App">
      <header className="d-flex justify-content-start">
        <img src={logo} className="App-logo" alt="logo" />    
      </header>
       <Main />
    </div>
  );
}

export default App;
