import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  //Citas en Local Storage

  let citasIniciales = JSON.parse(localStorage.getItem("listado"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  // Listado de citas

  const [listado, setListado] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia:
  useEffect(() => {
    localStorage.setItem("listado", JSON.stringify(listado));
  }, [listado]);
  // Función que agrega la nueva cita a las citas actuales

  const guardarCita = (cita) => {
    setListado([...listado, cita]);
  };

  // Función que elmina una cita por su id
  const eliminarCita = (id) => {
    const nuevoListado = listado.filter((cita) => cita.id !== id);
    setListado(nuevoListado);
  };

  // Mensaje condicional
  const mensaje =
    listado.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Gestión de Pacientes</h1>;
      <div className="container">
        <div className="row">
          <div className="one-half column">
            {" "}
            <Formulario guardarCita={guardarCita} />
          </div>
          <div className="one-half column">
            <h2>{mensaje}</h2>
            {listado.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
}

export default App;
