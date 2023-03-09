import './App.css';
import Formulario from './Componentes/Formulario';

function App() {

  let colaboradores = []

  const aoNovoColaboradorCadastrato = (colaborador) =>{
    colaboradores.push(colaborador)
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores))
  }

  return (
    <div className="App">
      <Formulario aoColaboradorCadastrato={(colaborador => aoNovoColaboradorCadastrato(colaborador))} />
    </div>
  );
}

export default App;
