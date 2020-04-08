import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Listado de citas

  const [listado, setListado] = useState([]);

  // Función que agrega la nueva cita a las citas actuales

  const guardarCita = (cita) => {
    setListado([...listado, cita]);
  };

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
            <h2>Administra tus citas</h2>
            {listado.map((cita) => (
              <Cita key={cita.id} cita={cita} />
            ))}
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
}

export default App;
