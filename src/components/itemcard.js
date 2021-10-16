import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './minor_comps.css';


function ItemCard(props) {
    return(
        <Card className="itemcard" >
            <Card.Img className="card-image" variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className="card-title" >{props.title}</Card.Title>
                    <Card.Text className="card-reviews" >
                    <strong>{props.reviews} reviews</strong>
                    </Card.Text>
                    <Card.Text className="card-txt" >
                    {props.text}
                    </Card.Text>
                    <div className="button-container">
                    <Button className="card-button" href={props.link} variant="primary">{props.button}</Button>
                    </div>
                </Card.Body>
        </Card>
    )
  }
  export default ItemCard;