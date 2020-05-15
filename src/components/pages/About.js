import React from 'react'

function About() {
    return (
        //if we don't actually need to return an element (div) we can use react fragment.
        <React.Fragment>
            <h1>About</h1>
            <h2>This is my first React application</h2>
            <div>----------------</div>
            <p>Try out the changeable title component i'm really proud of that one.  Give 'List' a click!</p>
        </React.Fragment>
    )
}




export default About;