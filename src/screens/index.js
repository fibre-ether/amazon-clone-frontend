import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router';
import AlertDismiss from '../components/alert';


function Index(props) {
    const [cardText, setCardText] = useState("Hello");
    const loc = useLocation();
    useEffect(() => {
        if (!loc.hash) {
            setCardText("Welcome to BestSell");
        } else if (loc.hash==="#1") {
            setCardText(<><strong>BestSell</strong> is an Amazon(e-commerce website) clone made using React.js.</>);
        } else {
            setCardText(<>Search for anything, <strong>BestSell</strong> takes your input, searches Amazon for product details and shows them to you.</>);
        }
    }, [loc]);
    return (
            <>
            <div className="home-info">
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#1">Info</Nav.Link>
                        </Nav.Item><Nav.Item>
                            <Nav.Link href="#2">Description</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body className="info-card-text">
                        <Card.Title>BestSell</Card.Title>
                        <Card.Text>
                            {cardText}
                        </Card.Text>
                        <Button as={Link} to="/search?Sale" variant="primary">See What's on sale</Button>
                    </Card.Body>
                </Card>
            </div>
            </>
    );
}

export default Index;