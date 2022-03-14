module.exports = {

  buscarNumerosPrimos(number) {
    const filtro = parseInt(number);

    //validacion de campo numero entero
    if (Number.isInteger(filtro)){

      let numerosPrimosObtenidos = [];

      for (var i = 0; i <= filtro; i++) {
        let validPrimo = this.esPrimo(i);
        if(validPrimo) numerosPrimosObtenidos.push(i);

      }
      return numerosPrimosObtenidos.reverse();
    } else {
      return 'Debe ingresar un numero entero'
    }
  },

  esPrimo(numero) {
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
      if (numero % x == 0) return false;
    }
    return true;
  }
}