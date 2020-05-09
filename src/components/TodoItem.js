import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'grey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.done ? 
            'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo; //to pull variables out of the long ass component
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(
                    this, id)} /> {' '}
                    
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                    
                    </p>
            </div>
        )
    }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

/*
const daStyle = {
    backgroundColor: 'grey'
}
*/

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
