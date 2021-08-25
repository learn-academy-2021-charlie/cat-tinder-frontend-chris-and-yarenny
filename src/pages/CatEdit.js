import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
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
        this.props.editCat(this.state.form)
        this.setState({submitted: true})
    }

    render() {
        return (
            <>
                <h3>This is the edit page</h3>
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
                        <Button onClick={this.handleSubmit}>Edit</Button>
                </Form>
                {this.state.submitted && <Redirect to="/catindex" />}
            </>
        )
    }
}

export default CatEdit