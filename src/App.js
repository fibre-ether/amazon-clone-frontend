import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import login_page from './screens/login_page';
import signup_page from './screens/signup_page';
import Navibar from './components/navbar';
import Index from './screens/index';

function App() {
  //const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    console.log("started"); 
  }, []);
  

  return(
    <BrowserRouter>
      <Navibar search="true" />
      <Switch>
        <Route path="/login" exact component={login_page} />
        <Route path="/search" exact component={Home} />
        <Route path="/signup" exact component={signup_page} />
        <Route path="/home" exact component= {Index}/>
        <Route path="/" exact component= {Index}/>
        <Route path="/"  render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
    
  );
}
//<AlertDismiss show={showAlert} setShow={setShowAlert} title="Error Title"/>
export default App;