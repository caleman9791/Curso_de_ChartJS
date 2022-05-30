class Elemento {

  constructor(nombre) {
    this.nombre = nombre;
    this.conceptos = [];
    this.colors = [];
    this.borderColors = [];

    this.elemento = [{
      nombre: this.nombre,
      data: this.conceptos,
      color: this.conceptos.colors,
      borderColor: this.borderColors
    }];

  }

  setElemento(conceptos) {
    this.conceptos = conceptos;
    this.elemento = [{
      nombre: this.nombre,
      data: this.conceptos,
      color: this.conceptos.colors,
      borderColor: this.borderColors
    }];
  }

  getElemento() {
    return this.elemento;
  }
}

class Concepto {

  constructor(nombre) {

    this.nombre = height;
    this.color = "red";
  }

  set_Color(arguments) {
    var salida = [];
    for (var i = 0; i < arguments; i++) {

      salida.push(1);
    }
    // console.log(salida);
    return salida;
  }

  set_text_conceptos(arguments) {
    var salida = [];
    for (var i = 0; i < arguments; i++) {

      salida.push("label: " + i);
    }
    // console.log(salida);
    return salida;
  }
}
var elemento = [];
var concepto = [];