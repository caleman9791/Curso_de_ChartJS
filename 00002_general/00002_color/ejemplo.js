var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Green", "Yellow2", "Red", "Purple", "Blue"],
    datasets: [{
      data: [1, 2],
      backgroundColor: [
        'green',
        'yellow',
        // 'red',
        // 'purple',
        // 'blue',
      ],
      labels: [
        'green',
        'yellow',
        // 'red',
        // 'purple',
        // 'blue',
      ]
    }, {
      data: [6, 7, 8],
      backgroundColor: [
        'black',
        'grey',
        'lightgrey'
      ],
      labels: [
        'black',
        'grey',
        'lightgrey'
      ],
    }, ]
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          // alert("message?: DOMString");
          // var dataset = data.datasets[tooltipItem.datasetIndex];
          // var index = tooltipItem.index;
          // return dataset.labels[index] + ': ' + dataset.data[index];
        }
      }
    }
  }
});