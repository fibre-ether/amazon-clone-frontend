import React, {useState, useEffect} from 'react';
import Navibar from './components/navbar';
import AlertDismiss from './components/alert';
import Login from './components/login';
import Signin from './components/signin';
import {Button} from 'react-bootstrap';
import './components/minor_comps.css';
import './App.css';
function App() {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    console.log("useEffect");
    console.log(showAlert);
  });
  const [num, setNum] = useState(0);

  const incr = () => {
    setNum(num+1);
    setShowAlert(!showAlert);
    console.log("incr");
  };

  return(
    <div >
      <Navibar />
      <AlertDismiss show={showAlert} setShow={setShowAlert} title="Error Title"/>
      <Signin />
      <Button onClick={incr} variant="primary">Press for Error</Button>
    </div>
    
  );
}

export default App;