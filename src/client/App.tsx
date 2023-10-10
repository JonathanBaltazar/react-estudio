import { useState, Fragment } from "react";
// COMPONENTS
import List from "./components/List";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";
// TYPES
import { Task } from "./types";

interface AppState {
    tasks: Array<Task>;
}

function App() {
    const [tasks, setTasks] = useState<AppState["tasks"]>([]);

    let handleNewTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    let handleDeleteTask = (id: string) => {
        // setTasks(tasks.filter((task, i) => i !== id));
        console.log(`Deleting task ${id}...`);
    };

    let tasksList = tasks.map((task, i) => (
        <Fragment key={i}>
            <TaskItem task={task} deleteTask={handleDeleteTask} />
        </Fragment>
    ));
    return (
        <div className="container">
            <TaskForm newTask={handleNewTask} />
            <List>{tasksList}</List>
        </div>
    );
}

export default App;
