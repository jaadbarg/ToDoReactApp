import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';




function Todos(props) {

return props.todos.todos.map((todo) => (

<TodoItem key ={todo.id} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo}/>

));

}

// PropTypes good practice
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;