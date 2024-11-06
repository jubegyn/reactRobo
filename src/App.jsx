import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Veiculo from './Veiculo/Veiculo'
import Informacoes from './Informacoes/Informacoes'
import Rodape from './Rodape/Rodape'

function App() {
  const [coordenadas, setCoordenadas] = useState('')

  return (
    <>
      <div className="cabecalho"><Header/></div>
      <div className="veiculo"><Veiculo/></div>
      <div><Informacoes /></div>
      <div className="rodape"><Rodape/></div>
    </>
  )
}

export default App
