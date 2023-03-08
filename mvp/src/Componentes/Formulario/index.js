import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import Check from "../Check"
import "./Formulario.css"
import { useState } from "react"


const Formulario = () => {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [alternativa, setAlternativa] = useState("")

  const AoSalvar = (evento) => {
    evento.preventDefault()
    console.log
  }

  return(
    <section>
      <form onSubmit={AoSalvar}>
        <CampoTexto texto="Digite seu nome"/>
        <CampoTexto texto="Digite sua idade"/>
        <CampoTexto texto="Digite seu email" AoAlterado={valor => setEmail(valor)}/> 
        <Check texto="Selecione uma das alternativas"/>
        <Botao/>
      </form>
    </section>
  )
}

export default Formulario