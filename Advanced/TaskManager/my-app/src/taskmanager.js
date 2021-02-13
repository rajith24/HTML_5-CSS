import Chart from 'chart.js';

var chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      data: [589, 445, 483, 503, 689, 692, 634],
    },
    {
      data: [639, 465, 493, 478, 589, 632, 674],
    }]
  };

var chLine = document.getElementById("chLine");
console.log(chLine)
if (chLine) {
    new Chart(chLine, {
    type: 'line',
    data: chartData,
    options: {
        scales: {
        yAxes: [{
            ticks: {
            beginAtZero: false
            }
        }]
        },
        legend: {
        display: false
        }
    }
    });
}