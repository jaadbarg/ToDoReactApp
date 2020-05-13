import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        title: ''
    }
    // We could've put title: e.target.value but e.target.name allows us to change it from title to email calendar entry etc.
    onChange = (e) => this.setState({[e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''}); 
    }

   
    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display: 'flex', flexDirection: 'row'}} >
            <input type="text" name="title" placeholder="Enter ToDo..." style = {{flex: '10', padding: '10px'}} value={this.state.title} onChange={this.onChange}/>
            <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>      
           </form>
        )
    }
}

export default AddItem
