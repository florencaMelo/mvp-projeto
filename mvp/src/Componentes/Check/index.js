import "./Check.css"

const Check = (props) => {

  return(
    <div>
      <label>{props.texto}</label>
      <select onChange={evento => props.AoAlterado(evento.target.value)} value={props.valor}>
        <option>--</option>
        <option>Moto</option>
        <option>Bicicleta</option>
        <option>Nenhum</option>
      </select>
    </div>
  )
}

export default Check