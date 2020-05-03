import React from 'react';

function Todos(props) {
console.log("hi");
console.log(props.todos)
return props.todos.map((todo) => (<h3>{todo.title}</h3>));


}

export default Todos;