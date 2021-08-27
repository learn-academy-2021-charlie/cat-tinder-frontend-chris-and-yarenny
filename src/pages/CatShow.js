import React, { Component } from 'react'
import { Button } from 'reactstrap';
// import { Redirect } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class CatShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: { name: "", age: "", enjoys: "" },
            submitted: false
        }
    }
    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = () => {
        this.props.updateCat(this.state.form)
        this.setState({submitted: true})
    }

    render() {
        return (
            <>
                <h3>Meow! My name is {this.props.cat.name}!</h3>
                <p>I am {this.props.cat.age} years old.</p>
                <p>I enjoy {this.props.cat.enjoys}.</p>
                
                {/* <Button onClick={this.handleSubmit}>Edit Cat</Button>
                {this.state.submitted && <Redirect to={`/catedit/${this.props.cat.id}`} />} */}

                <Button onClick={this.handleSubmit}>
                    <NavLink to={`/catedit/${this.props.cat.id}`}> Edit Cat </NavLink>
                </Button>
                
            </>
        )
    }
}

export default CatShow