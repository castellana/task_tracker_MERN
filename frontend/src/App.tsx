import React, { Fragment, useState } from 'react'

/* import './App.css'; */
type FormElement = React.FormEvent<HTMLFormElement>

interface ITask { /* especificamos qué propiedades tendrán mis tareas */
    name: string;
    done: boolean;
}

function App(): JSX.Element { //": JSX.Element" cuando sea creado el elemento App, será retornado como jsx
    const [newTask, setNewTask] = useState<string>('')
    const [tasks, setTasks] = useState<ITask[]>([]) /* useState será una lista de objetos [{}, {}] */

    const handleSubmit = (e: FormElement) => {
      e.preventDefault();
      /* console.log(newTask) */
      addTask(newTask)
      /* console.log(tasks) */
      setNewTask(''); /* una vez que hayamos agregado una tarea, desaparece el texto del inputfeld */
   }
  
    const addTask = (name: string) => {
       const newTasks: ITask[] = [...tasks, {name: name, done: false}] /* puedo especificar aquí también que const newTasks es de tipo ": ITask[]" */
       setTasks(newTasks)
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
            {/*Voy a establecer un State de esa tarea que he creado: e => setNewTask.Utilizando la función "setNewTask" podremos asignar un valor a "newTask", en este caso queremos asignarle el valor e.target.value: */}
                <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask}/>
                <button>Save</button>
            </form>

            {tasks.map((t: ITask, i: number) => {
                return <h2 key={i}>{t.name}</h2>
            })
            }
        </Fragment>
    );
}

export default App;
