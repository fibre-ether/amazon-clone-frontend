import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './screens/home';
import login_page from './screens/login_page';
import './App.css';
import Login from './components/login';
import signup_page from './screens/signup_page';
import Navibar from './components/navbar';

function App() {
  //const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    console.log("useEffect");
    //console.log(showAlert);
  });
  const [num, setNum] = useState(0);

  const incr = () => {
    setNum(num+1);
    //setShowAlert(!showAlert);
    console.log("incr");
  };

  return(
    <BrowserRouter>
      <Navibar />
      <Switch>
        <Route path="/login" component={login_page} />
        <Route path="/" exact component={home} />
        <Route path="/signup" component={signup_page} />
        <Route path="/"  render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
    
  );
}
//<AlertDismiss show={showAlert} setShow={setShowAlert} title="Error Title"/>
export default App;