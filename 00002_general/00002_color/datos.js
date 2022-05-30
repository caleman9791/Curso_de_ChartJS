class Datos {

  constructor(elemento) {
    this.elemento = elemento;
    this.datos = [];
  }

  setDatos(elemento) {
    this.elemento = elemento;
  }
  getDatos() {
    for (var i = this.elemento.length - 1; i >= 0; i--) {
      if (i == 0) {
        this.xcolor = "red";
      } else {
        this.xcolor = "white";
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
    return this.datos
  }
}