import React, { Fragment, useState } from 'react'

/* import './App.css'; */

function App(): JSX.Element { //": JSX.Element" cuando sea creado el elemento App, será retornado como jsx
  const [newTask, setNewTask] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault  /* para que no se refresque la página cada vez que guardemos una tarea */
      console.log('newTask')
    }
  return (
      <Fragment>
        <form onSubmit={handleSubmit}>
           {/*<input type="text" onChange={e => console.log(e.target.value)}/> */} {/*cada vez que el usuario tipee algo, se actualizará el state */}
          {/* onChange es una función que tiene como parámetro un evento, pero yo sólo quiero el valor de lo que está tipeando */}
          {/*Pero yo no quiero verlo en consola, sino que quiero pasarle esos datos el newTask. Voy a establecer un State de esa tarea que he creado: e => setNewTask: */}
          {/* <input type="text" onChange={e => setNewTask()}/> */}
          {/*Ahora establecemos un valor a "newTask". Le damos el valor e.target.value: */}
          <input type="text" onChange={e => setNewTask(e.target.value)}/>
          <button>Save</button>
        </form>
      </Fragment>
  );
}

export default App;
