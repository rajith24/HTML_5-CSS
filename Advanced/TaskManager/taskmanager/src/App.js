import logo from './logo.svg';
import React, {useState, useEffect} from 'react';

import './App.css';
import TaskManager from './components/Taskmanager'
import Scatter from './components/scatter'

function App() {
  return (
    <div>
      <div>
        <TaskManager/>
        <Scatter/>
      </div>
      {/* <div>
        <Scatter/>
        <canvas className="Plot" width="400px" height="400px"></canvas>

      </div> */}
    </div>
    
  );
}

export default App;
