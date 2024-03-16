import Formulario from "./components/Formulario";
import { useState } from "react";
import Turnos from "./components/Turnos";

function App() {
  //ARRAY de turnos
  const [turnos, setTurnos] = useState([]);

  //Funcion que toma los turnos actuales y agregue el nuevo
  const crearTurno = (turno) => {
    setTurnos([...turnos, turno]);
  };

  //Funcion que elimina los turnos por id
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearTurno={crearTurno} />
          </div>
          <div className="one-half column">
            <h2>Turnos Agendados</h2>
            {turnos.map((turno) => (
              <Turnos
                key={turno.id}
                turno={turno}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
