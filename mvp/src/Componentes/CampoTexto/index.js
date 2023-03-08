import "./CampoTexto.css"

const CampoTexto = (props) => {

  const AoDigitar = (evento) => {
    props.AoAlterado(evento.target.value)
  }

  return(
    <div>
      <label>{props.texto}</label>
      <input onChange={AoDigitar}></input>
    </div>
  )
}

export default CampoTexto