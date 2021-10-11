import React from 'react';
import {Form, Card, Button} from 'react-bootstrap';
import './minor_comps.css';

function Signin() {
    return(
        <Card className="login-container">
            <Card.Body>
                <Form className="login-internal">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="signisn-button" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
            </Card>
    )
}
export default Signin;