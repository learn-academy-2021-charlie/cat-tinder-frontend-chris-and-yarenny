import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import { Card, CardTitle, Col, Row } from 'reactstrap'

class CatIndex extends Component {
    render() {
        return (
            <div className="page-body">
                <br/>
                <h1>Meet The Cats!😸</h1>
                <div className="index-cards">
                    {this.props.cats && this.props.cats.map(cat => {
                        return (
                            <Row key={cat.id}>
                                <Col sm="6">
                                    <Card body key={cat.id}>
                                        <CardTitle>
                                            <h4 key={cat.id}>
                                                <NavLink className="names" to={`/catshow/${cat.id}`}>{cat.name}</NavLink>
                                                <br/>
                                                <br/>
                                                <h1>🐈</h1>
                                            </h4>
                                        </CardTitle>
                                    </Card>
                                </Col>
                            </Row>
                        )

                    })}

                </div>
                <NavLink to="/catnew" >
                    <Button className="button" name="submit" >Add cat</Button>
                </NavLink>

            </div>
        )
    }
}

export default CatIndex