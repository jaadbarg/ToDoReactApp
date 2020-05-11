import React, { Component } from 'react'

export class AddItem extends Component {
    render() {
        return (
           <form style={{display: 'flex', flexDirection: 'row'}} >
            <input type="text" name="title" placeholder="Enter ToDo..." style = {{flex: '10', padding: '10px'}}/>
            <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            
           </form>
        )
    }
}

export default AddItem
