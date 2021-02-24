import logo from './logo.svg';
import React, {useState, useEffect,Component} from 'react';
import './App.css';
import ChartReplication from './chartReplication';
import UploadReplicate1 from './components/bindUploadChart';
import MultiUpload from './components/multiUpload';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      data_points : [],
      multi_points : []
    }
  }
  // const cadd = e => {
  //   ReactDOM.render(<ChartReplication/>,e);
  // }
  sendOptions = (options) => {
    console.log(options)
    this.setState(previousState => ({
      data_points: [...previousState.data_points, options],
    }));  
  }
  sendMultipleOptions = (options) => {
    console.log(options)
    this.setState(previousState => ({
      multi_points: [...previousState.data_points, options],
    }));  
  }
  render(){
  return (
        <div>
                <div class="fix">
            <nav class="navbar navbar-dark  title">
           
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">                
              {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
                 <i class="fas fa-less-than olmatic"></i>
                <i class="fas fa-greater-than"></i> 
              </button>
              <h4>OLMATIC</h4>
              <button class="navbar-toggler rtc2" type="file" title="Add GUI"  data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                <i class="fas fa-plus-square gui"></i>
              </button>
              <button class="navbar-toggler rtc1" type="file" title="Clear All"  data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                <i class="fas fa-minus-square clear"></i>
              </button>
              <button class="navbar-toggler rtc" type="file" title="Compare"  data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                <i class="fas fa-border-all compare"></i>
                <MultiUpload onChange={this.sendMultipleOptions.bind(this)}/>
              </button>
             <UploadReplicate1 onChange={this.sendOptions.bind(this)}/>
              
           
          </nav>
          </div> <br/><br/>
          <ChartReplication fileData = {this.state.data_points} fileName = {this.state.name} multiData = {this.state.multi_points}/>
      </div>
    

  
  );
  }
}

export default App;
