import './App.css';
import Formulario from './Componentes/Formulario';

function App() {

  let colaboradores = []

  const aoNovoColaboradorCadastrado = (colaborador) => {
    colaboradores.push(colaborador)
    localStorage.setItem("Colaboradores", JSON.stringify(colaboradores))
  }

  return (
    <div className="App">
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
    </div>
  );
}

export default App;
