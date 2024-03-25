import { useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearTurno }) => {
  const [turno, setTurno] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setTurno({
      ...turno,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = turno;

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDAR
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    //ELIMINAR MENSAJE DE ERROR ANTERIOR
    setError(false);

    //ASIGNAR ID
    turno.id = uuid();

    //CREAR TURNO
    crearTurno(turno);

    //REINICIAR FORMULARIO
    setTurno({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Agendar turno</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="mascota">Nombre Mascota</label>
        <input
          type="text"
          id="mascota"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label htmlFor="propietario">Nombre Dueño</label>
        <input
          type="text"
          id="propietario"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del Dueño"
          onChange={handleChange}
          value={propietario}
        />

        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          id="hora"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label htmlFor="sintomas">Sintomas</label>
        <textarea
          id="sintomas"
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button agregar"
        >
          Agendar Turno
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  crearTurno: PropTypes.func.isRequired,
};
export default Formulario;
