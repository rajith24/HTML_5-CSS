import React, {Component} from 'react';
import {Bar, Line, Pie, ScatterChart} from 'react-chartjs-2';


class Chart extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartData: {
                labels: ['January', 'February', 'March',
           'April', 'May'],
                datasets: [
                    {
                      label: 'Rainfall',
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: 'rgba(75,192,192,1)',
                      borderColor: 'rgba(0,0,0,1)',
                      borderWidth: 2,
                      data: [65, 59, 80, 81, 56]
                    }
                  ]
                }
            }
        }



    render(){
        return(
            <div className="chart">
            <Line
                data={this.state.chartData}
                options={{
                    title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
          }}
        />

            </div>
        )
    }

}
export default Chart;