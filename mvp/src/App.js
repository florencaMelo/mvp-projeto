import './App.css';
import Formulario from './Componentes/Formulario';

function App() {

  let colaboradores = []

<<<<<<< HEAD
  const aoNovoColaboradorCadastrado = (colaborador) => {
    colaboradores.push(colaborador)
    localStorage.setItem("Colaboradores", JSON.stringify(colaboradores))
=======
  const aoNovoColaboradorCadastrato = (colaborador) =>{
    colaboradores.push(colaborador)
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores))
>>>>>>> fb1015719452f699d347ccdb6fb464c9f3fcbcbe
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
=======
      <Formulario aoColaboradorCadastrato={(colaborador => aoNovoColaboradorCadastrato(colaborador))} />
>>>>>>> fb1015719452f699d347ccdb6fb464c9f3fcbcbe
    </div>
  );
}

export default App;