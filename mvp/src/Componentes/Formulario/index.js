import CampoTexto from "../CampoTexto"
import Check from "../Check"
import "./Formulario.css"


const Formulario = () => {
  return(
    <section>
      <form>
        <CampoTexto texto="Digite seu nome"/>
        <CampoTexto texto="Digite sua idade"/>
        <CampoTexto texto="Digite seu email"/>
        <Check/>
      </form>
    </section>
  )
}

export default Formulario