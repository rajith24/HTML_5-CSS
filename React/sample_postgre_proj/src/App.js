import React, {useState, useEffect} from 'react';
import './App.css'
import Chart from './components/Chart';
import Scatter from './components/scatter';

import './components/scatter';

function App() {
  // const x = JSON.parse(merchants)
  return (
    <div>
      {/* {merchants ? merchants : 'There is no merchant data available'} */}
      {/* <Chart/> */}
      <Scatter/>
      <canvas className="Plot" width="400px" height="400px"></canvas>

    </div>
    
    
  );
}
export default App;