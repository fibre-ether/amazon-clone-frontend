import React, {useEffect, useState} from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ItemCard from '../components/itemcard.js';
import { useLocation } from 'react-router';
//import itemsJSON from '../otherfiles/cooking_amazon.json';
import axios from 'axios';


//var items = itemsJSON.data.slice(0,50)
//console.log(items[0]);
function Home(props) {
    const loc = useLocation();
    const [data, setData] = useState({"name": [1,2,3],"ratings": [1,2,3],"price": [1,2,3], "image":[1,2]});
    const [searchQuery, setSearchQuery] = useState(loc.search)


    useEffect(() => {
        const GetItems = async() => {
            try {
                const config = {
                    method: 'get',
                    url: "http://localhost:5000",
                    headers: {
                        "Content-Type": "application/json",
                        "arg1":loc.search.slice(1),
                        "arg2": "20"
                    }
                };
                console.log("geting useEffect");
                const response = await axios(config);
                console.log("getting response");
                console.log(response.data);
                setData(response.data);
                return(response.data)
            } catch (error){
                console.log("getting error");
                console.log("error", error);
            }
        }
        GetItems();
    }, [loc.search])
    
    return(
        <div className="home-body">
            <Card>
                <Card.Body>Showing results for {loc.search.slice(1)}</Card.Body>
            </Card>
            <Row>
            {data.name.map((item,index)=>{
                return(
                <Col>
                <ItemCard title={data.ratings[index]} button={data.price[index]} text={data.name[index]} img={data.image[index]} />
                </Col>
            )})};
            </Row> 
        </div>
    );
}

export default Home;

// title={item[2]} text={item[0]} button={item[1]}/>

//{data.map((item, index)=>{
            //return(
                //<Col>
                    
                    //<ItemCard className="itemCard" img={items.image[index]} title={item[2]} text={item[0]} button={item[1]}/>
                //</Col>
            //)
        //})}