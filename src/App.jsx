import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";
import FormularioControl from "./components/FormularioControl";

function App() {
  return (
    <>
      <Titulo></Titulo>
      <div className="text-center">
        <FormularioControl></FormularioControl>
      </div>
    </>
  );
}

export default App;
