import "./CampoTexto.css"

const CampoTexto = (props) => {
  return(
    <div>
      <label>{props.texto}</label>
      <input></input>
    </div>
  )
}

export default CampoTexto