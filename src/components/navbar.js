import React, {useState} from 'react';
import {Navbar, Container, Nav, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import AlertDismiss from './alert';
function Navibar(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [searchTerm, setSearchTerm] = useState({message:""});
    
    const history = useHistory();



    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(searchTerm);

        history.push({
            pathname: "/home",
            search: searchTerm
        });
    }
    
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
                    <Form onSubmit={handleSubmit}>
                    <Row className="search-bar">
                    <Col sm={3} className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control 
                    className="search-area" 
                    id="inlineFormInputName" 
                    placeholder="Search"
                    onChange={handleChange}
                    required
                    />
                    </Col>
                    <Col xs="auto" className="my-1">
                    <Button className="search-button" type="submit"><SearchIcon/></Button>
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