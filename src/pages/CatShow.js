import React, { Component } from 'react'
import { Button } from 'reactstrap';
// import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

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
        this.setState({ submitted: true })
    }

    render() {
        return (
            <>
            <div className="show-page-body">
                <h1 className="page-titles">Meow! My name is {this.props.cat.name}!</h1>
                <h1>🐈</h1>
                <p>I am {this.props.cat.age} years old.</p>
                <p>I enjoy {this.props.cat.enjoys}.</p>

                <NavLink to={`/catedit/${this.props.cat.id}`}> <Button onClick={this.handleSubmit}>Edit Cat</Button> </NavLink>

                <br />
                <br />

                <NavLink to="/catindex" ><Button name="submit" >Home</Button></NavLink>
            </div>

            </>
        )
    }
}

export default CatShow