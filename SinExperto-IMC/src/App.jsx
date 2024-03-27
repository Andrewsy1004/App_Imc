import { useForm } from './hooks';
import Swal from 'sweetalert2'
import { useState } from 'react';

export const App = () => {  
  const { formState, onNameChange, onReset } = useForm({
        peso: '',
        altura: '',
  });
  
  const [Imc, setImc] = useState(0);
  const [colorFondo, setColorFondo] = useState('#fff');
  const [resultImc, setResultImc] = useState('');

  
  const { peso, altura} = formState;

  const calcularIMC = (ev) => {
    ev.preventDefault();
  
    let imc ;

    if ((isNaN(altura) && isNaN(peso)) || (altura < 0.55 || altura > 3) && (peso < 20 || peso > 400)){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los valores de peso y/o altura no son válidos.',
      });
      return;
    }
    
     if (isNaN(peso) || peso < 20 || peso > 400){
        Swal.fire({
         icon: 'error',
         title: 'Error',
         text: 'Peso inválido.',
      });
      return;
     }

     if (isNaN(altura) || altura < 0.55 || altura > 3){
       Swal.fire({
         icon: 'error',
         title: 'Error',
         text: 'Altura inválida.',
       })
      return;
     }

    imc = (peso / (altura * altura)).toFixed(2); // Formatea el IMC a dos decimales
    setImc(imc);

    if(imc < 18.5) {
      setColorFondo('#bdbdbd')
      setResultImc('Bajo Peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setColorFondo('#86e586')
      setResultImc('Peso Normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setColorFondo('#ecec18')
      setResultImc('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setColorFondo('#ff9f0d')
      setResultImc('Obesidad grado 1');
    } else if (imc >= 35 && imc <= 39.9) {
      setColorFondo('#ff4500')
      setResultImc('Obesidad grado 2')
    } else if (imc > 40) {
      setColorFondo('#b22222')
      setResultImc('Obesidad grado 3');
    }

  };

  return (
    <div className="container animate__animated animate__bounceInDown">
    <h1>Tabla de IMC</h1><br />
    
    <section className="imc-valor">
      <h2>IMC</h2>
      <p>
        Menos de 18,50 <br />
        Entre 18,5 y 24,90 <br />
        Entre 25 y 29,90 <br />
        Entre 30 y 34,90 <br />
        Entre 35 y 39,90 <br />
        Más de 40 
      </p>
    </section>

    <section className="resultado">
      <h2>Resultado</h2>
      <p>
        Bajo Peso <br />
        Peso Normal <br />
        Sobrepeso <br />
        Obesidad grado 1 <br />
        Obesidad grado 2 <br />
        Obesidad grado 3 <br />
      </p>
    </section>

    <section className="form">
      <h1>Calcula Tu IMC</h1>
      
      <form onSubmit={calcularIMC}>
        <label htmlFor="peso">Peso: (Kilos)</label>
        <input 
          type="number"
          name="peso" 
          id='peso'
          value={peso} 
          onChange={onNameChange} 
          placeholder="Mínimo 20kg y Máximo 400kg" />

        <label htmlFor="altura">Altura: (Metros)</label>
        <input 
          type="number"
          id="altura" 
          name="altura"
          value={altura} 
          onChange={onNameChange} 
          placeholder="Mínimo 0.55m y Máximo 3m" />

        <button type="submit">Enviar</button>
      </form>
    </section>
    {Imc>0 && (
      <section 
        style={{ backgroundColor: colorFondo }} 
        className="resultadoImc" 
        id="ImcResultado">
        Su IMC es: {Imc} y usted se encuentra {resultImc}
     </section> )}
  </div>
  );
}