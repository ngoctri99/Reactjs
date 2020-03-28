import React from 'react';
import './App.css';
import Props from './components/props/Props';
import Refs from './components/refs/Refs'
import State from './components/state/State'

function App() {
  return (
    <div className="App">
      <h1>Ôn tập Props, Refs, State</h1>
      <div className="container">
        <div className="row">
          <Props title="Ôn tập Props"/>
        </div>
        <div className="row">
          <Refs/>
        </div>
        <div className="row">    
          <State/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
