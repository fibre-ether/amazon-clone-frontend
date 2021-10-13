import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './minor_comps.css';


function ItemCard(props) {
    console.log("itemCard")
    return(
        <Card className="itemcard" >
            <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.text}
                    </Card.Text>
                    <Button variant="primary">{props.button}</Button>
                </Card.Body>
        </Card>
    )
  }
  export default ItemCard;