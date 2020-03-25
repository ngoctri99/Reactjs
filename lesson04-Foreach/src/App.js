import React from 'react';
import './App.css';
import Cource from './components/cource/Cource';

function App() {

  const items = [
    {
      id : 1,
      name : 'ReactJs',
      time : '30h',
      free : true
    },
    {
      id : 2,
      name : 'Angular',
      time : '55h',
      free : false
    },
    {
      id : 3,
      name : 'NodeJs',
      time : '35h',
      free : true
    }
  ];

  const elementCourse = items.map((item, index)=>
  <Cource key={item.id} name ={item.name} time ={item.time} free ={item.free}></Cource>
  )
  return (
    <div className="App">
      <h1>Lesson-04 Foreach</h1>
      <div className="container">
        <div className="row">
         
         {elementCourse}
        </div>
      </div>
      
    </div>
  );
}

export default App;
