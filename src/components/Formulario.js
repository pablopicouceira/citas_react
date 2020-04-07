import React, { Fragment, useState } from "react";

const Formulario = () => {
  // Crear state de citas

  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Función que se ejecuta al escribir en un input

  const actualizarState = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  // Extraer los valores (para agregar como props en los inputs y poder después resetear el formulario)

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeHolder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeHolder="Nombre dueño"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
      </form>

      <label>Síntomas</label>
      <textarea
        className="u-full-width"
        name="sintomas"
        onChange={actualizarState}
        value={sintomas}
      ></textarea>

      <button type="submit" className="u-full-width button-primary">
        Agregar cita
      </button>
    </Fragment>
  );
};

export default Formulario;