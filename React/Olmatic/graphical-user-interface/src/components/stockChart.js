import React, { Component } from "react";
import CanvasJSReact from './canvasjs.stock.react';
import Button from 'react-bootstrap/Button';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class StockChartData extends Component {	
    constructor(props){
      super(props)
    }

    render(){
        var dataoptions = this.props.option
        var fname = this.props.name
        // const Minx = getMinX(datatrans)
        // const MaxX = getMaxX(datatrans)
        // console.log(Object.prototype.toString.call(Minx) === '[object Date]')
        // console.log(typeof(Minx),MaxX)
        // options.navigator.slider.minimum = Minx
        // options.navigator.slider.minimum = MaxX

      
        const options = {
            animationEnabled: true,
			      exportEnabled: true,
            title: {
                text: fname
            },
            subtitles:[
                {
                    text: "kW / rt"
                }
            ],
            charts: [{
                zoomEnabled:true,
                panEnabled:true,    
                axisX: {
                    crosshair: {
                      enabled: true,
                      snapToDataPoint: true
                    }
                },
                axisY: {
                    title: "Power in kW",
                    crosshair: {
                      enabled: true,
                      snapToDataPoint: true
                    }
                },
                data: [{
                  type: "splineArea",
                  dataPoints: dataoptions
               }]
            }],
            rangeSelector: {
                buttons: [{
                  range: 15, 
                  rangeType: "minute",
                  label: "15min"
                },{            
                  range: 1,
                  rangeType: "hour",
                  label: "1Hr"
                },
                {            
                    range: 1,
                    rangeType: "month",
                    label: "1M"
                },
                {            
                    range: 1,
                    rangeType: "year",
                    label: "1Yr"
                },
                {            
                  rangeType: "all",
                  label: "Show All" //Change it to "All"
                }]
            },
            navigator: {
                slider: {
                  minimum: new Date("2018-01-01 00:15:00"),
                  maximum: new Date("2020-06-26 23:00:00")
                }
              }
          };
          const containerProps = {
            width: "80%",
            // height: "450px",
            margin: "auto"
          };
          return (
            <div>
            {/* <Button title="CSV Save" data-toggle="tooltip" data-placement="bottom" className="position btn btn-sm btn-dark" onClick={downloadCSV}>
             <i class="fas fa-download">
             </i> CSV </Button> */}
              <CanvasJSStockChart
                options={options}
                containerProps = {containerProps}
                onRef={ref => this.stockChart = ref}
              />
            </div>
          );
          function getMinX(data) {
            return data.reduce((min, p) => p.x < min ? p.x : min, data[0].x);
          }
          function getMaxX(data) {
            return data.reduce((max, p) => p.x > max ? p.x : max, data[0].x);
          }
        function dataTransform(x){
          // console.log(x.map(a => a.rt));
          var x = JSON.stringify(x)
          x = x.replace(/\"rt\":/g, "\"x\":");
          x = x.replace(/\"kW\":/g, "\"y\":");
          x = JSON.parse(x)
          // console.log(x.map(a => a.y));
          // console.log(x.slice(0,4))
          return x;
        }

        function datatransform1(data){
            var dataPoints =[]
            // console.log(data.length)
            for(var i = 0; i < data.length; i++){
                dataPoints.push({x: new Date((data[i].rt).replace(/-/g,"/")), y: Number(data[i].kW)});
            }
            return dataPoints
        }
        function convertChartDataToCSV(args) {  
            var result, ctr, keys, columnDelimiter, lineDelimiter, data;
        
            data = args.data || null;
            if (data == null || !data.length) {
            return null;
            }
        
            columnDelimiter = args.columnDelimiter || ',';
            lineDelimiter = args.lineDelimiter || '\n';
        
            keys = Object.keys(data[0]);
        
            result = '';
            result += keys.join(columnDelimiter);
            result += lineDelimiter;
        
            data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
            });
            return result;
        }
        
        function downloadCSV() {
            // console.log(options)
            var filename = "chart-data.csv"
            var chart =  options.charts[0].data ;
            var data, filename, link;
            var csv = "";
            for(var i = 0; i < chart.length; i++){
            csv += convertChartDataToCSV({
                data: chart[i].dataPoints
            });
            }
            if (csv == null) return;
        
            // filename = filename || 'chart-data.csv';
        
            if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
            }
            
            data = encodeURI(csv);
            link = document.createElement('a');
            link.setAttribute('href', data);
            link.setAttribute('download', filename);
            document.body.appendChild(link); // Required for FF
            link.click(); 
              document.body.removeChild(link);   
        }
        function sfn(){
            // console.log("xxxxxxx")
        }
    }
  }
  export default StockChartData;