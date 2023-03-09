import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import Check from "../Check"
import "./Formulario.css"
import { useState } from "react"


const Formulario = (props) => {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [alternativa, setAlternativa] = useState("")

  const AoSalvar = (evento) => {
    evento.preventDefault()
  }

  props.aoColaboradorCadastrado({
    nome : nome,
    idade : idade,
    email : email,
    alternativa : alternativa
  })

  return(
    <section>
      <form onSubmit={AoSalvar}>
        <CampoTexto texto="Digite seu nome" AoAlterado={valor => setNome(valor)}/>
        <CampoTexto texto="Digite sua idade" AoAlterado={valor => setIdade(valor)}/>
        <CampoTexto texto="Digite seu email" AoAlterado={valor => setEmail(valor)}/> 
        <Check texto="Selecione uma das alternativas" AoAlterado={valor => setAlternativa(valor)}/>
        <Botao/>
      </form>
    </section>
  )
}

export default Formulario