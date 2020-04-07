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

  const [error, setError] = useState(false);

  // const [error, actualizarError] = useState(false);
  // Función que se ejecuta al escribir en un input

  const actualizarState = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  // Extraer los valores (para agregar como props en los inputs y poder después resetear el formulario)

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el usario presiona "agregar cita"
  // Le pasamos e como parámetro y añadimos e.preventdefault para que no se envíe el formulario

  const submitCita = (e) => {
    e.preventDefault();
    console.log("submitCita");
    // Validar
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
    setError(false);
  };

  // Eliminar el mensaje previo
  // Asignar un ID

  // Crear la cita

  // Reiniciar el form

  return (
    <Fragment>
      <h2>Crear cita</h2>

      {error ? (
        <p className="alerta-error">Obligatorio rellenar todos los campos</p>
      ) : null}
      <form onSubmit={submitCita}>
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
      </form>
    </Fragment>
  );
};

export default Formulario;
