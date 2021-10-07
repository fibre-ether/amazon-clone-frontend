import React, {useState} from 'react';
import Navibar from './components/navbar';
function App() {

  const [num, setNum] = useState(0);

  const incr = () => {
    setNum(num+1);
  };

  return(
    <div>
      <Navibar />
      <button onClick={incr}>{num}</button>
    </div>
    
  );
}

export default App;