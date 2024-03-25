import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";
import Turnos from "./components/Turnos";

function App() {
  //LOCALSTORAGE
  let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));
  if (!turnosIniciales) {
    turnosIniciales = [];
  }

  //ARRAY de turnos
  const [turnos, setTurnos] = useState(turnosIniciales);

  //Use EFFECT para realizar operaciones cuando cambia el STATE
  useEffect(() => {
    let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));

    if (turnosIniciales) {
      localStorage.setItem("turnos", JSON.stringify(turnos));
    } else {
      localStorage.setItem("turnos", JSON.stringify([]));
    }
  }, [turnos]);

  //Funcion que toma los turnos actuales y agregue el nuevo
  const crearTurno = (turno) => {
    setTurnos([...turnos, turno]);
  };

  //Funcion que elimina los turnos por id
  const eliminarTurno = (id) => {
    const nuevosTurnos = turnos.filter((turno) => turno.id !== id);

    setTurnos(nuevosTurnos);
  };

  //MENSAJE CONDICIONAL COLUMNA DE TURNOS AGENDADOS
  const titulo =
    turnos.length === 0 ? "No hay Turnos Agendados" : "Turnos Agendados";

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearTurno={crearTurno} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {turnos.map((turno) => (
              <Turnos
                key={turno.id}
                turno={turno}
                eliminarTurno={eliminarTurno}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
