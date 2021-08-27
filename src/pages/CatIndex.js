import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import { Card, CardTitle, Col, Row } from 'reactstrap'

class CatIndex extends Component {
    render() {
        return (
            <div className="page-body">
                <h3>Meet The Cats</h3>
                <div className="index-cards">

                    {this.props.cats && this.props.cats.map(cat => {
                        return (
                            <Row key={cat.id}>
                                <Col sm="6">
                                    <Card body key={cat.id}>
                                        <CardTitle>
                                            <p key={cat.id}>
                                                <NavLink className="names" to={`/catshow/${cat.id}`}>{cat.name}</NavLink>
                                            </p>
                                        </CardTitle>
                                    </Card>
                                </Col>
                            </Row>
                        )

                    })}

                </div>
                <NavLink to="/catnew" ><Button name="submit" >Add cat</Button></NavLink>

            </div>
        )
    }
}

export default CatIndex