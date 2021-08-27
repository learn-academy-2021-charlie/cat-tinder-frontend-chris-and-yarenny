import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect, NavLink } from 'react-router-dom'


class CatNew extends Component {
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
        this.props.createCat(this.state.form)
        this.setState({submitted: true})
    }

    render() {
        return (
            <>
                <h3>Add a cat</h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text" name="name"
                            onChange={this.handleChange}
                            value={this.state.form.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                            type="text"
                            name="age"
                            onChange={this.handleChange}
                            value={this.state.form.age}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="enjoys">Enjoys</Label>
                        <Input
                            type="text"
                            name="enjoys"
                            onChange={this.handleChange}
                            value={this.state.form.enjoys}
                        />
                    </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                        <br/>
                        <br/>
                        <NavLink to="/catindex" ><Button name="submit" >Home</Button></NavLink>
                </Form>
                {this.state.submitted && <Redirect to="/catindex" />}
            </>
        )
    }
}

export default CatNew