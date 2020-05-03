import React from 'react';
import './App.css';
import Todos from './components/Todos'

var state = {
  todos: [ { 
    id: 1,
    title: "eat cheese",
    done: false
  },
  { 
    id: 1,
    title: "eat pie",
    done: false
  },
  { 
    id: 1,
    title: "eat fish",
    done: false
  }
]
}


function App() {

  return ( 

    <Todos todos={state}/>

  );
}

export default App;
