import { React, use, useState } from "react";

function FormularioTarea() {
  const [agregarTarea, setAgregarTarea] = useState([]);
  const [newTarea, setNewTarea] = useState("");

  <div className="Lista-Tareas">
    <header className="Header">
      <h1>Lista de Tareas 📃🏡</h1>
    </header>

    <div className="Formulario">
      <input
        type="text"
        value={newTarea}
        onChange={(e) => setNewTarea(e.target.value)}
        placeholder="Escribir una tarea..."
      />
      <button className="Boton-Agregar" onClick={agregarTarea}>
        Agregar
      </button>
    </div>
  </div>;
}
