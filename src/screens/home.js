import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ItemCard from '../components/itemcard.js';
import itemsJSON from '../otherfiles/phone_amazon.json';
var items = itemsJSON.data.slice(0,50)
console.log(items[0]);
function Home(props) {
    return(
        <>
        <Row>
        {items.map((item)=>{
            return(
                <Col>
                    <ItemCard className="itemCard" img={item[3]} title={item[2]} text={item[0]} button={item[1]}/>
                </Col>
            )
        })}
        </Row> 
        </>
    );
}

export default Home;