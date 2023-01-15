import { useState } from 'react'
import './app.css'

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('')
  const [mensagem, setmensagem] = useState('')

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setmensagem("Você está abaixo do seu peso! seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setmensagem("Peso ideal! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setmensagem("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc > 34.9){
      setmensagem("Cuidado, você está obeso! Seu IMC: " + imc.toFixed(2) )
    }
  }

  return(
    <div className="app">
      <h1>Calculadora Imc</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
      <input type="text" 
      placeholder="Peso em (Kg) Ex: 90" 
      value={peso}
      onChange={ (e) => setPeso(e.target.value)}                    />
      
      <input type="text" 
      placeholder="Altura em (cm) Ex:180"
      value={altura}
      onChange= {(e) => setAltura(e.target.value)}/>
      <button onClick={calcularIMC}>Calcular</button>
    </div>
    <h2>{mensagem}</h2>
    </div>
  )
}