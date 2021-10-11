import React from 'react';
import {Alert} from 'react-bootstrap';
import './minor_comps.css';

function AlertDismiss(props) {
    console.log(props);
    console.log("Alert");
    if (props.show) {
      return (
        <Alert className="alert" variant="danger" onClose={() => props.setShow(false)} dismissible>
          <Alert.Heading>{props.title ? props.title : "Oh snap! You got an error!"}</Alert.Heading>
          <p>
            {props.alert ? props.alert : "Do something to get rid of this error."}
          </p>
        </Alert>
      );
    }
    return (null);
  }
  export default AlertDismiss;



