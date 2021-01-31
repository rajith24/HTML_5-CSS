import React, {Component} from 'react';
import Chart from 'chart.js';
import {Bar, Line, Pie, ScatterChart} from 'react-chartjs-2';


class Scatter extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            homes:[]
        };
        
    }
// componentDidMount(){
//     fetch('http://localhost:5000')
//     .then(response => response.json())
//       .then((data) => {
//         this.setState({
//             isLoaded:true,
//             homes: data
//         });
//         },
//         // error handler
//         (error) => {
//         this.setState({
//             isLoaded: true,
//             error
//         });
//        })
//   }



    async componentDidMount() {
    try {
        setInterval(async () => {
        await fetch('http://localhost:5000')
        .then(response => response.json())
            .then((data) => {
                this.setState({
                    isLoaded:true,
                    homes: data
                });
                })
        }, 1000);
        } catch(e) {
            console.log(e);
        }
    }   


 render() {
    console.clear();
    const { error, isLoaded, homes } = this.state;
    const tenpt = []
    const temp = ['x','y'];
    const xV = homes.map(home => home.x);
    const yV = homes.map(home => home.y);
    // xV.forEach((x, index) => {
    //     tenpt.push({
    //         x : xV[index],
    //         y : yV[index] 
    //     })
    // })
    const x_y_values= xV.map((x, index) => {
        return{
            x : xV[index],
            y : yV[index] 

        }
    })

    const ctx = document.getElementsByClassName('Plot');
    console.log(x_y_values);
    this.scatterChart = new Chart(ctx, {
        
        
        type: 'scatter',
        data: {
            datasets: [{
                label: 'CPU 0 SENSOR DATA',
                backgroundColor: 'rgba(75, 148, 177,1)',
                borderColor: 'rgba(0,0,0,1)',
                showLine:true,
                borderWidth: 1,
                data: x_y_values
            }]},
            
        
        options :{
            maintainAspectRatio:false,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Time(s)'
                    },
                    ticks: {

                      // forces step size to be 5 units
                      stepSize: 1 // <----- This prop sets the stepSize
                    }
                  }],
                yAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'CPU Percentage (%)'
                  },
                  ticks: {
                    min: 0,
                    max: 100,
              
                    // forces step size to be 5 units
                    stepSize: 5 // <----- This prop sets the stepSize
                  }
                }]
              },
                animation:{
                    duration: 0,
                },
        }
    
    })
   
     return(
        <div>
           
        {/* {homes.map(home => <div>{home.x}</div>)} */}
        </div>
     )} 
}

export default Scatter;