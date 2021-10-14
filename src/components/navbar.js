import React, {useState} from 'react';
import {Navbar, Container, Nav, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import AlertDismiss from './alert';
function Navibar(props) {
    const [showAlert, setShowAlert] = useState(false);
    return (
        <div className="navibar">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><a style={{ cursor:"pointer" }} href={() => false} onClick={() => setShowAlert(!showAlert)}>Navibar</a></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </Nav>
                </Container>
                {props.search=="true" ?
                    <Form>
                    <Row className="search-bar">
                    <Col sm={3} className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control className="search-area" id="inlineFormInputName" placeholder="Search" />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Button className="search-button" ><SearchIcon/></Button>
                    </Col>
                </Row>
                </Form> : null
                }
            </Navbar>
            <AlertDismiss show={showAlert} setShow={setShowAlert} title="Error!" alert="You pressed the navbar link."/>
        </div>
    );
}

export default Navibar;