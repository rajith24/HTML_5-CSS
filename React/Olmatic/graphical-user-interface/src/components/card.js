import React,{Component} from 'react';
import Stock from './stockChart_data'
import Graph from './graph.js';
// import Style from './style.js';
// import Csv from './csv.js'
// import $ from 'jquery';



class Move extends React.Component {
    render() {
        return(
            <div>

        {/* <!-- ################################################################################ --> */}
        <div className="container mt-3 mb-3 mainmov copy">
            <div className= "submove">
            <nav className="navbar navbar-dark bg-dark navcopy topbar">
                <button type="button" className="btn icon cls" title="Expand"  data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                    <i className="glyphicon glyphicon-plus"></i>
                    {/* <!-- <i className="fas fa-less-than"></i> --> */}
                </button>
                <div className="dem">                      
                    <button className="navbar-toggler clone" type="button" title="Copy" data-toggle="tooltip" data-placement="bottom">
                        <i className="fas fa-clone clone"></i>
                    </button>
                    <button className="navbar-toggler delete maindel" type="button" title="Remove" data-toggle="tooltip" data-placement="bottom" >
                        <i className="fas fa-times delete1"></i>
                    </button>
                    <button className="navbar-toggler mainadd" type="button" title="Add" data-toggle="tooltip" data-placement="bottom" >
                        <i className="fas fa-plus add1"></i>
                    </button>
                    <button className="navbar-toggler bmove" type="button" title="Move" data-toggle="tooltip" data-placement="bottom">
                        <i className="fas fa-arrows-alt move"></i>
                    </button>
                    <button className="navbar-toggler bcancel" type="button" title="Cancel" data-toggle="tooltip" data-placement="bottom" >
                        <i className="fas fa-ban cancel"></i>
                    </button>
                    <button className="navbar-toggler bredo" type="button" title="Redo" data-toggle="tooltip" data-placement="bottom">
                        <i className="fas fa-redo-alt redo"></i>
                    </button>
                    <button className="navbar-toggler resize mainresize" type="button" title="Resize" data-toggle="tooltip" data-placement="bottom">
                        <i className="fas fa-expand-arrows-alt resize1"></i>
                    </button>
                    <button className="navbar-toggler trash" type="button" title="Delete" data-toggle="tooltip" data-placement="bottom" >
                        <i className="fas fa-trash trash"></i>
                    </button>
                </div>
             </nav>    
           
             <div className="mydiv">
                <div className="mydivheader">
                    <canvas width="400px" height="400px"></canvas>
                </div>
            </div> 
        </div>
    </div>
    <div className= "dupli mainmov">
        <div className= "submove">     
        </div>
    </div>

    {/* <!-- Original State of GUI --> */}
    <div className= "state">
        <div className="container mt-3 mb-3 mainmov copy org">
            <div className= "submove">
            <nav className="navbar navbar-dark bg-dark navcopy topbar">
                <button type="button" className="btn icon cls" title="Expand"  data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                    <i className="glyphicon glyphicon-plus"></i>
                    {/* <!-- <i className="fas fa-less-than"></i> --> */}
                </button>
                <div className="dem">                      
                    <button className="navbar-toggler clone" type="button" title="Copy" data-toggle="tooltip" data-placement="bottom">
                        <i className="fas fa-clone clone"></i>
                    </button>
                    <button className="navbar-toggler delete maindel" type="button" title="Delete" data-toggle="tooltip" data-placement="bottom" >
                        <i className="fas fa-times delete1"></i>
                    </button>
                    <button className="navbar-toggler mainadd" type="button" title="Add" data-toggle="tooltip" data-placement="bottom" >
                        <i className="fas fa-plus add1"></i>
                    </button>
                    <button className="navbar-toggler bmove" type="button" title="Move" data-toggle="tooltip" data-placement="bottom">
                        <i className="fas fa-arrows-alt move"></i>
                    </button>
                    <button className="navbar-toggler bcancel" type="button" title="Cancel" data-toggle="tooltip" data-placement="bottom" >
                        <i className="fas fa-ban cancel"></i>
                    </button>
                    <button className="navbar-toggler bredo" type="button" title="Redo" data-toggle="tooltip" data-placement="bottom">
                        <i className="fas fa-redo-alt redo"></i>
                    </button>
                    <button className="navbar-toggler resize mainresize" type="button" title="Resize" data-toggle="tooltip" data-placement="bottom">
                        <i className="fas fa-expand-arrows-alt resize1"></i>
                    </button>
                    <button className="navbar-toggler trash" type="button" title="Remove" data-toggle="tooltip" data-placement="bottom" >
                        <i className="fas fa-trash trash"></i>
                    </button>
                </div>
             </nav>    
           
             <div className="mydiv">
                <div className="mydivheader">
                    <canvas width="400px" height="400px"></canvas>
                </div>
            </div> 
        </div>
    </div>
    </div>

        </div>
            
        )
    }

}

export default Move;