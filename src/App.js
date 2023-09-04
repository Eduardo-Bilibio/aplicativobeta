import React, { useState } from "react";
import api from "./api.js";

function App() {

  const [cep, setCep] = useState('')
  const [endere, setEndere] = useState('')


  async function buscar() {

    if (cep === '') {
      alert('Preencha algum cep!')
      return
    }

    try {
      const response = await api.get(`${cep}/json`)
      setEndere(response.data)
      setCep('')
    } catch {
      alert('Erro! Preencha um CEP valido!')
      setCep('')
    }

  }

  return (
    <div className="App">
      <h1 className="title">Buscador CEP</h1>

      <div className="input">
        <input
        type="text"
        placeholder="Digite o CEP..."
        value={cep}
        onChange={(event) => setCep(event.target.value)}
        />
        <button className="botao" onClick={buscar}><img src="https://cdn-icons-png.flaticon.com/512/64/64673.png" className="botao"/></button>
      </div>

      {Object.keys(endere).length > 0 && (
        <main className="main">

          <h2>CEP: {endere.cep}</h2>

          <span>{endere.logradouro}</span>
          <span>{endere.complemento}</span>
          <span>{endere.bairro}</span>
          <span>{endere.localidade} - {endere.uf}</span>

        </main>
      )}
      
    </div>
  );
}

export default App;
