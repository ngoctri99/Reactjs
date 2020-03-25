import React from 'react';
import './App.css';
import Cource from './components/cource/Cource';

function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <div className="container">
        <div className="row">
         <Cource time="30" free={true}>ReactJs</Cource>
         <Cource time="55" free={false}>Angular</Cource>
         <Cource time ="35" free={true}>NodeJS</Cource>
        </div>
      </div>
      
    </div>
  );
}

export default App;
