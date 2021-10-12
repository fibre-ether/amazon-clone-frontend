import React from 'react';
import {Col, Row, Form, Card, Button} from 'react-bootstrap';
import './minor_comps.css';


function Login(props) {
    console.log(props)
    console.log("Login")
    return(
        <Card className="login-container">
            <Card.Body>
                <Form className="login-internal">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Email" />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                    </Form.Group>
                    <Button  variant="primary">Primary</Button>
                </Form>
            </Card.Body>
        </Card>
    )
  }
  export default Login;