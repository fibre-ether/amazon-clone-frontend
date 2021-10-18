import React, {useEffect, useState} from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap';
import ItemCard from '../components/itemcard.js';
import { useLocation, useHistory } from 'react-router';
import axios from 'axios';


//var items = itemsJSON.data.slice(0,50)
//console.log(items[0]);
function Home(props) {
    const loc = useLocation();
    const history = useHistory();
    const [data, setData] = useState({"name": [1,2,3],"ratings": [1,2,3],"price": [1,2,3], "image":[1,2], "review_num":[1,2], "product_link":[1,2]});
    const [showLoading, setShowLoading] = useState(false)
    
    const GetItems = async() => {
        try {
            const url = "http://localhost:3000";
            const config = {
                method: 'get',
                url: url,
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
            console.log(typeof response.data=="string")
            if (typeof response.data=="string") {
            history.push({
                pathname:"/home",
                alert: true,
                alertReason: `Nothing found for ${response.data}`

            })}
            //Add alert
            setShowLoading(false);
            return(response.data)
        } catch (error){
            console.log("getting error");
            console.log("error", error);
        }
    }

    useEffect(() => {
        if(!loc.search) {
            console.log("empty search, redirecting to index");
            history.push("/home");
        }
        else {
            setShowLoading(true);
            GetItems();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loc.search])
    
    return(
        <div className="home-body">
            <Card>
                <Card.Body>{showLoading? "Loading":"Showing"} results for <strong>{loc.search.slice(1)}</strong></Card.Body>
            </Card>
            <Row className="item-group">
            {showLoading ? <Spinner className="spinner" animation="grow" /> :
            data.name.map((item,index)=>{
                return(
                <Col>
                <ItemCard title={data.ratings[index]} button={data.price[index]} text={data.name[index]} img={data.image[index]} reviews={data.review_num[index]} link={data.product_link[index]} />
                </Col>
            )})
            }
            </Row> 
        </div>
    );
}

export default Home;
