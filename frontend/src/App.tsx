import React, {
    useState,
    useRef,
} from "react"; /*useRef para enfocar cursor en el inputFeld después de agregar una tarea*/

/* import './App.css'; */
type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
    /* especificamos qué propiedades tendrán mis tareas */ name: string;
    done: boolean;
}

function App(): JSX.Element {
    //": JSX.Element" cuando sea creado el elemento App, será retornado como jsx
    const [newTask, setNewTask] = useState<string>("");
    const [tasks, setTasks] = useState<ITask[]>(
        []
    ); /* useState será una lista de objetos [{}, {}] */
    const taskInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormElement) => {
        e.preventDefault();
        /* console.log(newTask) */
        addTask(newTask);
        /* console.log(tasks) */
        setNewTask(
            ""
        ); /* una vez que hayamos agregado una tarea, desaparece el texto del inputfeld */
        taskInput.current?.focus();
    };

    const addTask = (name: string): void => {
        const newTasks: ITask[] = [
            ...tasks,
            { name: name, done: false },
        ]; /* puedo especificar aquí también que const newTasks es de tipo ": ITask[]" */
        setTasks(newTasks);
        console.log(tasks);
    };

    const toggleDoneTask = (i: number): void => {
        const newTasks: ITask[] = [...tasks];
        newTasks[i].done = !newTasks[i].done;
        setTasks(newTasks);
    };

    const removeTask = (i: number): void => {
        /* console.log(i); */
        const newTasks: ITask[] = [...tasks];
        newTasks.splice(i, 1);
        setTasks(newTasks);
    };
    return (
        <section className="container p-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/*Voy a establecer un State de esa tarea que he creado: e => setNewTask.Utilizando la función "setNewTask" podremos asignar un valor a "newTask", en este caso queremos asignarle el valor e.target.value: */}
                                <input
                                    type="text"
                                    onChange={(e) => setNewTask(e.target.value)}
                                    value={newTask}
                                    className="form-control"
                                    ref={taskInput}
                                    autoFocus
                                />
                                <button className="btn btn-success btn-block mt-2">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>

                    {tasks.map((t: ITask, i: number) => (
                        <div className="card card-body" key={i}>
                            <h2
                                style={{
                                    textDecoration: t.done
                                        ? "line-through"
                                        : "",
                                }}
                            >
                                {t.name}
                            </h2>
                            <div>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => toggleDoneTask(i)}
                                >
                                    {t.done ? "✓" : "✗"}
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeTask(i)}
                                >
                                    🗑
                                </button>
                            </div>
                        </div>
                        /*  return <h2 key={i}>{t.name}</h2>; */
                    ))}
                </div>
            </div>
        </section>
    );
}

export default App;
