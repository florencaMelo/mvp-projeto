import "./Check.css"

const Check = (props) => {
  return(
    <div>
      <label>{props.texto}</label>
      <select>
        <option>Moto</option>
        <option>Bicicleta</option>
        <option>Nenhum</option>
      </select>
    </div>
  )
}

export default Check