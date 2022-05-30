class Concepto {

  constructor(nombre) {
    this.nombre = nombre;
    this.conceptos = [];
    this.colores = [];
    this.backdropColors = [];
    this.borderColors = [];
    this.datos = [];
    console.log('================= decalaracion')
    console.log(this.nombre);
    console.log(this.conceptos);
    console.log(this.colores);
    console.log(this.borderColors);
    console.log(this.datos);
  }

  addConcepto(arg) {

    this.conceptos.push(1);
    this.colores.push(arg.color);
    this.borderColors.push(arg.Bcolor);
    this.backdropColors.push(arg.Backcolor);
    this.setDatos();
    console.log('================= decalaracion')
    console.log(this.nombre);
    console.log(this.conceptos);
    console.log(this.colores);
    console.log(this.borderColors);
    console.log(this.datos);

  }

  setColor(arg) {

    this.colores[arg.indice] = arg.color;

    console.log('================= setColor')
    console.log(this.nombre);
    console.log(this.conceptos);
    console.log(this.colores);
    console.log(this.borderColors);
    console.log(this.datos);
    this.setDatos();
  }
  setBacgroungColor(arg) {

    this.borderColors[arg.indice] = arg.color;

    console.log('================= setColor')
    console.log(this.nombre);
    console.log(this.conceptos);
    console.log(this.colores);
    console.log(this.borderColors);
    console.log(this.datos);
    this.setDatos();
  }

  setBorderColor(arg) {

    this.borderColors[arg.indice] = arg.color;

    console.log('================= setBorderColor')
    console.log(this.nombre);
    console.log(this.conceptos);
    console.log(this.colores);
    console.log(this.borderColors);
    console.log(this.datos);
    this.setDatos();
  }

  getDatos() {

    console.log('================= getDatos')
    console.log(this.nombre);
    console.log(this.conceptos);
    console.log(this.colores);
    console.log(this.borderColors);
    console.log(this.datos);
    this.setDatos();
    return this.datos;

  }

  setDatos() {
    this.datos = {
      nombre: this.nombre,
      data: this.conceptos, // 
      color: this.colores,
      backgroundColor: this.backdropColors, // 
      borderColor: this.borderColors //
    };

    console.log('=========================================================== Objeto');
    console.log(this.datos);
    console.log('=========================================================== Objeto');
  }
}

function verelemento(elemento) {
  console.log(elemento);
}

var elemento = [];
elemento.push(new Concepto("Concepto"));

elemento[0].addConcepto({
  color: "red",
  Bcolor: "green",
  Backcolor: "red"
});
elemento[0].addConcepto({
  color: "green",
  Bcolor: "yellow",
  Backcolor: "green"
});
elemento.push(new Concepto("Concepto"));

elemento[1].addConcepto({
  color: "red",
  Bcolor: "green",
  Backcolor: "red"
});
elemento[1].addConcepto({
  color: "green",
  Bcolor: "yellow",
  Backcolor: "green"
});

verelemento(elemento);
// elemento.push(new Concepto("Concepto"));

// elemento[1].addConcepto({
//   color: "red",
//   Bcolor: "green"
// });
// elemento[1].addConcepto({
//   color: "red",
//   Bcolor: "yellow"
// });

// elemento.getDatos();
// elemento.setDatos;
// console.log(elemento.getDatos);

// elemento.setColor({
//   indice: 0,
//   color: "red"
// });
// elemento.setBorderColor({
//   indice: 1,
//   color: "red"
// });
// elemento.setDatos;
// console.log(elemento.getDatos);

// concepto[0] = [];

// elemento[0] = [{
//   nombre: "indentificador",
//   data: [1], // 
//   labels: ["uno"], // 
//   color: ["green"], // 
//   borderColor: ["red"] //
// }];

var datos = [];
for (var i = elemento.length - 1; i >= 0; i--) {
  datos.push(elemento[i].getDatos());

}

// datos.push(elemento.getDatos());
// datos.push(elemento.getDatos());

var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    // labels: ['OK 1', 'OK 2', 'OK 3', 'OK 4'],
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
    plugins: {
      tooltip: {

        enabled: false
      }
    },
    responsive: true,
    legend: {
      display: false,
    }

  }
});

myChart.data.datasets[1].backgroundColor[1] = "blue";
myChart.data.datasets[0].backgroundColor[0] = "blue"; // Would update the first dataset's value of 'March' to be 50
myChart.update();