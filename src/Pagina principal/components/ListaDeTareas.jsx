import React, { useState } from 'react'
import { TareaForm } from './TareaForm'
import "../../estilos/ListaDeTareas.css"
import { ObjetivosGym } from './ObjetivosGym';

export const ListaDeTareas = () => {
    //el valor inicial de tareas va a ser un arreglo vacio
    const [Tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {

        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...Tareas]
            setTareas(tareasActualizadas)

        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = Tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas)
    }

    const completarTarea = (id) => {

        const tareasActualizadas = Tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas)

    }


    return (
        <>
            <TareaForm onSubmit={agregarTarea} />
            <div className='tarea-lista-contenedor'>
                {
                    Tareas.map((tarea) =>
                        <ObjetivosGym
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    )
}





