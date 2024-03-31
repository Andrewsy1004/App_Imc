import { useState } from 'react';
import {validaciones} from '../helper';
import {Persona} from '../class';
import '../styles/Imc.css';

export const Imc = () => {
  const [form, setForm] = useState({
     peso: '',
     altura: '',
     imc: 0,
     colorFondo: '',
     resultImc: ''
  })
  
  const onNameChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  
  const calcularIMC = (e) => {
    e.preventDefault();
    const peso = parseFloat(form.peso);
    const altura = parseFloat(form.altura);

    if (!validaciones( peso, altura)) return; 
    
    let persona = new Persona(peso,altura);
    
    const { imc, resultImc, colorFondo } = persona.calcularIMC(peso, altura);
    
    setForm(prevForm => ({
      ...prevForm,
      imc,
      colorFondo,
      resultImc
    }));

  }

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
          value={form.peso} 
          onChange={onNameChange} 
          placeholder="Mínimo 20kg y Máximo 400kg" />

        <label htmlFor="altura">Altura: (Metros)</label>
        <input 
          type="number"
          id="altura" 
          name="altura"
          value={form.altura} 
          onChange={onNameChange} 
          placeholder="Mínimo 0.55m y Máximo 3m" />

        <button type="submit">Enviar</button>
      </form>
    </section>
    {form.imc>0 && (
      <section 
        style={{ backgroundColor: form.colorFondo }} 
        className="resultadoImc" 
        id="ImcResultado">
        Su IMC es: {form.imc} y usted se encuentra {form.resultImc}
     </section> )}
  </div>
  )
}
