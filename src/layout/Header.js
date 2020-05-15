import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export class Header extends Component {
    render() {
        return (
     

            <header style={headerStyle}>

            <h1 className="headClick" onClick={this.props.nameList.bind(this)}> {this.props.daName} List </h1>

            <div className="honestlyUnnecessary" >
            
            <Link className="menuItems" to='/'>Home</Link> <div style={{color: 'white'}}>|</div> <Link className="menuItems" to='/about'>About</Link>
            </div>


            </header>

           


        )
    }
}

let headerStyle = {
    background: "black",
    textAlign: 'center',
    padding: '10px',
    }



export default Header





