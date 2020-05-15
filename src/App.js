
import React, { Component } from 'react'
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos'
import Header from './layout/Header'
import AddItem from './components/AddItem'
import About from './components/pages/About'
// import {v4 as uuid} from "uuid";  we were using this earlier to generate a random
import axios from 'axios';



export class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({todos: res.data}))
  }
  
  // state = {
  //   name: "",
  //   todos: [ { 
  //     id: uuid(),
  //     title: "eat cheese",
  //     completed: false
  //   },
  //   { 
  //     id: uuid(),
  //     title: "eat pie",
  //     completed: false
  //   },
  //   { 
  //     id: uuid(),
  //     title: "eat fish",
  //     completed: false
  //   }
  // ]
  // }
// toggles the complete with setstate so it autoupdates i.e. why we using react
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) 
  });
  }

// delete toDo method
  delTodo = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))

    //this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
// name list method
  nameList = () => {
    this.setState({name: prompt("What is the name of your list?")})

  }

  //add item method
  addTodo = (title) => {

    axios.post('http://jsonplaceholder.typicode.com/todos', {
    title: title,  // we are sending post request with url and then second paramter is setting what we are sending...
    completed: false,
    })

    .then(res => this.setState({todos: [...this.state.todos, res.data]}))


    // this.setState({ todos: [...this.state.todos, newTodo]})



    // used this earlier when hardcoding data... no need with json placeholder
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   completed: false
    // }
    //spread operator (...) to make copy of old object array and attach newTodo onto it
  }



  

  render() {
    return (
      <Router>
      <div className="app">
        <div className="container">
        <Header nameList={this.nameList} daName={this.state.name} />
        {/* // this is how we can display different components on different pages */}
        <Route exact path='/' render={props => (
          // We are putting this into a react.fragment because we dont need a div element displayed to the page

        <React.Fragment>
        <AddItem addTodo={this.addTodo}/>
        <Todos todos={this.state} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>

        )}/>

        <Route exact path='/about' component={About}/>

      </div>
      </div>
      </Router>
    );
  }
}

export default App





/*
function App() {

  let markComplete = (id) => {
    setState({ todos: state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
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