import React from 'react';
import './App.css';
import Cource from './components/cource/Cource';

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <div className="container">
        <div className="row">
         <Cource/>
         <Cource/>
         <Cource/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
