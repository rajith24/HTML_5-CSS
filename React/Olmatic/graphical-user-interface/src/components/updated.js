import React,{Component} from 'react';
import SampleMultiChart from './sample_multichart';
import Draggable from 'react-draggable';
import { withResizeDetector } from 'react-resize-detector';
import Stock from './stockChart_data'
// import Graph from './graph.js';
// import Style from './style.js';
// import Csv from './csv.js'



class Card extends React.Component {
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return(
            <div className="chartresize">
               
                    <div className="mainmov copy no-cursor">
                    <Draggable handle=".handle" {...dragHandlers}>
                        <div className = "submove no-cursor">
                        
                            <nav className="navbar navbar-dark bg-dark navcopy topbar no-cursor">
                                <button type="button" className="btn icon cls no-cursor" title="Expand"  data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                                    <i className="glyphicon glyphicon-plus no-cursor"></i>
                                </button>
                                <div className="dem no-cursor">                      
                                    <button className="navbar-toggler clone no-cursor" type="button" title="Copy" data-toggle="tooltip" data-placement="bottom">
                                        <i className="fas fa-clone clone no-cursor"></i>
                                    </button>
                                    <button className="navbar-toggler delete maindel no-cursor" type="button" title="Delete" data-toggle="tooltip" data-placement="bottom" >
                                        <i className="fas fa-times delete1 no-cursor"></i>
                                    </button>
                                    <button className="navbar-toggler mainadd no-cursor" type="button" title="Add" data-toggle="tooltip" data-placement="bottom" >
                                        <i className="fas fa-plus add1 no-cursor"></i>
                                    </button>
                                    <button className="navbar-toggler bmove handle cursor" type="button" title="Move" data-toggle="tooltip" data-placement="bottom">
                                        <i className="fas fa-arrows-alt move"></i>
                                    </button>
                                    <button className="navbar-toggler redo no-cursor" type="button" title="Redo" data-toggle="tooltip" data-placement="bottom">
                                        <i className="fas fa-redo-alt no-cursor"></i>
                                    </button>
                                    <button className="navbar-toggler resize mainresize no-cursor" type="button" title="Resize" data-toggle="tooltip" data-placement="bottom">
                                        <i className="fas fa-expand-arrows-alt resize1 no-cursor"></i>
                                    </button>
                                    <button className="navbar-toggler trash no-cursor" type="button" title="Remove" data-toggle="tooltip" data-placement="bottom" >
                                        <i className="fas fa-trash trash no-cursor"></i>
                                    </button>
                                </div>
                            </nav>    
                    
                            <div className="mydiv">
                                <div className="mydivheader">
                                        {/* <canvas width="400px" height="400px"></canvas> */}
                                        <Stock/>
                                </div>
                            </div>
                      
                    </div>
                    </Draggable> 
                </div>
           
        <div className = "dupli mainmov">
            <div className = "submove">     

            </div>
        </div>

        </div>                                     
        )
    }

}
const Move = withResizeDetector(Card);

export default Move;