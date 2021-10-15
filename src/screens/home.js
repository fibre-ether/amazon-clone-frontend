import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import ItemCard from '../components/itemcard.js';
//import itemsJSON from '../otherfiles/cooking_amazon.json';
import axios from 'axios';


//var items = itemsJSON.data.slice(0,50)
//console.log(items[0]);
function Home(props) {
    //const [data, setData] = useState(0);
    useEffect(() => {
        const GetItems = async() => {
            try {
                const config = {
                    method: 'get',
                    url: "http://localhost:5000",
                    headers: {
                        "Content-Type": "application/json",
                        "arg1":"phone",
                        "arg2": "20"
                    }
                };
                console.log("geting useEffect");
                const response = await axios(config);
                console.log("getting response");
                console.log(response.data);
            } catch (error){
                console.log("getting error");
                console.log("error", error);
            }
        }
        GetItems();
    })
    
    return(
        <div className="home-body">
        <Row>
        <p>cards</p>
        </Row> 
        </div>
    );
}

export default Home;

//{items.map((item)=>{
            //return(
                //<Col>
                    
                    //<ItemCard className="itemCard" img={item[3]} title={item[2]} text={item[0]} button={item[1]}/>
                //</Col>
            //)
        //})}