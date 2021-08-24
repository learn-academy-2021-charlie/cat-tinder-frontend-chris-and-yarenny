import React, { Component } from 'react'

class CatShow extends Component {
    render() {
        return (
            <>
                <h3>Meow! My name is {this.props.cat.name}!</h3>
                <p>I am {this.props.cat.age} years old.</p>
                <p>I enjoy {this.props.cat.enjoys}.</p>
            </>
        )
    }
}

export default CatShow