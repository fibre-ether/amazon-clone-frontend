import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './minor_comps.css';


function ItemCard(props) {
    console.log("itemCard")
    return(
        <Card className="itemcard" >
            <Card.Img className="card-image" variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className="card-title" >{props.title}</Card.Title>
                    <Card.Text className="card-text" >
                    {props.text}
                    </Card.Text>
                    <Button className="card-button" variant="primary">{props.button}</Button>
                </Card.Body>
        </Card>
    )
  }
  export default ItemCard;