import React, { Component } from "react";
import StockChartData from './stockChart';
import Button from 'react-bootstrap/Button';
import data from "../csvjson";
import ChartReplication from '../chartReplication';

var option = datatransform1(data)
function datatransform1(data){
    var dataPoints =[]
    // console.log(data.length)
    for(var i = 0; i < data.length; i++){
        dataPoints.push({x: new Date((data[i].rt).replace(/-/g,"/")), y: Number(data[i].kW)});
    }
    return dataPoints
}
// const chartOption = {
//     animationEnabled: true,
//           exportEnabled: true,
//     title: {
//         text: "Power Consumption"
//     },
//     subtitles:[
//         {
//             text: "kW / rt"
//         }
//     ],
//     charts: [{
//         zoomEnabled:true,
//         panEnabled:true,    
//         axisX: {
//             crosshair: {
//               enabled: true,
//               snapToDataPoint: true
//             }
//         },
//         axisY: {
//             title: "Power in kW",
//             crosshair: {
//               enabled: true,
//               snapToDataPoint: true
//             }
//         },
//         data: [{
//           type: "splineArea",
//           dataPoints: []
//        }]
//     }],
//     rangeSelector: {
//         buttons: [{
//           range: 15, 
//           rangeType: "minute",
//           label: "15min"
//         },{            
//           range: 1,
//           rangeType: "hour",
//           label: "1Hr"
//         },
//         {            
//             range: 1,
//             rangeType: "month",
//             label: "1M"
//         },
//         {            
//             range: 1,
//             rangeType: "year",
//             label: "1Yr"
//         },
//         {            
//           rangeType: "all",
//           label: "Show All" //Change it to "All"
//         }]
//     },
//     navigator: {
//         slider: {
//           minimum: new Date("2018-01-01 00:15:00"),
//           maximum: new Date("2020-06-26 23:00:00")
//         }
//       }
//   };

class UploadReplicate extends Component{
    constructor(props) {
        super(props);
        this.state = {
          options : [option],
          name : ["Power Consumption"]
        };
        this.createComponent = this.createComponent.bind(this);
        this.renderChart = this.renderChart.bind(this);
    }
    createComponent(option) {
        console.log(option)
        this.setState(state => {
            const options = state.options.concat(option[0]);
            return {
             options
            };
          });
    }
    onFileChange(event){
        this.props.onChange(event.target.files[0].name)
    }
    onFileChange1 = event => {
        var dataPoints =[]
        const file = event.target.files[0];
        const fname = event.target.files[0].name
        const reader = new FileReader();
        reader.onload = (evt) => {
        /* Parse data */
        const bstr = evt.target.result;
        const dataStringLines = bstr.split(/\r\n|\n/);
        console.log(dataStringLines)
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
        const data = dataStringLines.slice(1,)
        for(var i = 0; i < data.length; i++){
            const datatemp = data[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            if (datatemp[0] != "" && datatemp[1] !== ""){
                dataPoints.push({x: new Date((datatemp[0]).replace(/-/g,"/")), y: Number(datatemp[1])});
            }
        }
        this.setState(previousState => ({
            options: [...previousState.options, dataPoints],
            name : [...previousState.name, fname]
        }));
        const ref = React.createRef();
        <ChartReplication ref={ref}>Click me!</ChartReplication>;
        };
        reader.readAsBinaryString(file);
    };
    renderChart(options){
        console.log(options)
        const nameArr = Object.values(this.state.name)
        return (Object.values(this.state.options)).map((option,index) => {
           return <StockChartData option = {option} name = {nameArr[index]}/>
        })
    }

    render (){

        return(
            <div>
                {/* <div>
                    <input type="file" accept=".csv,.xlsx,.xls" onChange={this.onFileChange}/>
                </div>
                <div className="container">
                    <div className="row mt-2 mb-2">
                        <div className="col-sm-12 text-center">
                            {this.renderChart(this.state.options)}
                        </div>
                    </div>
                </div> */}
                {/* <div className="rai">
                    {this.renderChart(this.state.options)}
                </div> */}
                <button class="navbar-toggler rt" type="button" title="Upload"  accept=".csv,.xlsx,.xls" onChange={this.onFileChange} data-toggle="toggle tooltip" data-target="" data-placement="bottom">
                {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
                <i class="fas fa-upload upload"></i>
                <input class="single" type="file" name="multi_myfile" onChange={this.onFileChange.bind(this)}/>
              </button>
            </div> 
        )
    };
}
export default UploadReplicate;