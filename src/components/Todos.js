import React from 'react';

function Todos(props) {


return props.todos.todos.map((todo) => (<h3>{todo.title}</h3>));


}

export default Todos;