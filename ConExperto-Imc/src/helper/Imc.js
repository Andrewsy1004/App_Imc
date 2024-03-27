export const calcularResultadoIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let resultImc = '', colorFondo = '';
  
    if (imc < 18.5) {
       resultImc = 'Bajo Peso';
       colorFondo = '#f1c40f';
    } else if (imc < 25) {
      resultImc = 'Peso Normal';
      colorFondo = '#2ecc71';
    } else if (imc < 30) {
      resultImc = 'Sobrepeso';
      colorFondo = '#e67e22';
    } else if (imc < 35) {
      resultImc = 'Obesidad grado 1';
      colorFondo = '#d35400';
    } else if (imc < 40) {
      resultImc = 'Obesidad grado 2';
      colorFondo = '#e74c3c';
    } else {
      resultImc = 'Obesidad grado 3';
      colorFondo = '#c0392b';
    }
  
    return { imc: imc.toFixed(2), resultImc, colorFondo };
  }
  