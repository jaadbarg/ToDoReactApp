import React, { Component } from 'react'

export class Header extends Component {
    render() {
        var onHov = headerStyle;
        return (

            <header style={onHov}>


            <h1 onClick={this.props.nameList.bind(this)}> {this.props.daName} List </h1>


        </header>
        )
    }
}

let headerStyle = {
    background: "black",
    color: 'white',
    textAlign: 'center',
    padding: '10px'
    }

    






export default Header





