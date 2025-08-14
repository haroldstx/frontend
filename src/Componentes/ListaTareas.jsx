//Clase para hacer la lista de tareas
import { react, useState } from "react";
import formularioTarea from "./FormularioTarea";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [newTarea, setNewTarea] = useState("");

  const agregarTarea = () => {
    if (newTarea.trim() === "") return;
    setTareas([...tareas, newTarea]);
    setNewTarea("");
    console.log("Tarea agregada:", newTarea);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    console.log(index);
    setTareas(nuevasTareas);
    console.log("Tarea eliminada:", tareas[index]);
  };

  const contarElementos = () => {
    return tareas.length;
  };

  return (
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

        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea}
              <button onClick={() => eliminarTarea(index)}>❌</button>
            </li>
          ))}
        </ul>
        <p>Total de tareas: {contarElementos()}</p>
      </div>
    </div>
  );
}

export default ListaTareas;
