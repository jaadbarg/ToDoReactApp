
import React, { Component } from 'react'
import './App.css';
import Todos from './components/Todos'
import Header from './layout/Header'
import AddItem from './components/AddItem'


export class App extends Component {
  state = {
    name: "",
    todos: [ { 
      id: 1,
      title: "eat cheese",
      done: false
    },
    { 
      id: 2,
      title: "eat pie",
      done: false
    },
    { 
      id: 3,
      title: "eat fish",
      done: false
    }
  ]
  }
// toggles the complete with setstate so it autoupdates i.e. why we using react
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    }) 
  });
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  nameList = () => {
    this.setState({name: prompt("What is the name of your list?")})

  }

  

  render() {
    return (
      <div>

      <Header nameList={this.nameList} daName={this.state.name} />

      <AddItem />

      <Todos todos={this.state} markComplete={this.markComplete} delTodo={this.delTodo}/>

     

      </div>
    );
  }
}

export default App





/*
function App() {

  let markComplete = (id) => {
    setState({ todos: state.todos.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    }) });
  }


  return ( 

    <Todos todos={state} markComplete={markComplete}/>

  );
}

export default App;
*/