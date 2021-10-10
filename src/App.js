import React, {useState, useEffect} from 'react';
import Navibar from './components/navbar';
import AlertDismiss from './components/minor_comps';
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
    setShowAlert(true);
    console.log("incr");
  };

  return(
    <div >
      <Navibar />
      <button onClick={incr}>{num}>Click me to show alert</button>
      <AlertDismiss show={showAlert} setShow={setShowAlert} title="Error Title" alert="Alert text" />
    </div>
    
  );
}

export default App;