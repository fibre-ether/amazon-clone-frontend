import React, {useState} from 'react';
import {Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import AlertDismiss from './alert';
function Navibar(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [searchTerm, setSearchTerm] = useState({message:""});
    
    const history = useHistory();
    const loc = useLocation();



    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(searchTerm);

        history.push({
            pathname: "/search",
            search: searchTerm
        });
    }
    
    return (
        <div>
            <Navbar className="navibar" bg="dark" variant="dark">
                <Container className="nav-text-container">
                <Navbar.Brand><Nav.Link as={Link} to="/home">BestSell</Nav.Link></Navbar.Brand>
                </Container>
                {props.search==="true" ?
                <Form className="search-div" onSubmit={handleSubmit}>
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control 
                    className="search-area" 
                    id="inlineFormInputName" 
                    placeholder="Search"
                    value={searchTerm.message}
                    onChange={handleChange}
                    required
                    />
                    <Button className="search-button" type="submit"><SearchIcon/></Button>
                </Form> : null
                }
            </Navbar>
            <AlertDismiss show={showAlert} setShow={setShowAlert} title="Error!" alert="You pressed the navbar link."/>
        </div>
    );
}

export default Navibar;