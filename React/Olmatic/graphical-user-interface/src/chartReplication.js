import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
// import Image from "./image";
import StockChartData from './stockChart';
import data from "./csvjson.json";
import { withResizeDetector } from 'react-resize-detector';
import SampleMultiChart from './components/sample_multichart';

var option = datatransform1(data)
function datatransform1(data){
    var dataPoints =[]
    // console.log(data.length)
    for(var i = 0; i < data.length; i++){
        dataPoints.push({x: new Date((data[i].rt).replace(/-/g,"/")), y: Number(data[i].kW)});
    }
    return ({dataPoints : dataPoints, type: "stock1"})

}

class ChartReplicateResize extends Component{
    constructor(props) {
        super(props);
        this.state = {
        options : [option],
        name : ["Power Consumption"],
        on : false,

        };
        this.createComponent = this.createComponent.bind(this);
        this.renderChart = this.renderChart.bind(this);
        // this.resizeChart = this.resizeChart.bind(this);
        // this.renderC = this.renderC.bind(this);
    }
    createComponent(option) {
        var x = option.name != null? {dataPoints : option.dataPoints, type: option.type, name: option.name}:{dataPoints : option.dataPoints, type: option.type}
        console.log(x)
        this.setState(previousState => ({
            options: [...previousState.options, x]
        }));
    }
   
    resizeChart = () => {
        this.setState({
            on : !this.state.on
        })
    }


    renderChart(){
        var merged_array = this.props.fileData.length > 0 ? [ ...this.state.options,...this.props.fileData] : Object.values(this.state.options)
        merged_array = this.props.multiData.length > 0 ? [ ...merged_array,...this.props.multiData] : merged_array
        var merged_name_array = []
        for(var i = 0; i<merged_array.length; i++){
            if(merged_array[i].type == "stock") 
                merged_name_array.push(merged_array[i].name)
            else if(merged_array[i].type == "stock1")
                merged_name_array.push("Power Consumption")
            else {
                for(var j= 0; j<this.props.multiData.length; j++){
                    merged_name_array.push("Comparison Chart")
                }
            }
        }
        
        console.log(merged_array.length)
        return (merged_array || []).map((option,index) => {
            console.log(option.type==("stock") || option.type==("stock1"))
            return(
                // <div className= "estate">
                    <div className="container mt-3 mb-3 mainmov copy org">
                        <div className= "submove">
                        <nav className="navbar navbar-dark bg-dark navcopy topbar">
                            <button type="button" className="btn icon cls" title="Expand"  data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                                <i className="glyphicon glyphicon-plus"></i>
                                {/* <!-- <i className="fas fa-less-than"></i> --> */}
                            </button>
                            <div className="dem">                      
                                <button className="navbar-toggler clone" type="button" onClick={() => this.createComponent(option)} title="Copy" data-toggle="tooltip" data-placement="bottom">
                                    <i className="fas fa-clone clone"></i>
                                </button>
                                <button className="navbar-toggler delete maindel" type="button" title="Delete" data-toggle="tooltip" data-placement="bottom" >
                                    <i className="fas fa-times delete1"></i>
                                </button>
                                <button className="navbar-toggler mainadd" type="button" title="Add" data-toggle="tooltip" data-placement="bottom" >
                                    <i className="fas fa-plus add1"></i>
                                </button>
                                <button className="navbar-toggler bmove" type="button"  title="Move" data-toggle="tooltip" data-placement="bottom">
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
                                {(option.type==("stock") || option.type==("stock1")) && <StockChartData options={option.dataPoints} filename={merged_name_array[index]}/>}
                                {option[0]!=null && option[0].type=="compare" && <SampleMultiChart options={option}/>}
                            {/* {this.renderC()} */}
                            </div>
                        </div> 
                    </div>
                </div>
               
            //  </div>
            )
           
        })
    }

    render (){
        const {options} = this.state
        return(
           
              
        <div class = "dupli mainmov">
         {this.renderChart()}
         </div>
        // </div> 
        )
    };
}
const ChartReplication = withResizeDetector(ChartReplicateResize);

export default ChartReplication;