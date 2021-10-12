import React, {useState} from 'react';
import {Navbar, Container, Nav, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import AlertDismiss from './alert';
function Navibar() {
    const [showAlert, setShowAlert] = useState(false);
    return (
        <div className="navibar">
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><a style={{ cursor:"pointer" }} href={null} onClick={() => setShowAlert(true)}>Navibar</a></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <AlertDismiss show={showAlert} setShow={setShowAlert} title="Error!" alert="You pressed the navbar link."/>
        </div>
    );
}

export default Navibar;