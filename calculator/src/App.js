
import './App.css';
import React from "react"
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {

  const [calcData, setCalcData] = React.useState([])

  return (
    <div>
      <Display 
        calcData={calcData}
      />
      <Keypad 
        calcData={calcData}
        setCalcData={setCalcData}
      />
    </div>
  );
}

export default App;
