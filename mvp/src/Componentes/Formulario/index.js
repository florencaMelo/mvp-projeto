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
    /* console.log("Formulário foi submetido", nome, idade, email, alternativa) */
    props.aoColaboradorCadastrado({
      nome : nome,
      idade : idade, 
      email : email,
      alternativa : alternativa
    })
  }

  return(
    <section>
      <form onSubmit={AoSalvar}>
        <CampoTexto texto="Digite seu nome" AoAlterado={valor => setNome(valor)} placeholder="Nome"/>
        <CampoTexto texto="Digite sua idade" AoAlterado={valor => setIdade(valor)} placeholder="Idade"/>
        <CampoTexto texto="Digite seu email" AoAlterado={valor => setEmail(valor)} placeholder="Email"/> 
        <Check valor={alternativa} texto="Selecione uma das alternativas" AoAlterado={valor => setAlternativa(valor)}/>
        <Botao/>
      </form>
    </section>
  )
}

export default Formulario 