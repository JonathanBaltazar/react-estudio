import React from "react";
// TYPES
import { Task } from "../types";

interface Props {
    task: Task;
    deleteTask: (id: string) => void;
}

function TaskItem({ task, deleteTask }: Props) {
    let handleDelete = () => {
        deleteTask(task.id);
    };

    return (
        <li className="list-item">
            <input type="checkbox" />
            <span>{task.title}</span>
            <button>✏️</button>
            <button onClick={handleDelete}>❌</button>
        </li>
    );
}

export default TaskItem;
