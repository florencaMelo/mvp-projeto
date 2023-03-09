import "./CampoTexto.css"

const CampoTexto = (props) => {

  const AoDigitar = (evento) => {
    props.AoAlterado(evento.target.value)
  }

  return(
    <div>
      <label>{props.texto}</label>
      <input onChange={AoDigitar} placeholder={props.placeholder}></input>
    </div>
  )
}

export default CampoTexto