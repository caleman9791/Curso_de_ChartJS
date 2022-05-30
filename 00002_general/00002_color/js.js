var elemento = [];

function set_conceptos(arguments) {
  var salida = [];
  for (var i = 0; i < arguments; i++) {

    salida.push(1);
  }
  // console.log(salida);
  return salida;
}

function set_text_conceptos(arguments) {
  var salida = [];
  for (var i = 0; i < arguments; i++) {

    salida.push("label: " + i);
  }
  // console.log(salida);
  return salida;
}

// set_conceptos(5);
// console.log(set_conceptos(5));

elemento[0] = [{
  nombre: "indentificador",
  data: set_conceptos(2),
  labels: set_text_conceptos(1),
  color: ["green", "blue"],
  borderColor: ["red"]
}];

elemento[1] = [{
  nombre: "indentificador2",
  data: set_conceptos(5),
  // labels: set_text_conceptos(3),
  color: ["red", "yellow"],
  borderColor: ["yellow"]
}];

// elemento[2] = [{
//   nombre: "indentificador2",
//   data: set_conceptos(20),
//   labels: set_text_conceptos(4),
//   color: ["red"],
//   borderColor: ["yellow"]
// }];
// elemento[3] = [{
//   nombre: "indentificador2",
//   data: set_conceptos(10),
//   labels: set_text_conceptos(4),
//   color: ["orange"],
//   borderColor: ["yellow"]
// }];
// elemento[4] = [{
//   nombre: "indentificador2",
//   data: set_conceptos(50),
//   labels: set_text_conceptos(4),
//   color: ["orange"],
//   borderColor: ["yellow"]
// }];

// console.log(elemento[i][0]);
var datos = []
for (var i = elemento.length - 1; i >= 0; i--) {
  if (i == 0) {
    var xcolor = "red";
  } else {
    var xcolor = "white";
  }
  datos.push(
    // 
    {

      data: elemento[i][0].data,
      backgroundColor: elemento[i][0].color,
      // labels: ["Uno"],
      borderColor: [xcolor]

    }
  );
}

var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['OK 1', 'OK 2', 'OK 3', 'OK 4'],
    datasets: datos

  },
  options: {
    onClick: (e) => {
      const canvasPosition = Chart.helpers.getRelativePosition(e, myChart);

      console.log(e);

      console.log(e.x);
      console.log(e.y);

    },
    // tooltips: {
    //   callbacks: {
    //     label: function(tooltipItem, data) {
    //       var dataset = data.datasets[tooltipItem.datasetIndex];
    //       var index = tooltipItem.index;
    //       return dataset.labels[index] + ': ' + dataset.data[index];
    //     }
    //   }
    // },
    // plugins: {
    //   tooltip: {

    //     enabled: false
    //   }
    // },
    responsive: true,
    legend: {
      display: false,
    }

  }
});

function actualizar(chart) {
  chart.data.datasets[0].data[indice] = this.value; // Would update the first dataset's value of 'March' to be 50
  chart.update();
}

function verelemento(elemento) {
  console.log(elemento.data.datasets);
}