import React,{Component} from 'react';
import { render } from "react-dom";
import CanvasJSReact from "../canvasjs.react";
import data from '../test_json.json';
import data1 from '../train_json.json'
import { withResizeDetector } from 'react-resize-detector';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SampleMultiChart extends Component{

    

    render() {
        var dataoptions = this.props.options
        console.log(dataoptions)
        var compareData = []
        for(var i=0; i<dataoptions.length; i++){
           var x = {
                name: "Power in file"+(i+1),
                type: "spline",
                yValueFormatString: "##.#### kW",
                showInLegend: true,
                dataPoints: dataoptions[i].dataPoints
            }
            compareData.push(x)
        }
        console.log(compareData)
        const options = {  
        animationEnabled: true,
        zoomEnabled:true,
        title:{
            text: "Comparison Chart"
        },
        axisX: {
            valueFormatString: "DD MMM,YY"
        },
        axisY: {
            title: "Power in kW",
        },
        legend:{
            cursor: "pointer",
            fontSize: 16,
        },
        toolTip:{
            shared: true
        },
        data: compareData
     }
     const containerProps = {
        width: "450px",
        height: "450px",
        margin: "15px",
        padding:"0",
      };
    //   const containerProps = {
    //     width: "100%",
    //     height: "100%",
    //     position: "inherit"
    //   };
          
     return (
        <div>
          <CanvasJSChart options = {options}  containerProps = {containerProps}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
      
      function datatransform1(data){
        var dataPoints =[]
        console.log(data.length)
        for(var i = 0; i < data.length; i++){
            dataPoints.push({x: new Date((data[i].rt).replace(/-/g,"/")), y: Number(data[i].kW)});
        }
        return dataPoints
    }
    }
}

export default SampleMultiChart;
