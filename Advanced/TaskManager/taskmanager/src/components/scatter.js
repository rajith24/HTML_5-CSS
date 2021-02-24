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
    // console.clear();
    const { error, isLoaded, homes } = this.state;
    const cpu = homes.map(home => home.cpu);
    const cpu_map = homes.filter(home => home.cpu == 0)
    const xV = cpu_map.map(home => home.x);
    const yV = cpu_map.map(home => home.y);
    const x_y_values= xV.map((x, index) => {
          return{
              x : xV[index],
              y : yV[index] 
  
          }
      })

    // cpu1
    const cpu_map1 = homes.filter(home => home.cpu == 1)
    const xV1 = cpu_map1.map(home => home.x);
    const yV1 = cpu_map1.map(home => home.y);
    const x_y_values1= xV1.map((x, index) => {
          return{
              x : xV1[index],
              y : yV1[index] 
  
          }
      })

    // cpu2
    const cpu_map2 = homes.filter(home => home.cpu == 2)
    const xV2 = cpu_map2.map(home => home.x);
    const yV2 = cpu_map2.map(home => home.y);
    const x_y_values2= xV2.map((x, index) => {
          return{
              x : xV2[index],
              y : yV2[index] 
  
          }
      })

    // cpu3
    const cpu_map3 = homes.filter(home => home.cpu == 3)
    const xV3 = cpu_map3.map(home => home.x);
    const yV3 = cpu_map3.map(home => home.y);
    const x_y_values3= xV3.map((x, index) => {
          return{
              x : xV3[index],
              y : yV3[index] 
  
          }
      })
    
    // cpu4
    const cpu_map4 = homes.filter(home => home.cpu == 4)
    const xV4 = cpu_map4.map(home => home.x);
    const yV4 = cpu_map4.map(home => home.y);
    const x_y_values4= xV4.map((x, index) => {
          return{
              x : xV4[index],
              y : yV4[index] 
  
          }
      })
    
    // cpu5
    const cpu_map5 = homes.filter(home => home.cpu == 5)
    const xV5 = cpu_map5.map(home => home.x);
    const yV5 = cpu_map5.map(home => home.y);
    const x_y_values5= xV5.map((x, index) => {
          return{
              x : xV5[index],
              y : yV5[index] 
  
          }
      })

    
    // cpu6
    const cpu_map6 = homes.filter(home => home.cpu == 6)
    const xV6 = cpu_map6.map(home => home.x);
    const yV6 = cpu_map6.map(home => home.y);
    const x_y_values6= xV6.map((x, index) => {
          return{
              x : xV6[index],
              y : yV6[index] 
  
          }
      })
    
    // cpu7
    const cpu_map7 = homes.filter(home => home.cpu == 7)
    const xV7 = cpu_map7.map(home => home.x);
    const yV7 = cpu_map7.map(home => home.y);
    const x_y_values7= xV7.map((x, index) => {
          return{
              x : xV7[index],
              y : yV7[index] 
  
          }
      })

    
    // total
    const utilization = document.getElementsByClassName("utilization");
    const cpu_map_total = homes.filter(home => home.cpu == 8);
    const xV_total = cpu_map_total.map(home => home.x);
    const yV_total = cpu_map_total.map(home => home.y);
    const x_y_values_total= xV_total.map((x, index) => {
          return{
              x : xV_total[index],
              y : yV_total[index] 
  
          }
      })
    // utilization[0].innerHTML = yV_total[0];
    // console.log(utilization)
    //   const y_total= YV_total.map((x, index) => {
    //     return{
    //           utilization.style.innerHTML=yV_total[index],
    //     }
    // })






    const ctx = document.getElementsByClassName('Plot');
    const ctx1 = document.getElementsByClassName('Plot1');
    const ctx2 = document.getElementsByClassName('Plot2');
    const ctx3 = document.getElementsByClassName('Plot3');
    const ctx4 = document.getElementsByClassName('Plot4');
    const ctx5 = document.getElementsByClassName('Plot5');
    const ctx6 = document.getElementsByClassName('Plot6');
    const ctx7 = document.getElementsByClassName('Plot7');
    const ctx_total = document.getElementsByClassName('total');

    // console.log(x_y_values);
    // const i=0;
    // for (i =0; i < ctx.length; i++){
      this.scatterChart = new Chart(ctx, {
        
        
        type: 'scatter',
        data: {
            datasets: [{
                label: 'CPU 0',
                backgroundColor: 'rgba(239, 235, 235, 0.5)',
                borderColor: 'rgb(55, 146, 174)',
                showLine:true,
                borderWidth: 0.5,
                data: x_y_values,
                pointRadius: 0,
            }]},
            
        
        options :{
            legend: {
                display: false
            },
            maintainAspectRatio:false,
            gridLines:{display: true,},
            scales: {
              gridLines:{display: true,},
                xAxes: [{
                    display: false,
                    scaleLabel: {
                      display: false,
                      // labelString: 'Time(s)'
                    },
                    ticks: {

                      // forces step size to be 5 units
                      stepSize: 1 // <----- This prop sets the stepSize
                    }
                  }],
                yAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'CPU Percentage (%)'
                  },
                  ticks: {
                    min: 0,
                    max: 100,
              
                    // forces step size to be 5 units
                    stepSize: 20 // <----- This prop sets the stepSize
                  }
                }]
              },
                animation:{
                    duration: 0,
                },
        }
    
    })

    
    // for (i =0; i < ctx.length; i++){
    this.scatterChart = new Chart(ctx1, {
        
        
        type: 'scatter',
        data: {
            datasets: [{
                label: 'CPU 0',
                backgroundColor: 'rgba(239, 235, 235, 0.5)',
                borderColor: 'rgb(55, 146, 174)',
                showLine:true,
                borderWidth: 0.5,
                data: x_y_values1,
                pointRadius: 0,
            }]},
            
        
        options :{
            legend: {
                display: false
            },
            maintainAspectRatio:false,
            scales: {
              
                xAxes: [{
                  display:false,
                  gridLines:{display: true,},
                    // display: false,
                    scaleLabel: {
                      display: false,
                      // labelString: 'Time(s)'
                    },
                    ticks: {
                      display: false,

                      // forces step size to be 5 units
                      stepSize: 1 // <----- This prop sets the stepSize
                    }
                  }],
                yAxes: [{
                  display:false,
                  gridLines:{display: true,},
                  scaleLabel: {
                    display: false,
                    // labelString: 'CPU Percentage (%)'
                  },
                  ticks: {
                    display:false,
                    min: 0,
                    max: 100,
              
                    // forces step size to be 5 units
                    stepSize: 10 // <----- This prop sets the stepSize
                  }
                }]
              },
                animation:{
                    duration: 0,
                },
        }
    
    })
    
    this.scatterChart = new Chart(ctx2, {
        
        
      type: 'scatter',
      data: {
          datasets: [{
              label: 'CPU 0',
              backgroundColor: 'rgba(239, 235, 235, 0.5)',
              borderColor: 'rgba(75, 148, 177,1)',
              showLine:true,
              borderWidth: 0.5,
              data: x_y_values2,
              pointRadius: 0,
          }]},
          
      
      options :{
          legend: {
              display: false
          },
          maintainAspectRatio:false,
          gridLines:{display: true,},
          scales: {
            gridLines:{display: true,},
              xAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'Time(s)'
                  },
                  ticks: {

                    // forces step size to be 5 units
                    stepSize: 1 // <----- This prop sets the stepSize
                  }
                }],
              yAxes: [{
                display: false,
                scaleLabel: {
                  display: false,
                  // labelString: 'CPU Percentage (%)'
                },
                ticks: {
                  min: 0,
                  max: 100,
            
                  // forces step size to be 5 units
                  stepSize: 20 // <----- This prop sets the stepSize
                }
              }]
            },
              animation:{
                  duration: 0,
              },
      }
  
    })
    this.scatterChart = new Chart(ctx3, {
          
          
      type: 'scatter',
      data: {
          datasets: [{
              label: 'CPU 0',
              backgroundColor: 'rgba(239, 235, 235, 0.5)',
              borderColor: 'rgba(75, 148, 177,1)',
              showLine:true,
              borderWidth: 0.5,
              data: x_y_values3,
              pointRadius: 0,
          }]},
          
      
      options :{
          legend: {
              display: false
          },
          maintainAspectRatio:false,
          gridLines:{display: true,},
          scales: {
            gridLines:{display: true,},
              xAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'Time(s)'
                  },
                  ticks: {

                    // forces step size to be 5 units
                    stepSize: 1 // <----- This prop sets the stepSize
                  }
                }],
              yAxes: [{
                display: false,
                scaleLabel: {
                  display: false,
                  // labelString: 'CPU Percentage (%)'
                },
                ticks: {
                  min: 0,
                  max: 100,
            
                  // forces step size to be 5 units
                  stepSize: 20 // <----- This prop sets the stepSize
                }
              }]
            },
              animation:{
                  duration: 0,
              },
      }

    })
    this.scatterChart = new Chart(ctx4, {
          
          
      type: 'scatter',
      data: {
          datasets: [{
              label: 'CPU 0',
              backgroundColor: 'rgba(239, 235, 235, 0.5)',
              borderColor: 'rgba(75, 148, 177,1)',
              showLine:true,
              borderWidth: 0.5,
              data: x_y_values4,
              pointRadius: 0,
          }]},
          
      
      options :{
          legend: {
              display: false
          },
          maintainAspectRatio:false,
          gridLines:{display: true,},
          scales: {
            gridLines:{display: true,},
              xAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'Time(s)'
                  },
                  ticks: {

                    // forces step size to be 5 units
                    stepSize: 1 // <----- This prop sets the stepSize
                  }
                }],
              yAxes: [{
                display: false,
                scaleLabel: {
                  display: false,
                  // labelString: 'CPU Percentage (%)'
                },
                ticks: {
                  min: 0,
                  max: 100,
            
                  // forces step size to be 5 units
                  stepSize: 20 // <----- This prop sets the stepSize
                }
              }]
            },
              animation:{
                  duration: 0,
              },
      }

    })
    this.scatterChart = new Chart(ctx5, {
            
            
      type: 'scatter',
      data: {
          datasets: [{
              label: 'CPU 0',
              backgroundColor: 'rgba(239, 235, 235, 0.5)',
              borderColor: 'rgba(75, 148, 177,1)',
              showLine:true,
              borderWidth: 0.5,
              data: x_y_values5,
              pointRadius: 0,
          }]},
          
      
      options :{
          legend: {
              display: false
          },
          maintainAspectRatio:false,
          gridLines:{display: true,},
          scales: {
            gridLines:{display: true,},
              xAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'Time(s)'
                  },
                  ticks: {

                    // forces step size to be 5 units
                    stepSize: 1 // <----- This prop sets the stepSize
                  }
                }],
              yAxes: [{
                display: false,
                scaleLabel: {
                  display: false,
                  // labelString: 'CPU Percentage (%)'
                },
                ticks: {
                  min: 0,
                  max: 100,
            
                  // forces step size to be 5 units
                  stepSize: 20 // <----- This prop sets the stepSize
                }
              }]
            },
              animation:{
                  duration: 0,
              },
      }

    })
    this.scatterChart = new Chart(ctx6, {
            
            
      type: 'scatter',
      data: {
          datasets: [{
              label: 'CPU 0',
              backgroundColor: 'rgba(239, 235, 235, 0.5)',
              borderColor: 'rgba(75, 148, 177,1)',
              showLine:true,
              borderWidth: 0.5,
              data: x_y_values6,
              pointRadius: 0,
          }]},
          
      
      options :{
          legend: {
              display: false
          },
          maintainAspectRatio:false,
          gridLines:{display: true,},
          scales: {
            gridLines:{display: true,},
              xAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'Time(s)'
                  },
                  ticks: {

                    // forces step size to be 5 units
                    stepSize: 1 // <----- This prop sets the stepSize
                  }
                }],
              yAxes: [{
                display: false,
                scaleLabel: {
                  display: false,
                  // labelString: 'CPU Percentage (%)'
                },
                ticks: {
                  min: 0,
                  max: 100,
            
                  // forces step size to be 5 units
                  stepSize: 20 // <----- This prop sets the stepSize
                }
              }]
            },
              animation:{
                  duration: 0,
              },
      }

    })
    this.scatterChart = new Chart(ctx7, {
            
            
      type: 'scatter',
      data: {
          datasets: [{
              label: 'CPU 0',
              backgroundColor: 'rgba(239, 235, 235, 0.5)',
              borderColor: 'rgba(75, 148, 177,1)',
              showLine:true,
              borderWidth: 0.5,
              data: x_y_values7,
              pointRadius: 0,
          }]},
          
      
      options :{
          legend: {
              display: false
          },
          maintainAspectRatio:false,
          gridLines:{display: true,},
          scales: {
            gridLines:{display: true,},
              xAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'Time(s)'
                  },
                  ticks: {

                    // forces step size to be 5 units
                    stepSize: 1 // <----- This prop sets the stepSize
                  }
                }],
              yAxes: [{
                display: false,
                scaleLabel: {
                  display: false,
                  // labelString: 'CPU Percentage (%)'
                },
                ticks: {
                  min: 0,
                  max: 100,
            
                  // forces step size to be 5 units
                  stepSize: 20 // <----- This prop sets the stepSize
                }
              }]
            },
              animation:{
                  duration: 0,
              },
      }

    })
    this.scatterChart = new Chart(ctx_total, {
            
            
      type: 'scatter',
      data: {
          datasets: [{
              label: 'CPU 0',
              backgroundColor: 'rgba(239, 235, 235, 0.7)',
              borderColor: 'rgba(75, 148, 177,1)',
              showLine:true,
              borderWidth: 0.5,
              data: x_y_values7,
              pointRadius: 0,
          }]},
          
      
      options :{
          legend: {
              display: false
          },
          maintainAspectRatio:false,
          gridLines:{display: true,},
          scales: {
            gridLines:{display: true,},
              xAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'Time(s)'
                  },
                  ticks: {

                    // forces step size to be 5 units
                    stepSize: 1 // <----- This prop sets the stepSize
                  }
                }],
              yAxes: [{
                display: false,
                scaleLabel: {
                  display: false,
                  // labelString: 'CPU Percentage (%)'
                },
                ticks: {
                  min: 0,
                  max: 100,
            
                  // forces step size to be 5 units
                  stepSize: 20 // <----- This prop sets the stepSize
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

// const chartData = {
//     labels: ["S", "M", "T", "W", "T", "F", "S"],
//     datasets: [{
//       data: [589, 445, 483, 503, 689, 692, 634],
//     },
//     {
//       data: [639, 465, 493, 478, 589, 632, 674],
//     }]
//   };

// const chLine = document.getElementById("chLine");
// console.log(chLine)
// if (chLine) {
//     new Chart(chLine, {
//     type: 'line',
//     data: chartData,
//     options: {
//         scales: {
//         yAxes: [{
//             ticks: {
//             beginAtZero: false
//             }
//         }]
//         },
//         legend: {
//         display: false
//         }
//     }
//     });
// }